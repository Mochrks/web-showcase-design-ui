import { Template } from "./templates-data";

export interface ThemeConfig {
  cssVariables: string;
  tailwindConfig: string;
  componentStyles: Record<string, string>;
}

export function generateThemeConfig(template: Template): ThemeConfig {
  const cssVariables = generateCSSVariables(template);
  const tailwindConfig = generateTailwindConfig();
  const componentStyles = generateComponentStyles(template);

  return {
    cssVariables,
    tailwindConfig,
    componentStyles,
  };
}

function generateCSSVariables(template: Template): string {
  const { colors } = template;
  
  return `@layer base {
  :root {
    --background: ${hexToHSL(colors.background)};
    --foreground: ${hexToHSL(colors.foreground)};
    --primary: ${hexToHSL(colors.primary)};
    --primary-foreground: ${hexToHSL(colors.foreground)};
    --secondary: ${hexToHSL(colors.secondary)};
    --secondary-foreground: ${hexToHSL(colors.foreground)};
    --accent: ${hexToHSL(colors.accent)};
    --accent-foreground: ${hexToHSL(colors.foreground)};
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --card: ${hexToHSL(colors.background)};
    --card-foreground: ${hexToHSL(colors.foreground)};
    --popover: ${hexToHSL(colors.background)};
    --popover-foreground: ${hexToHSL(colors.foreground)};
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: ${hexToHSL(colors.primary)};
    --radius: 0.5rem;
  }
}`;
}

function generateTailwindConfig(): string {
  return `import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;`;
}

