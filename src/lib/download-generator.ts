import { Template } from "./templates-data";
import { ThemeConfig } from "./theme-generator";
import {
  generateAccordionComponent,
  generateAlertComponent,
  generateAlertDialogComponent,
  generateCheckboxComponent,
  generateDialogComponent,
  generateLabelComponent,
  generateSeparatorComponent,
  generateSwitchComponent,
  generateTextareaComponent,
} from "./ui-components-generator";
import {
  generateTabsComponent,
  generateRadioGroupComponent,
  generateSelectComponent,
  generateDropdownMenuComponent,
  generateTooltipComponent,
  generateToastComponent,
  generateToasterComponent,
  generateUseToastHook,
} from "./ui-components-generator-2";

export interface DownloadStructure {
  name: string;
  files: Record<string, string>;
}

export function generateCompleteProject(
  template: Template,
  framework: "nextjs" | "react",
  themeConfig: ThemeConfig
): DownloadStructure {
  const baseStructure = {
    name: `${template.slug}-${framework}`,
    files: {
      "README.md": generateReadme(template, framework),
      "package.json": generatePackageJson(template, framework),
      ".gitignore": generateGitignore(),
      ".env.example": generateEnvExample(),
      "tsconfig.json": generateTsConfig(framework),
    },
  };

  if (framework === "nextjs") {
    return {
      ...baseStructure,
      files: {
        ...baseStructure.files,
        ...generateNextJsStructure(template, themeConfig),
      },
    };
  } else {
    return {
      ...baseStructure,
      files: {
        ...baseStructure.files,
        ...generateReactStructure(template, themeConfig),
      },
    };
  }
}

function generateReadme(template: Template, framework: string): string {
  return `# ${template.name} - ${framework === "nextjs" ? "Next.js" : "React"} Template

${template.description}

## 🎨 Design Features

${template.features.map(f => `- ✨ ${f}`).join("\n")}

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

${framework === "nextjs" ? "Open [http://localhost:3000](http://localhost:3000) with your browser." : "Open [http://localhost:5173](http://localhost:5173) with your browser."}

## 📁 Project Structure

\`\`\`
${framework === "nextjs" ? `
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── layout/      # Layout components
│   │   └── sections/    # Page sections
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── hooks/           # Custom React hooks
├── public/
│   └── assets/
└── tailwind.config.ts
` : `
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── layout/      # Layout components
│   │   └── sections/    # Page sections
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── assets/
└── tailwind.config.ts
`}
\`\`\`

## 🎨 Color Palette

- **Primary:** ${template.colors.primary}
- **Secondary:** ${template.colors.secondary}
- **Accent:** ${template.colors.accent}
- **Background:** ${template.colors.background}
- **Foreground:** ${template.colors.foreground}

## 🛠️ Tech Stack

- ${framework === "nextjs" ? "Next.js 15 (App Router)" : "React 18 + Vite"}
- TypeScript
- Tailwind CSS 4
- shadcn/ui components
- Lucide React icons
- Framer Motion (animations)

## 📝 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run lint\` - Run ESLint
${framework === "nextjs" ? "- `npm run start` - Start production server" : "- `npm run preview` - Preview production build"}

## 📦 Components Included

- **UI Components:** Button, Card, Input, Badge, Alert, Tabs, etc.
- **Layout Components:** Header, Footer, Sidebar, Navigation
- **Section Components:** Hero, Features, Pricing, Testimonials, CTA
- **Form Components:** Contact Form, Newsletter, Search

## 🎯 Customization

All colors and styles can be customized in:
- \`tailwind.config.ts\` - Tailwind configuration
- \`${framework === "nextjs" ? "src/app/globals.css" : "src/index.css"}\` - CSS variables

## 📄 License

MIT License - feel free to use this template for your projects!

## 🤝 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using ${framework === "nextjs" ? "Next.js" : "React"} and Tailwind CSS
`;
}

