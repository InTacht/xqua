import path from "path";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const rootDir = () =>
  import.meta.env.MODE === "production"
    ? path.join(__dirname, "../")
    : path.join(__dirname, "../../");

export const relUrlByFilePath = (filepath: string) =>
  filepath ? filepath.replace(path.join(rootDir(), "/src"), "") : "";