function generateComponentStyles(template: Template): Record<string, string> {
  const slug = template.slug;
  
  // Different styling approaches based on template theme
  const styleMap: Record<string, Record<string, string>> = {
    "neo-brutalism": {
      button: "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase font-black",
      card: "border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none",
      input: "border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none font-bold",
      badge: "border-2 border-black rounded-none font-black uppercase shadow-[2px_2px_0_0_black]",
    },
    "glassmorphism": {
      button: "backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:bg-white/30",
      card: "backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl",
      input: "backdrop-blur-md bg-white/10 border border-white/20 rounded-xl",
      badge: "backdrop-blur-md bg-white/10 border border-white/20",
    },
    "cyberpunk-futuristic": {
      button: "bg-slate-900 border-2 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] uppercase font-bold",
      card: "bg-slate-900/90 border-2 border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.2)] rounded-none",
      input: "bg-slate-900 border-2 border-cyan-500 text-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.5)]",
      badge: "border border-cyan-500 bg-cyan-500/10 text-cyan-400",
    },
    "dark-luxury": {
      button: "bg-yellow-600 text-black font-semibold hover:shadow-[0_0_20px_rgba(202,138,4,0.3)] transition-all",
      card: "bg-zinc-900 border border-yellow-600/30 shadow-2xl",
      input: "bg-zinc-900 border border-yellow-600/30 focus:border-yellow-600 text-yellow-500",
      badge: "border border-yellow-600/50 text-yellow-500 bg-yellow-600/10",
    },
    "skeuomorphism-modern": {
      button: "rounded-2xl bg-gray-100 text-gray-800 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all duration-300",
      card: "bg-gray-100 rounded-[40px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-0",
      input: "bg-gray-100 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] rounded-xl border-0",
      badge: "shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] bg-gray-100 text-gray-700 rounded-full",
    },
    "claymorphism": {
      button: "rounded-[2rem] bg-blue-500 text-white shadow-[8px_8px_16px_rgba(59,130,246,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.3)] border-0",
      card: "bg-white/80 rounded-[3rem] shadow-[20px_20px_40px_rgba(0,0,0,0.05),inset_-10px_-10px_20px_rgba(0,0,0,0.05),inset_10px_10px_20px_rgba(255,255,255,0.8)] border-4 border-white",
      input: "bg-blue-50 rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05)] border-0",
      badge: "bg-blue-100 text-blue-600 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] border-0",
    },
    "retro-80s": {
      button: "bg-pink-500 text-white font-black italic shadow-[4px_4px_0_#22d3ee] skew-x-[-10deg] uppercase",
      card: "bg-slate-900 border-2 border-purple-500 shadow-[10px_10px_0_#db2777] skew-x-[-2deg]",
      input: "bg-slate-800 border-2 border-cyan-400 text-cyan-400 skew-x-[-5deg]",
      badge: "bg-cyan-400 text-slate-900 font-bold italic skew-x-[-15deg]",
    },
    "retro-pixel-art": {
      button: "border-4 border-white bg-blue-600 text-white font-mono shadow-[6px_6px_0_0_black] active:translate-x-1 active:translate-y-1 active:shadow-none uppercase",
      card: "border-4 border-white bg-blue-900 text-white shadow-[10px_10px_0_0_black]",
      input: "border-4 border-white bg-black text-green-500 font-mono",
      badge: "bg-yellow-400 text-black border-2 border-white font-mono",
    },
    "corporate-professional": {
      button: "bg-[#1a2b3c] hover:bg-blue-700 text-white rounded-sm font-semibold transition-colors",
      card: "bg-white border border-gray-200 shadow-sm rounded-lg",
      input: "border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-sm",
      badge: "bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider text-[10px] rounded-sm",
    },
    "ai-modern-interface": {
      button: "bg-white text-black hover:bg-blue-500 hover:text-white rounded-[1rem] font-bold shadow-lg shadow-white/5 transition-all border-0",
      card: "bg-[#0f172a]/50 border border-white/10 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-black/50",
      input: "bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl text-white",
      badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-4",
    },
    "startup-saas": {
      button: "bg-purple-600 text-white rounded-full font-bold hover:scale-105 transition-transform border-0",
      card: "bg-white border hover:border-purple-600/50 shadow-[0_10px_40px_rgba(124,58,237,0.1)] rounded-2xl transition-all",
      input: "bg-gray-50 border-gray-100 focus:border-purple-600 rounded-xl",
      badge: "bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full",
    },
    "minimalist-clean": {
      button: "bg-black text-white hover:bg-gray-800 rounded-full font-light px-8 tracking-tight transition-all",
      card: "bg-white border border-gray-100 shadow-sm rounded-none",
      input: "border-b-2 border-gray-100 focus:border-black rounded-none px-0",
      badge: "bg-gray-100 text-gray-800 font-medium px-2 py-0.5 rounded-none uppercase text-[10px] tracking-widest",
    },
    "gradient-vibrant": {
      button: "bg-pink-500 text-white rounded-[2rem] font-black uppercase shadow-xl hover:rotate-1 active:scale-95 transition-all border-0",
      card: "bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(236,72,153,0.1)] border border-pink-100 overflow-hidden",
      input: "bg-pink-50/50 border-2 border-pink-100 focus:border-pink-500 rounded-2xl",
      badge: "bg-pink-500 text-white font-black rounded-full px-4",
    },
    "monochrome-editorial": {
      button: "border-4 border-black bg-white hover:bg-black hover:text-white rounded-none font-black uppercase text-xl transition-all",
      card: "border-y-2 border-black rounded-none shadow-none",
      input: "border-2 border-black rounded-none font-serif text-lg",
      badge: "bg-black text-white px-4 py-1 rounded-none uppercase text-xs font-black tracking-tighter",
    },
    "playful-colorful": {
      button: "bg-pink-500 text-white rounded-[2.5rem] font-black italic shadow-[0_10px_0_#db2777] hover:translate-y-1 hover:shadow-[0_6px_0_#db2777] active:translate-y-2 active:shadow-none transition-all border-0",
      card: "bg-white rounded-[3rem] border-8 border-teal-500 shadow-[20px_20px_0_rgba(20,184,166,0.1)]",
      input: "bg-teal-50 border-4 border-teal-200 focus:border-teal-500 rounded-[2rem] px-6 text-teal-800 font-bold",
      badge: "bg-yellow-400 text-black border-4 border-black rounded-full font-black -rotate-3",
    },
    "nature-organic": {
      button: "bg-emerald-700 hover:bg-emerald-800 text-white rounded-[40px] px-10 py-7 text-lg font-bold shadow-lg transition-all",
      card: "bg-emerald-50 rounded-[60px] border-0 shadow-[inset_0_0_40px_rgba(5,150,105,0.05)]",
      input: "bg-emerald-100/50 border-2 border-emerald-200 focus:border-emerald-700 rounded-[30px] px-8",
      badge: "bg-emerald-600 text-white rounded-full px-6 py-1 text-xs border-0",
    },
    "japanese-zen": {
      button: "border-black border-2 rounded-none px-12 py-8 text-lg hover:bg-black hover:text-white transition-all font-sans uppercase tracking-widest font-black transition-all duration-700",
      card: "border border-black/5 bg-[#fcf9f2] rounded-none hover:bg-black/5 transition-colors duration-500",
      input: "bg-transparent border-b border-black rounded-none focus:border-red-600 px-0 transition-all",
      badge: "text-red-600 font-bold uppercase tracking-[0.3em] text-[10px]",
    },
    "tech-dashboard": {
      button: "bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-black uppercase rounded-sm border-b-4 border-indigo-800 transition-all active:border-b-0 active:translate-y-1",
      card: "bg-[#1e293b] border border-slate-800 rounded-lg shadow-2xl",
      input: "bg-[#0f172a] border border-slate-700 text-indigo-400 font-mono focus:border-indigo-500 rounded",
      badge: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 uppercase text-[10px] font-bold px-2",
    },
    "bold-typography": {
      button: "bg-black text-white hover:bg-blue-600 rounded-none px-12 py-10 text-3xl font-black uppercase transition-all duration-300 border-0",
      card: "border-l-[20px] border-black bg-white rounded-none p-12",
      input: "border-[10px] border-black text-4xl font-black uppercase p-8 rounded-none",
      badge: "text-[2vw] font-black uppercase tracking-tighter leading-none border-b-[5px] border-black",
    },
    "gaming-theme": {
      button: "bg-red-600 hover:bg-red-500 text-white font-black italic text-2xl h-24 px-12 rounded-none skew-x-[-15deg] shadow-[8px_8px_0_#991b1b] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all border-0",
      card: "bg-white/5 border-l-4 border-red-600 backdrop-blur-md rounded-r-lg shadow-[20px_20px_60px_rgba(220,38,38,0.1)]",
      input: "bg-black/50 border-2 border-red-600/50 text-white skew-x-[-10deg] focus:border-red-600",
      badge: "bg-red-600 text-white font-black italic px-3 py-1 uppercase text-xs skew-x-[-20deg]",
    },
  };

  return styleMap[slug] || {
    button: "shadow-md hover:shadow-lg transition-all",
    card: "shadow-lg border",
    input: "border focus:ring-2",
  };
}