function generatePackageJson(template: Template, framework: string): string {
  const basePackages = {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "typescript": "^5.3.3",
    "tailwindcss": "^4.0.0",
    // Radix UI Components
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-tooltip": "^1.0.7",
    // Utilities
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1",
    "lucide-react": "^0.344.0",
    "framer-motion": "^11.0.3",
  };

  const devPackages = {
    "@types/node": "^20.11.5",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "eslint": "^8.56.0",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.33",
  };

  if (framework === "nextjs") {
    return JSON.stringify({
      name: `${template.slug}-nextjs`,
      version: "1.0.0",
      private: true,
      description: template.description,
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
        ...devPackages,
        "eslint-config-next": "^15.0.0",
      },
    }, null, 2);
  } else {
    return JSON.stringify({
      name: `${template.slug}-react`,
      version: "1.0.0",
      private: true,
      description: template.description,
      type: "module",
      scripts: {
        dev: "vite",
        build: "tsc && vite build",
        preview: "vite preview",
        lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      },
      dependencies: {
        ...basePackages,
      },
      devDependencies: {
        ...devPackages,
        "@vitejs/plugin-react": "^4.2.1",
        "vite": "^5.0.11",
        "@typescript-eslint/eslint-plugin": "^6.19.1",
        "@typescript-eslint/parser": "^6.19.1",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.5",
      },
    }, null, 2);
  }
}

function generateGitignore(): string {
  return `# Dependencies
node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build
/dist

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode
.idea
*.swp
*.swo
*~
`;
}

function generateEnvExample(): string {
  return `# App Configuration
NEXT_PUBLIC_APP_NAME="My App"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# API Configuration (if needed)
# NEXT_PUBLIC_API_URL="https://api.example.com"

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=""
`;
}

function generateTsConfig(framework: string): string {
  if (framework === "nextjs") {
    return JSON.stringify({
      compilerOptions: {
        target: "ES2017",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        skipLibCheck: true,
        strict: true,
        noEmit: true,
        esModuleInterop: true,
        module: "esnext",
        moduleResolution: "bundler",
        resolveJsonModule: true,
        isolatedModules: true,
        jsx: "preserve",
        incremental: true,
        plugins: [
          {
            name: "next"
          }
        ],
        paths: {
          "@/*": ["./src/*"]
        }
      },
      include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
      exclude: ["node_modules"]
    }, null, 2);
  } else {
    return JSON.stringify({
      compilerOptions: {
        target: "ES2020",
        useDefineForClassFields: true,
        lib: ["ES2020", "DOM", "DOM.Iterable"],
        module: "ESNext",
        skipLibCheck: true,
        moduleResolution: "bundler",
        allowImportingTsExtensions: true,
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: true,
        jsx: "react-jsx",
        strict: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noFallthroughCasesInSwitch: true,
        paths: {
          "@/*": ["./src/*"]
        }
      },
      include: ["src"],
      references: [{ path: "./tsconfig.node.json" }]
    }, null, 2);
  }
}

