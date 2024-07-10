import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const FILES = ["README.md", "LICENSE.md"];
const PACKAGES = "packages";

// Add back __dirname
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory

const main = async () => {
  const base = resolve(__dirname, "..");
  const sources = await Promise.all(
    FILES.map((file) => readFile(join(base, file), "utf-8"))
  );

  const pkgPath = join(base, PACKAGES);
  const folders = await readdir(pkgPath);

  await Promise.all(
    folders.map((folder) => {
      return Promise.all(
        sources.map((file, i) => {
          return writeFile(join(pkgPath, folder, FILES[i]), file, "utf-8");
        })
      );
    })
  );
};

main().catch((error) => console.log(error));
