import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      apply: "build",
      writeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir);
        }

        const versionFilePath = path.join(distDir, "version.json");
        // 获取版本号
        const currentVersion = uuidv4(); // 生成uuid作为版本号

        fs.writeFileSync(
          versionFilePath,
          JSON.stringify({ version: currentVersion })
        );
      },
    },
  ],
});
