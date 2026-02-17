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
                        <div className="text-pink-500 font-mono mb-2">00{i} // Data Stream</div>
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