function hexToHSL(hex: string): string {
  // Handle gradient backgrounds
  if (hex.includes("linear-gradient") || hex.includes("gradient")) {
    return "0 0% 100%"; // Default white for gradients
  }

  // Remove # if present
  hex = hex.replace("#", "");
  
  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  const lPercent = Math.round(l * 100);

  return `${h} ${s}% ${lPercent}%`;
}

export function generateDownloadPackage(template: Template, framework: "nextjs" | "react") {
  const themeConfig = generateThemeConfig(template);
  
  return {
    name: `${template.slug}-${framework}`,
    files: {
      "README.md": generateReadme(template, framework),
      "package.json": generatePackageJson(template, framework),
      ...(framework === "nextjs" ? generateNextJsFiles(template, themeConfig) : generateReactFiles(template, themeConfig)),
    },
  };
}

function generateReadme(template: Template, framework: string): string {
  return `# ${template.name} - ${framework === "nextjs" ? "Next.js" : "React"} Template

${template.description}

## Features
${template.features.map(f => `- ${f}`).join("\n")}

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Color Palette
- Primary: ${template.colors.primary}
- Secondary: ${template.colors.secondary}
- Accent: ${template.colors.accent}

## Tech Stack
- ${framework === "nextjs" ? "Next.js 15" : "React 18"}
- TypeScript
- Tailwind CSS
- shadcn/ui
`;
}

function generatePackageJson(template: Template, framework: string): string {
  const basePackages = {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.344.0",
  };

  if (framework === "nextjs") {
    return JSON.stringify({
      name: `${template.slug}-nextjs`,
      version: "0.1.0",
      private: true,
      scripts: {
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "next lint",
      },
      dependencies: {
        next: "^15.0.0",
        ...basePackages,
      },
      devDependencies: {
        "@types/node": "^20.0.0",
        "@types/react": "^18.0.0",
        "@types/react-dom": "^18.0.0",
        "eslint": "^8.0.0",
        "eslint-config-next": "^15.0.0",
      },
    }, null, 2);
  } else {
    return JSON.stringify({
      name: `${template.slug}-react`,
      version: "0.1.0",
      private: true,
      scripts: {
        dev: "vite",
        build: "tsc && vite build",
        preview: "vite preview",
      },
      dependencies: {
        ...basePackages,
      },
      devDependencies: {
        "@types/react": "^18.0.0",
        "@types/react-dom": "^18.0.0",
        "@vitejs/plugin-react": "^4.2.0",
        "vite": "^5.0.0",
      },
    }, null, 2);
  }
}

function generateNextJsFiles(template: Template, themeConfig: ThemeConfig) {
  return {
    "app/layout.tsx": `import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "${template.name}",
  description: "${template.description}",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`,
    "app/page.tsx": generateHomePage(template),
    "app/globals.css": themeConfig.cssVariables,
    "tailwind.config.ts": themeConfig.tailwindConfig,
  };
}

function generateReactFiles(template: Template, themeConfig: ThemeConfig) {
  return {
    "src/App.tsx": generateHomePage(template),
    "src/index.css": themeConfig.cssVariables,
    "src/main.tsx": `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
    "index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${template.name}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
    "vite.config.ts": `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`,
    "tailwind.config.ts": themeConfig.tailwindConfig,
  };
}

function generateHomePage(template: Template): string {
  return `export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          ${template.name}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          ${template.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your components here */}
        </div>
      </main>
    </div>
  );
}`;
}
