import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Template } from "./templates-data";
import { generateDownloadPackage } from "./theme-generator";

export async function downloadTemplate(
  template: Template,
  framework: "nextjs" | "react"
) {
  const zip = new JSZip();
  const packageData = generateDownloadPackage(template, framework);

  // Add all files to zip
  Object.entries(packageData.files).forEach(([path, content]) => {
    zip.file(path, content);
  });

  // Generate and download zip
  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, `${packageData.name}.zip`);
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function formatColorPalette(template: Template): string {
  return `
Primary: ${template.colors.primary}
Secondary: ${template.colors.secondary}
Accent: ${template.colors.accent}
Background: ${template.colors.background}
Foreground: ${template.colors.foreground}
  `.trim();
}
