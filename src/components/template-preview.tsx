"use client";

import React from "react";

import { Template } from "@/lib/templates-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    ArrowRight,
    Zap,
    Shield,
    Star,
    Users,
    TrendingUp,
    CheckCircle,
    Sparkles,
    Rocket,
    Heart
} from "lucide-react";

interface TemplatePreviewProps {
    template: Template;
}

export function TemplatePreview({ template }: TemplatePreviewProps) {
    // Render different preview based on template slug
    const previewComponents: Record<string, React.ReactElement> = {
        "neo-brutalism": <NeoBrutalismPreview />,
        "minimalist-clean": <MinimalistCleanPreview />,
        "glassmorphism": <GlassmorphismPreview />,
        "skeuomorphism-modern": <SkeuomorphismPreview />,
        "claymorphism": <ClaymorphismPreview />,
        "cyberpunk-futuristic": <CyberpunkPreview />,
        "retro-80s": <Retro80sPreview />,
        "retro-pixel-art": <PixelArtPreview />,
        "dark-luxury": <DarkLuxuryPreview />,
        "corporate-professional": <CorporatePreview />,
        "startup-saas": <StartupSaaSPreview />,
        "ai-modern-interface": <AIModernPreview />,
        "gradient-vibrant": <GradientVibrantPreview />,
        "monochrome-editorial": <MonochromePreview />,
        "playful-colorful": <PlayfulPreview />,
        "nature-organic": <NatureOrganicPreview />,
        "japanese-zen": <JapaneseZenPreview />,
        "tech-dashboard": <TechDashboardPreview />,
        "bold-typography": <BoldTypographyPreview />,
        "gaming-theme": <GamingPreview />,
        "health-wellness": <HealthWellnessPreview />,
        "education-learning": <EducationLearningPreview />,
        "architect-portfolio": <ArchitectPortfolioPreview />,
        "coffee-shop-cozy": <CoffeeShopCozyPreview />,
        "crypto-dashboard": <CryptoDashboardPreview />,
        // New dedicated previews
        "real-estate-modern": <RealEstatePreview />,
        "fashion-boutique": <FashionBoutiquePreview />,
        "photography-dark": <PhotographyDarkPreview />,
        "travel-explorer": <TravelExplorerPreview />,
        "law-firm-professional": <LawFirmPreview />,
        "music-studio-pro": <MusicStudioPreview />,
        "non-profit-impact": <NonProfitPreview />,
        "ecommerce-modern": <EcommercePreview />,
        "fitness-tracker": <FitnessTrackerPreview />,
        "ai-saas": <AISaaSPreview />,
        "news-editorial": <NewsEditorialPreview />,
        "restaurant-premium": <RestaurantPremiumPreview />,
        "productivity-tool": <ProductivityToolPreview />,
        "art-gallery": <ArtGalleryPreview />,
        "gaming-news": <GamingNewsPreview />,
    };

    return (
        <div className="space-y-8">
            {previewComponents[template.slug] || <DefaultPreview template={template} />}
        </div>
    );
}

// Neo Brutalism Preview
function NeoBrutalismPreview() {
    return (
        <div className="space-y-8 p-8 bg-yellow-50">
            {/* Hero Section */}
            <div className="border-4 border-black bg-white p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h1 className="text-6xl font-black mb-4 uppercase">BOLD & RAW</h1>
                <p className="text-xl mb-8 font-bold">Unapologetically brutalist design</p>
                <div className="flex gap-4">
                    <Button className="border-4 border-black bg-yellow-400 hover:bg-yellow-300 text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                        GET STARTED
                    </Button>
                    <Button className="border-4 border-black bg-pink-400 hover:bg-pink-300 text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                        LEARN MORE
                    </Button>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: Zap, title: "FAST", desc: "Lightning speed" },
                    { icon: Shield, title: "SECURE", desc: "Bank-level security" },
                    { icon: Star, title: "RATED", desc: "5-star reviews" },
                ].map((item, i) => (
                    <Card key={`neo-feat-${i}`} className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <CardContent className="p-6">
                            <item.icon className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                            <p className="font-bold">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA */}
            <div className="border-4 border-black bg-cyan-400 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-4xl font-black mb-4">READY TO START?</h2>
                <Input className="border-4 border-black mb-4 h-14 text-lg font-bold" placeholder="YOUR EMAIL" />
                <Button className="w-full border-4 border-black bg-black text-white hover:bg-gray-800 font-black h-14 text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    SUBSCRIBE NOW
                </Button>
            </div>
        </div>
    );
}

