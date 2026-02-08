import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const configPath = path.join(process.cwd(), "src", "config", "siteConfig.json");

export async function GET() {
  try {
    const fileContents = fs.readFileSync(configPath, "utf8");
    const config = JSON.parse(fileContents);
    return NextResponse.json(config);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load config" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const newConfig = await request.json();
    fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save config" },
      { status: 500 },
    );
  }
}
