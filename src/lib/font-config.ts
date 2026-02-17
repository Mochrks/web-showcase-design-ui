import { Template } from "./templates-data";

// Font mapping untuk setiap template
export const templateFonts: Record<string, {
  primary: string;
  secondary?: string;
  googleFontsUrl: string;
}> = {
  "neo-brutalism": {
    primary: "'Space Grotesk', sans-serif",
    secondary: "'Inter', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&family=Inter:wght@400;600&display=swap"
  },
  "minimalist-clean": {
    primary: "'Inter', sans-serif",
    secondary: "'Crimson Pro', serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Crimson+Pro:wght@400;600&display=swap"
  },
  "glassmorphism": {
    primary: "'Poppins', sans-serif",
    secondary: "'Inter', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500&display=swap"
  },
  "cyberpunk-futuristic": {
    primary: "'Orbitron', sans-serif",
    secondary: "'Rajdhani', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap"
  },
  "dark-luxury": {
    primary: "'Playfair Display', serif",
    secondary: "'Montserrat', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;600&display=swap"
  },
  "skeuomorphism-modern": {
    primary: "'Roboto', sans-serif",
    secondary: "'Open Sans', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600&display=swap"
  },
  "claymorphism": {
    primary: "'Quicksand', sans-serif",
    secondary: "'Nunito', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Nunito:wght@400;600;700&display=swap"
  },
  "retro-80s": {
    primary: "'Righteous', cursive",
    secondary: "'Archivo', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Righteous&family=Archivo:wght@400;600;700&display=swap"
  },
  "retro-pixel-art": {
    primary: "'Press Start 2P', cursive",
    secondary: "'VT323', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
  },
  "corporate-professional": {
    primary: "'IBM Plex Sans', sans-serif",
    secondary: "'IBM Plex Serif', serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Serif:wght@400;600&display=swap"
  },
  "startup-saas": {
    primary: "'DM Sans', sans-serif",
    secondary: "'Inter', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;600&display=swap"
  },
  "ai-modern-interface": {
    primary: "'Exo 2', sans-serif",
    secondary: "'Roboto Mono', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;900&family=Roboto+Mono:wght@400;600&display=swap"
  },
  "gradient-vibrant": {
    primary: "'Outfit', sans-serif",
    secondary: "'Inter', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;900&family=Inter:wght@400;600&display=swap"
  },
  "monochrome-editorial": {
    primary: "'Libre Baskerville', serif",
    secondary: "'Work Sans', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Work+Sans:wght@400;600;700&display=swap"
  },
  "playful-colorful": {
    primary: "'Fredoka', sans-serif",
    secondary: "'Nunito', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Nunito:wght@400;600;700&display=swap"
  },
  "nature-organic": {
    primary: "'Comfortaa', cursive",
    secondary: "'Lato', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Lato:wght@400;700&display=swap"
  },
  "japanese-zen": {
    primary: "'Noto Serif JP', serif",
    secondary: "'Noto Sans JP', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
  },
  "tech-dashboard": {
    primary: "'JetBrains Mono', monospace",
    secondary: "'Inter', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;600&display=swap"
  },
  "bold-typography": {
    primary: "'Bebas Neue', cursive",
    secondary: "'Oswald', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;600;700&display=swap"
  },
  "gaming-theme": {
    primary: "'Teko', sans-serif",
    secondary: "'Rajdhani', sans-serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Teko:wght@400;600;700&family=Rajdhani:wght@400;600;700&display=swap"
  },
};

// Generate font CSS untuk template
export function generateFontCSS(template: Template): string {
  const fontConfig = templateFonts[template.slug];
  
  if (!fontConfig) {
    return "";
  }

  return `
    @import url('${fontConfig.googleFontsUrl}');
    
    :root {
      --font-primary: ${fontConfig.primary};
      --font-secondary: ${fontConfig.secondary || fontConfig.primary};
    }
    
    body {
      font-family: var(--font-primary);
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-primary);
    }
    
    p, span, div {
      font-family: var(--font-secondary);
    }
  `;
}

// Get font info untuk display
export function getFontInfo(template: Template) {
  const fontConfig = templateFonts[template.slug];
  
  if (!fontConfig) {
    return {
      primary: "System Font",
      secondary: "System Font",
      url: ""
    };
  }

  return {
    primary: fontConfig.primary.replaceAll(/['"]/g, "").split(",")[0],
    secondary: fontConfig.secondary?.replaceAll(/['"]/g, "").split(",")[0] || fontConfig.primary.replaceAll(/['"]/g, "").split(",")[0],
    url: fontConfig.googleFontsUrl
  };
}
