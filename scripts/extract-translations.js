const fs = require("fs");
const path = require("path");

// Configuration
const SOURCE_DIR = path.join(__dirname, "..", "src");
const MESSAGES_DIR = path.join(__dirname, "..", "locales");
const LOCALES = ["en", "fr"];

// Fonction pour trouver tous les fichiers récursivement
function findFiles(dir, pattern = /\.(tsx?|jsx?)$/) {
  const results = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(dir, file.name);

    if (file.isDirectory()) {
      if (!file.name.startsWith(".") && file.name !== "node_modules") {
        results.push(...findFiles(filePath, pattern));
      }
    } else if (pattern.test(file.name)) {
      results.push(filePath);
    }
  }

  return results;
}

// Fonction pour extraire les clés de traduction (version regex)
function extractTranslationKeys(code, filePath) {
  const keys = new Set();

  try {
    // Regex pour trouver useTranslations('Namespace')
    const useTranslationsRegex =
      /useTranslations\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
    const getTranslationsRegex =
      /getTranslations\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

    const namespaces = new Map();

    // Extraire les namespaces
    let match;
    while ((match = useTranslationsRegex.exec(code)) !== null) {
      const namespace = match[1];
      const beforeMatch = code.substring(0, match.index);
      const lastConst = beforeMatch.match(/(?:const|let|var)\s+(\w+)\s*=/g);
      if (lastConst) {
        const varName = lastConst[lastConst.length - 1].match(/(\w+)\s*=/)[1];
        namespaces.set(varName, namespace);
      }
    }

    while ((match = getTranslationsRegex.exec(code)) !== null) {
      const namespace = match[1];
      const beforeMatch = code.substring(0, match.index);
      const lastConst = beforeMatch.match(/(?:const|let|var)\s+(\w+)\s*=/g);
      if (lastConst) {
        const varName = lastConst[lastConst.length - 1].match(/(\w+)\s*=/)[1];
        namespaces.set(varName, namespace);
      }
    }

    // Extraire les clés pour chaque namespace
    for (const [varName, namespace] of namespaces) {
      // Regex pour trouver t('key') ou t("key")
      const keyRegex = new RegExp(`${varName}\\s*\\(\\s*['"]([^'"]+)['"]`, "g");

      let keyMatch;
      while ((keyMatch = keyRegex.exec(code)) !== null) {
        const key = keyMatch[1];
        keys.add(`${namespace}.${key}`);
      }

      // Aussi chercher t.rich('key')
      const richRegex = new RegExp(
        `${varName}\\.rich\\s*\\(\\s*['"]([^'"]+)['"]`,
        "g"
      );
      while ((keyMatch = richRegex.exec(code)) !== null) {
        const key = keyMatch[1];
        keys.add(`${namespace}.${key}`);
      }
    }
  } catch (error) {
    console.error(`Erreur lors du parsing de ${filePath}:`, error.message);
  }

  return Array.from(keys);
}

// Fonction pour créer la structure imbriquée
function keysToNestedObject(keys) {
  const result = {};

  keys.forEach((key) => {
    const parts = key.split(".");
    let current = result;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        // Dernière partie, on met une valeur par défaut
        if (!current[part]) {
          current[part] = `[${key}]`;
        }
      } else {
        // Partie intermédiaire, on crée un objet
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    });
  });

  return result;
}

// Fonction pour merger avec les traductions existantes
function mergeTranslations(existing, extracted) {
  const result = { ...existing };

  for (const key in extracted) {
    if (typeof extracted[key] === "object" && !Array.isArray(extracted[key])) {
      result[key] = mergeTranslations(result[key] || {}, extracted[key]);
    } else if (!result[key]) {
      result[key] = extracted[key];
    }
  }

  return result;
}

// Script principal
function main() {
  console.log("🔍 Extraction des clés de traduction...\n");

  // Trouver tous les fichiers TypeScript/JavaScript
  const files = findFiles(SOURCE_DIR);

  const allKeys = new Set();

  // Extraire les clés de chaque fichier
  files.forEach((file) => {
    const code = fs.readFileSync(file, "utf-8");
    const keys = extractTranslationKeys(code, file);

    if (keys.length > 0) {
      console.log(`📄 ${file}: ${keys.length} clés trouvées`);
      keys.forEach((key) => allKeys.add(key));
    }
  });

  console.log(`\n✅ Total: ${allKeys.size} clés uniques trouvées\n`);

  // Créer la structure imbriquée
  const nestedKeys = keysToNestedObject(Array.from(allKeys));

  // Créer le dossier messages s'il n'existe pas
  if (!fs.existsSync(MESSAGES_DIR)) {
    fs.mkdirSync(MESSAGES_DIR, { recursive: true });
  }

  // Mettre à jour chaque fichier de locale
  LOCALES.forEach((locale) => {
    const filePath = path.join(MESSAGES_DIR, `${locale}.json`);
    let existing = {};

    // Charger les traductions existantes
    if (fs.existsSync(filePath)) {
      existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    // Merger avec les nouvelles clés
    const merged = mergeTranslations(existing, nestedKeys);

    // Sauvegarder
    fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
    console.log(`💾 ${locale}.json mis à jour`);
  });

  console.log("\n✨ Extraction terminée !");
}

main();
