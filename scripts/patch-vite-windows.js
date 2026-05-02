import fs from "node:fs";
import path from "node:path";

const viteConfigPath = path.join(
  process.cwd(),
  "node_modules",
  "vite",
  "dist",
  "node",
  "chunks",
  "config.js"
);

if (!fs.existsSync(viteConfigPath)) {
  process.exit(0);
}

const source = fs.readFileSync(viteConfigPath, "utf8");

if (source.includes("safeRealpathSync = fs.realpathSync;\n\t}\n}")) {
  process.exit(0);
}

const original = `\texec("net use", (error$1, stdout) => {
\t\tif (error$1) return;
\t\tconst lines = stdout.split("\\n");
\t\tfor (const line of lines) {
\t\t\tconst m = parseNetUseRE.exec(line);
\t\t\tif (m) windowsNetworkMap.set(m[2], m[1]);
\t\t}
\t\tif (windowsNetworkMap.size === 0) safeRealpathSync = fs.realpathSync.native;
\t\telse safeRealpathSync = windowsMappedRealpathSync;
\t});`;

const patched = `\ttry {
\t\texec("net use", (error$1, stdout) => {
\t\t\tif (error$1) return;
\t\t\tconst lines = stdout.split("\\n");
\t\t\tfor (const line of lines) {
\t\t\t\tconst m = parseNetUseRE.exec(line);
\t\t\t\tif (m) windowsNetworkMap.set(m[2], m[1]);
\t\t\t}
\t\t\tif (windowsNetworkMap.size === 0) safeRealpathSync = fs.realpathSync.native;
\t\t\telse safeRealpathSync = windowsMappedRealpathSync;
\t\t});
\t} catch {
\t\tsafeRealpathSync = fs.realpathSync;
\t}`;

if (source.includes(original)) {
  fs.writeFileSync(viteConfigPath, source.replace(original, patched));
  console.log("Applied Vite Windows realpath compatibility patch.");
}
