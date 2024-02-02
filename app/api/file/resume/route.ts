import AppConfig from "@@/config/app";
import fs from "fs";
import { readFile } from "fs/promises";
import path from "path";

const filename = AppConfig.assets.file.resume;

export async function GET() {
  const pathToFile = path.join(process.cwd(), "app/assets/files", filename);
  if (fs.existsSync(pathToFile)) {
    // contains the raw bytes representing the file and can be sent to the client directly
    const buffer = await readFile(pathToFile);

    const headers = new Headers();
    headers.append("Content-Disposition", `attachment; filename="${filename}"`);
    headers.append("Content-Type", "application/pdf");

    return new Response(buffer, { headers });
  }

  // Add 410 response error
  throw new Response(null, { status: 410 });
}