function generateNextJsStructure(template: Template, themeConfig: ThemeConfig) {
  return {
    // App directory
    "src/app/layout.tsx": generateNextLayout(template),
    "src/app/page.tsx": generateNextHomePage(template),
    "src/app/globals.css": themeConfig.cssVariables,
    
    // Components
    "src/components/layout/header.tsx": generateHeader(template),
    "src/components/layout/footer.tsx": generateFooter(template),
    "src/components/sections/hero.tsx": generateHeroSection(template),
    "src/components/sections/features.tsx": generateFeaturesSection(template),
    "src/components/sections/cta.tsx": generateCTASection(template),
    
    // UI Components (shadcn) - Core
    "src/components/ui/button.tsx": generateButtonComponent(),
    "src/components/ui/card.tsx": generateCardComponent(),
    "src/components/ui/input.tsx": generateInputComponent(),
    "src/components/ui/badge.tsx": generateBadgeComponent(),
    
    // UI Components - Additional
    "src/components/ui/accordion.tsx": generateAccordionComponent(),
    "src/components/ui/alert.tsx": generateAlertComponent(),
    "src/components/ui/alert-dialog.tsx": generateAlertDialogComponent(),
    "src/components/ui/checkbox.tsx": generateCheckboxComponent(),
    "src/components/ui/dialog.tsx": generateDialogComponent(),
    "src/components/ui/dropdown-menu.tsx": generateDropdownMenuComponent(),
    "src/components/ui/label.tsx": generateLabelComponent(),
    "src/components/ui/radio-group.tsx": generateRadioGroupComponent(),
    "src/components/ui/select.tsx": generateSelectComponent(),
    "src/components/ui/separator.tsx": generateSeparatorComponent(),
    "src/components/ui/switch.tsx": generateSwitchComponent(),
    "src/components/ui/tabs.tsx": generateTabsComponent(),
    "src/components/ui/textarea.tsx": generateTextareaComponent(),
    "src/components/ui/toast.tsx": generateToastComponent(),
    "src/components/ui/toaster.tsx": generateToasterComponent(),
    "src/components/ui/tooltip.tsx": generateTooltipComponent(),
    "src/components/ui/use-toast.ts": generateUseToastHook(),
    
    // Lib
    "src/lib/utils.ts": generateUtils(),
    "src/lib/constants.ts": generateConstants(template),
    
    // Hooks
    "src/hooks/use-scroll.ts": generateUseScrollHook(),
    
    // Config
    "tailwind.config.ts": themeConfig.tailwindConfig,
    "postcss.config.js": generatePostCSSConfig(),
    "next.config.js": generateNextConfig(),
  };
}

function generateReactStructure(template: Template, themeConfig: ThemeConfig) {
  return {
    // Main files
    "src/App.tsx": generateReactApp(template),
    "src/main.tsx": generateReactMain(),
    "src/index.css": themeConfig.cssVariables,
    "index.html": generateIndexHTML(template),
    
    // Components
    "src/components/layout/header.tsx": generateHeader(template),
    "src/components/layout/footer.tsx": generateFooter(template),
    "src/components/sections/hero.tsx": generateHeroSection(template),
    "src/components/sections/features.tsx": generateFeaturesSection(template),
    "src/components/sections/cta.tsx": generateCTASection(template),
    
    // UI Components - Core
    "src/components/ui/button.tsx": generateButtonComponent(),
    "src/components/ui/card.tsx": generateCardComponent(),
    "src/components/ui/input.tsx": generateInputComponent(),
    "src/components/ui/badge.tsx": generateBadgeComponent(),
    
    // UI Components - Additional
    "src/components/ui/accordion.tsx": generateAccordionComponent(),
    "src/components/ui/alert.tsx": generateAlertComponent(),
    "src/components/ui/alert-dialog.tsx": generateAlertDialogComponent(),
    "src/components/ui/checkbox.tsx": generateCheckboxComponent(),
    "src/components/ui/dialog.tsx": generateDialogComponent(),
    "src/components/ui/dropdown-menu.tsx": generateDropdownMenuComponent(),
    "src/components/ui/label.tsx": generateLabelComponent(),
    "src/components/ui/radio-group.tsx": generateRadioGroupComponent(),
    "src/components/ui/select.tsx": generateSelectComponent(),
    "src/components/ui/separator.tsx": generateSeparatorComponent(),
    "src/components/ui/switch.tsx": generateSwitchComponent(),
    "src/components/ui/tabs.tsx": generateTabsComponent(),
    "src/components/ui/textarea.tsx": generateTextareaComponent(),
    "src/components/ui/toast.tsx": generateToastComponent(),
    "src/components/ui/toaster.tsx": generateToasterComponent(),
    "src/components/ui/tooltip.tsx": generateTooltipComponent(),
    "src/components/ui/use-toast.ts": generateUseToastHook(),
    
    // Lib
    "src/lib/utils.ts": generateUtils(),
    "src/lib/constants.ts": generateConstants(template),
    
    // Hooks
    "src/hooks/use-scroll.ts": generateUseScrollHook(),
    
    // Config
    "tailwind.config.ts": themeConfig.tailwindConfig,
    "postcss.config.js": generatePostCSSConfig(),
    "vite.config.ts": generateViteConfig(),
    "tsconfig.node.json": generateTsConfigNode(),
  };
}