// Minimalist Clean Preview
function MinimalistCleanPreview() {
    return (
        <div className="space-y-16 p-8 bg-white">
            {/* Hero Section */}
            <div className="max-w-3xl mx-auto text-center py-20">
                <h1 className="text-6xl font-light mb-6 tracking-tight">Simple. Clean. Elegant.</h1>
                <p className="text-xl text-gray-600 mb-8 font-light">
                    Less is more. Experience minimalism at its finest.
                </p>
                <Button className="rounded-full px-8 py-6 text-lg font-light">
                    Explore <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                {[
                    { title: "Minimal", desc: "Clean and uncluttered design" },
                    { title: "Elegant", desc: "Sophisticated simplicity" },
                    { title: "Timeless", desc: "Never goes out of style" },
                ].map((item, i) => (
                    <div key={`minimalist-item-${i}`} className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full" />
                        <h3 className="text-xl font-light mb-2">{item.title}</h3>
                        <p className="text-gray-600 font-light">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="max-w-2xl mx-auto text-center py-16 border-t border-gray-200">
                <h2 className="text-3xl font-light mb-6">Stay Updated</h2>
                <div className="flex gap-4">
                    <Input className="flex-1 rounded-full" placeholder="your@email.com" />
                    <Button className="rounded-full px-8">Subscribe</Button>
                </div>
            </div>
        </div>
    );
}

// Glassmorphism Preview
function GlassmorphismPreview() {
    return (
        <div className="space-y-8 p-8 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 min-h-screen">
            {/* Hero */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
                <h1 className="text-6xl font-bold mb-4 text-white">Frosted Glass</h1>
                <p className="text-xl mb-8 text-white/90">
                    Beautiful blur effects with transparency
                </p>
                <div className="flex gap-4">
                    <Button className="backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 text-white">
                        Get Started
                    </Button>
                    <Button className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white">
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[Sparkles, Shield, Rocket].map((Icon, i) => (
                    <Card key={`glass-feat-${i}`} className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl">
                        <CardContent className="p-6 text-white">
                            <Icon className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Feature {i + 1}</h3>
                            <p className="text-white/80">Amazing glass effect design</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-4 text-white">Join Us Today</h2>
                <Input className="backdrop-blur-md bg-white/10 border border-white/20 mb-4 text-white placeholder:text-white/60" placeholder="Enter your email" />
                <Button className="w-full backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 text-white">
                    Subscribe
                </Button>
            </div>
        </div>
    );
}

// Cyberpunk Preview
function CyberpunkPreview() {
    return (
        <div className="space-y-8 p-8 bg-slate-950 min-h-screen">
            {/* Hero */}
            <div className="border-2 border-cyan-500 bg-slate-900/90 p-12 shadow-[0_0_30px_rgba(0,255,255,0.3)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
                <div className="relative z-10">
                    <h1 className="text-6xl font-bold mb-4 text-cyan-400 [text-shadow:0_0_20px_rgba(0,255,255,0.5)]">
                        CYBER FUTURE
                    </h1>
                    <p className="text-xl mb-8 text-purple-400">Enter the neon matrix</p>
                    <div className="flex gap-4">
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] border-0">
                            JACK IN
                        </Button>
                        <Button className="border-2 border-cyan-500 bg-transparent text-cyan-400 hover:bg-cyan-500/10">
                            EXPLORE
                        </Button>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["SPEED", "POWER", "TECH"].map((title, i) => (
                    <Card key={`cyber-feat-${i}`} className="border-2 border-cyan-500 bg-slate-900/90 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded" />
                            <h3 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h3>
                            <p className="text-gray-400">Next-gen technology</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// Dark Luxury Preview
function DarkLuxuryPreview() {
    return (
        <div className="space-y-8 p-8 bg-zinc-950 min-h-screen">
            {/* Hero */}
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-600/30 p-12 shadow-2xl">
                <h1 className="text-6xl font-serif mb-4 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                    Luxury Redefined
                </h1>
                <p className="text-xl mb-8 text-gray-300">Experience premium elegance</p>
                <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold hover:shadow-xl">
                    Discover More
                </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[Star, Shield, Heart].map((Icon, i) => (
                    <Card key={`luxury-feat-${i}`} className="bg-zinc-900 border border-yellow-600/30 shadow-2xl">
                        <CardContent className="p-6">
                            <Icon className="w-12 h-12 mb-4 text-yellow-600" />
                            <h3 className="text-xl font-semibold mb-2 text-white">Premium Feature</h3>
                            <p className="text-gray-400">Exclusive luxury experience</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// Startup SaaS Preview
function StartupSaaSPreview() {
    return (
        <div className="space-y-16 p-8 bg-white">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center py-20">
                <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    🚀 New Feature Released
                </Badge>
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Scale Your Startup
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    The all-in-one platform for modern SaaS businesses
                </p>
                <div className="flex gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg">
                        Start Free Trial
                    </Button>
                    <Button variant="outline" className="px-8 py-6 text-lg">
                        Watch Demo
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                    { value: "10K+", label: "Active Users" },
                    { value: "99.9%", label: "Uptime" },
                    { value: "24/7", label: "Support" },
                ].map((stat, i) => (
                    <div key={`saas-stat-${i}`} className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                            {stat.value}
                        </div>
                        <div className="text-gray-600">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[Users, TrendingUp, CheckCircle].map((Icon, i) => (
                    <Card key={`saas-feat-${i}`} className="border-2 hover:border-purple-600 transition-colors">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Feature {i + 1}</h3>
                            <p className="text-gray-600">Powerful tools for growth</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// Default Preview for other templates
function DefaultPreview({ template }: { template: Template }) {
    return (
        <div className="space-y-8 p-8">
            <div className="text-center py-20">
                <h1 className="text-6xl font-bold mb-6">{template.name}</h1>
                <p className="text-xl text-muted-foreground mb-8">{template.description}</p>
                <Button size="lg">Get Started</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {template.features.slice(0, 3).map((feature, i) => (
                    <Card key={`fallback-feat-${i}`}>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                            <p className="text-muted-foreground">Experience the power of {feature.toLowerCase()}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// Skeuomorphism Modern Preview
function SkeuomorphismPreview() {
    return (
        <div className="space-y-8 p-12 bg-gray-200">
            <div className="bg-gray-100 rounded-[40px] p-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-white/20">
                <h1 className="text-5xl font-bold mb-6 text-gray-800 drop-shadow-sm">Tactile Interface</h1>
                <p className="text-xl mb-8 text-gray-600">Modern skeuomorphism with soft bevels and realistic depth.</p>
                <div className="flex gap-6">
                    <Button className="rounded-2xl px-8 py-6 bg-gray-100 text-gray-800 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] border-0 transition-all duration-300">
                        Press Me
                    </Button>
                    <Button className="rounded-2xl px-8 py-6 bg-blue-500 text-white shadow-[6px_6px_12px_#3b82f644,-6px_-6px_12px_#ffffff] hover:opacity-90 border-0 transition-all">
                        Get Started
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[Zap, Shield, Heart].map((Icon, i) => (
                    <div key={`skeuo-feat-${i}`} className="bg-gray-100 rounded-3xl p-8 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-gray-100 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mb-4">
                            <Icon className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Feature {i + 1}</h3>
                        <p className="text-gray-600">Realistic depth and texture.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Claymorphism Preview
function ClaymorphismPreview() {
    return (
        <div className="space-y-8 p-12 bg-blue-50">
            <div className="bg-white/80 rounded-[50px] p-12 shadow-[20px_20px_40px_rgba(0,0,0,0.1),inset_-10px_-10px_20px_rgba(0,0,0,0.05),inset_10px_10px_20px_rgba(255,255,255,0.8)] border-8 border-white">
                <h1 className="text-6xl font-black mb-6 text-blue-600">Clay Style</h1>
                <p className="text-xl mb-8 text-blue-400 font-medium">Soft, friendly, and 3D inspired design language.</p>
                <Button className="rounded-full px-12 py-8 bg-blue-500 text-white text-xl font-bold shadow-[8px_8px_16px_rgba(59,130,246,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform border-0">
                    Join Play
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Soft", "Friendly", "Bubbly"].map((title, i) => (
                    <div key={`clay-feat-${i}`} className="bg-white rounded-[40px] p-8 shadow-[15px_15px_30px_rgba(0,0,0,0.05),inset_4px_4px_8px_rgba(255,255,255,0.8)] border-4 border-white flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-blue-100 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] mb-4" />
                        <h3 className="text-2xl font-black text-blue-600 mb-2">{title}</h3>
                        <p className="text-blue-400 font-medium">Claymorphic feel.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Retro 80s Preview
function Retro80sPreview() {
    return (
        <div className="space-y-8 p-12 bg-slate-900 border-y-8 border-pink-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(244,63,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom -z-10" />

            <div className="text-center space-y-6">
                <h1 className="text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_5px_15px_rgba(244,63,94,0.5)]">
                    VAPORWAVE
                </h1>
                <p className="text-2xl font-mono text-cyan-400 animate-pulse">SYSTEM ONLINE // 1984</p>
                <div className="flex justify-center gap-6">
                    <Button className="bg-pink-500 hover:bg-pink-400 text-white font-black italic px-10 py-8 text-xl skew-x-[-12deg] shadow-[5px_5px_0_#22d3ee] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                        ENTER THE GRID
                    </Button>
                    <Button className="bg-transparent border-4 border-cyan-400 text-cyan-400 font-black italic px-10 py-8 text-xl skew-x-[-12deg] hover:bg-cyan-400/10 transition-all">
                        ARCHIVE
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                    <div key={`retro-item-${i}`} className="bg-slate-800/80 border-2 border-purple-500 p-6 skew-x-[-5deg]">
                        <div className="text-pink-500 font-mono mb-2">00{i} Data Stream</div>
                        <h3 className="text-white font-bold text-lg mb-1">DATA TYPE</h3>
                        <div className="h-1 bg-gradient-to-r from-pink-500 to-cyan-500" />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Pixel Art Preview
function PixelArtPreview() {
    return (
        <div className="space-y-8 p-12 bg-black">
            <div className="border-[8px] border-white p-12 bg-blue-900 shadow-[12px_12px_0_0_#ffffff]">
                <h1 className="text-6xl font-mono uppercase text-white mb-4 [image-rendering:pixelated]">Pixel Quest</h1>
                <p className="text-xl font-mono text-yellow-400 mb-8 tracking-widest leading-relaxed">
                    The adventure begins in 8-bit. Retro gaming aesthetic for the modern web.
                </p>
                <div className="flex gap-6">
                    <Button className="bg-green-500 hover:bg-green-400 text-white font-mono text-2xl h-16 px-10 border-4 border-white shadow-[8px_8px_0_0_rgba(255,255,255,0.5)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                        START
                    </Button>
                    <Button className="bg-red-500 hover:bg-red-400 text-white font-mono text-2xl h-16 px-10 border-4 border-white shadow-[8px_8px_0_0_rgba(255,255,255,0.5)]">
                        EXIT
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[Heart, Star, Zap, Rocket].map((Icon, i) => (
                    <div key={`pixel-feat-${i}`} className="border-4 border-white p-4 bg-slate-800 flex flex-col items-center shadow-[6px_6px_0_0_#ffffff]">
                        <Icon className="w-10 h-10 text-yellow-400 mb-2" />
                        <div className="text-white font-mono text-xs">COLLECTED</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Corporate Professional Preview
function CorporatePreview() {
    return (
        <div className="space-y-0 p-0 bg-gray-50 font-sans">
            <div className="bg-white border-b py-24 px-12">
                <div className="max-w-4xl mx-auto">
                    <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 px-4 py-1 rounded-sm mb-6 uppercase tracking-wider font-semibold text-xs border-0">
                        Enterprise Solution
                    </Badge>
                    <h1 className="text-6xl font-extrabold text-[#1a2b3c] mb-8 leading-[1.1]">
                        Global Standard for <span className="text-blue-600">Digital Solutions.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                        Professional excellence driven by data and innovative technology frameworks for the modern corporation.
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-[#1a2b3c] hover:bg-[#2c3e50] text-white px-8 py-7 rounded-md font-bold text-lg">
                            Get Started Now
                        </Button>
                        <Button variant="outline" className="px-8 py-7 border-2 border-[#1a2b3c] text-[#1a2b3c] hover:bg-gray-100 rounded-md font-bold text-lg">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16 px-12 border-b">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Strategic Planning", desc: "Enterprise scale strategy consulting for digital growth." },
                        { title: "Risk Management", desc: "Advanced analytics for modern risk assessment protocols." },
                        { title: "Global Compliance", desc: "Adhering to international standards across all sectors." }
                    ].map((item, i) => (
                        <div key={`corp-feat-${i}`} className="space-y-4">
                            <div className="w-12 h-1 bg-blue-600" />
                            <h3 className="text-2xl font-bold text-[#1a2b3c]">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            <Button variant="link" className="text-blue-600 p-0 h-auto font-bold flex items-center group">
                                Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// AI Modern Interface Preview
function AIModernPreview() {
    return (
        <div className="space-y-8 p-12 bg-[#020617] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto py-20">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-sm font-medium text-blue-300">
                    <Sparkles className="w-4 h-4" /> AI-Powered Platform v4.0
                </div>
                <h1 className="text-7xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                    Intelligent Systems <br /> for Next-Gen Ideas.
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Deploy neural networks with zero latency. Our platform automates the complex so you can focus on creativity.
                </p>
                <div className="flex justify-center gap-4">
                    <Button className="bg-white text-black hover:bg-gray-200 px-10 py-8 rounded-2xl text-lg font-semibold shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                        Deploy Now
                    </Button>
                    <Button variant="ghost" className="text-white hover:bg-white/5 px-10 py-8 rounded-2xl text-lg font-semibold border border-white/10">
                        Learn Neural Engine
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {[1, 2, 3].map(i => (
                    <div key={`ai-feat-${i}`} className="p-8 bg-white/[0.02] border border-white/10 rounded-[32px] backdrop-blur-sm group hover:border-blue-500/50 transition-all">
                        <div className="w-14 h-14 bg-blue-600/20 rounded-2xl border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Neural Processing</h3>
                        <p className="text-slate-400 leading-relaxed">Edge computing optimized for large language models and cognitive tasks.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Gradient Vibrant Preview
function GradientVibrantPreview() {
    return (
        <div className="space-y-8 p-12 min-h-screen bg-white">
            <div className="relative p-20 rounded-[4rem] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-8xl font-black tracking-tighter mb-8 leading-[0.9]">VIBRANT ENERGY</h1>
                    <p className="text-2xl font-medium opacity-90 mb-10 leading-relaxed">
                        Bold gradients and high energy design for brands that want to stand out globally.
                    </p>
                    <Button className="bg-white text-pink-600 hover:bg-gray-100 rounded-full h-20 px-16 text-2xl font-black shadow-xl hover:scale-105 active:scale-95 transition-all">
                        GET STARTED
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {[
                    { from: "from-orange-400", to: "to-red-500" },
                    { from: "from-pink-500", to: "to-purple-600" },
                    { from: "from-blue-400", to: "to-indigo-500" }
                ].map((grad, i) => (
                    <div key={`grad-item-${i}`} className={`h-80 rounded-[3rem] bg-gradient-to-br ${grad.from} ${grad.to} p-10 text-white shadow-lg relative group cursor-pointer overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                        <h3 className="text-3xl font-black mb-2 relative z-10">COLOR {i + 1}</h3>
                        <p className="font-semibold opacity-80 relative z-10">Beautiful vibrant palette.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Monochrome Editorial Preview
function MonochromePreview() {
    return (
        <div className="space-y-0 p-0 bg-white font-serif">
            <div className="border-y-[20px] border-black py-32 px-12">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <h1 className="text-9xl font-black uppercase tracking-tighter mb-10 leading-none">The <br /> Editorial</h1>
                    <div className="h-0.5 w-full bg-black mb-10" />
                    <p className="text-3xl font-medium max-w-2xl leading-tight mb-12">
                        A premium monochrome aesthetic inspired by classic high-end magazine designs and bold typography.
                    </p>
                    <div className="flex gap-8">
                        <Button variant="outline" className="border-4 border-black text-black rounded-none px-12 py-10 text-2xl font-black hover:bg-black hover:text-white transition-colors duration-500 uppercase">
                            Current Issue
                        </Button>
                        <Button variant="outline" className="border-4 border-black text-black rounded-none px-12 py-10 text-2xl font-black hover:bg-black hover:text-white transition-colors duration-500 uppercase">
                            Newsletter
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-b-2 border-black">
                {[1, 2, 3, 4].map(i => (
                    <div key={`mono-item-${i}`} className={`p-10 border-black ${i < 4 ? 'md:border-r-2' : ''} group cursor-pointer hover:bg-black hover:text-white transition-colors duration-500`}>
                        <span className="text-sm font-bold block mb-10">ARTICLE 0{i}</span>
                        <h3 className="text-4xl font-black leading-none uppercase mb-4 tracking-tighter">DESIGNING <br /> THE FUTURE</h3>
                        <p className="font-sans text-sm font-medium leading-relaxed opacity-60">Insightful views on contemporary design systems and their evolution.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Playful Colorful Preview
function PlayfulPreview() {
    return (
        <div className="space-y-12 p-12 bg-yellow-50 overflow-hidden relative">
            <div className="absolute top-10 right-10 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-20 left-10 w-60 h-60 bg-teal-400 rounded-full blur-[80px] opacity-20 animate-pulse" />

            <div className="relative z-10 text-center space-y-8">
                <h1 className="text-7xl font-black text-teal-600 drop-shadow-[4px_4px_0_white]">
                    Yay! Happy <br /> Interface 🌈
                </h1>
                <p className="text-2xl font-bold text-teal-700/60 max-w-2xl mx-auto">
                    Friendly shapes and popping colors for an interface that sparkles with joy!
                </p>
                <div className="flex justify-center gap-6">
                    <Button className="bg-pink-500 hover:bg-pink-400 text-white rounded-[32px] h-20 px-12 text-2xl font-black shadow-[0_10px_0_#db2777] active:translate-y-2 active:shadow-none transition-all">
                        Pick Me! ✨
                    </Button>
                    <Button className="bg-teal-500 hover:bg-teal-400 text-white rounded-[32px] h-20 px-12 text-2xl font-black shadow-[0_10px_0_#0d9488] active:translate-y-2 active:shadow-none transition-all">
                        Let&apos;s Go! 🚀
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 relative z-10">
                {[
                    { color: "bg-pink-400 shadow-[0_10px_0_#be185d]", title: "Cute" },
                    { color: "bg-teal-400 shadow-[0_10px_0_#0f766e]", title: "Fresh" },
                    { color: "bg-yellow-400 shadow-[0_10px_0_#b45309]", title: "Sunny" },
                    { color: "bg-purple-400 shadow-[0_10px_0_#7e22ce]", title: "Magic" }
                ].map((item, i) => (
                    <div key={`playful-item-${i}`} className={`${item.color} w-32 h-32 rounded-[2rem] flex items-center justify-center text-white hover:scale-110 rotate-3 even:-rotate-3 transition-transform cursor-pointer`}>
                        <span className="font-black text-xl italic uppercase tracking-tighter">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Nature Organic Preview
function NatureOrganicPreview() {
    return (
        <div className="space-y-12 p-12 bg-emerald-50 rounded-[60px] m-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                    <Badge className="bg-emerald-600 text-white rounded-full px-6 py-2 text-sm font-semibold border-0">
                        🌿 Sustainable Design
                    </Badge>
                    <h1 className="text-7xl font-bold text-emerald-950 leading-[1.05]">
                        Rooted in <br /> <span className="text-emerald-600">Pure Nature.</span>
                    </h1>
                    <p className="text-xl text-emerald-900/60 leading-relaxed font-medium">
                        Organic shapes and earthy tones to bring tranquility and balance to your digital workspace.
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-[40px] px-10 py-7 text-lg font-bold shadow-lg">
                            Explore Forest
                        </Button>
                        <Button variant="outline" className="border-2 border-emerald-700 text-emerald-700 rounded-[40px] px-10 py-7 text-lg font-bold hover:bg-emerald-100">
                            Our Vision
                        </Button>
                    </div>
                </div>
                <div className="h-[500px] w-full bg-emerald-200 rounded-[100px_40px_100px_40px] shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-800/10 scale-[5]">
                        ☘️
                    </div>
                </div>
            </div>
        </div>
    );
}

// Japanese Zen Preview
function JapaneseZenPreview() {
    return (
        <div className="space-y-0 p-12 bg-[#fcf9f2] font-mono min-h-screen">
            <div className="max-w-5xl mx-auto border-x border-black/10 px-12 py-32 relative">
                <div className="absolute top-0 right-12 text-xs text-black/40 uppercase tracking-[0.5em] leading-[3] [writing-mode:vertical-rl]">
                    Minimalist // Harmony // Kyoto
                </div>

                <div className="space-y-2">
                    <span className="text-red-600 text-4xl leading-none">●</span>
                    <h1 className="text-7xl font-light text-black tracking-tight leading-none mb-12">
                        The Art <br /> of Less.
                    </h1>
                    <p className="text-xl text-black/60 font-sans max-w-lg leading-relaxed mb-16">
                        Finding beauty in emptiness. A Zen-inspired interface built for focus and tranquility.
                    </p>
                    <div className="flex gap-12 items-center">
                        <Button variant="outline" className="border-black border-2 rounded-none px-12 py-8 text-lg hover:bg-black hover:text-white transition-all font-sans uppercase tracking-widest font-black">
                            Enter
                        </Button>
                        <div className="h-px w-32 bg-black" />
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 px-12 mt-12">
                {["Empty", "Simple", "Silence"].map((item, i) => (
                    <div key={`zen-item-${i}`} className="p-8 border border-black/5 hover:bg-black/5 transition-colors cursor-pointer text-center space-y-4">
                        <div className="text-black/20 text-4xl tracking-tighter">0{i + 1}</div>
                        <h3 className="text-xl uppercase tracking-widest font-bold">{item}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Tech Dashboard Preview
function TechDashboardPreview() {
    return (
        <div className="space-y-6 p-8 bg-[#0f172a] text-slate-200 font-mono">
            <header className="flex justify-between items-center border-b border-slate-800 pb-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-black tracking-tighter uppercase">CORE_OS v1.0</h2>
                </div>
                <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> NETWORK_OK</span>
                    <span className="text-slate-500">0 ms LATENCY</span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={`telemetry-${i}`} className="bg-[#1e293b] border border-slate-800 p-6 rounded-lg space-y-2">
                                <span className="text-slate-500 text-[10px] uppercase">Telemetry {i}</span>
                                <div className="text-2xl font-black text-indigo-400 tabular-nums">12{i}.4k</div>
                                <div className="h-1 bg-slate-800 w-full rounded-full overflow-hidden">
                                    <div className={`h-full bg-indigo-500`} style={{ width: `${i * 30}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-80 bg-[#1e293b] border border-slate-800 rounded-lg p-6 relative">
                        <div className="absolute top-6 left-6 text-xs text-slate-500 uppercase">Traffic Real-time Data</div>
                        <div className="w-full h-full flex items-end gap-1 pt-12">
                            {[40, 70, 45, 90, 65, 30, 85, 45, 75, 55, 95, 40, 60, 80, 50, 70, 35, 90, 55, 60].map((h, i) => (
                                <div key={`bar-${i}`} style={{ height: `${h}%` }} className="flex-1 bg-indigo-500/20 group hover:bg-indigo-500 transition-colors" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-[#1e293b] border border-slate-800 p-6 rounded-lg space-y-6">
                        <h3 className="text-xs font-bold uppercase text-slate-500">Active Systems</h3>
                        <div className="space-y-3">
                            {[Shield, Zap, Users].map((Icon, i) => (
                                <div key={`tech-system-${i}`} className="flex items-center justify-between p-3 bg-[#0f172a] rounded border border-slate-700">
                                    <Icon className="w-4 h-4 text-indigo-400" />
                                    <span className="text-[10px] font-bold">READY</span>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs h-12">
                            INITIATE SYSTEM RESTART
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Bold Typography Preview
function BoldTypographyPreview() {
    return (
        <div className="p-0 bg-white overflow-hidden">
            <div className="relative pt-32 pb-44 px-12 border-b-[30px] border-black">
                <h1 className="text-[14vw] font-black uppercase leading-[0.85] tracking-tighter mb-16">
                    Words <br /> That <br /> <span className="text-blue-600">Scream.</span>
                </h1>
                <div className="absolute bottom-12 right-12 max-w-sm text-right">
                    <p className="text-2xl font-black leading-tight mb-8">
                        An interface where the text is the only hero you need. Bold. Brutal. Beautiful.
                    </p>
                    <Button className="bg-black text-white hover:bg-blue-600 rounded-none px-12 py-10 text-3xl font-black uppercase transition-all duration-300">
                        Action.
                    </Button>
                </div>
            </div>

            <div className="flex border-b-[15px] border-black">
                {["Bold", "Heavy", "Loud"].map((word, i) => (
                    <div key={`bold-word-${i}`} className={`flex-1 p-12 text-center text-7xl font-black uppercase border-black ${i < 2 ? 'border-r-[15px]' : ''} hover:bg-black hover:text-white transition-all cursor-crosshair`}>
                        {word}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Gaming Theme Preview
function GamingPreview() {
    return (
        <div className="space-y-8 p-12 bg-black text-white font-sans relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-red-600/20 via-transparent to-transparent -rotate-12 translate-y-[-50%] pointer-events-none" />

            <div className="relative z-10 space-y-12">
                <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-red-600 skew-x-[-20deg]" />
                    <h2 className="text-sm font-black italic tracking-widest uppercase text-red-600">LEVEL UP YOUR XP</h2>
                </div>

                <h1 className="text-8xl font-black italic uppercase tracking-tighter leading-none [text-shadow:0_5px_0_#991b1b,0_10px_0_rgba(0,0,0,0.5)] skew-x-[-10deg]">
                    ELITE <br /> <span className="text-red-600">GAMING</span> <br /> FORCE.
                </h1>

                <div className="flex gap-4">
                    <Button className="bg-red-600 hover:bg-red-500 text-white font-black italic text-2xl h-20 px-12 rounded-none skew-x-[-15deg] shadow-[5px_5px_0_#991b1b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                        PLAY NOW
                    </Button>
                    <Button variant="outline" className="border-4 border-white text-white font-black italic text-2xl h-20 px-12 rounded-none skew-x-[-15deg] hover:bg-white hover:text-black transition-all">
                        LOADOUT
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                    {[
                        { label: "RANK", value: "PLATINUM I" },
                        { label: "SERVER", value: "EU_WEST_02" },
                        { label: "SQUAD", value: "ALPHA_9" }
                    ].map((item, i) => (
                        <div key={`gaming-item-${i}`} className="bg-white/5 border-l-4 border-red-600 p-6 backdrop-blur-sm">
                            <span className="text-xs text-slate-500 font-bold uppercase block mb-1">{item.label}</span>
                            <div className="text-2xl font-black italic">{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Health & Wellness Preview (ID 21)
function HealthWellnessPreview() {
    return (
        <div className="space-y-12 p-8 bg-[#F0F9FF]">
            {/* Hero */}
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                <div className="flex-1 space-y-6">
                    <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200 border-0 px-4 py-1">Welcome to Serenity</Badge>
                    <h1 className="text-6xl font-bold text-slate-900 leading-tight">Your Journey to <span className="text-sky-500">Holistic Health</span> Starts Here.</h1>
                    <p className="text-lg text-slate-600">Professional healthcare and wellness services tailored to your individual needs.</p>
                    <div className="flex gap-4">
                        <Button className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 py-6 h-auto">Book Appointment</Button>
                        <Button variant="outline" className="border-sky-200 text-sky-700 rounded-full px-8 py-6 h-auto">Our Services</Button>
                    </div>
                </div>
                <div className="flex-1 h-[400px] bg-sky-200/50 rounded-[4rem] relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 scale-[5]">🧘‍♀️</div>
                </div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {["Therapy", "Nutrition", "Yoga", "Checkup"].map((s, i) => (
                    <Card key={i} className="border-0 shadow-sm hover:shadow-xl transition-all rounded-3xl p-2 bg-white">
                        <CardContent className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-sky-100 rounded-2xl mx-auto flex items-center justify-center">
                                <Heart className="w-6 h-6 text-sky-600" />
                            </div>
                            <h3 className="font-bold text-lg">{s}</h3>
                            <p className="text-sm text-slate-500">Personalized care plans.</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// Education Learning Preview (ID 22)
function EducationLearningPreview() {
    return (
        <div className="space-y-12 p-8 bg-white">
            {/* Navigation / Hero */}
            <div className="bg-[#7C3AED] rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
                <div className="relative z-10 max-w-3xl">
                    <h1 className="text-6xl font-bold mb-6">Master New Skills <br />with Expert Courses.</h1>
                    <p className="text-xl opacity-90 mb-8">Join over 10,000 students learning from top industry professionals world wide.</p>
                    <div className="flex flex-wrap gap-4">
                        <Input className="max-w-xs bg-white text-slate-900 h-14 rounded-2xl" placeholder="Search courses..." />
                        <Button className="bg-amber-400 hover:bg-amber-500 text-indigo-950 font-bold h-14 px-8 rounded-2xl shadow-lg border-0">Find Course</Button>
                    </div>
                </div>
            </div>

            {/* Popular Courses */}
            <div className="space-y-8 max-w-6xl mx-auto">
                <div className="flex justify-between items-end">
                    <h2 className="text-3xl font-bold text-indigo-950">Popular Courses</h2>
                    <Button variant="link" className="text-indigo-600 font-bold">See All Courses</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Web Design Mastery", price: "$49", rating: "4.9" },
                        { title: "AI Fundamentals", price: "$59", rating: "4.8" },
                        { title: "Business Growth", price: "$39", rating: "4.7" }
                    ].map((course, i) => (
                        <Card key={i} className="rounded-3xl border-slate-100 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
                            <div className="aspect-video bg-indigo-50 group-hover:bg-indigo-100 transition-colors" />
                            <CardContent className="p-6 space-y-4">
                                <div className="flex justify-between items-center text-sm font-bold text-amber-600">
                                    <span>Design</span>
                                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-current" /> {course.rating}</span>
                                </div>
                                <h3 className="text-xl font-bold text-indigo-950">{course.title}</h3>
                                <div className="pt-4 border-t flex justify-between items-center">
                                    <span className="text-2xl font-black text-indigo-600">{course.price}</span>
                                    <Button size="sm" className="rounded-xl bg-indigo-950">Enroll Now</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Architect Portfolio Preview (ID 24)
function ArchitectPortfolioPreview() {
    return (
        <div className="space-y-0 p-0 bg-[#FAFAFA] font-sans">
            <div className="min-h-screen flex flex-col">
                <header className="px-12 py-8 flex justify-between items-center border-b border-black/5">
                    <div className="text-2xl font-black tracking-tighter">ARCHI_STUDIO</div>
                    <nav className="flex gap-12 text-xs font-bold uppercase tracking-widest">
                        <span>Projects</span>
                        <span>Approach</span>
                        <span>Studio</span>
                        <span>Contact</span>
                    </nav>
                </header>
                <div className="flex-1 flex overflow-hidden">
                    <div className="w-1/2 p-24 flex flex-col justify-center space-y-12">
                        <h1 className="text-8xl font-bold tracking-tighter leading-none text-[#171717]">
                            Space <br /> Refined.
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-md leading-relaxed">
                            Creating timeless structures that harmonize with their surroundings and enhance the human experience.
                        </p>
                        <div className="pt-8">
                            <Button className="bg-[#171717] hover:bg-black text-white px-12 py-8 rounded-none text-sm font-bold uppercase tracking-widest h-auto">
                                View Portfolio
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/2 bg-[#E5E5E5] relative">
                        <div className="absolute inset-24 border border-black/5" />
                        <div className="absolute bottom-24 right-24 text-8xl font-black text-white/50">01</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border-b border-black/5">
                {[
                    { name: "The Glass House", loc: "Berne, Switzerland" },
                    { name: "Concrete Oasis", loc: "Oaxaca, Mexico" }
                ].map((p, i) => (
                    <div key={i} className="aspect-square bg-white p-16 flex flex-col justify-end group cursor-pointer overflow-hidden transition-all hover:bg-neutral-50">
                        <h3 className="text-4xl font-bold tracking-tight mb-2 group-hover:-translate-y-2 transition-transform">{p.name}</h3>
                        <p className="text-neutral-400 font-medium uppercase tracking-widest text-xs">{p.loc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Coffee Shop Cozy Preview (ID 26)
function CoffeeShopCozyPreview() {
    return (
        <div className="space-y-12 p-8 bg-[#FFFBEB] font-serif">
            <div className="max-w-4xl mx-auto text-center py-20 border-b border-[#78350F]/10">
                <span className="text-[#D97706] italic text-2xl mb-4 block">Since 1994</span>
                <h1 className="text-8xl font-bold text-[#78350F] mb-8">Morning Brew.</h1>
                <p className="text-2xl text-[#78350F]/60 max-w-2xl mx-auto italic mb-12">
                    Hand-crafted coffee and cozy vibes in the heart of the city. Join us for a cup.
                </p>
                <div className="flex justify-center gap-6 font-sans">
                    <Button className="bg-[#78350F] hover:bg-[#451A03] text-white px-10 py-7 rounded-full text-lg">Order Pickup</Button>
                    <Button variant="outline" className="border-[#78350F] text-[#78350F] px-10 py-7 rounded-full text-lg hover:bg-[#FEF3C7]">Find Us</Button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
                {[
                    { name: "Espresso", desc: "Bold and intense.", price: "$3.50" },
                    { name: "Latte", desc: "Smooth and creamy.", price: "$4.50" },
                    { name: "Pour Over", desc: "Clean and aromatic.", price: "$5.00" }
                ].map((item, i) => (
                    <div key={i} className="text-center space-y-4">
                        <div className="w-24 h-24 bg-[#FEF3C7] rounded-full mx-auto flex items-center justify-center border-2 border-dashed border-[#78350F]/20">
                            ☕
                        </div>
                        <h3 className="text-2xl font-bold text-[#78350F]">{item.name}</h3>
                        <p className="italic text-[#78350F]/60">{item.desc}</p>
                        <div className="text-xl font-bold text-[#D97706] font-sans">{item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Crypto Dashboard Preview (ID 28)
function CryptoDashboardPreview() {
    return (
        <div className="space-y-6 p-8 bg-[#020617] text-slate-200 font-mono">
            {/* Top Bar */}
            <div className="flex justify-between items-center bg-slate-900/50 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl">
                <div className="flex items-center gap-8">
                    <div className="text-xl font-black text-emerald-400">CRYPTO_FLOW</div>
                    <div className="flex gap-6 text-sm">
                        <span className="text-emerald-400/80">MARKET: OPEN</span>
                        <span className="text-slate-500">GAS: 24 Gwei</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm font-bold">0x4a...3e9f</div>
                    <Button size="icon" className="rounded-xl bg-slate-800"><Users className="w-4 h-4" /></Button>
                </div>
            </div>

            {/* Main Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <Card className="lg:col-span-3 bg-slate-900 border-slate-800 rounded-3xl p-8 space-y-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Portfolio Value</span>
                            <div className="text-5xl font-black text-white mt-1">$124,562.80 <span className="text-emerald-400 text-lg ml-2">+12.4%</span></div>
                        </div>
                        <div className="flex gap-2">
                            {["1H", "1D", "1W", "1M"].map(t => <Button key={t} variant="ghost" size="sm" className={`rounded-lg ${t === '1D' ? 'bg-emerald-500/10 text-emerald-400' : ''}`}>{t}</Button>)}
                        </div>
                    </div>
                    {/* Chart Visualization */}
                    <div className="h-48 flex items-end gap-1 px-2 pt-10 border-b border-slate-800">
                        {[30, 45, 35, 60, 55, 80, 70, 95, 85, 100, 90, 110, 105, 130, 120, 140, 135, 160].map((h, i) => (
                            <div key={i} className={`flex-1 ${i > 10 ? 'bg-emerald-500' : 'bg-slate-700'} opacity-40 rounded-t-sm`} style={{ height: `${(h / 160) * 100}%` }} />
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        {[
                            { label: "Assets held", val: "14 Tokens" },
                            { label: "Highest ROI", val: "+450% (PEPE)" },
                            { label: "Est. Gas Fees", val: "$42.10" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-slate-500 text-[10px] font-bold uppercase">{stat.label}</div>
                                <div className="text-white font-bold">{stat.val}</div>
                            </div>
                        ))}
                    </div>
                </Card>

                <div className="space-y-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold">Recent Swaps</h3>
                            <Button variant="link" size="sm" className="text-emerald-400 p-0">View All</Button>
                        </div>
                        {[
                            { from: "ETH", to: "USDC", val: "1.24" },
                            { from: "BTC", to: "ETH", val: "0.05" },
                            { from: "SOL", to: "USDC", val: "145.0" }
                        ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-slate-950/50 rounded-2xl border border-slate-800/50 group hover:border-emerald-500/30 transition-all cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-black">?</div>
                                    <div>
                                        <div className="text-xs font-bold text-white">{tx.from} → {tx.to}</div>
                                        <div className="text-[10px] text-slate-500">2 mins ago</div>
                                    </div>
                                </div>
                                <div className="text-emerald-400 font-bold text-xs">{tx.val}</div>
                            </div>
                        ))}
                    </div>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black h-14 rounded-3xl shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                        SWAP ASSETS NOW
                    </Button>
                </div>
            </div>
        </div>
    );
}

// ─── Real Estate Modern Preview ───────────────────────────────────────────────
function RealEstatePreview() {
    return (
        <div className="space-y-0 bg-white font-sans">
            {/* Hero */}
            <div className="relative min-h-[420px] bg-gradient-to-br from-rose-900 to-rose-700 flex items-end p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-40" />
                <div className="relative z-10 max-w-xl space-y-4">
                    <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">🏠 Premier Properties</Badge>
                    <h1 className="text-6xl font-bold text-white leading-tight">Find Your Dream Home.</h1>
                    <p className="text-white/80 text-lg">Discover luxury properties and exclusive listings in the most sought-after locations worldwide.</p>
                    <div className="flex gap-3 pt-2">
                        <Button className="bg-white text-rose-800 hover:bg-rose-50 font-bold px-8 py-6 rounded-xl">Browse Listings</Button>
                        <Button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 px-8 py-6 rounded-xl">Contact Agent</Button>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white border-b px-12 py-6 shadow-sm">
                <div className="flex gap-4 max-w-4xl mx-auto">
                    <Input className="flex-1 h-12 rounded-xl border-gray-200" placeholder="Search by location or property type..." />
                    <Button className="bg-rose-700 hover:bg-rose-800 text-white h-12 px-8 rounded-xl">Search</Button>
                </div>
            </div>

            {/* Property Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-12 bg-gray-50">
                {[
                    { name: "Villa Serenity", loc: "Bali, Indonesia", price: "$1.2M", beds: 4, baths: 3 },
                    { name: "Skyline Penthouse", loc: "NYC, USA", price: "$3.8M", beds: 3, baths: 2 },
                    { name: "Coastal Retreat", loc: "Malibu, CA", price: "$2.1M", beds: 5, baths: 4 },
                ].map((prop, i) => (
                    <Card key={i} className="overflow-hidden rounded-2xl border-0 shadow-md hover:shadow-xl transition-all group cursor-pointer">
                        <div className="aspect-video bg-gradient-to-br from-rose-200 to-rose-100 relative">
                            <div className="absolute top-3 right-3">
                                <Badge className="bg-rose-700 text-white border-0 text-xs">{prop.price}</Badge>
                            </div>
                        </div>
                        <CardContent className="p-5 space-y-2">
                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-rose-700 transition-colors">{prop.name}</h3>
                            <p className="text-gray-500 text-sm">📍 {prop.loc}</p>
                            <div className="flex gap-4 text-xs text-gray-600 pt-1">
                                <span>🛏 {prop.beds} beds</span>
                                <span>🚿 {prop.baths} baths</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// ─── Fashion Boutique Preview ─────────────────────────────────────────────────
function FashionBoutiquePreview() {
    return (
        <div className="bg-white font-sans">
            {/* Header */}
            <div className="flex justify-between items-center px-12 py-6 border-b border-gray-100">
                <div className="text-3xl font-black tracking-[0.3em] uppercase">AUREL</div>
                <nav className="hidden md:flex gap-10 text-xs tracking-widest uppercase font-semibold text-gray-500">
                    <span>Collection</span><span>Lookbook</span><span>About</span><span>Contact</span>
                </nav>
                <Button size="sm" variant="outline" className="rounded-none border-black text-xs tracking-widest uppercase">Shop Now</Button>
            </div>

            {/* Hero Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                <div className="bg-gray-100 relative overflow-hidden flex items-end p-12">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="relative z-10 text-white">
                        <span className="text-xs tracking-[0.4em] uppercase opacity-80">New Collection 2026</span>
                        <h1 className="text-6xl font-black leading-none mt-2">Effortless<br />Luxury.</h1>
                    </div>
                </div>
                <div className="p-16 flex flex-col justify-center space-y-8">
                    <Badge className="w-fit bg-purple-100 text-purple-700 border-0 rounded-none text-xs tracking-widest uppercase px-4 py-1">Season Highlight</Badge>
                    <p className="text-2xl font-light text-gray-700 leading-relaxed">
                        Timeless pieces crafted with the finest materials, designed to move with you through every moment.
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-black text-white hover:bg-gray-900 rounded-none px-10 py-6 tracking-widest text-xs uppercase font-bold">Explore</Button>
                        <Button variant="outline" className="border-black rounded-none px-10 py-6 tracking-widest text-xs uppercase font-bold">Lookbook</Button>
                    </div>
                    <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                        {["Sustainable", "Hand-crafted", "Exclusive"].map((v, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl font-black">✦</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">{v}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Photography Dark Preview ─────────────────────────────────────────────────
function PhotographyDarkPreview() {
    return (
        <div className="bg-black text-white font-sans">
            {/* Hero fullscreen */}
            <div className="relative min-h-[500px] bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center overflow-hidden">
                {/* Simulated image mosaic */}
                <div className="absolute inset-0 grid grid-cols-4 gap-0.5 opacity-30">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className={`bg-zinc-700 ${i % 3 === 0 ? 'col-span-2' : ''}`} />
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="relative z-10 text-center space-y-6 px-12">
                    <span className="text-xs tracking-[0.5em] uppercase text-gray-400">Visual Storytelling</span>
                    <h1 className="text-8xl font-black leading-none bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        LIGHT<br />&amp; SHADOW
                    </h1>
                    <div className="flex justify-center gap-4 pt-4">
                        <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-10 py-6 font-bold tracking-widest text-xs uppercase">Portfolio</Button>
                        <Button variant="ghost" className="border border-white/30 text-white hover:bg-white/10 rounded-none px-10 py-6 font-bold tracking-widest text-xs uppercase">Book Session</Button>
                    </div>
                </div>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-1">
                {[
                    { h: "row-span-2", label: "Portraits" },
                    { h: "", label: "Fashion" },
                    { h: "", label: "Landscape" },
                    { h: "", label: "Editorial" },
                    { h: "", label: "Architecture" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className={`${item.h} bg-zinc-800 aspect-square relative group cursor-pointer overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <span className="text-xs uppercase tracking-widest font-bold">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Travel Explorer Preview ──────────────────────────────────────────────────
function TravelExplorerPreview() {
    return (
        <div className="bg-white font-sans space-y-0">
            {/* Hero */}
            <div className="relative min-h-[420px] bg-gradient-to-br from-orange-500 to-cyan-500 flex items-center overflow-hidden p-12">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="relative z-10 max-w-2xl space-y-6">
                    <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm text-sm">✈️ 200+ Destinations</Badge>
                    <h1 className="text-7xl font-black text-white leading-tight">Explore<br />The World.</h1>
                    <p className="text-white/90 text-xl">Discover extraordinary places, handpicked itineraries, and unforgettable experiences.</p>
                    <div className="flex gap-3">
                        <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-6 rounded-2xl shadow-lg">Start Exploring</Button>
                        <Button className="bg-white/20 border border-white/40 text-white hover:bg-white/30 px-8 py-6 rounded-2xl">View Deals</Button>
                    </div>
                </div>
            </div>

            {/* Destinations */}
            <div className="p-12 space-y-8 bg-gray-50">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
                    <Button variant="link" className="text-orange-500 font-bold">See All →</Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Bali", country: "Indonesia", days: "7D", color: "from-orange-400 to-amber-500" },
                        { name: "Santorini", country: "Greece", days: "5D", color: "from-cyan-400 to-blue-500" },
                        { name: "Tokyo", country: "Japan", days: "10D", color: "from-pink-400 to-rose-500" },
                        { name: "Patagonia", country: "Argentina", days: "14D", color: "from-emerald-400 to-teal-500" },
                    ].map((dest, i) => (
                        <div key={i} className={`rounded-3xl bg-gradient-to-br ${dest.color} p-6 text-white aspect-square flex flex-col justify-end cursor-pointer hover:scale-[1.03] transition-transform`}>
                            <div className="text-xs font-bold opacity-80 mb-1">{dest.days}</div>
                            <div className="text-2xl font-black">{dest.name}</div>
                            <div className="text-xs opacity-80">{dest.country}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Law Firm Professional Preview ─────────────────────────────────────────────
function LawFirmPreview() {
    return (
        <div className="bg-white font-sans space-y-0">
            {/* Header */}
            <div className="border-b border-gray-200 px-12 py-5 flex justify-between items-center">
                <div>
                    <div className="text-xl font-black tracking-tight text-[#1E3A8A]">HARTWELL & ASSOCIATES</div>
                    <div className="text-xs tracking-widest uppercase text-gray-400">Attorneys at Law · Since 1978</div>
                </div>
                <Button className="bg-[#1E3A8A] hover:bg-blue-900 text-white rounded-sm px-6 py-5 text-sm font-semibold">Free Consultation</Button>
            </div>

            {/* Hero */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px]">
                <div className="bg-[#1E3A8A] p-16 flex flex-col justify-center space-y-8">
                    <div className="w-16 h-1 bg-amber-500" />
                    <h1 className="text-5xl font-bold text-white leading-tight">Justice. Integrity. Results.</h1>
                    <p className="text-blue-200 text-lg leading-relaxed">Trusted legal counsel for individuals, families, and businesses for over four decades.</p>
                    <Button className="w-fit bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-5 rounded-sm">Our Practice Areas</Button>
                </div>
                <div className="bg-blue-50 p-12 flex flex-col justify-center gap-6">
                    {["Corporate Law", "Family & Estates", "Criminal Defense", "Real Estate"].map((area, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm group hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
                            <div className="w-2 h-8 bg-amber-500 rounded-full" />
                            <div>
                                <div className="font-bold text-gray-900">{area}</div>
                                <div className="text-xs text-gray-400">Expert representation</div>
                            </div>
                            <ArrowRight className="ml-auto w-4 h-4 text-gray-300 group-hover:text-amber-500 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-900 text-white px-12 py-8 grid grid-cols-4 gap-8 text-center">
                {[["48+", "Years Experience"], ["2,400+", "Cases Won"], ["98%", "Client Satisfaction"], ["24/7", "Support"]].map(([val, label], i) => (
                    <div key={i}>
                        <div className="text-3xl font-black text-amber-400">{val}</div>
                        <div className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Music Studio Pro Preview ─────────────────────────────────────────────────
function MusicStudioPreview() {
    return (
        <div className="bg-[#111827] text-white font-sans space-y-0 overflow-hidden">
            {/* Hero */}
            <div className="relative min-h-[400px] flex items-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-purple-600/20 to-transparent" />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-pink-900/40 to-transparent" />
                {/* Visualizer bars */}
                <div className="absolute right-12 bottom-0 flex items-end gap-1 h-full w-64 opacity-30 pb-0">
                    {[40, 70, 55, 90, 65, 80, 45, 95, 60, 75, 50, 85, 40, 70, 55].map((h, i) => (
                        <div key={i} className="flex-1 bg-pink-500 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                </div>

                <div className="relative z-10 max-w-2xl space-y-6">
                    <Badge className="bg-pink-500/20 text-pink-300 border border-pink-500/30">🎵 New Album: Echoes</Badge>
                    <h1 className="text-7xl font-black leading-none bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                        SOUND<br />FACTORY
                    </h1>
                    <p className="text-gray-400 text-lg">Where music meets innovation. Professional beats, custom mixes, world-class production.</p>
                    <div className="flex gap-3">
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-8 py-6 rounded-2xl font-bold shadow-[0_0_30px_rgba(236,72,153,0.4)]">Listen Now</Button>
                        <Button variant="ghost" className="border border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-2xl">Book Studio</Button>
                    </div>
                </div>
            </div>

            {/* Tracks */}
            <div className="p-8 space-y-3">
                {[
                    { title: "Midnight Drive", duration: "3:42", plays: "2.1M" },
                    { title: "Electric Pulse", duration: "4:15", plays: "1.8M" },
                    { title: "Neon Feelings", duration: "3:58", plays: "950K" },
                ].map((track, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group border border-white/5">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-sm">
                            {i + 1}
                        </div>
                        <div className="flex-1">
                            <div className="font-bold">{track.title}</div>
                            <div className="text-xs text-gray-500">{track.plays} plays</div>
                        </div>
                        <div className="h-8 flex items-end gap-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
                            {[60, 90, 50, 80, 70].map((h, j) => (
                                <div key={j} className="w-1 bg-pink-400 rounded-full" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                        <div className="text-xs text-gray-500 font-mono">{track.duration}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Non-Profit Impact Preview ────────────────────────────────────────────────
function NonProfitPreview() {
    return (
        <div className="bg-white font-sans space-y-0">
            {/* Hero */}
            <div className="bg-[#DC2626] px-12 py-20 text-white relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
                <div className="max-w-2xl space-y-6">
                    <Badge className="bg-white/20 text-white border-0 text-sm py-1">❤️ Every Action Matters</Badge>
                    <h1 className="text-6xl font-bold leading-tight">Together, We Change Lives.</h1>
                    <p className="text-red-100 text-xl">Join thousands of passionate volunteers and donors making a real difference in communities worldwide.</p>
                    <div className="flex gap-4 pt-2">
                        <Button className="bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-6 rounded-xl shadow-lg">Donate Now</Button>
                        <Button className="bg-red-800/60 border border-white/20 text-white hover:bg-red-800 px-8 py-6 rounded-xl">Volunteer</Button>
                    </div>
                </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-emerald-800 px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                {[["$12M+", "Raised"], ["150K+", "Lives Impacted"], ["60+", "Countries"], ["5,000+", "Volunteers"]].map(([val, label], i) => (
                    <div key={i}>
                        <div className="text-3xl font-black">{val}</div>
                        <div className="text-emerald-200 text-sm mt-1">{label}</div>
                    </div>
                ))}
            </div>

            {/* Projects */}
            <div className="p-12 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Active Campaigns</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Clean Water Initiative", pct: 78, raised: "$156K" },
                        { name: "Education for All", pct: 52, raised: "$89K" },
                        { name: "Reforestation 2026", pct: 91, raised: "$204K" },
                    ].map((proj, i) => (
                        <Card key={i} className="p-6 border-0 shadow-md rounded-2xl space-y-4">
                            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-xl">
                                {["💧", "📚", "🌱"][i]}
                            </div>
                            <h3 className="font-bold text-gray-900">{proj.name}</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Raised: {proj.raised}</span>
                                    <span className="font-bold text-emerald-600">{proj.pct}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${proj.pct}%` }} />
                                </div>
                            </div>
                            <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl">Support</Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── E-commerce Modern Preview ────────────────────────────────────────────────
function EcommercePreview() {
    return (
        <div className="bg-white font-sans space-y-0">
            {/* Nav */}
            <div className="border-b px-12 py-4 flex justify-between items-center bg-white sticky top-0 z-10">
                <div className="text-2xl font-black tracking-tight text-indigo-700">NEXSHOP</div>
                <div className="flex gap-8 text-sm font-medium text-gray-500">
                    {["New Arrivals", "Collections", "Sale", "Brand"].map(n => <span key={n} className="hover:text-indigo-600 cursor-pointer transition-colors">{n}</span>)}
                </div>
                <div className="flex items-center gap-3">
                    <Badge className="bg-rose-500 text-white border-0">3</Badge>
                    <Button size="sm" className="bg-indigo-700 hover:bg-indigo-800 rounded-xl">Cart 🛒</Button>
                </div>
            </div>

            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-16 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-96 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2" />
                <div className="relative z-10 max-w-xl space-y-6">
                    <Badge className="bg-rose-500 text-white border-0">🔥 Up to 50% OFF</Badge>
                    <h1 className="text-6xl font-black leading-none">Spring<br />Collection<br />2026</h1>
                    <Button className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-8 py-6 rounded-2xl shadow-xl text-lg">Shop Now</Button>
                </div>
            </div>

            {/* Products */}
            <div className="p-12 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: "Carbon Sneaker", price: "$129", old: "$180", badge: "New" },
                        { name: "Urban Jacket", price: "$89", old: "$140", badge: "Sale" },
                        { name: "Classic Tote", price: "$45", old: "$60", badge: "Hot" },
                        { name: "Tech Hoodie", price: "$75", old: "$110", badge: "Limited" },
                    ].map((prod, i) => (
                        <div key={i} className="group space-y-3 cursor-pointer">
                            <div className="aspect-square bg-gray-100 rounded-2xl relative overflow-hidden group-hover:shadow-lg transition-shadow">
                                <Badge className="absolute top-3 left-3 bg-rose-500 text-white border-0 text-xs">{prod.badge}</Badge>
                                <Button size="sm" className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-700 text-white rounded-xl text-xs">Add to Cart</Button>
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900">{prod.name}</div>
                                <div className="flex gap-2 items-center">
                                    <span className="font-bold text-indigo-700">{prod.price}</span>
                                    <span className="text-xs text-gray-400 line-through">{prod.old}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Fitness Tracker Preview ──────────────────────────────────────────────────
function FitnessTrackerPreview() {
    return (
        <div className="bg-white font-sans space-y-0">
            {/* Hero */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white px-12 py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)" }} />
                <div className="relative z-10 max-w-2xl space-y-6">
                    <Badge className="bg-white/20 text-white border-0">💪 Personal Training Platform</Badge>
                    <h1 className="text-7xl font-black leading-none uppercase">Train<br />Harder.</h1>
                    <p className="text-orange-100 text-xl">AI-powered training plans, real-time tracking, and expert coaching to crush your fitness goals.</p>
                    <div className="flex gap-3">
                        <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-6 rounded-2xl shadow-lg">Start Free Trial</Button>
                        <Button className="bg-orange-600/40 border border-white/30 text-white hover:bg-orange-600/60 px-8 py-6 rounded-2xl">View Plans</Button>
                    </div>
                </div>
            </div>

            {/* Activity Dashboard */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "Calories Burned", value: "892 kcal", icon: "🔥", color: "text-orange-500" },
                    { label: "Steps Today", value: "9,245", icon: "👟", color: "text-blue-500" },
                    { label: "Workout Time", value: "1h 23m", icon: "⏱", color: "text-green-500" },
                    { label: "Streak", value: "14 Days", icon: "⚡", color: "text-yellow-500" },
                ].map((stat, i) => (
                    <Card key={i} className="p-5 border-0 shadow-md rounded-2xl space-y-1">
                        <div className="text-2xl">{stat.icon}</div>
                        <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                    </Card>
                ))}
            </div>

            {/* Weekly plan */}
            <div className="px-8 pb-8 space-y-4">
                <h2 className="text-xl font-bold text-gray-900">This Week's Plan</h2>
                <div className="grid grid-cols-7 gap-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <div key={i} className={`rounded-xl p-3 text-center text-xs font-bold ${i < 3 ? 'bg-orange-500 text-white' : i === 3 ? 'bg-orange-100 text-orange-600 ring-2 ring-orange-500' : 'bg-gray-100 text-gray-400'}`}>
                            <div>{d}</div>
                            {i < 4 && <div className="mt-1 text-[9px] opacity-80">{["HIIT", "Run", "Yoga", "Gym"][i]}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── AI SaaS Platform Preview ─────────────────────────────────────────────────
function AISaaSPreview() {
    return (
        <div className="bg-[#0F172A] text-white font-sans space-y-0 overflow-hidden">
            {/* Hero */}
            <div className="relative px-12 py-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-700/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/15 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
                <div className="relative z-10 max-w-3xl space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-300 text-sm">
                        <Sparkles className="w-4 h-4" /> Introducing AI Suite 3.0
                    </div>
                    <h1 className="text-7xl font-bold leading-tight bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
                        The AI Platform<br />Teams Love.
                    </h1>
                    <p className="text-slate-400 text-xl max-w-xl leading-relaxed">
                        Automate workflows, generate content, and analyze data 10× faster with our cutting-edge AI suite.
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-violet-600 hover:bg-violet-500 text-white px-10 py-7 rounded-2xl font-bold shadow-[0_0_40px_rgba(124,58,237,0.4)]">Start Free</Button>
                        <Button variant="ghost" className="border border-white/10 text-white hover:bg-white/5 px-10 py-7 rounded-2xl">Watch Demo</Button>
                    </div>
                </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border-t border-white/5">
                {[
                    { icon: "🤖", title: "AI Automation", desc: "Automate repetitive tasks with intelligent workflows." },
                    { icon: "✍️", title: "Content Engine", desc: "Generate on-brand copy, visuals, and code instantly." },
                    { icon: "📊", title: "Smart Analytics", desc: "Natural language queries over your entire data layer." },
                ].map((feat, i) => (
                    <div key={i} className="p-10 bg-[#0F172A] group hover:bg-white/[0.03] transition-colors cursor-pointer">
                        <div className="text-4xl mb-6">{feat.icon}</div>
                        <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
                        <Button variant="link" className="text-violet-400 p-0 mt-4 font-semibold group-hover:translate-x-1 transition-transform">Learn more →</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── News Editorial Preview ───────────────────────────────────────────────────
function NewsEditorialPreview() {
    return (
        <div className="bg-white font-sans space-y-0">
            {/* Masthead */}
            <div className="border-b-4 border-[#B91C1C] px-12 py-4 flex justify-between items-center">
                <div>
                    <div className="text-3xl font-black tracking-tight text-gray-900">THE CHRONICLE</div>
                    <div className="text-xs text-gray-400 tracking-wider">Wednesday, April 9, 2026</div>
                </div>
                <div className="flex gap-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                    {["World", "Tech", "Business", "Culture"].map(s => <span key={s} className="hover:text-red-600 cursor-pointer">{s}</span>)}
                </div>
            </div>

            {/* Breaking news ticker */}
            <div className="bg-[#B91C1C] text-white px-12 py-2 flex gap-6 text-xs font-bold overflow-hidden">
                <span className="shrink-0 bg-white text-red-700 px-3 py-0.5 rounded font-black">LIVE</span>
                <span className="opacity-90">Global AI Regulation Summit Reaches Historic Agreement · Tech Giants Announce New Data Privacy Standards · Space Mission Returns After Six Months</span>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-gray-200 px-12 pt-8">
                {/* Lead Story */}
                <div className="col-span-2 pr-8 space-y-4">
                    <Badge className="bg-red-100 text-red-700 border-0 rounded-sm text-xs font-bold uppercase">Top Story</Badge>
                    <h1 className="text-5xl font-black leading-tight text-gray-900">
                        World Leaders Sign Landmark Climate Agreement at Emergency Summit
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-red-600 pl-4">
                        In a historic step forward, representatives from 195 nations gathered in Geneva to finalize binding emissions targets, with major economies committing to carbon neutrality by 2045.
                    </p>
                    <div className="flex gap-4 text-xs text-gray-400">
                        <span>By Sarah Chen</span>
                        <span>·</span>
                        <span>4 hours ago</span>
                        <span>·</span>
                        <span>12 min read</span>
                    </div>
                </div>

                {/* Sidebar Headlines */}
                <div className="pl-8 space-y-6">
                    {[
                        { tag: "Tech", title: "Quantum Computer Solves Decades-Old Math Problem" },
                        { tag: "Business", title: "Markets Rally After Central Bank Holds Rates" },
                        { tag: "Culture", title: "Streaming Wars: Who's Really Winning in 2026" },
                    ].map((art, i) => (
                        <div key={i} className="pb-6 border-b border-gray-100 last:border-0 space-y-2 cursor-pointer group">
                            <span className="text-[10px] font-black uppercase text-red-600 tracking-widest">{art.tag}</span>
                            <h3 className="font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors">{art.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Restaurant Premium Preview ───────────────────────────────────────────────
function RestaurantPremiumPreview() {
    return (
        <div className="bg-[#FFFBEB] font-serif space-y-0">
            {/* Hero */}
            <div className="relative min-h-[420px] bg-gradient-to-br from-amber-950 to-amber-800 flex items-center overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <div className="relative z-10 px-16 max-w-2xl space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-amber-400" />
                        <span className="text-amber-400 text-sm tracking-[0.4em] uppercase font-sans">Fine Dining Since 1989</span>
                    </div>
                    <h1 className="text-7xl font-bold text-white leading-tight">Le Jardin<br />Doré</h1>
                    <p className="text-amber-200 text-xl font-light">An intimate culinary journey through the finest seasonal ingredients, crafted by our Michelin-starred chef.</p>
                    <div className="flex gap-4 font-sans">
                        <Button className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8 py-6 rounded-none">Reserve a Table</Button>
                        <Button variant="ghost" className="border border-amber-400/50 text-amber-200 hover:bg-amber-900/50 px-8 py-6 rounded-none">View Menu</Button>
                    </div>
                </div>
            </div>

            {/* Menu Highlights */}
            <div className="px-12 py-16 space-y-10">
                <div className="text-center space-y-2">
                    <div className="text-amber-600 text-sm tracking-[0.4em] uppercase font-sans">Tonight's Selection</div>
                    <h2 className="text-4xl font-bold text-amber-950">Seasonal Menu</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { course: "Entrée", name: "Truffle Velouté", desc: "Black truffle, crème fraîche, crispy prosciutto", price: "$38" },
                        { course: "Main", name: "Wagyu A5 Tenderloin", desc: "Seasonal vegetables, bone marrow jus, microgreens", price: "$145" },
                        { course: "Dessert", name: "Grand Cru Chocolate", desc: "Valrhona mousse, salted caramel, edible gold", price: "$28" },
                    ].map((dish, i) => (
                        <div key={i} className="border-t-2 border-amber-300 pt-6 space-y-2">
                            <div className="text-xs font-sans font-bold uppercase tracking-widest text-amber-600">{dish.course}</div>
                            <div className="text-2xl font-bold text-amber-950">{dish.name}</div>
                            <div className="text-amber-800/70 italic text-sm leading-relaxed">{dish.desc}</div>
                            <div className="font-sans font-bold text-amber-700 text-lg">{dish.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Productivity Tool Preview ────────────────────────────────────────────────
function ProductivityToolPreview() {
    return (
        <div className="bg-white font-sans flex flex-col" style={{ minHeight: 600 }}>
            {/* App header */}
            <div className="border-b px-6 py-3 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="font-bold text-gray-900">FlowSpace</div>
                </div>
                <div className="flex gap-2">
                    {["Board", "List", "Calendar"].map((v, i) => (
                        <Button key={i} size="sm" variant={i === 0 ? "default" : "ghost"} className={`rounded-lg text-xs ${i === 0 ? 'bg-blue-600' : ''}`}>{v}</Button>
                    ))}
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-lg">+ New Task</Button>
            </div>

            {/* Kanban board */}
            <div className="flex-1 p-6 overflow-auto bg-gray-50">
                <div className="grid grid-cols-3 gap-4 min-w-[700px]">
                    {[
                        { col: "To Do", color: "text-gray-500", tasks: ["Redesign onboarding flow", "Set up CI/CD pipeline", "Write Q2 report"] },
                        { col: "In Progress", color: "text-blue-600", tasks: ["User interviews", "API integration"] },
                        { col: "Done", color: "text-green-600", tasks: ["Brand guidelines", "Landing page", "Unit tests"] },
                    ].map((column, i) => (
                        <div key={i} className="space-y-3">
                            <div className={`flex items-center gap-2 font-bold text-sm ${column.color}`}>
                                <div className={`w-2 h-2 rounded-full ${["bg-gray-400", "bg-blue-500", "bg-green-500"][i]}`} />
                                {column.col}
                                <Badge variant="secondary" className="ml-auto text-xs">{column.tasks.length}</Badge>
                            </div>
                            {column.tasks.map((task, j) => (
                                <Card key={j} className="p-4 border-0 shadow-sm hover:shadow-md transition-shadow cursor-grab rounded-xl space-y-2">
                                    <div className="text-sm font-medium text-gray-800">{task}</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-blue-200 text-blue-600 text-[9px] font-bold flex items-center justify-center">
                                            {String.fromCharCode(65 + j)}
                                        </div>
                                        <span className="text-xs text-gray-400">{["Mon", "Wed", "Fri"][j % 3]}</span>
                                        {i === 1 && <Badge className="ml-auto bg-blue-50 text-blue-600 border-blue-100 text-[9px] px-1.5">Active</Badge>}
                                        {i === 2 && <CheckCircle className="ml-auto w-3 h-3 text-green-500" />}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Art Gallery Zen Preview ──────────────────────────────────────────────────
function ArtGalleryPreview() {
    return (
        <div className="bg-white font-sans space-y-0">
            {/* Header */}
            <div className="flex justify-between items-center px-12 py-6 border-b border-gray-100">
                <div>
                    <div className="text-2xl font-black tracking-[0.2em]">MOVA</div>
                    <div className="text-xs text-gray-400 tracking-[0.3em] uppercase">Modern Art Gallery</div>
                </div>
                <nav className="flex gap-10 text-xs tracking-widest uppercase text-gray-400">
                    <span className="hover:text-gray-900 cursor-pointer transition-colors">Exhibitions</span>
                    <span className="hover:text-gray-900 cursor-pointer transition-colors">Artists</span>
                    <span className="hover:text-gray-900 cursor-pointer transition-colors">Auction</span>
                </nav>
                <Button size="sm" variant="outline" className="rounded-none text-xs tracking-widest uppercase border-black">Visit Gallery</Button>
            </div>

            {/* Featured exhibition */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px]">
                <div className="bg-gradient-to-br from-violet-100 to-fuchsia-100 flex items-center justify-center relative overflow-hidden">
                    {/* Abstract art placeholder */}
                    <div className="absolute inset-8 border border-violet-200 rounded-full" />
                    <div className="absolute inset-16 bg-fuchsia-300/30 rounded-3xl rotate-45" />
                    <div className="absolute inset-12 bg-violet-400/20 rounded-full" />
                    <div className="relative z-10 text-violet-600 font-black text-8xl opacity-10 select-none">∞</div>
                </div>
                <div className="p-16 flex flex-col justify-center space-y-8">
                    <div>
                        <span className="text-xs tracking-[0.4em] uppercase text-gray-400">Current Exhibition</span>
                        <h1 className="text-5xl font-black leading-tight text-gray-900 mt-2">Infinite<br />Perspectives</h1>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-lg">
                        A groundbreaking collection exploring the boundaries of perception, space, and human consciousness through 40 contemporary works.
                    </p>
                    <div className="text-sm text-gray-400 space-y-1">
                        <div>April 1 – June 30, 2026</div>
                        <div>Gallery Hall A & B</div>
                    </div>
                    <Button className="w-fit bg-gray-900 hover:bg-black text-white rounded-none px-10 py-5 text-xs uppercase tracking-widest font-bold">Explore Exhibition</Button>
                </div>
            </div>

            {/* Artist spotlight */}
            <div className="px-12 py-10 bg-gray-50 border-t border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Featured Artists</h2>
                    <Button variant="link" className="text-violet-600 p-0 text-xs">View All Artists →</Button>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {["Elena Voss", "Kai Chen", "Mara Okafor", "Luca Ferrante"].map((artist, i) => (
                        <div key={i} className="text-center space-y-2 cursor-pointer group">
                            <div className={`w-16 h-16 rounded-full mx-auto ${["bg-violet-200", "bg-fuchsia-200", "bg-pink-200", "bg-indigo-200"][i]}`} />
                            <div className="text-sm font-bold text-gray-800 group-hover:text-violet-600 transition-colors">{artist}</div>
                            <div className="text-xs text-gray-400">{["Berlin", "Shanghai", "Lagos", "Milan"][i]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Gaming News Portal Preview ───────────────────────────────────────────────
function GamingNewsPreview() {
    return (
        <div className="bg-[#0F172A] text-white font-sans space-y-0 overflow-hidden">
            {/* Masthead */}
            <div className="bg-[#1E1B4B] border-b border-yellow-400/20 px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                        <Zap className="w-4 h-4 text-indigo-900" />
                    </div>
                    <div className="text-2xl font-black tracking-tight text-yellow-400">GAME<span className="text-white">RIFT</span></div>
                </div>
                <nav className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                    {["Esports", "Reviews", "Trailers", "Community"].map(n => <span key={n} className="hover:text-yellow-400 cursor-pointer transition-colors">{n}</span>)}
                </nav>
                <div className="flex gap-2">
                    <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 text-xs animate-pulse">🔴 LIVE</Badge>
                </div>
            </div>

            {/* Featured */}
            <div className="relative min-h-[300px] bg-gradient-to-br from-indigo-900 to-purple-900 flex items-end p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-red-500/10" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl" />
                <Badge className="absolute top-6 left-8 bg-yellow-400 text-indigo-900 font-black border-0">FEATURED STORY</Badge>
                <div className="relative z-10 space-y-3 max-w-xl">
                    <h1 className="text-5xl font-black leading-tight">World Championship Finals: The Biggest Event in Esports History</h1>
                    <p className="text-gray-400">32 teams, 64 nations, one trophy. The ultimate gaming showdown begins this weekend.</p>
                    <div className="flex gap-2 text-xs text-gray-500">
                        <span>By Marcus Rivera</span><span>·</span><span>2h ago</span><span>·</span><span>45K reads</span>
                    </div>
                </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
                {[
                    { tag: "Review", title: "Stellar Odyssey 2 Redefines Open World RPGs", time: "4h ago", score: 9.4 },
                    { tag: "Esports", title: "Team Nexus Wins $5M LAN Tournament in Seoul", time: "6h ago", score: null },
                    { tag: "Trailer", title: "Dark Protocol Gets Explosive Gameplay Reveal", time: "8h ago", score: null },
                ].map((article, i) => (
                    <div key={i} className="p-6 bg-[#0F172A] space-y-3 group cursor-pointer hover:bg-[#1E293B] transition-colors">
                        <div className="flex justify-between items-center">
                            <Badge className={`border-0 text-xs font-black ${i === 0 ? 'bg-yellow-400/10 text-yellow-400' : i === 1 ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'}`}>{article.tag}</Badge>
                            {article.score && <span className="text-yellow-400 font-black">{article.score}</span>}
                        </div>
                        <h3 className="font-bold text-gray-200 leading-snug group-hover:text-yellow-400 transition-colors">{article.title}</h3>
                        <div className="text-xs text-gray-500">{article.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