// Component generators
function generateNextLayout(template: Template): string {
  return `import type { Metadata } from "next";
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
      <body className="antialiased">{children}</body>
    </html>
  );
}`;
}

function generateNextHomePage(template: Template): string {
  return `import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}`;
}

function generateReactApp(template: Template): string {
  return `import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { CTA } from "@/components/sections/cta";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;`;
}

function generateReactMain(): string {
  return `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`;
}

function generateIndexHTML(template: Template): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${template.description}" />
    <title>${template.name}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

function generateHeader(template: Template): string {
  return `"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">${template.name}</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex">Get Started</Button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col gap-4 py-4">
            <a href="#features" className="text-sm font-medium">Features</a>
            <a href="#about" className="text-sm font-medium">About</a>
            <a href="#contact" className="text-sm font-medium">Contact</a>
            <Button className="w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}`;
}

function generateFooter(template: Template): string {
  return `export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">${template.name}</h3>
            <p className="text-sm text-muted-foreground">
              ${template.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Features</a></li>
              <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
              <li><a href="#" className="hover:text-foreground">License</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ${template.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}`;
}

function generateHeroSection(template: Template): string {
  return `"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Welcome to ${template.name}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          ${template.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}`;
}

function generateFeaturesSection(template: Template): string {
  return `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = ${JSON.stringify(template.features.map((f, i) => ({
  title: f,
  description: `Experience the power of ${f.toLowerCase()} in your application.`,
  icon: i % 3 === 0 ? "Zap" : i % 3 === 1 ? "Shield" : "Star"
})), null, 2)};

export function Features() {
  return (
    <section id="features" className="container py-24">
      <div className="text-center mb-12">
        <Badge className="mb-4">Features</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything you need
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Powerful features to help you build amazing applications
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}`;
}

function generateCTASection(template: Template): string {
  return `import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="container py-24">
      <div className="rounded-lg bg-primary text-primary-foreground p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of users who are already using ${template.name}
        </p>
        <Button size="lg" variant="secondary">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}`;
}

// UI Component generators
function generateButtonComponent(): string {
  return `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`;
}

function generateCardComponent(): string {
  return `import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`;
}

function generateInputComponent(): string {
  return `import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }`;
}

function generateBadgeComponent(): string {
  return `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }`;
}

// Utility generators
function generateUtils(): string {
  return `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;
}

function generateConstants(template: Template): string {
  return `export const APP_NAME = "${template.name}";
export const APP_DESCRIPTION = "${template.description}";

export const COLORS = ${JSON.stringify(template.colors, null, 2)};

export const FEATURES = ${JSON.stringify(template.features, null, 2)};

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};`;
}

function generateUseScrollHook(): string {
  return `"use client";

import { useState, useEffect } from "react";

export function useScroll(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}`;
}

// Config generators
function generatePostCSSConfig(): string {
  return `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;
}

function generateNextConfig(): string {
  return `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
}

module.exports = nextConfig`;
}

function generateViteConfig(): string {
  return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`;
}

function generateTsConfigNode(): string {
  return JSON.stringify({
    compilerOptions: {
      composite: true,
      skipLibCheck: true,
      module: "ESNext",
      moduleResolution: "bundler",
      allowSyntheticDefaultImports: true
    },
    include: ["vite.config.ts"]
  }, null, 2);
}
