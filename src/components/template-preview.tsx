"use client";

import React, { useState } from "react";

import { Template } from "@/lib/templates-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    ArrowRight, Zap, Shield, Star,          CheckCircle, Sparkles, Rocket, Heart,
    Mail, Search, Menu, Settings, DollarSign, Activity, Award, BookOpen, Clock, Compass,
    Coffee, Music, MapPin, Sliders, ChevronRight, Plus, Trash, PlusCircle, Calendar, Flame,
    Utensils, BookOpenCheck, Sparkle, Globe, Eye, Play, PlusSquare, ArrowUpRight, BarChart2
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
        // Dedicated previews
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

// ==========================================
// 1. Neo Brutalism Preview
// ==========================================
function NeoBrutalismPreview() {
    const [modules, setModules] = useState({
        database: true,
        caching: true,
        auth: false,
        logging: false,
    });
    const [counter, setCounter] = useState(8490);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleModule = (key: keyof typeof modules) => {
        setModules(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="space-y-16 p-8 bg-yellow-50 font-mono text-black selection:bg-pink-300 selection:text-black">
            {/* Header / Brand Navbar */}
            <div className="border-4 border-black bg-white p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-black uppercase tracking-tight bg-pink-400 px-3 py-1 border-2 border-black rotate-[-2deg]">RAW_NODE</span>
                    <span className="text-xs font-bold bg-black text-white px-2 py-0.5">V2.4</span>
                </div>
                <div className="flex flex-wrap justify-center gap-6 font-black text-sm">
                    <span className="hover:underline cursor-pointer decoration-2 decoration-pink-500">MANIFESTO</span>
                    <span className="hover:underline cursor-pointer decoration-2 decoration-cyan-500">MODULES</span>
                    <span className="hover:underline cursor-pointer decoration-2 decoration-purple-500">PRICING</span>
                    <span className="hover:underline cursor-pointer decoration-2 decoration-emerald-500">SYSTEMS_FAQ</span>
                </div>
                <Button className="border-4 border-black bg-purple-400 text-black font-black hover:bg-purple-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                    CONNECT GATEWAY
                </Button>
            </div>

            {/* Hero Section */}
            <div className="border-4 border-black bg-white p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <div className="absolute top-2 right-2 border-2 border-black bg-cyan-300 text-black font-black text-xs px-3 py-1 uppercase rotate-[4deg]">
                    100% RAW BUILD
                </div>
                <Badge className="border-2 border-black bg-purple-400 text-black font-black uppercase mb-4 text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    ⚡ EDGE SYSTEM IS STABLE
                </Badge>
                <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase tracking-tight leading-none">
                    UNAPOLOGETIC <br />
                    <span className="bg-yellow-300 px-3 py-1 inline-block border-4 border-black rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-2">
                        COMPUTE.
                    </span>
                </h1>
                <p className="text-xl mb-8 font-black text-slate-800 leading-relaxed max-w-2xl">
                    High-contrast grid systems, instant build triggers, and raw edge telemetry metrics engineered for developers who refuse the beige cloud default.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button className="border-4 border-black bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg py-7 px-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
                        DEPLOY INSTANCE &rarr;
                    </Button>
                    <Button className="border-4 border-black bg-pink-400 hover:bg-pink-300 text-black font-black text-lg py-7 px-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
                        GITHUB MANIFEST
                    </Button>
                </div>
            </div>

            {/* Interactive Sandbox Component */}
            <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
                <div>
                    <h3 className="text-3xl font-black uppercase">1. EDGE MODULE CONTROLLER</h3>
                    <p className="text-sm font-bold text-slate-600 mt-1">Click individual modules to toggle gateway routing dynamically.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {(Object.keys(modules) as Array<keyof typeof modules>).map((key) => (
                        <div
                            key={key}
                            onClick={() => toggleModule(key)}
                            className={`border-4 border-black p-4 cursor-pointer select-none font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                                modules[key] ? "bg-emerald-300 translate-x-[2px] translate-y-[2px] shadow-none" : "bg-red-300 hover:bg-red-200"
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="uppercase text-sm">{key}</span>
                                <span className="text-xs bg-white border-2 border-black px-1.5 py-0.5">
                                    {modules[key] ? "ON" : "OFF"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Real-time Counter simulator */}
                <div className="border-4 border-black p-6 bg-cyan-100 flex flex-col md:flex-row justify-between items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div>
                        <div className="text-xs font-black uppercase text-slate-500">GATEWAY STREAM LOAD</div>
                        <div className="text-3xl font-black mt-1">
                            {counter.toLocaleString()} REQUESTS / SEC
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            onClick={() => setCounter(prev => prev + 500)}
                            className="border-2 border-black bg-white text-black font-black hover:bg-slate-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                            SIMULATE INBOUND +500
                        </Button>
                        <Button
                            onClick={() => setCounter(8490)}
                            className="border-2 border-black bg-pink-400 text-black font-black hover:bg-pink-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                            RESET
                        </Button>
                    </div>
                </div>
            </div>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Zap, title: "MAX CONCURRENCY", desc: "Sustain up to 50k requests per node without thread block.", color: "bg-cyan-300" },
                    { icon: Shield, title: "HARDENED SANDBOX", desc: "Sub-millisecond containment using gVisor kernels.", color: "bg-emerald-300" },
                    { icon: Star, title: "NO COMPROMISES", desc: "No complex YAML blocks. Only pure functional TypeScript configs.", color: "bg-pink-300" },
                ].map((item, i) => (
                    <Card key={i} className={`border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${item.color} rounded-none`}>
                        <CardContent className="p-6 text-black">
                            <div className="w-14 h-14 mb-6 bg-white border-4 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black mb-2 uppercase">{item.title}</h3>
                            <p className="font-bold text-black/80 text-sm leading-relaxed">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pricing Section */}
            <div className="space-y-8">
                <div className="text-center">
                    <h2 className="text-4xl font-black uppercase inline-block bg-white border-4 border-black px-4 py-2 rotate-[1deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        TRANSPARENT VALUE MATRIX
                    </h2>
                    <p className="text-sm font-bold text-slate-700 mt-4">Zero long-term contracts. Deploy what you consume.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "SANDBOX NODE", price: "$0", desc: "Perfect for testing custom modular systems locally.", color: "bg-white", btnBg: "bg-pink-300", features: ["1 Active Compute Node", "5,000 Inbound Reqs/Sec", "Basic Console Logs"] },
                        { title: "EDGE OPERATOR", price: "$49", desc: "Recommended for growing services requiring low latency.", color: "bg-yellow-100", btnBg: "bg-purple-400", features: ["8 Active Compute Nodes", "50,000 Inbound Reqs/Sec", "Docker Export Bundles", "24/7 Monospace Support"] },
                        { title: "QUANTUM SHIELD", price: "$299", desc: "Dedicated bare-metal instances with premium routes.", color: "bg-purple-200", btnBg: "bg-cyan-300", features: ["Unlimited Edge Clusters", "Sub-millisecond Latencies", "Custom TLS Load Balancer", "Dedicated Support Advisor"] }
                    ].map((tier, i) => (
                        <div key={i} className={`border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative flex flex-col justify-between ${tier.color}`}>
                            {i === 1 && (
                                <div className="absolute top-[-16px] right-[16px] border-2 border-black bg-pink-400 text-black font-black text-xs px-2 py-0.5 uppercase tracking-tighter rotate-[3deg]">
                                    RECOMMENDED
                                </div>
                            )}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black uppercase">{tier.title}</h3>
                                <div className="text-5xl font-black mt-2">
                                    {tier.price}
                                    <span className="text-xs font-bold text-slate-500"> / MONTH</span>
                                </div>
                                <p className="text-xs font-bold text-slate-600 leading-relaxed">{tier.desc}</p>
                                <div className="h-0.5 bg-black w-full my-4" />
                                <ul className="space-y-2 text-xs font-bold">
                                    {tier.features.map((feat, j) => (
                                        <li key={j} className="flex items-center gap-2">
                                            <span className="bg-white border-2 border-black px-1 text-[8px] font-black">✔</span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button className={`border-4 border-black mt-8 text-black font-black hover:opacity-90 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${tier.btnBg}`}>
                                SPARK ENGINE &rarr;
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Collapsible FAQ Accordion */}
            <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6">
                <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-4">GATEWAY SPECIFICATIONS FAQ</h3>
                <div className="space-y-4">
                    {[
                        { q: "Is this platform suitable for heavy commercial API endpoints?", a: "Affirmative. RAW_NODE operates on a serverless micro-VM hypervisor framework that spins up isolated instances in under 12 milliseconds to counter spikes gracefully." },
                        { q: "Can we export our configured modules into Docker files?", a: "Yes. All edge routing rules, static caching, and database schemas compile cleanly into standardized Docker configs inside the dashboard." },
                        { q: "How are security barriers handled?", a: "Each instance executes inside a dedicated sandbox kernel. If a process attempts an illegal memory breach, the micro-VM is automatically discarded." }
                    ].map((faq, i) => (
                        <div key={i} className="border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                            <div
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="bg-pink-100 p-4 border-b-2 border-black font-black flex justify-between items-center cursor-pointer select-none hover:bg-pink-200"
                            >
                                <span className="text-sm uppercase">{faq.q}</span>
                                <span className="text-lg font-black">{activeFaq === i ? "[-]" : "[+]"}</span>
                            </div>
                            {activeFaq === i && (
                                <div className="p-4 bg-white text-xs font-bold leading-relaxed text-slate-800 border-t border-black">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { quote: "RAW_NODE cut our cloud cluster expenditures by exactly 42%. We threw away our complex Kubernetes controllers and never looked back.", author: "LENA VOST, DEVOPS DIRECT", rotate: "rotate-[-1deg]" },
                    { quote: "High contrast UI, raw configurations, sub-millisecond route timings. Absolute clarity in a crowded ecosystem of bloated dashboards.", author: "KAI SHIN, LEAD DEV", rotate: "rotate-[1deg]" }
                ].map((item, i) => (
                    <div key={i} className={`border-4 border-black p-6 bg-emerald-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between ${item.rotate}`}>
                        <p className="text-sm font-black italic">&ldquo;{item.quote}&rdquo;</p>
                        <div className="text-xs font-black uppercase text-slate-600 mt-4 tracking-tighter">
                            &mdash; {item.author}
                        </div>
                    </div>
                ))}
            </div>

            {/* Newsletter CTA Block */}
            <div className="border-4 border-black bg-cyan-400 p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                <h2 className="text-4xl font-black mb-2 uppercase">JOIN THE RAW MANIFESTO</h2>
                <p className="text-sm font-bold mb-6">Drop your gateway email below to receive raw assets, speed digests, and architecture logs.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Input className="border-4 border-black h-16 text-lg font-bold placeholder:text-black/40 bg-white rounded-none" placeholder="DEV_GATEWAY@DOMAIN.COM" />
                    <Button className="border-4 border-black bg-black text-white hover:bg-slate-800 font-black h-16 px-10 text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] rounded-none">
                        SUBSCRIBE MATRIX
                    </Button>
                </div>
            </div>

            {/* Footer */}
            <div className="border-4 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
                <div className="space-y-4">
                    <span className="font-black text-lg bg-pink-400 border-2 border-black px-2 py-0.5 uppercase tracking-tighter rotate-[-3deg] inline-block">
                        RAW_NODE
                    </span>
                    <p className="font-bold text-slate-500">Unapologetic bare metal cloud architecture.</p>
                </div>
                {[
                    { title: "SYSTEMS", links: ["COMPUTE GATEWAY", "CLUSTER STACK", "TLS ROUTER"] },
                    { title: "DOCS", links: ["MAN MANIFESTO", "CONFIG TEMPLATES", "TELEMETRY API"] },
                    { title: "LEGAL", links: ["COMPLIANCE INDEX", "TERMS PROTOCOL", "DECAY POLICY"] }
                ].map((col, i) => (
                    <div key={i} className="space-y-3 font-bold">
                        <div className="font-black text-sm uppercase text-slate-400">{col.title}</div>
                        <ul className="space-y-1">
                            {col.links.map((link, j) => (
                                <li key={j} className="hover:underline cursor-pointer uppercase">{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 2. Minimalist Clean Preview
// ==========================================
function MinimalistCleanPreview() {
    const [projectType, setProjectType] = useState<"design" | "identity" | "blueprint">("design");
    const [clientName, setClientName] = useState("");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const getMockSLA = () => {
        const client = clientName.trim() || "VALUED CLIENT";
        switch (projectType) {
            case "design":
                return `AETHEL CONTRACT REFERENCE: ATH-DSN-2026\nPREPARED FOR: ${client.toUpperCase()}\n\n01 / Structural layout detailing positive and negative grid structures. High-contrast typography hierarchy, with responsive desktop and mobile parameters fully documented. Deliverable within 14 calendar days.`;
            case "identity":
                return `AETHEL CONTRACT REFERENCE: ATH-IDN-2026\nPREPARED FOR: ${client.toUpperCase()}\n\n02 / Absolute brand identity coordinates. Curated HSL color palette vectors, dynamic typography files, custom logomarks, and premium stationery layouts. Deliverable within 21 calendar days.`;
            case "blueprint":
                return `AETHEL CONTRACT REFERENCE: ATH-BLU-2026\nPREPARED FOR: ${client.toUpperCase()}\n\n03 / Architectural cost metrics compilation. Outline grids, structured engineering models coordination, and detailed material estimations schedules. Deliverable within 30 calendar days.`;
        }
    };

    return (
        <div className="space-y-24 p-12 bg-white text-zinc-900 font-sans tracking-tight selection:bg-zinc-100 selection:text-black">
            {/* Elegant Header / Navbar */}
            <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-zinc-100 gap-4">
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-light tracking-[0.3em] text-zinc-950 font-serif">AETHEL.</span>
                    <Badge className="bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-600 rounded-none text-[9px] tracking-widest px-2 py-0.5">STUDIO COMPILER</Badge>
                </div>
                <div className="flex gap-10 text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
                    <span className="hover:text-zinc-950 cursor-pointer">Works</span>
                    <span className="hover:text-zinc-950 cursor-pointer">Studio</span>
                    <span className="hover:text-zinc-950 cursor-pointer">Contact</span>
                </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-4xl py-12 space-y-8">
                <h1 className="text-7xl font-extralight tracking-tight leading-[1.05] text-zinc-950">
                    Designing timeless interfaces with <span className="font-light italic text-zinc-600 font-slate-600">exquisite simplicity</span>.
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                    We strip away the noise to uncover the core value. A balanced aesthetic where negative space provides focus and premium calm.
                </p>
                <div className="flex gap-6 pt-4">
                    <Button className="rounded-none bg-zinc-950 text-white hover:bg-zinc-800 px-8 py-6 h-auto tracking-widest uppercase text-xs font-bold transition-all">
                        Selected Works
                    </Button>
                    <Button variant="outline" className="rounded-none border-zinc-200 text-zinc-800 hover:bg-zinc-50 px-8 py-6 h-auto tracking-widest uppercase text-xs font-bold transition-all">
                        Read Story
                    </Button>
                </div>
            </div>

            {/* Live SLA Draftsman Sandbox */}
            <div className="border border-zinc-100 p-8 space-y-6">
                <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 block uppercase mb-1">Interactive Sandbox</span>
                    <h3 className="text-2xl font-light tracking-tight text-zinc-950 font-serif">SLA Blueprint Draftsman</h3>
                    <p className="text-sm text-zinc-400 font-light mt-1">Configure project variables to auto-generate a quiet structural architecture contract.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Client Identifier</label>
                            <Input 
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                className="rounded-none border-zinc-200 focus:border-zinc-950 bg-white placeholder:text-zinc-300"
                                placeholder="Enter Client Corporate Name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Project Category</label>
                            <div className="grid grid-cols-3 gap-2">
                                {(["design", "identity", "blueprint"] as const).map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setProjectType(type)}
                                        className={`py-3 text-[10px] tracking-widest uppercase font-bold border transition-all ${
                                            projectType === type 
                                                ? "bg-zinc-950 text-white border-zinc-950" 
                                                : "bg-white text-zinc-400 border-zinc-200 hover:text-zinc-950 hover:border-zinc-950"
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50/50 p-6 border border-zinc-100 flex flex-col justify-between font-mono text-xs text-zinc-600 leading-relaxed min-h-[200px]">
                        <pre className="whitespace-pre-wrap font-sans text-xs text-zinc-600">{getMockSLA()}</pre>
                        <div className="text-[10px] text-zinc-400 tracking-widest uppercase mt-4 text-right">
                            Draft coordinates verified
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Editorial Pricing Columns */}
            <div className="space-y-12">
                <div className="text-center space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">Value Spectrum</span>
                    <h2 className="text-4xl font-light text-zinc-950 font-serif tracking-tight">Predictable Layout Investments</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Standard Blueprint", price: "$1,800", desc: "For single-product platforms seeking immediate clarity.", features: ["Single Core Page Layout", "Typography Coordination Index", "Custom HSL Accent Matrix", "2 Iterations Cycles"] },
                        { title: "Studio Comprehensive", price: "$4,500", desc: "Our signature plan for expanding teams.", features: ["Up to 8 Custom Page Layouts", "Comprehensive Brand Guidelines", "Interactive UI Component Registry", "Custom Asset Compilation", "5 Iterations Cycles"] },
                        { title: "Enterprise Custom", price: "$12,000", desc: "Bespoke digital architecture for global brands.", features: ["Unlimited Layout Blueprints", "Dedicated Creative Director", "High-Fidelity Interaction Prototyping", "Full React/Next.js Code Export", "Unlimited Iteration Rounds"] }
                    ].map((tier, i) => (
                        <div key={i} className="border border-zinc-100 p-8 flex flex-col justify-between hover:border-zinc-900 transition-all duration-300">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-zinc-950 tracking-tight">{tier.title}</h3>
                                    <p className="text-xs text-zinc-400 font-light mt-1">{tier.desc}</p>
                                </div>
                                <div className="text-4xl font-light text-zinc-950 tracking-tight font-serif">
                                    {tier.price}
                                    <span className="text-xs tracking-wider text-zinc-400 uppercase font-sans"> / fixed</span>
                                </div>
                                <div className="h-px bg-zinc-100 w-full" />
                                <ul className="space-y-3 text-xs text-zinc-500 font-light">
                                    {tier.features.map((feat, j) => (
                                        <li key={j} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button className="w-full mt-8 rounded-none bg-zinc-950 hover:bg-zinc-800 text-white tracking-widest text-xs uppercase font-bold py-6 h-auto transition-all">
                                Request Proposal
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Typographic FAQ Accordion */}
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">Information Registry</span>
                    <h2 className="text-3xl font-light text-zinc-950 font-serif tracking-tight">Frequently Addressed Questions</h2>
                </div>

                <div className="space-y-4 border-t border-zinc-100 pt-6">
                    {[
                        { q: "What is your philosophy on negative space?", a: "Negative space is not empty space; it is the structural scaffolding of visual focus. By removing unnecessary decoration, we guide the user's attention to key elements with zero cognitive load." },
                        { q: "Do you integrate custom typefaces?", a: "Yes. Every layout is paired with carefully selected, licensed editorial typography to reinforce the brand's quiet, premium positioning." },
                        { q: "How long does a standard blueprint transition take?", a: "A standard layout blueprint is typically prepared, configured, and compiled within 14 calendar days from initial asset receipt." }
                    ].map((faq, i) => (
                        <div key={i} className="border-b border-zinc-100 pb-4">
                            <div 
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="flex justify-between items-center py-3 cursor-pointer text-zinc-950 hover:text-zinc-600 transition-colors"
                            >
                                <span className="font-serif italic text-base">{faq.q}</span>
                                <span className="text-lg font-light text-zinc-400">{activeFaq === i ? "—" : "+"}</span>
                            </div>
                            {activeFaq === i && (
                                <div className="text-zinc-400 text-xs font-light leading-relaxed pt-2">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="max-w-2xl mx-auto py-8 border-t border-zinc-100 text-center space-y-6">
                <h2 className="text-3xl font-light text-zinc-950 font-serif">Stay in touch</h2>
                <p className="text-zinc-400 font-light text-sm max-w-md mx-auto leading-relaxed">
                    Subscribe to our occasional, quiet digest regarding minimalist design structures, paper selections, and modern typography layouts.
                </p>
                <div className="flex gap-4 max-w-md mx-auto">
                    <Input className="rounded-none border-zinc-200 focus:border-zinc-900 bg-white placeholder:text-zinc-300" placeholder="Your email address" />
                    <Button className="rounded-none bg-zinc-950 text-white hover:bg-zinc-800 px-6 uppercase text-xs tracking-widest h-auto">Subscribe</Button>
                </div>
            </div>

            {/* Dual Column Minimalist Footer */}
            <div className="border-t border-zinc-100 pt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-[10px] text-zinc-400 uppercase tracking-widest font-medium">
                <div className="space-y-4">
                    <div className="text-zinc-950 tracking-[0.3em] font-serif italic text-base">AETHEL.</div>
                    <p className="lowercase tracking-wider text-zinc-400">Timeless frameworks designed to structure visual focus.</p>
                </div>
                <div className="space-y-3">
                    <span className="text-zinc-950 font-bold block">RESOURCES</span>
                    <ul className="space-y-1">
                        <li className="hover:text-zinc-950 cursor-pointer">TYPOGRAPHY INDEX</li>
                        <li className="hover:text-zinc-950 cursor-pointer">LAYOUT MONOGRAPHS</li>
                        <li className="hover:text-zinc-950 cursor-pointer">HSL ACCENT CALCULATOR</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <span className="text-zinc-950 font-bold block">LEGALITIES</span>
                    <ul className="space-y-1">
                        <li className="hover:text-zinc-950 cursor-pointer">COMPLIANCE REGISTRY</li>
                        <li className="hover:text-zinc-950 cursor-pointer">TERMS OF COMPUTE</li>
                        <li className="hover:text-zinc-950 cursor-pointer">DECAY PRINCIPLE</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 3. Glassmorphism Preview
// ==========================================
function GlassmorphismPreview() {
    const [blurVal, setBlurVal] = useState<"blur-sm" | "blur-md" | "blur-lg" | "blur-xl">("blur-md");
    const [tintColor, setTintColor] = useState<"cyan" | "fuchsia" | "emerald" | "amber">("cyan");
    const [opacityVal, setOpacityVal] = useState<"bg-white/5" | "bg-white/10" | "bg-white/20" | "bg-white/30">("bg-white/10");
    const [borderIntensity, setBorderIntensity] = useState<"border-white/10" | "border-white/25" | "border-white/40">("border-white/25");
    const [isYearly, setIsYearly] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const blurMap = {
        "blur-sm": "4px",
        "blur-md": "12px",
        "blur-lg": "24px",
        "blur-xl": "40px"
    };

    const tintMap = {
        cyan: "rgba(34, 211, 238, 0.15)",
        fuchsia: "rgba(232, 121, 249, 0.15)",
        emerald: "rgba(52, 211, 153, 0.15)",
        amber: "rgba(251, 191, 36, 0.15)"
    };

    const faqs = [
        {
            q: "How does the Backdrop Refraction Engine achieve real-time performance?",
            a: "By leveraging CSS-hardware accelerated backdrop-filter properties coupled with heavy GPU composite layers, Aura.AI renders refractive micro-reflections with less than 2ms compositor overhead."
        },
        {
            q: "Can I customize the light refraction coefficient dynamically?",
            a: "Absolutely. Through our developer SDK, you can map real-time ambient mouse coordinates or gyroscope vectors directly to CSS variables to skew the refractive vectors on the fly."
        },
        {
            q: "Does this template render correctly on legacy browsers or mobile devices?",
            a: "We implement dynamic fallback vectors. In environments where advanced backdrop filters are unsupported, the system gracefully degrades to alpha-channel translucent color layers without breaking page layout structure."
        }
    ];

    return (
        <div className="space-y-16 p-8 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 min-h-screen text-white relative overflow-hidden font-sans select-none">
            {/* Mesh Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-cyan-500 rounded-full blur-[120px] opacity-25 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-fuchsia-500 rounded-full blur-[140px] opacity-20 pointer-events-none" />
            <div className="absolute top-10 right-10 w-[250px] h-[250px] bg-emerald-500 rounded-full blur-[100px] opacity-15 pointer-events-none" />

            {/* Mock Header */}
            <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-2xl">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                        <Sparkle className="w-5 h-5 text-cyan-300" />
                    </div>
                    <span className="font-extrabold tracking-wider bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">AURA.AI</span>
                </div>
                <div className="flex gap-6 text-sm text-white/70">
                    <span className="hover:text-white cursor-pointer transition-colors">Workspace</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Refraction FAQ</span>
                </div>
                <Button className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl px-5 transition-all shadow-md">
                    Launch Sandbox
                </Button>
            </div>

            {/* Hero Panel */}
            <div className="relative z-10 backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] space-y-6">
                <Badge className="bg-white/10 text-cyan-300 border border-white/20 backdrop-blur-md py-1 px-3">
                    🎨 SPECTRAL PRISM STYLING v3.2
                </Badge>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
                    Refract Light. <br />
                    <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200 bg-clip-text text-transparent">Render Luxury.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                    A breathtaking digital canvas using layered physics. Aura.AI generates realistic backdrop-blur vectors, dynamic refraction values, and neon ambient color fields that fit modern high-tech web dashboards.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                    <Button className="backdrop-blur-md bg-white/25 border border-white/35 hover:bg-white/35 text-white px-8 py-6 h-auto rounded-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                        Create Workspace
                    </Button>
                    <Button variant="ghost" className="backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-6 h-auto rounded-xl">
                        Explore Telemetry
                    </Button>
                </div>
            </div>

            {/* Interactive Section: Refraction Sandbox */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Controller Panel */}
                <div className="lg:col-span-5 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                    <div className="space-y-1">
                        <h3 className="font-extrabold text-xl">Prism Refractor Sandbox</h3>
                        <p className="text-xs text-white/50">Tune the CSS composite parameters live</p>
                    </div>

                    {/* Blur Control */}
                    <div className="space-y-3">
                        <label className="text-xs font-semibold text-cyan-300 uppercase tracking-wider block">Backdrop Blur Ratio ({blurMap[blurVal]})</label>
                        <div className="grid grid-cols-4 gap-2">
                            {(["blur-sm", "blur-md", "blur-lg", "blur-xl"] as const).map((b) => (
                                <button
                                    key={b}
                                    onClick={() => setBlurVal(b)}
                                    className={`py-2 px-1 text-[10px] sm:text-xs rounded-lg font-bold border transition-all ${
                                        blurVal === b
                                            ? "bg-white/20 border-white/40 text-white shadow-lg"
                                            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                                    }`}
                                >
                                    {b.replace("blur-", "").toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tint Control */}
                    <div className="space-y-3">
                        <label className="text-xs font-semibold text-fuchsia-300 uppercase tracking-wider block">Ambient Tint Color</label>
                        <div className="grid grid-cols-4 gap-2">
                            {(["cyan", "fuchsia", "emerald", "amber"] as const).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTintColor(t)}
                                    className={`py-2 px-1 text-[10px] sm:text-xs rounded-lg font-bold border transition-all capitalize ${
                                        tintColor === t
                                            ? "bg-white/20 border-white/40 text-white shadow-lg"
                                            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                                    }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Opacity Control */}
                    <div className="space-y-3">
                        <label className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block">Glass Translucency Opacity</label>
                        <div className="grid grid-cols-4 gap-2">
                            {[
                                { key: "bg-white/5", label: "5%" },
                                { key: "bg-white/10", label: "10%" },
                                { key: "bg-white/20", label: "20%" },
                                { key: "bg-white/30", label: "30%" }
                            ].map((o) => (
                                <button
                                    key={o.key}
                                    onClick={() => setOpacityVal(o.key as "bg-white/5" | "bg-white/10" | "bg-white/20" | "bg-white/30")}
                                    className={`py-2 px-1 text-[10px] sm:text-xs rounded-lg font-bold border transition-all ${
                                        opacityVal === o.key
                                            ? "bg-white/20 border-white/40 text-white shadow-lg"
                                            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                                    }`}
                                >
                                    {o.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Border Intensity Control */}
                    <div className="space-y-3">
                        <label className="text-xs font-semibold text-amber-300 uppercase tracking-wider block">Border Reflective Glare</label>
                        <div className="grid grid-cols-3 gap-2">
                            {[
                                { key: "border-white/10", label: "Low" },
                                { key: "border-white/25", label: "Medium" },
                                { key: "border-white/40", label: "High" }
                            ].map((b) => (
                                <button
                                    key={b.key}
                                    onClick={() => setBorderIntensity(b.key as "border-white/10" | "border-white/25" | "border-white/40")}
                                    className={`py-2 px-1 text-[10px] sm:text-xs rounded-lg font-bold border transition-all ${
                                        borderIntensity === b.key
                                            ? "bg-white/20 border-white/40 text-white shadow-lg"
                                            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                                    }`}
                                >
                                    {b.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Render Sandbox Output */}
                <div className="lg:col-span-7 flex flex-col justify-between backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden min-h-[400px]">
                    {/* Floating Glow Sphere that mimics live tint */}
                    <div
                        className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full blur-[60px] opacity-60 transition-all duration-500"
                        style={{ backgroundColor: tintMap[tintColor] }}
                    />
                    
                    <div className="space-y-4 relative z-10">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-cyan-300 tracking-[0.2em] uppercase">Refraction Render Pipeline</span>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Active</span>
                            </div>
                        </div>

                        {/* Live CSS Glass Card */}
                        <div className={`p-6 rounded-2xl border transition-all duration-300 shadow-2xl relative overflow-hidden backdrop-blur-${blurVal.replace("blur-", "")} ${opacityVal} ${borderIntensity}`}>
                            {/* Inner glare */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                                            <Sliders className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest text-white/90">PRISM_CARD_01</span>
                                    </div>
                                    <Badge className="bg-white/10 text-white/80 border-0 text-[10px]">CSS MODULE</Badge>
                                </div>
                                <p className="text-sm font-light text-white/80 leading-relaxed">
                                    This floating container is fully styled on the fly. Try changing sliders on the left to see the prism borders, tint shadows, and frosted calculations morph in real-time.
                                </p>
                                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-white/60">
                                    <div>Tint: <span className="text-white font-bold">{tintColor.toUpperCase()}</span></div>
                                    <div>Blur: <span className="text-white font-bold">{blurMap[blurVal]}</span></div>
                                    <div>Borders: <span className="text-white font-bold">{borderIntensity.replace("border-white/", "")}%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CSS Generated Code Inspector */}
                    <div className="mt-6 bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-xs text-cyan-200/90 space-y-1 z-10">
                        <div className="text-[10px] text-white/40 uppercase tracking-widest border-b border-white/5 pb-2 mb-2 flex justify-between">
                            <span>Computed CSS Stylesheet</span>
                            <span className="text-cyan-300 font-bold select-all cursor-pointer">COPY STYLES</span>
                        </div>
                        <div>.glass-prism-container &#123;</div>
                        <div className="pl-4 text-white/80">backdrop-filter: blur({blurMap[blurVal]});</div>
                        <div className="pl-4 text-white/80">background: rgba(255, 255, 255, {opacityVal === "bg-white/5" ? "0.05" : opacityVal === "bg-white/10" ? "0.10" : opacityVal === "bg-white/20" ? "0.20" : "0.30"});</div>
                        <div className="pl-4 text-white/80">border: 1px solid rgba(255, 255, 255, {borderIntensity === "border-white/10" ? "0.10" : borderIntensity === "border-white/25" ? "0.25" : "0.40"});</div>
                        <div className="pl-4 text-white/80">box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);</div>
                        <div className="pl-4" style={{ color: tintMap[tintColor] }}>{"/* Ambient Glow: "}{tintColor}{" filter layer */"}</div>
                        <div>&#125;</div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="relative z-10 py-8 space-y-8">
                <div className="text-center space-y-3">
                    <Badge className="bg-white/10 text-fuchsia-300 border border-white/25">PRICING TIERS</Badge>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Flexible plans, pristine refraction.</h2>
                    <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
                        Unlock high-performance GPU shaders, deep backdrop-filter layouts, and premium spectral design tokens.
                    </p>

                    {/* Toggle Button */}
                    <div className="flex items-center justify-center gap-3 pt-4">
                        <span className={`text-sm ${!isYearly ? "text-cyan-300 font-bold" : "text-white/60"}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-12 h-6 rounded-full bg-white/15 p-1 transition-all border border-white/20 flex items-center relative"
                        >
                            <div className={`w-4 h-4 rounded-full bg-white transition-all shadow-md ${isYearly ? "translate-x-6 bg-cyan-300" : ""}`} />
                        </button>
                        <span className={`text-sm ${isYearly ? "text-cyan-300 font-bold" : "text-white/60"}`}>Yearly (-20%)</span>
                    </div>
                </div>

                {/* 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-6">
                    {[
                        {
                            name: "Prism Lite",
                            price: 29,
                            desc: "Perfect for lightweight portfolios and landing structures.",
                            features: ["10k dynamic refractions/mo", "Basic frosted templates", "1px border intensity controls", "Standard color tint presets"],
                            tag: "Starter"
                        },
                        {
                            name: "Spectral Pro",
                            price: 79,
                            desc: "Engineered for high-traffic SaaS landing projects and SaaS dashboards.",
                            features: ["100k dynamic refractions/mo", "Backdrop-filter blur-xl compositing", "Unlimited color tint customization", "Premium glow mesh orbs suite", "24/7 dedicated GPU render support"],
                            tag: "Most Popular",
                            popular: true
                        },
                        {
                            name: "Aether Enterprise",
                            price: 249,
                            desc: "Custom layouts and bespoke glass compositions for global networks.",
                            features: ["Unlimited refractions & vectors", "Custom HSL refraction values", "Tailored fallback vector matrices", "Dedicated cluster telemetry nodes", "SLA contract draftsman sandbox"],
                            tag: "Elite"
                        }
                    ].map((plan, idx) => (
                        <div
                            key={idx}
                            className={`backdrop-blur-md rounded-3xl p-8 border transition-all duration-300 shadow-2xl relative flex flex-col justify-between ${
                                plan.popular
                                    ? "bg-white/15 border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.15)] scale-105 z-10"
                                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                            }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-950 font-extrabold uppercase text-[10px] tracking-widest px-3 py-1 rounded-full shadow-lg">
                                    RECOMMENDED
                                </span>
                            )}
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">{plan.tag}</span>
                                        <h3 className="text-2xl font-extrabold mt-1">{plan.name}</h3>
                                    </div>
                                </div>
                                <p className="text-xs text-white/60 leading-relaxed">{plan.desc}</p>
                                <div className="pt-2 border-t border-white/10">
                                    <span className="text-4xl font-extrabold">${isYearly ? Math.floor(plan.price * 0.8) : plan.price}</span>
                                    <span className="text-xs text-white/50 font-bold uppercase tracking-wider"> / month</span>
                                </div>

                                <ul className="space-y-3 pt-2">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex gap-2 items-start text-xs text-white/80">
                                            <CheckCircle className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button className={`w-full mt-8 rounded-xl font-bold py-5 h-auto transition-all ${
                                plan.popular
                                    ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                            }`}>
                                Select {plan.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Glass FAQs */}
            <div className="relative z-10 max-w-3xl mx-auto space-y-6 pt-8">
                <div className="text-center space-y-2">
                    <Badge className="bg-white/10 text-emerald-300 border border-white/20">SUPPORT INFRASTRUCTURE</Badge>
                    <h2 className="text-3xl font-extrabold tracking-tight">Got Questions?</h2>
                    <p className="text-xs text-white/50">Details regarding compilation, performance, and responsive fallbacks.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                            className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg"
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="font-extrabold text-sm sm:text-base text-white/90">{faq.q}</h4>
                                <ChevronRight className={`w-5 h-5 text-white/50 transition-transform ${activeFaq === idx ? "rotate-90 text-cyan-300" : ""}`} />
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Glowing Refractive Footer */}
            <div className="relative z-10 border-t border-white/10 pt-16 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-white/60">
                <div className="space-y-4 md:col-span-1">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                            <Sparkle className="w-4 h-4 text-cyan-300" />
                        </div>
                        <span className="font-extrabold text-sm tracking-wider text-white">AURA.AI</span>
                    </div>
                    <p className="text-white/40 leading-relaxed">
                        A beautiful integration of realistic backdrop blur effects, glass paneling, and glowing dropshadows.
                    </p>
                </div>
                <div className="space-y-3">
                    <span className="text-white font-extrabold tracking-wider uppercase block">Refractor SDK</span>
                    <ul className="space-y-2 text-white/50">
                        <li className="hover:text-cyan-300 cursor-pointer transition-colors">Prism Shader Pipeline</li>
                        <li className="hover:text-cyan-300 cursor-pointer transition-colors">Composite Mask Generator</li>
                        <li className="hover:text-cyan-300 cursor-pointer transition-colors">Ambient Mesh Presets</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <span className="text-white font-extrabold tracking-wider uppercase block">Telemetry</span>
                    <ul className="space-y-2 text-white/50">
                        <li className="hover:text-cyan-300 cursor-pointer transition-colors">Refraction Coeff API</li>
                        <li className="hover:text-cyan-300 cursor-pointer transition-colors">Edge Reflector Matrix</li>
                        <li className="hover:text-cyan-300 cursor-pointer transition-colors">Browser Fallback Suite</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <span className="text-white font-extrabold tracking-wider uppercase block">Compliance</span>
                    <ul className="space-y-2 text-white/50">
                        <li className="hover:text-cyan-300 cursor-pointer transition-colors">W3C Filter Registry</li>
                        <li className="hover:text-cyan-300 cursor-pointer transition-colors">Hardware Acceleration</li>
                        <li className="hover:text-cyan-300 cursor-pointer transition-colors">Intellectual Glass SLA</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 4. Cyberpunk Preview
// ==========================================
function CyberpunkPreview() {
    const [consoleLogs, setConsoleLogs] = useState<string[]>([
        "SYSTEM_INITIALIZE: Node cluster alpha booting...",
        "MEMORY_ALLOCATION: 0x8aF cache loaded successfully.",
        "NETWORK_STATUS: Connection secured over secure proxy."
    ]);
    const [coreOverclock, setCoreOverclock] = useState(1.0);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isYearly, setIsYearly] = useState(false);
    const [activeSecurityNode, setActiveSecurityNode] = useState("SHIBUYA_GATEWAY_09");

    const addLog = (action: string) => {
        const timeStamp = new Date().toLocaleTimeString();
        let newLogs: string[] = [];
        if (action === "SCAN") {
            newLogs = [
                `[${timeStamp}] &gt; sys_net_scan --target=${activeSecurityNode}`,
                `[${timeStamp}] Scanning sub-nodes... 12 ports found open.`,
                `[${timeStamp}] [ALERT] 2 dormant packets detected in sector 0xF2.`
            ];
        } else if (action === "PURGE") {
            newLogs = [
                `[${timeStamp}] &gt; cache_buffer --purge --force`,
                `[${timeStamp}] Purging 840.4 MB of neural memory...`,
                `[${timeStamp}] Buffer cleared. Refraction latency stabilized to 02ms.`
            ];
        } else if (action === "OVERCLOCK") {
            const nextOverclock = coreOverclock >= 2.0 ? 1.0 : parseFloat((coreOverclock + 0.25).toFixed(2));
            setCoreOverclock(nextOverclock);
            newLogs = [
                `[${timeStamp}] &gt; core_multiplier --factor=${nextOverclock}x`,
                `[${timeStamp}] CPU voltage scaled to ${1.2 + nextOverclock * 0.1}V.`,
                `[${timeStamp}] Core throughput is now running at ${Math.floor(nextOverclock * 100)}% speed.`
            ];
        }
        setConsoleLogs(prev => [...prev, ...newLogs].slice(-10));
    };

    const faqs = [
        {
            q: "SYS_ERR_04: How do I bypass localized grid firewalls?",
            a: "Integrate our secure Quantum Proxy tunnel block. By invoking 'net_tunnel --init', Aura's engine dynamically splits and routes packet payloads across 25 distinct nodes."
        },
        {
            q: "GRID_COMPLY: Does the network support decentralized auth keys?",
            a: "Yes. All encryption layers strictly adhere to high-grade, post-quantum asymmetric keys, ensuring that even corporate-level decryption attempts are met with zero penetration vectors."
        },
        {
            q: "NEURAL_LINK: Can I inject custom threat databases?",
            a: "Affirmative. The console accepts raw JSON streams representing dynamic threat logs. Simply execute 'threat_db --inject=url' to map global server telemetry in real-time."
        }
    ];

    return (
        <div className="space-y-16 p-8 bg-slate-950 min-h-screen text-slate-200 relative overflow-hidden font-mono select-none">
            {/* Grid Pattern BG */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none" />

            {/* HUD Status Bar */}
            <div className="relative z-10 bg-slate-900/90 border border-cyan-500/30 p-4 rounded flex flex-col sm:flex-row justify-between items-center gap-4 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-black text-cyan-400 tracking-widest uppercase text-xs sm:text-sm">SYS_NODE_ON // CORE_X</span>
                    <span className="text-[10px] text-pink-500 bg-pink-500/10 border border-pink-500/30 px-2 font-bold uppercase">{coreOverclock > 1.0 ? `OVERCLOCKED ${coreOverclock}x` : "STANDARD"}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-[10px] sm:text-xs text-slate-400 font-bold">
                    <span>IP: 192.168.84.1</span>
                    <span>OVERCLOCK: {Math.floor(coreOverclock * 100)}%</span>
                    <span>STABILITY: {coreOverclock > 1.5 ? "89.4%" : "99.8%"}</span>
                </div>
                <Badge className="bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs rounded-none">NET_READY</Badge>
            </div>

            {/* Glitch Hero Panel */}
            <div className="relative z-10 border-2 border-cyan-500 bg-slate-900/90 p-8 sm:p-12 shadow-[0_0_30px_rgba(0,255,255,0.2)] overflow-hidden">
                <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-widest select-none">
                    SECURED_GRID // CLUSTER_ALPHA
                </div>
                <div className="space-y-6">
                    <h1 className="text-4xl sm:text-7xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300 [text-shadow:0_0_20px_rgba(0,255,255,0.3)]">
                        JACK_IN // NET_GEN
                    </h1>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl border-l-2 border-pink-500 pl-4">
                        A high-octane cyberpunk interface designed to bypass corporate surveillance. Aura&apos;s Net Engine routes decentralized compute tokens, triggers network-wide log cleanups, and monitors edge telemetry metrics directly within standard terminal viewports.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Button
                            onClick={() => addLog("SCAN")}
                            className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 px-8 py-6 rounded-none font-black tracking-widest text-xs sm:text-sm shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all"
                        >
                            RUN SCAN
                        </Button>
                        <Button
                            onClick={() => addLog("OVERCLOCK")}
                            variant="outline"
                            className="border-2 border-pink-500 text-pink-400 bg-transparent hover:bg-pink-500/10 px-8 py-6 rounded-none font-black tracking-widest text-xs sm:text-sm shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all"
                        >
                            OVERCLOCK CORE ({coreOverclock}x)
                        </Button>
                    </div>
                </div>
            </div>

            {/* Interactive Terminal Sandbox Console */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Console Output */}
                <div className="lg:col-span-8 bg-black/90 border-2 border-cyan-500/30 p-6 flex flex-col justify-between min-h-[420px] shadow-2xl relative">
                    <div className="absolute top-2 right-4 text-[9px] text-cyan-400/50 uppercase tracking-widest">
                        SECURE_SHELL // UTF-8 // CONSOLE
                    </div>

                    <div className="space-y-4">
                        <div className="border-b border-cyan-500/20 pb-3 flex justify-between items-center text-xs text-cyan-400 font-bold uppercase">
                            <span className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                                Interactive Grid Terminal Logs
                            </span>
                            <span className="text-[10px] text-slate-500">Node: {activeSecurityNode}</span>
                        </div>

                        {/* Logs Container */}
                        <div className="space-y-1.5 font-mono text-[11px] sm:text-xs text-emerald-400 overflow-y-auto max-h-[250px] pr-2">
                            {consoleLogs.map((log, i) => (
                                <div key={i} className="leading-relaxed">
                                    {log.startsWith("[") ? (
                                        <span dangerouslySetInnerHTML={{ __html: log }} />
                                    ) : (
                                        <span>&gt; {log}</span>
                                    )}
                                </div>
                            ))}
                            <div className="w-full flex items-center gap-1.5 text-white/50 text-[10px] sm:text-[11px] pt-1">
                                <span className="animate-pulse">_</span>
                                <span>Awaiting diagnostic commands...</span>
                            </div>
                        </div>
                    </div>

                    {/* Controller Action buttons inside Sandbox */}
                    <div className="border-t border-cyan-500/20 pt-4 mt-4 flex flex-wrap gap-3">
                        <button
                            onClick={() => addLog("PURGE")}
                            className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 text-xs transition-all tracking-wider uppercase"
                        >
                            Force Buffer Purge
                        </button>
                        <div className="flex items-center gap-2 text-xs bg-slate-900 border border-slate-800 px-3">
                            <span className="text-slate-400">Node Target:</span>
                            <select
                                value={activeSecurityNode}
                                onChange={(e) => setActiveSecurityNode(e.target.value)}
                                className="bg-transparent border-0 text-cyan-300 font-bold uppercase focus:ring-0 cursor-pointer"
                            >
                                <option className="bg-slate-950 text-slate-200" value="SHIBUYA_GATEWAY_09">SHIBUYA 09</option>
                                <option className="bg-slate-950 text-slate-200" value="NEO_SEOUL_GRID">NEO SEOUL</option>
                                <option className="bg-slate-950 text-slate-200" value="DETROIT_SECTOR_4">DETROIT S4</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Telemetry and System Widgets */}
                <div className="lg:col-span-4 grid grid-cols-1 gap-4">
                    {[
                        { title: "DECENTRALIZED NODE CORE", value: `${Math.floor(92 * coreOverclock)}%`, desc: "Total dynamic thread load allocation.", color: "text-cyan-400 border-cyan-500/30 bg-slate-900/60" },
                        { title: "SURVEILLANCE BYPASS BYTES", value: `${(1.24 * coreOverclock).toFixed(2)} GB/s`, desc: "Dynamic quantum tunneling speed.", color: "text-pink-400 border-pink-500/30 bg-slate-900/60" },
                        { title: "NEURAL BUFFER ALLOCATIONS", value: "100%", desc: "Dormant buffer sectors wiped clean.", color: "text-yellow-400 border-yellow-500/30 bg-slate-900/60" }
                    ].map((widget, i) => (
                        <div key={i} className={`border-2 ${widget.color} p-5 space-y-3`}>
                            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                                <span className="font-bold text-[10px] tracking-wider uppercase text-slate-400">{widget.title}</span>
                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                            <div className="text-3xl font-black">{widget.value}</div>
                            <p className="text-[10px] text-slate-500 leading-normal">{widget.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Matrix Cyber Pricing */}
            <div className="relative z-10 space-y-8 py-4">
                <div className="text-center space-y-3">
                    <Badge className="bg-slate-900 text-cyan-400 border border-cyan-500/40">MATRIX_PRICING_TABLE</Badge>
                    <h2 className="text-3xl sm:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300">Decentralized pricing modules.</h2>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
                        Choose your clearance level. All packages support dynamic thread allocation and automated log purges.
                    </p>

                    <div className="flex items-center justify-center gap-3 pt-3">
                        <span className={`text-xs ${!isYearly ? "text-cyan-400 font-bold" : "text-slate-500"}`}>CYCLE_MONTHLY</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-12 h-6 bg-slate-900 p-1 border-2 border-cyan-500/30 flex items-center relative transition-all"
                        >
                            <div className={`w-3 h-3 bg-cyan-400 transition-all ${isYearly ? "translate-x-6" : ""}`} />
                        </button>
                        <span className={`text-xs ${isYearly ? "text-cyan-400 font-bold" : "text-slate-500"}`}>CYCLE_ANNUAL (20% CUT)</span>
                    </div>
                </div>

                {/* 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-6">
                    {[
                        {
                            name: "CYBER_RUNNER",
                            price: 19,
                            clearance: "CLEARANCE_01",
                            features: ["5 dynamic proxy tunnels", "Standard neural buffer scan", "1 encryption bypass key", "100GB matrices bandwidth"],
                            accent: "cyan"
                        },
                        {
                            name: "NET_OPERATOR",
                            price: 49,
                            clearance: "CLEARANCE_02",
                            features: ["25 dynamic proxy tunnels", "Automated neural buffer purge", "5 encryption bypass keys", "1TB matrices bandwidth", "Overclock cores capability up to 2.5x"],
                            accent: "pink",
                            popular: true
                        },
                        {
                            name: "GRID_OVERLORD",
                            price: 189,
                            clearance: "CLEARANCE_03",
                            features: ["Unlimited proxy tunnels", "Live constant grid overrides", "Infinite encryption bypass keys", "10TB matrices bandwidth", "Dedicated quantum fallback node"],
                            accent: "yellow"
                        }
                    ].map((plan, idx) => {
                        const isPink = plan.accent === "pink";
                        const isYellow = plan.accent === "yellow";
                        const borderStyle = isPink ? "border-pink-500" : isYellow ? "border-yellow-500" : "border-cyan-500";
                        const textStyle = isPink ? "text-pink-400" : isYellow ? "text-yellow-400" : "text-cyan-400";
                        const bgBtn = isPink ? "bg-pink-500 hover:bg-pink-400" : isYellow ? "bg-yellow-500 hover:bg-yellow-400" : "bg-cyan-500 hover:bg-cyan-400";

                        return (
                            <div
                                key={idx}
                                className={`bg-slate-900 border-2 ${borderStyle} p-8 flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all ${
                                    plan.popular ? "scale-105 z-10 shadow-[0_0_30px_rgba(236,72,153,0.15)]" : "hover:bg-slate-900/80"
                                }`}
                            >
                                <div className="space-y-6">
                                    <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                                        <div>
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${textStyle}`}>{plan.clearance}</span>
                                            <h3 className="text-2xl font-black tracking-tight mt-1">{plan.name}</h3>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <span className="text-4xl font-black">${isYearly ? Math.floor(plan.price * 0.8) : plan.price}</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase"> / cycle</span>
                                    </div>

                                    <ul className="space-y-3.5 pt-2">
                                        {plan.features.map((feat, fIdx) => (
                                            <li key={fIdx} className="flex gap-2 items-start text-xs text-slate-300">
                                                <span className={`font-bold ${textStyle}`}>[+]</span>
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button className={`w-full mt-8 rounded-none font-black tracking-widest py-5 h-auto text-slate-950 transition-all ${bgBtn}`}>
                                    ACTIVATE_CLEARANCE
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Terminal Style FAQs */}
            <div className="relative z-10 max-w-3xl mx-auto space-y-6 pt-8">
                <div className="text-center space-y-2">
                    <Badge className="bg-slate-900 text-pink-400 border border-pink-500/30">GRID_SUPPORT_MANUAL</Badge>
                    <h2 className="text-3xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Threat manual lookup</h2>
                    <p className="text-xs text-slate-500">Standard operational guidelines regarding localized bypass nodes.</p>
                </div>

                <div className="space-y-4 font-mono">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                            className="bg-slate-900 border border-cyan-500/20 hover:border-cyan-500/40 p-6 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="font-bold text-xs sm:text-sm text-cyan-400 uppercase tracking-wider">{faq.q}</h4>
                                <span className="text-cyan-400 font-bold">{activeFaq === idx ? "[-]" : "[+]"}</span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-cyan-500/10 pt-4">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Terminal Index Footer */}
            <div className="relative z-10 border-t border-cyan-500/30 pt-16 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-[11px] text-slate-400">
                <div className="space-y-4 md:col-span-1">
                    <div className="font-black text-cyan-400 tracking-widest">
                        {"// CORE_GATEWAY_NODE"}
                    </div>
                    <p className="leading-relaxed text-slate-500">
                        Secure edge routing protocol suite operating over decentralized compute nodes. Null-route surveillance attempts.
                    </p>
                </div>
                <div className="space-y-3">
                    <span className="text-pink-400 font-bold block">{"// THREAD_SHELL"}</span>
                    <ul className="space-y-2">
                        <li className="hover:text-cyan-400 cursor-pointer">/api/tunnel/initialize</li>
                        <li className="hover:text-cyan-400 cursor-pointer">/api/matrix/overclock</li>
                        <li className="hover:text-cyan-400 cursor-pointer">/api/log/wiped_cache</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <span className="text-pink-400 font-bold block">{"// DIRECTORIES"}</span>
                    <ul className="space-y-2">
                        <li className="hover:text-cyan-400 cursor-pointer">/home/runner/clearance_01</li>
                        <li className="hover:text-cyan-400 cursor-pointer">/home/operator/matrix_key</li>
                        <li className="hover:text-cyan-400 cursor-pointer">/home/overlord/sla_draft</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <span className="text-pink-400 font-bold block">{"// LEGAL_COMPLIANCE"}</span>
                    <ul className="space-y-2">
                        <li className="hover:text-cyan-400 cursor-pointer">Null-Surveillance SLA</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Asymmetric Keys Registry</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Post-Quantum Agreement</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 5. Dark Luxury Preview
// ==========================================
function DarkLuxuryPreview() {
    const [activeVillaIndex, setActiveVillaIndex] = useState(0);
    const [activeAtmosphere, setActiveAtmosphere] = useState<"Dawn" | "Noon" | "Twilight">("Twilight");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [isYearly, setIsYearly] = useState(false);

    const villas = [
        {
            title: "VILLA D'OR",
            location: "Oaxaca, Mexico",
            space: "4,200 SQ FT",
            valuation: "$4,250,000",
            desc: "A breathtaking brutalist retreat nestled in the dense Mexican forest, blending raw obsidian textures with hand-gilded gold accents. Features absolute high-ceiling ventilation.",
            highlights: ["Hand-carved basalt pools", "Gilded concrete partitions", "Private heliport access"]
        },
        {
            title: "OBSIDIAN HULL",
            location: "St. Tropez, France",
            space: "8,500 SQ FT",
            valuation: "$9,800,000",
            desc: "A cantilevered masterpiece hanging high above the French Riviera. Obsidian Hull incorporates black volcanic glass facades and brass trims that reflect sunset hues beautifully.",
            highlights: ["Volcanic glass infinity pool", "Bespoke brass atelier wing", "Subterranean wine sanctuary"]
        },
        {
            title: "ZEPHYR TOWER",
            location: "Kyoto, Japan",
            space: "3,100 SQ FT",
            valuation: "$3,600,000",
            desc: "A quiet, vertical estate echoing classical Kyoto zen structures. Built with charred cypress columns, gold-leaf ceiling panels, and quiet acoustic sliding timber screens.",
            highlights: ["Charred cedar tea lounge", "Gilded stone courtyard", "Dynamic acoustic shielding"]
        }
    ];

    const atmosphereMap = {
        Dawn: "from-amber-950/20 via-zinc-950 to-zinc-950 border-amber-500/20",
        Noon: "from-amber-600/5 via-zinc-950 to-zinc-950 border-amber-400/10",
        Twilight: "from-purple-950/20 via-zinc-950 to-zinc-950 border-purple-500/10"
    };

    const faqs = [
        {
            q: "How are fractional invitation suites structured?",
            a: "Aurelius operates on a closed ledger system. Members gain fractional allocation certificates mapped to the physical estate via legal compliance deeds, offering pristine yield values."
        },
        {
            q: "Can I inspect the property blueprints beforehand?",
            a: "ブループリント (Blueprints) and interactive structural floor plans are strictly reserved for verified members. You may request custom layouts by booking a private suite consultation."
        },
        {
            q: "Are the atmospheric lighting systems automated?",
            a: "Yes. Every estate is equipped with bespoke lighting matrices that adapt to localized solar positions, blending structural copper highlights with quiet ambient illumination."
        }
    ];

    return (
        <div className="space-y-16 p-8 bg-zinc-950 min-h-screen text-stone-100 font-serif relative overflow-hidden select-none">
            {/* Obsidian Mesh Glow */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-amber-600/5 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-yellow-600/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Premium Header */}
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 py-4 border-b border-amber-600/10">
                <span className="text-2xl tracking-[0.25em] uppercase font-light text-stone-200">AURELIUS</span>
                <div className="flex gap-6 sm:gap-10 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-sans text-stone-400">
                    <span className="hover:text-amber-500 cursor-pointer transition-colors">Residences</span>
                    <span className="hover:text-amber-500 cursor-pointer transition-colors">Artisans</span>
                    <span className="hover:text-amber-500 cursor-pointer transition-colors">Chronicle</span>
                </div>
                <Button className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-zinc-950 rounded-none px-6 tracking-widest text-xs uppercase font-sans font-bold shadow-2xl transition-all">
                    Private Suite
                </Button>
            </div>

            {/* Luxury Hero */}
            <div className="relative z-10 max-w-4xl space-y-8 py-6">
                <div className="flex items-center gap-3 font-sans">
                    <div className="h-px w-12 bg-amber-600/40" />
                    <span className="text-amber-600/80 text-[10px] sm:text-xs tracking-[0.3em] uppercase">Elegance Defined</span>
                </div>
                <h1 className="text-4xl sm:text-7xl font-light tracking-tight leading-[1.05] bg-gradient-to-br from-stone-100 via-stone-300 to-amber-600/60 bg-clip-text text-transparent">
                    Luxury Crafted For <br />
                    <span className="font-semibold italic">The Discerning Few.</span>
                </h1>
                <p className="text-base sm:text-lg font-light text-stone-400 max-w-2xl leading-relaxed font-sans">
                    An exquisite design language utilizing deep obsidian tones, gold accent lines, fine serif typography, and premium layouts for high-end properties.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 font-sans">
                    <Button className="bg-[#B45309] hover:bg-[#D97706] text-white rounded-none px-10 py-6 h-auto tracking-widest text-xs uppercase font-bold shadow-2xl transition-all">
                        Request Invitation
                    </Button>
                    <Button variant="outline" className="border-amber-600/30 text-amber-600 hover:bg-amber-600/5 rounded-none px-10 py-6 h-auto tracking-widest text-xs uppercase font-bold transition-all">
                        Browse Atelier
                    </Button>
                </div>
            </div>

            {/* Interactive Showcase Widget: Private Atelier Curator */}
            <div className="relative z-10 border border-amber-600/10 bg-zinc-900/40 p-6 sm:p-8 rounded-none space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-amber-600/10 pb-6">
                    <div>
                        <span className="text-[10px] font-sans font-bold text-amber-600 tracking-[0.2em] uppercase">Resident Inspection Suite</span>
                        <h3 className="text-2xl sm:text-3xl font-light tracking-tight mt-1 text-stone-200">Interactive Curator Portfolio</h3>
                    </div>
                    {/* Atmosphere Selector */}
                    <div className="flex items-center gap-2 font-sans text-xs">
                        <span className="text-stone-500 uppercase tracking-widest">Ambient Light:</span>
                        <div className="flex border border-amber-600/20 p-1">
                            {(["Dawn", "Noon", "Twilight"] as const).map((a) => (
                                <button
                                    key={a}
                                    onClick={() => setActiveAtmosphere(a)}
                                    className={`px-3 py-1 text-[10px] uppercase font-bold tracking-wider transition-all ${
                                        activeAtmosphere === a
                                            ? "bg-amber-600 text-zinc-950 font-black"
                                            : "text-stone-400 hover:text-stone-200"
                                    }`}
                                >
                                    {a}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left: Property Selector list */}
                    <div className="lg:col-span-4 space-y-3 font-sans">
                        {villas.map((v, i) => (
                            <div
                                key={i}
                                onClick={() => setActiveVillaIndex(i)}
                                className={`p-4 border cursor-pointer transition-all duration-300 flex justify-between items-center ${
                                    activeVillaIndex === i
                                        ? "bg-zinc-900 border-amber-500 shadow-xl"
                                        : "bg-zinc-950/30 border-amber-600/10 hover:border-amber-600/30"
                                }`}
                            >
                                <div>
                                    <span className="text-[9px] text-amber-600 font-bold block">PROJECT 0{i + 1}</span>
                                    <span className="font-serif text-lg text-stone-200 font-medium block">{v.title}</span>
                                </div>
                                <span className="text-xs text-stone-500 uppercase tracking-widest">{v.location.split(",")[0]}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right: Atmosphere Frame */}
                    <div className={`lg:col-span-8 border bg-gradient-to-b p-6 sm:p-8 flex flex-col justify-between min-h-[350px] transition-all duration-700 ${atmosphereMap[activeAtmosphere]}`}>
                        <div className="space-y-4">
                            <div className="flex justify-between items-start font-sans text-xs tracking-widest text-amber-600 font-bold border-b border-amber-600/10 pb-4">
                                <span>ATELIER: {villas[activeVillaIndex].location.toUpperCase()}</span>
                                <Badge className="rounded-none bg-amber-600/10 text-amber-500 border border-amber-500/20 text-[9px]">
                                    {activeAtmosphere.toUpperCase()} PREVIEW
                                </Badge>
                            </div>
                            
                            <h3 className="text-4xl font-light tracking-tight">{villas[activeVillaIndex].title}</h3>
                            <p className="text-sm font-sans font-light text-stone-300 leading-relaxed max-w-xl">
                                {villas[activeVillaIndex].desc}
                            </p>

                            {/* highlights list */}
                            <ul className="space-y-2 pt-2 font-sans text-xs text-amber-600/80">
                                {villas[activeVillaIndex].highlights.map((h, i) => (
                                    <li key={i} className="flex gap-2 items-center">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rotate-45" />
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specs row */}
                        <div className="pt-6 mt-6 border-t border-amber-600/10 grid grid-cols-3 gap-4 font-sans text-xs text-stone-400">
                            <div>
                                <span className="text-[10px] text-stone-500 block uppercase tracking-wider">Clearance</span>
                                <span className="text-stone-200 font-bold block mt-0.5">EXCLUSIVE</span>
                            </div>
                            <div>
                                <span className="text-[10px] text-stone-500 block uppercase tracking-wider">Dimension</span>
                                <span className="text-stone-200 font-bold block mt-0.5">{villas[activeVillaIndex].space}</span>
                            </div>
                            <div>
                                <span className="text-[10px] text-stone-500 block uppercase tracking-wider">Valuation Est.</span>
                                <span className="text-amber-500 font-bold block mt-0.5">{villas[activeVillaIndex].valuation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Obsidian Pricing */}
            <div className="relative z-10 space-y-8 py-4">
                <div className="text-center space-y-3">
                    <Badge className="bg-zinc-900 text-amber-500 border border-amber-500/20 rounded-none px-4 py-1.5 font-sans">PORTFOLIO cleared</Badge>
                    <h2 className="text-3xl sm:text-5xl font-light tracking-tight">Fractional Residence Allocations</h2>
                    <p className="text-xs sm:text-sm text-stone-500 max-w-xl mx-auto font-sans">
                        Join closed syndicate ledgers and acquire asymmetric deeds with fully secure fallback matrices.
                    </p>

                    <div className="flex items-center justify-center gap-3 pt-3 font-sans">
                        <span className={`text-xs ${!isYearly ? "text-amber-500 font-bold" : "text-stone-500"}`}>BILLING_MONTHLY</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-12 h-6 bg-zinc-900 border border-amber-600/25 p-1 flex items-center relative transition-all"
                        >
                            <div className={`w-3.5 h-3.5 bg-amber-500 transition-all ${isYearly ? "translate-x-5" : ""}`} />
                        </button>
                        <span className={`text-xs ${isYearly ? "text-amber-500 font-bold" : "text-stone-500"}`}>BILLING_ANNUAL (-20%)</span>
                    </div>
                </div>

                {/* 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-6 font-sans">
                    {[
                        {
                            name: "Aurelius Atelier",
                            price: 1500,
                            desc: "Perfect for single residence allocations and quiet advisory.",
                            features: ["1 private villa structural inspect/mo", "Direct desk concierge link", "Standard legal deed fallback", "Atelier mock layout access"],
                            tag: "Private"
                        },
                        {
                            name: "Aurelius Sovereign",
                            price: 4500,
                            desc: "Designed for premium collectors expanding fractional Basalt portfolios.",
                            features: ["3 private villa inspects/mo", "Absolute priority syndicate entries", "24/7 dedicated advisor desk", "Advanced HSL lighting controllers", "Custom blueprints drafting sandbox"],
                            tag: "Sovereign Elite",
                            popular: true
                        },
                        {
                            name: "Aurelius Syndicate",
                            price: 12000,
                            desc: "Closed ledger allocations offering high yield volcanic properties.",
                            features: ["Unlimited property ledger scans", "Full legal fractional allocations", "Subterranean vault registry access", "Dedicated hardware secure link", "1-on-1 on-site architect preview"],
                            tag: "Consortium"
                        }
                    ].map((plan, idx) => (
                        <div
                            key={idx}
                            className={`bg-zinc-900/60 border rounded-none p-8 flex flex-col justify-between shadow-2xl relative ${
                                plan.popular
                                    ? "border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.1)] scale-105 z-10"
                                    : "border-amber-600/10 hover:border-amber-600/30 hover:bg-zinc-900/80"
                            }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-zinc-950 font-black tracking-widest text-[9px] px-4 py-0.5 uppercase">
                                    RECOMMENDED
                                </span>
                            )}
                            <div className="space-y-6">
                                <div className="flex justify-between items-start border-b border-amber-600/10 pb-4">
                                    <div>
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500">{plan.tag}</span>
                                        <h3 className="text-xl font-serif tracking-tight mt-1 text-stone-200">{plan.name}</h3>
                                    </div>
                                </div>
                                <p className="text-xs text-stone-400 leading-relaxed font-light">{plan.desc}</p>
                                <div className="pt-2">
                                    <span className="text-3xl font-light text-stone-100">${isYearly ? Math.floor(plan.price * 0.8) : plan.price}</span>
                                    <span className="text-[10px] text-stone-500 font-bold uppercase"> / month</span>
                                </div>

                                <ul className="space-y-3.5 pt-2">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex gap-2 items-start text-xs text-stone-300 font-light">
                                            <span className="text-amber-500 font-bold">[+]</span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button className={`w-full mt-8 rounded-none font-bold tracking-widest py-5 h-auto text-xs uppercase transition-all ${
                                plan.popular
                                    ? "bg-amber-600 text-zinc-950 hover:bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                                    : "bg-transparent text-stone-300 hover:bg-stone-800 border border-stone-700"
                            }`}>
                                Request Suite Allocation
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Classical Premium FAQs */}
            <div className="relative z-10 max-w-3xl mx-auto space-y-6 pt-8 font-sans">
                <div className="text-center space-y-2">
                    <Badge className="bg-zinc-900 text-amber-600 border border-amber-600/20">ATELIER COMPLIANCE GUIDE</Badge>
                    <h2 className="text-3xl font-serif font-light tracking-tight text-stone-200">Exclusive Operations</h2>
                    <p className="text-xs text-stone-500">Details regarding ledger transfers, floor plan specifications, and private suites.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                            className="bg-zinc-900/30 border border-amber-600/10 hover:border-amber-600/30 p-6 transition-all duration-300 cursor-pointer shadow-lg"
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="font-serif font-medium text-sm sm:text-base text-stone-200 tracking-wide">{faq.q}</h4>
                                <span className="text-amber-500 font-bold text-xs">{activeFaq === idx ? "CLOSE" : "EXPAND"}</span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed border-t border-amber-600/10 pt-4 font-light">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* High-End Club Branding Footer */}
            <div className="relative z-10 border-t border-amber-600/10 pt-16 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-[11px] font-sans text-stone-400">
                <div className="space-y-4 md:col-span-1">
                    <div className="text-base tracking-[0.2em] font-serif uppercase text-stone-200">
                        AURELIUS
                    </div>
                    <p className="leading-relaxed text-stone-500 font-light">
                        Premium closed-ledger portfolio allocating fractional volcanic structures and brutalist assets.
                    </p>
                </div>
                <div className="space-y-3">
                    <span className="text-amber-500 font-bold block uppercase tracking-wider">Residences</span>
                    <ul className="space-y-2 text-stone-500">
                        <li className="hover:text-stone-200 cursor-pointer transition-colors">{"Villa D'Or (Oaxaca)"}</li>
                        <li className="hover:text-stone-200 cursor-pointer transition-colors">Obsidian Hull (Riviera)</li>
                        <li className="hover:text-stone-200 cursor-pointer transition-colors">Zephyr Tower (Kyoto)</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <span className="text-amber-500 font-bold block uppercase tracking-wider">Atelier Services</span>
                    <ul className="space-y-2 text-stone-500">
                        <li className="hover:text-stone-200 cursor-pointer transition-colors">Blueprints inspection</li>
                        <li className="hover:text-stone-200 cursor-pointer transition-colors">Fractional Deeds Registry</li>
                        <li className="hover:text-stone-200 cursor-pointer transition-colors">Concierge Priority Link</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <span className="text-amber-500 font-bold block uppercase tracking-wider">Syndicate Legal</span>
                    <ul className="space-y-2 text-stone-500">
                        <li className="hover:text-stone-200 cursor-pointer transition-colors">Closed Ledger SLA</li>
                        <li className="hover:text-stone-200 cursor-pointer transition-colors">Volcanic Basalt Deeds</li>
                        <li className="hover:text-stone-200 cursor-pointer transition-colors">Acoustic Shielding Compliance</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 6. Startup SaaS Preview
// ==========================================
function StartupSaaSPreview() {
    const [nodes, setNodes] = useState(3);
    const [rps, setRps] = useState(1200);
    const [isYearly, setIsYearly] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [logs, setLogs] = useState<string[]>([
        "INIT // Core system cluster online.",
        "SYS // Connected to serverless database shard-A.",
        "SYS // Edge router cache warm."
    ]);

    // Derived CPU: proportional to rps, inversely proportional to node count
    const cpu = Math.min(98, Math.max(12, Math.round(rps / (nodes * 5))));

    const triggerSpike = () => {
        const addedRps = Math.floor(Math.random() * 400) + 600;
        const newRps = rps + addedRps;
        setRps(newRps);
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        const newLog = `[${time}] TRAFFIC SPIKE: +${addedRps} req/sec -> Total: ${newRps} req/sec`;
        
        if (newRps / (nodes * 5) > 75) {
            setLogs(prev => [
                ...prev.slice(-4),
                newLog,
                `[${time}] WARNING: High CPU Load (${Math.min(98, Math.round(newRps / (nodes * 5)))}%). Scale node cluster recommended!`
            ]);
        } else {
            setLogs(prev => [...prev.slice(-4), newLog]);
        }
    };

    const addNode = () => {
        if (nodes >= 6) {
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            setLogs(prev => [...prev.slice(-4), `[${time}] FAIL: Maximum node count (6) reached for current tier.`]);
            return;
        }
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const newNodes = nodes + 1;
        setNodes(newNodes);
        setLogs(prev => [
            ...prev.slice(-4),
            `[${time}] ACTION: Scaled up cluster to ${newNodes} nodes. Rebalancing traffic...`
        ]);
    };

    const resetCluster = () => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setNodes(3);
        setRps(1200);
        setLogs([
            `[${time}] ACTION: Cluster reset to baseline.`,
            "SYS // Connected to serverless database shard-A.",
            "SYS // Edge router cache warm."
        ]);
    };

    const barHeights = [
        Math.min(100, Math.max(20, Math.round((rps * 0.7) / 30))),
        Math.min(100, Math.max(20, Math.round((rps * 0.85) / 30))),
        Math.min(100, Math.max(20, Math.round((rps * 0.95) / 30))),
        Math.min(100, Math.max(20, Math.round((rps * 1.1) / 30))),
        Math.min(100, Math.max(20, Math.round((rps * 0.9) / 30))),
        Math.min(100, Math.max(20, Math.round((rps * 1.0) / 30))),
    ];

    return (
        <div className="space-y-24 p-8 bg-zinc-50 text-slate-800 font-sans tracking-tight">
            {/* SaaS Header */}
            <div className="flex justify-between items-center py-4 bg-white px-8 rounded-2xl border border-slate-100 shadow-sm max-w-5xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                        🚀
                    </div>
                    <span className="font-extrabold text-slate-900 text-lg">Scalr.</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
                    <span className="hover:text-purple-600 cursor-pointer transition-colors">Platform</span>
                    <span className="hover:text-purple-600 cursor-pointer transition-colors">Integrations</span>
                    <span className="hover:text-purple-600 cursor-pointer transition-colors">Pricing</span>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-md hover:opacity-90 transition-opacity">
                    Get Started Free
                </Button>
            </div>

            {/* Hero Banner */}
            <div className="max-w-4xl mx-auto text-center space-y-6 py-4">
                <Badge className="mb-2 bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 px-4 py-1.5 rounded-full text-xs font-semibold">
                    ✨ Scalr Engine v4.0 is now live
                </Badge>
                <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] max-w-3xl mx-auto">
                    Scale Your Backend <br />
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Without the Server Headache.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                    Connect your database, allocate scaling node clusters, and stream global operations with zero configuration. Built for next-gen SaaS teams.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 h-auto text-lg rounded-2xl shadow-xl hover:opacity-95">
                        Start Free Trial
                    </Button>
                    <Button variant="outline" className="border-slate-200 text-slate-700 bg-white hover:bg-slate-50 px-8 py-6 h-auto text-lg rounded-2xl transition-colors">
                        Watch Live Demo
                    </Button>
                </div>
            </div>

            {/* Showcase: Simulated Dashboard and Charts */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6">
                    <div>
                        <h3 className="font-extrabold text-xl text-slate-900">Workspace Telemetry</h3>
                        <p className="text-sm text-slate-400">Simulate backend load adjustments & observe scaling reactions</p>
                    </div>
                    <Badge className={`border-0 rounded-full px-3 py-1 text-xs font-bold uppercase transition-colors ${cpu > 80 ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}>
                        {cpu > 80 ? "HIGH CPU THROTTLING" : "ALL NODES OK"}
                    </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-2 flex flex-col justify-between">
                        <div>
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Live Node Clusters</span>
                            <div className="text-4xl font-black text-slate-950 mt-1">{nodes} / 6</div>
                            <p className="text-xs text-slate-400 font-semibold mt-1">Virtual containers active</p>
                        </div>
                        <div className="flex gap-2 pt-4">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div
                                    key={num}
                                    className={`w-4 h-4 rounded-full border transition-all duration-300 ${
                                        num <= nodes
                                            ? cpu > 80
                                                ? "bg-red-500 border-red-600 animate-pulse"
                                                : "bg-emerald-500 border-emerald-600"
                                            : "bg-slate-200 border-slate-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-2">
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Transaction Throughput</span>
                        <div className="text-4xl font-black text-slate-950 mt-1">{rps.toLocaleString()} req/s</div>
                        <div className="h-12 flex items-end gap-1.5 pt-2">
                            {barHeights.map((h, i) => (
                                <div
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className="w-full bg-gradient-to-t from-purple-600 to-pink-500 rounded-t transition-all duration-500"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-2 flex flex-col justify-between">
                        <div>
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Workspace CPU Usage</span>
                            <div className="text-4xl font-black text-slate-950 mt-1">{cpu}%</div>
                            <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                                <div
                                    style={{ width: `${cpu}%` }}
                                    className={`h-full transition-all duration-500 ${cpu > 80 ? "bg-red-500" : "bg-gradient-to-r from-purple-600 to-pink-500"}`}
                                />
                            </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold italic block">
                            Target load baseline: 200 RPS per Node
                        </span>
                    </div>
                </div>

                {/* Telemetry Playground Controls */}
                <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 space-y-4">
                    <div className="flex flex-wrap gap-3">
                        <Button
                            onClick={triggerSpike}
                            className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold px-4 py-2"
                        >
                            🚀 Trigger Traffic Surge
                        </Button>
                        <Button
                            onClick={addNode}
                            disabled={nodes >= 6}
                            className="bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold px-4 py-2 disabled:opacity-50"
                        >
                            ➕ Scale Node Cluster
                        </Button>
                        <Button
                            onClick={resetCluster}
                            variant="outline"
                            className="border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-bold px-4 py-2"
                        >
                            🔄 Reset Workspace
                        </Button>
                    </div>

                    {/* Simulation Console Logs */}
                    <div className="bg-slate-950 rounded-xl p-4 font-mono text-[11px] text-emerald-400 space-y-1.5 shadow-inner overflow-hidden border border-slate-900">
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider border-b border-slate-900 pb-2 mb-2 flex justify-between">
                            <span>System Logs Console</span>
                            <span className="animate-pulse text-emerald-500">● LIVE FEED</span>
                        </div>
                        {logs.map((log, i) => (
                            <div key={i} className="truncate">
                                <span className="text-pink-500 font-bold">{">"}</span> {log}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3 Columns Pricing Grid */}
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <Badge className="bg-purple-100 text-purple-700 border-0 px-4 py-1.5 rounded-full text-xs font-semibold">PRICING PLANS</Badge>
                    <h2 className="text-4xl font-extrabold text-slate-950 tracking-tight">Flexible Scales for Brave Teams</h2>
                    <p className="text-slate-500 max-w-lg mx-auto text-base font-medium">
                        No dynamic pricing traps. Upgrade, downgrade, or cancel at any second with raw node-level billing.
                    </p>

                    {/* Pricing Toggle */}
                    <div className="flex items-center justify-center gap-3 pt-4">
                        <span className={`text-sm font-semibold transition-colors ${!isYearly ? "text-purple-600 font-extrabold" : "text-slate-500"}`}>Monthly billing</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-12 h-6 bg-slate-200 rounded-full p-1 flex items-center relative transition-all duration-300 shadow-inner"
                        >
                            <div className={`w-4 h-4 bg-purple-600 rounded-full transition-all duration-300 ${isYearly ? "translate-x-6 bg-pink-500" : ""}`} />
                        </button>
                        <span className={`text-sm font-semibold flex items-center gap-1.5 transition-colors ${isYearly ? "text-purple-600 font-extrabold" : "text-slate-500"}`}>
                            Yearly billing <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">Save 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Developer Sandbox",
                            price: 29,
                            desc: "Kickstart your prototype backend with dedicated node environments.",
                            features: ["Up to 3 active scaling nodes", "150,000 requests per month", "Standard edge router CDN", "Email compliance support", "Shard database read pool"],
                            tag: "Hobbyist"
                        },
                        {
                            name: "Scalr Production",
                            price: 79,
                            desc: "High throughput scaling environments with automated failovers.",
                            features: ["Up to 10 active scaling nodes", "1,500,000 requests per month", "Global multi-region replication", "Automated VPC route peering", "24/7 dedicated engineer desk", "Priority CPU thread access"],
                            tag: "Scale-up",
                            popular: true
                        },
                        {
                            name: "Enterprise Matrix",
                            price: 249,
                            desc: "Custom matrix grids, isolated clusters, and premium legal SLA compliance.",
                            features: ["Unlimited scaling nodes", "50,000,000 requests/mo base", "Fully isolated VPC clusters", "Dedicated security fallback registry", "15-minute response engineer SLA", "Custom data center configurations"],
                            tag: "Corporate Enterprise"
                        }
                    ].map((plan, idx) => (
                        <div
                            key={idx}
                            className={`bg-white border rounded-3xl p-8 flex flex-col justify-between shadow-lg relative transition-all duration-300 hover:-translate-y-1 ${
                                plan.popular
                                    ? "border-purple-600 ring-2 ring-purple-600/10 shadow-purple-600/5 scale-105 z-10"
                                    : "border-slate-100 hover:border-slate-300"
                            }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-extrabold tracking-wider text-[10px] px-4 py-1 rounded-full shadow-md">
                                    MOST POPULAR CHOICE
                                </span>
                            )}
                            <div className="space-y-6">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">{plan.tag}</span>
                                    <h3 className="text-2xl font-black tracking-tight text-slate-900 mt-4">{plan.name}</h3>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{plan.desc}</p>
                                <div className="pt-2">
                                    <span className="text-5xl font-black text-slate-950">${isYearly ? Math.floor(plan.price * 0.8) : plan.price}</span>
                                    <span className="text-sm text-slate-400 font-bold uppercase"> / month</span>
                                </div>

                                <ul className="space-y-4 pt-4 border-t border-slate-50">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex gap-2.5 items-center text-sm text-slate-600 font-medium">
                                            <CheckCircle className="w-5 h-5 text-purple-600 shrink-0" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button className={`w-full mt-8 rounded-2xl font-extrabold py-6 h-auto text-sm transition-all duration-300 border-0 ${
                                plan.popular
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 shadow-lg text-white"
                                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                            }`}>
                                Deploy Sandbox Cluster
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Interactive Accordion FAQs */}
            <div className="max-w-3xl mx-auto space-y-6 pt-12">
                <div className="text-center space-y-2">
                    <Badge className="bg-purple-100 text-purple-700 border-0 px-3 py-1 rounded-full text-xs font-semibold">SYSTEM KNOWLEDGEBASE</Badge>
                    <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Got questions about Scalr?</h2>
                    <p className="text-sm text-slate-500 font-medium">Read details regarding node spin-up speeds, VPC peering, and legal compliance.</p>
                </div>

                <div className="space-y-4">
                    {[
                        {
                            q: "How fast do scaling node clusters spin up under peak loads?",
                            a: "Our virtualized micro-containers spin up instantly. When high-volume request filters scale your workspace matrix, container execution takes under 150 milliseconds, routing queries before load delays materialize."
                        },
                        {
                            q: "Are serverless databases shard routes fully encrypted?",
                            a: "Yes. All database peering layers are isolated in distinct VPC matrix boundaries. In-transit transactions use AES-256 TLS protocols, protecting data assets between edge gateways and nodes."
                        },
                        {
                            q: "Can I connect custom domain secure endpoints directly?",
                            a: "Absolutely. Scalr includes automatic multi-region SSL renewals, custom apex domains configurations, and proxy path headers mapping with absolute DNS coverage."
                        },
                        {
                            q: "What is your fallback policy for SLA matrix compliance?",
                            a: "We guarantee a 99.99% operational core uptime. If automated scaling node failures occur, failover paths route request volume to spare clusters, with automated credit refunds according to SLA guidelines."
                        }
                    ].map((faq, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                            className="bg-white border border-slate-100 hover:border-purple-200 p-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm"
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">{faq.q}</h4>
                                <span className="text-purple-600 font-extrabold text-xs bg-purple-50 px-2 py-1 rounded-lg transition-transform duration-300">
                                    {activeFaq === idx ? "CLOSE" : "EXPAND"}
                                </span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4 font-medium">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Startup Brand Index Footer */}
            <div className="border-t border-slate-200/60 pt-16 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-[13px] font-sans text-slate-500 max-w-5xl mx-auto">
                <div className="space-y-4 md:col-span-1">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
                            🚀
                        </div>
                        <span className="font-extrabold text-slate-900 text-lg">Scalr.</span>
                    </div>
                    <p className="leading-relaxed text-slate-400 font-medium">
                        Deploy secure serverless backends and dynamic node workloads globally with absolute reliability. Zero administration headache.
                    </p>
                    <p className="text-xs text-slate-400">© 2026 Scalr Technologies, Inc.</p>
                </div>
                <div className="space-y-3">
                    <span className="text-slate-900 font-extrabold block uppercase tracking-wider text-xs">Node Platform</span>
                    <ul className="space-y-2 font-medium">
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">Serverless Shard Engine</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">Edge Proxy Gateways</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">Database Peering Layers</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">Workspace Telemetry</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <span className="text-slate-900 font-extrabold block uppercase tracking-wider text-xs">Integrations</span>
                    <ul className="space-y-2 font-medium">
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">Next.js Edge Proxy</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">PostgreSQL Pool Peer</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">AWS VPC Matrix Shard</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">Kubernetes Custom Node</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <span className="text-slate-900 font-extrabold block uppercase tracking-wider text-xs">Legal & Trust</span>
                    <ul className="space-y-2 font-medium">
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">Privacy Encryption SLA</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">SOC2 Compliance Audit</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">Server Uptime Terms</li>
                        <li className="hover:text-purple-600 cursor-pointer transition-colors">Security Incident Log</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 7. Skeuomorphism Modern Preview
// ==========================================
function SkeuomorphismPreview() {
    return (
        <div className="space-y-12 p-12 bg-gray-200 text-gray-800 font-sans">
            {/* Header */}
            <div className="bg-gray-100 rounded-3xl p-4 shadow-[10px_10px_20px_#c8c8c8,-10px_-10px_20px_#ffffff] flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800 drop-shadow-sm">TACTILE_SYSTEMS</span>
                <Button className="rounded-xl px-6 py-4 bg-gray-100 text-gray-800 shadow-[4px_4px_8px_#c8c8c8,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#c8c8c8,inset_-4px_-4px_8px_#ffffff] border-0 transition-all">
                    POWER ON
                </Button>
            </div>

            {/* Hero Tactile Panel */}
            <div className="bg-gray-100 rounded-[40px] p-12 shadow-[20px_20px_40px_#c8c8c8,-20px_-20px_40px_#ffffff] border border-white/20 space-y-6">
                <h1 className="text-6xl font-extrabold text-gray-800 drop-shadow-sm">Modern Skeuomorphism</h1>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                    Soft plastic shadows, beveled components, layered depth, and indented textures. A return of the physical realism in a clean, state-of-the-art UI system.
                </p>
                <div className="flex gap-6 pt-4">
                    <Button className="rounded-2xl px-8 py-6 bg-gray-100 text-gray-800 font-bold shadow-[6px_6px_12px_#c8c8c8,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#c8c8c8,inset_-6px_-6px_12px_#ffffff] border-0 transition-all duration-300">
                        Primary Lever
                    </Button>
                    <Button className="rounded-2xl px-8 py-6 bg-blue-500 text-white font-bold shadow-[6px_6px_12px_rgba(59,130,246,0.3),-6px_-6px_12px_#ffffff] hover:opacity-95 border-0 transition-all">
                        Secondary Lever
                    </Button>
                </div>
            </div>

            {/* Tactile Control Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: "VOLUME CONTROL", icon: Sliders, active: true },
                    { name: "TACTILE ROTOR", icon: Settings, active: false },
                    { name: "REDUNDANCY", icon: Shield, active: true }
                ].map((item, i) => (
                    <div key={i} className="bg-gray-100 rounded-3xl p-6 shadow-[10px_10px_20px_#c8c8c8,-10px_-10px_20px_#ffffff] flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gray-100 shadow-[inset_4px_4px_8px_#c8c8c8,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
                            <item.icon className={`w-8 h-8 ${item.active ? "text-blue-500" : "text-gray-400"}`} />
                        </div>
                        <h3 className="font-bold text-gray-800">{item.name}</h3>
                        <div className="flex gap-2">
                            <div className={`w-3.5 h-3.5 rounded-full ${item.active ? "bg-green-500 shadow-[1px_1px_3px_#000]" : "bg-gray-300 shadow-[inset_1px_1px_3px_#000]"}`} />
                            <span className="text-xs font-bold text-gray-500">{item.active ? "ACTIVE" : "INERT"}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 8. Claymorphism Preview
// ==========================================
function ClaymorphismPreview() {
    return (
        <div className="space-y-12 p-12 bg-blue-50 text-blue-900 font-sans">
            {/* Header */}
            <div className="bg-white/80 rounded-[30px] p-4 shadow-[10px_10px_20px_rgba(0,0,0,0.03),inset_-4px_-4px_8px_rgba(0,0,0,0.02),inset_4px_4px_8px_rgba(255,255,255,0.8)] border-4 border-white flex justify-between items-center">
                <span className="text-xl font-black text-blue-600">CLAY.FLOW</span>
                <Button className="rounded-full px-6 py-4 bg-blue-500 text-white font-bold shadow-[4px_4px_8px_rgba(59,130,246,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.1),inset_2px_2px_4px_rgba(255,255,255,0.3)] border-0 hover:scale-105 transition-transform">
                    PLAY NOW
                </Button>
            </div>

            {/* Bubble Hero */}
            <div className="bg-white/90 rounded-[50px] p-12 shadow-[25px_25px_50px_rgba(0,0,0,0.06),inset_-12px_-12px_24px_rgba(0,0,0,0.04),inset_12px_12px_24px_rgba(255,255,255,0.8)] border-8 border-white space-y-6">
                <Badge className="bg-blue-100 text-blue-600 rounded-full border-0 px-4 py-1.5 text-xs font-bold">
                    🎈 BUBBLY AND PLUSH
                </Badge>
                <h1 className="text-6xl font-black text-blue-600 leading-tight">
                    Friendly Bubbly <br />
                    Clay Designs.
                </h1>
                <p className="text-xl text-blue-400 font-semibold leading-relaxed max-w-2xl">
                    Friendly 3D physical modeling design featuring massive rounded corners, soft inner shadows, and cozy cartoonish layout aesthetics.
                </p>
                <div className="flex gap-4 pt-4">
                    <Button className="rounded-full px-10 py-6 bg-blue-500 text-white text-lg font-bold shadow-[8px_8px_16px_rgba(59,130,246,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform border-0">
                        Join The Game
                    </Button>
                </div>
            </div>

            {/* 3D Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Squishy Physics", "Plush Shading", "Friendly Colors"].map((title, i) => (
                    <div key={i} className="bg-white rounded-[40px] p-8 shadow-[15px_15px_30px_rgba(0,0,0,0.04),inset_-8px_-8px_16px_rgba(0,0,0,0.03),inset_8px_8px_16px_rgba(255,255,255,0.8)] border-4 border-white flex flex-col items-center space-y-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[inset_3px_3px_6px_rgba(0,0,0,0.08)] ${["bg-pink-100", "bg-purple-100", "bg-yellow-100"][i]}`}>
                            🎈
                        </div>
                        <h3 className="text-2xl font-black text-blue-600">{title}</h3>
                        <p className="text-blue-400 font-semibold text-center text-sm">Perfect soft-render styling for creative portfolios.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 9. Retro 80s Preview
// ==========================================
function Retro80sPreview() {
    return (
        <div className="space-y-12 p-12 bg-slate-950 text-slate-100 border-y-8 border-pink-500 relative overflow-hidden font-mono">
            {/* Horizon perspective grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(244,63,94,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(400px)_rotateX(60deg)] origin-bottom -z-10" />

            {/* Header */}
            <div className="bg-slate-900/90 border-2 border-cyan-400 p-4 flex justify-between items-center shadow-[4px_4px_0_#db2777]">
                <span className="text-xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">RETRO_GRID</span>
                <span className="text-xs text-cyan-400 animate-pulse font-bold tracking-widest">SYSTEM_ONLINE // 1988</span>
            </div>

            {/* Hero Horizon Banner */}
            <div className="text-center space-y-6 max-w-4xl mx-auto py-8">
                <h1 className="text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-400 drop-shadow-[0_5px_15px_rgba(244,63,94,0.6)]">
                    VAPOR_SYSTEM.
                </h1>
                <p className="text-xl text-cyan-300 max-w-xl mx-auto leading-relaxed border border-dashed border-cyan-400/30 p-4 bg-slate-900/60 shadow-[3px_3px_0_#eb4899]">
                    Neon sunset grids, vaporwave magenta horizons, floppy disk retro cassettes cards, and analog CRT-scanline aesthetics.
                </p>
                <div className="flex justify-center gap-6 pt-4">
                    <Button className="bg-pink-500 hover:bg-pink-400 text-white font-black italic px-10 py-8 text-xl skew-x-[-12deg] shadow-[5px_5px_0_#22d3ee] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                        ENTER THE MATRIX
                    </Button>
                </div>
            </div>

            {/* Retro 80s Cassette Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "SYNTH ENGINE", data: "FM-Synthesis 2.0" },
                    { title: "CHIP MUSIC", data: "8-Channel Audio" },
                    { title: "VHS GRAPHICS", data: "Magnetic NTSC" }
                ].map((card, i) => (
                    <div key={i} className="bg-slate-900/90 border-2 border-pink-500 p-6 skew-x-[-5deg] shadow-[4px_4px_0_#22d3ee]">
                        <div className="text-pink-500 font-black mb-2 text-xs">MODULE 0{i + 1}</div>
                        <h3 className="text-white font-black text-lg uppercase tracking-tight mb-2">{card.title}</h3>
                        <div className="h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mb-2" />
                        <span className="text-xs font-bold text-slate-400">{card.data}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 10. Retro Pixel Art Preview
// ==========================================
function PixelArtPreview() {
    return (
        <div className="space-y-12 p-12 bg-black text-white font-mono">
            {/* Header */}
            <div className="border-4 border-white p-4 bg-blue-900 flex justify-between items-center shadow-[6px_6px_0_0_#ffffff]">
                <span className="text-lg uppercase tracking-widest [image-rendering:pixelated]">QUEST_HUD</span>
                <div className="flex items-center gap-2">
                    <span className="text-red-500">❤❤❤</span>
                    <span className="text-yellow-400">GOLD: 490</span>
                </div>
            </div>

            {/* Pixel Quest Dialog */}
            <div className="border-[8px] border-white p-12 bg-blue-950 shadow-[12px_12px_0_0_#ffffff]">
                <h1 className="text-5xl uppercase text-white mb-4 [image-rendering:pixelated]">PIXEL QUEST BEGINS</h1>
                <p className="text-lg text-yellow-300 mb-8 tracking-wider leading-relaxed border-2 border-dashed border-white/20 p-4">
                    The classic retro 8-bit game aesthetic with blocky panels, thick borders, coin counters, character inventories, and high contrast dialogues.
                </p>
                <div className="flex gap-4">
                    <Button className="bg-green-600 hover:bg-green-500 text-white font-black text-xl h-16 px-8 border-4 border-white shadow-[6px_6px_0_0_rgba(255,255,255,0.4)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                        START GAME
                    </Button>
                </div>
            </div>

            {/* Inventory Slots */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: "HEALTH CORE", icon: Heart, val: "100/100" },
                    { label: "SWORD LEVEL", icon: Star, val: "LVL 4" },
                    { label: "MANA POTION", icon: Zap, val: "3 COPIES" },
                    { label: "SPACE SHIP", icon: Rocket, val: "SPEED: MAX" }
                ].map((slot, i) => (
                    <div key={i} className="border-4 border-white p-4 bg-slate-900 flex flex-col items-center shadow-[6px_6px_0_0_#ffffff]">
                        <slot.icon className="w-10 h-10 text-yellow-400 mb-3" />
                        <div className="text-white text-xs font-bold uppercase tracking-tight">{slot.label}</div>
                        <div className="text-yellow-300 font-bold text-xs mt-1">{slot.val}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 11. Corporate Professional Preview
// ==========================================
function CorporatePreview() {
    return (
        <div className="space-y-0 p-0 bg-gray-50 font-sans text-[#1A2B3C]">
            {/* Header */}
            <div className="bg-white border-b px-12 py-5 flex justify-between items-center">
                <span className="text-xl font-extrabold text-[#1A2B3C] tracking-tight">GLOBAL_VECTR</span>
                <div className="flex gap-10 text-sm font-semibold text-gray-500">
                    <span>Solutions</span>
                    <span>Framework</span>
                    <span>Corporate Responsibility</span>
                </div>
                <Button className="bg-[#1A2B3C] hover:bg-[#2C3E50] text-white font-bold rounded">
                    Contact Advisory
                </Button>
            </div>

            {/* Enterprise Hero */}
            <div className="bg-white py-24 px-12 border-b">
                <div className="max-w-4xl mx-auto space-y-6">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 uppercase tracking-widest px-3 py-1 font-bold text-xs rounded-sm">
                        ENTERPRISE PORTFOLIO 2026
                    </Badge>
                    <h1 className="text-6xl font-extrabold tracking-tight leading-[1.1] text-[#1A2B3C]">
                        Global Advisory for <span className="text-blue-600">Enterprise Digital Assets.</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
                        Deploy secure digital solutions governed by verified data layers, compliance regulations, and optimized operational pipelines.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-[#1A2B3C] hover:bg-[#2C3E50] text-white px-8 py-6 h-auto text-lg rounded font-bold shadow-lg">
                            Download Advisory Report
                        </Button>
                    </div>
                </div>
            </div>

            {/* Strategy Grid */}
            <div className="bg-white py-16 px-12 border-b">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Risk Mitigation", desc: "Formulate advanced quantitative models for enterprise compliance." },
                        { title: "Digital Integration", desc: "Seamless transition pipelines from monolithic to cloud micro-services." },
                        { title: "Strategic Growth", desc: "Optimizing operational frameworks to capitalize on global shifts." }
                    ].map((item, i) => (
                        <div key={i} className="space-y-4">
                            <div className="w-12 h-1 bg-blue-600" />
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 12. AI Modern Interface Preview
// ==========================================
function AIModernPreview() {
    return (
        <div className="space-y-12 p-12 bg-[#020617] text-white relative overflow-hidden font-sans">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

            {/* AI Mock Header */}
            <div className="relative z-10 bg-white/[0.02] border border-white/10 rounded-2xl p-4 flex justify-between items-center backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                    <span className="font-extrabold tracking-wider">NEURAL_SPACE</span>
                </div>
                <Button variant="ghost" className="border border-white/10 hover:bg-white/5 rounded-xl text-white">
                    Deploy Model v9
                </Button>
            </div>

            {/* Neural Hero */}
            <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto py-12">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm text-sm font-medium text-purple-300">
                    <Zap className="w-4 h-4 text-purple-400" /> Cognitive Engine Cluster Active
                </div>
                <h1 className="text-7xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
                    Intelligent Architecture <br /> For Neural Systems.
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed font-light">
                    Fine-tune high-parameter models, manage cognitive token pathways, and scale real-time AI API queries.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <Button className="bg-white text-black hover:bg-slate-200 px-10 py-6 h-auto text-lg rounded-2xl font-bold shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                        Launch Cognitive Studio
                    </Button>
                </div>
            </div>

            {/* Neural Feature Widgets */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Token Processing", val: "12,940/sec", active: true },
                    { label: "Weights Allocator", val: "84.9B Parameters", active: true },
                    { label: "Active Context", val: "128K Tokens", active: false }
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-white/[0.01] border border-white/10 rounded-[32px] backdrop-blur-md space-y-4 hover:border-purple-500/50 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                            <Sparkle className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold">{item.label}</h3>
                        <p className="text-slate-400 text-sm">Deploy high performance transformers.</p>
                        <div className="text-lg font-black text-purple-300">{item.val}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 13. Gradient Vibrant Preview
// ==========================================
function GradientVibrantPreview() {
    return (
        <div className="space-y-12 p-8 bg-white text-slate-900 font-sans min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center py-4 border-b">
                <span className="text-2xl font-black bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">VIBRNT</span>
                <Button className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white rounded-full">
                    Launch
                </Button>
            </div>

            {/* Glowing Hero Banner */}
            <div className="relative p-20 rounded-[4rem] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent)] pointer-events-none" />
                <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
                    <h1 className="text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                        Vibrant Color.
                    </h1>
                    <p className="text-xl font-medium opacity-90 leading-relaxed">
                        High energy, bold gradients, and vibrant mesh grids crafted to make modern brands pop on any screen.
                    </p>
                    <div className="pt-6">
                        <Button className="bg-white text-pink-600 hover:bg-slate-100 rounded-full h-20 px-16 text-2xl font-black shadow-xl hover:scale-105 transition-all">
                            GET STARTED
                        </Button>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {[
                    { from: "from-orange-400", to: "to-red-500", label: "Orange Flare" },
                    { from: "from-pink-500", to: "to-purple-600", label: "Pink Nebula" },
                    { from: "from-blue-400", to: "to-indigo-500", label: "Ocean Glow" }
                ].map((grad, i) => (
                    <div key={i} className={`h-80 rounded-[3rem] bg-gradient-to-br ${grad.from} ${grad.to} p-10 text-white shadow-lg relative group cursor-pointer overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                        <h3 className="text-3xl font-black mb-2 relative z-10 uppercase">{grad.label}</h3>
                        <p className="font-semibold opacity-85 relative z-10">Beautiful high energy contrast colors.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 14. Monochrome Editorial Preview
// ==========================================
function MonochromePreview() {
    return (
        <div className="space-y-0 p-0 bg-white font-serif text-black">
            {/* Header */}
            <div className="border-b border-black px-12 py-6 flex justify-between items-center font-sans font-bold">
                <span className="text-2xl uppercase tracking-widest font-black">THE_EDITION</span>
                <span className="text-xs uppercase">MAY 2026 // ISSUE 14</span>
            </div>

            {/* Editorial Header */}
            <div className="border-b-[20px] border-black py-32 px-12">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
                    <h1 className="text-9xl font-black uppercase tracking-tighter leading-none">
                        THE <br /> MONOCHROME
                    </h1>
                    <div className="h-1 w-full bg-black my-4" />
                    <p className="text-3xl font-medium max-w-2xl leading-tight text-neutral-800">
                        A beautiful high-contrast black and white editorial system. Stripped of hue to celebrate form, typography, and clean lines.
                    </p>
                    <div className="flex gap-8 pt-6 font-sans">
                        <Button variant="outline" className="border-4 border-black text-black rounded-none px-12 py-8 text-xl font-black hover:bg-black hover:text-white transition-colors uppercase">
                            CURRENT ARTICLES
                        </Button>
                    </div>
                </div>
            </div>

            {/* Editorial Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-b-4 border-black divide-x divide-black">
                {[
                    { index: "01", title: "TYPOGRAPHY MATTERS", desc: "Exploring the weights of classical serif layouts." },
                    { index: "02", title: "SPACE & SILENCE", desc: "How excessive padding creates layout luxury." },
                    { index: "03", title: "THE MONO GRID", desc: "Building modular systems devoid of colors." },
                    { index: "04", title: "EDITORIAL FLOW", desc: "Directing the user eye using massive drop-caps." }
                ].map((art, i) => (
                    <div key={i} className="p-10 group cursor-pointer hover:bg-black hover:text-white transition-colors duration-500">
                        <span className="text-sm font-bold block mb-12 font-sans">SECTION {art.index}</span>
                        <h3 className="text-3xl font-black leading-none uppercase mb-4 tracking-tighter">{art.title}</h3>
                        <p className="font-sans text-sm font-medium leading-relaxed opacity-60 group-hover:opacity-90">{art.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 15. Playful Colorful Preview
// ==========================================
function PlayfulPreview() {
    return (
        <div className="space-y-12 p-12 bg-yellow-50 overflow-hidden relative font-sans text-teal-950">
            {/* Header */}
            <div className="bg-teal-500 rounded-[30px] p-4 flex justify-between items-center text-white shadow-[0_6px_0_#0f766e]">
                <span className="text-2xl font-black italic tracking-tighter">YAY!</span>
                <Badge className="bg-yellow-400 text-teal-950 font-black rounded-full border-0">HAPPY MODE</Badge>
            </div>

            {/* Playful Hero */}
            <div className="relative z-10 text-center space-y-6 py-8">
                <h1 className="text-8xl font-black text-teal-600 drop-shadow-[5px_5px_0_white] leading-none">
                    HAPPY INTERFACES <br />
                    FOR COOL BRANDS! 🌈
                </h1>
                <p className="text-2xl font-bold text-teal-700/60 max-w-2xl mx-auto">
                    Soft, poppy shapes, rounded pill buttons, smiley icons, and rainbow-themed cards designed to make users smile.
                </p>
                <div className="flex justify-center gap-6 pt-4">
                    <Button className="bg-pink-500 hover:bg-pink-400 text-white rounded-[32px] h-20 px-12 text-2xl font-black shadow-[0_10px_0_#db2777] active:translate-y-2 active:shadow-none transition-all">
                        PICK ME! ✨
                    </Button>
                </div>
            </div>

            {/* Bubble shapes showcase */}
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
                {[
                    { color: "bg-pink-400 shadow-[0_10px_0_#be185d]", title: "Cute Core" },
                    { color: "bg-teal-400 shadow-[0_10px_0_#0f766e]", title: "Fresh UI" },
                    { color: "bg-yellow-400 shadow-[0_10px_0_#b45309]", title: "Sunny Vibes" },
                    { color: "bg-purple-400 shadow-[0_10px_0_#7e22ce]", title: "Magic Flow" }
                ].map((item, i) => (
                    <div key={i} className={`${item.color} w-40 h-40 rounded-[2.5rem] flex items-center justify-center text-white hover:scale-110 rotate-3 even:-rotate-3 transition-transform cursor-pointer`}>
                        <span className="font-black text-xl italic uppercase tracking-tighter text-center">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 16. Nature Organic Preview
// ==========================================
function NatureOrganicPreview() {
    return (
        <div className="space-y-12 p-12 bg-emerald-50 rounded-[60px] m-4 font-sans text-emerald-950">
            {/* Header */}
            <div className="flex justify-between items-center py-4 border-b border-emerald-900/10">
                <span className="text-xl font-bold text-emerald-800 tracking-tight flex items-center gap-2">🌿 SILVA</span>
                <div className="flex gap-8 text-sm font-semibold text-emerald-800/60">
                    <span>Ecosystem</span>
                    <span>Ingredients</span>
                    <span>Philosophy</span>
                </div>
            </div>

            {/* Organic Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <Badge className="bg-emerald-600 text-white rounded-full px-6 py-2 text-sm font-semibold border-0">
                        🌿 100% ORGANIC & HARMONIOUS
                    </Badge>
                    <h1 className="text-7xl font-bold text-emerald-950 leading-[1.05]">
                        Rooted in <br />
                        <span className="text-emerald-600">Earthly Harmony.</span>
                    </h1>
                    <p className="text-xl text-emerald-900/70 leading-relaxed font-medium">
                        Soft leaf contours, sage green backdrops, eco certifications checklist, and balanced organic grids. Bringing peace to the digital footprint.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-[40px] px-10 py-7 text-lg font-bold shadow-lg">
                            Explore Botanical List
                        </Button>
                    </div>
                </div>
                <div className="h-[450px] w-full bg-emerald-200/50 rounded-[100px_40px_100px_40px] shadow-inner relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent pointer-events-none" />
                    <span className="text-8xl opacity-20">☘️</span>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 17. Japanese Zen Preview
// ==========================================
function JapaneseZenPreview() {
    return (
        <div className="space-y-0 p-12 bg-[#FCF9F2] font-mono text-black min-h-screen">
            {/* Zen Header */}
            <div className="max-w-5xl mx-auto border-x border-black/10 px-12 py-6 flex justify-between items-center text-xs tracking-widest text-black/50">
                <span>SHIBUMI // KYOTO</span>
                <span>EST. 1640</span>
            </div>

            {/* Zen Body */}
            <div className="max-w-5xl mx-auto border-x border-black/10 px-12 py-32 relative space-y-6">
                <div className="absolute top-12 right-12 text-xs text-black/40 uppercase tracking-[0.5em] leading-[3] [writing-mode:vertical-rl]">
                    EMERGING // SILENT // SPACE
                </div>
                <span className="text-red-600 text-5xl leading-none block">●</span>
                <h1 className="text-8xl font-light tracking-tight leading-none text-black">
                    The Art of <br />
                    Empty Space.
                </h1>
                <p className="text-xl text-black/70 font-sans max-w-lg leading-relaxed font-light">
                    Haiku panels, dry sand waves garden grids, deep silent canvas backgrounds, and raw thin ink-brush outlines. Dedicated to clarity and focus.
                </p>
                <div className="flex gap-12 items-center pt-8">
                    <Button variant="outline" className="border-black border-2 rounded-none px-12 py-8 text-lg hover:bg-black hover:text-white transition-all font-sans uppercase tracking-widest font-black">
                        ENTER THE GARDEN
                    </Button>
                    <div className="h-px w-32 bg-black/40" />
                </div>
            </div>

            {/* Zen Columns */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-b border-black/10 divide-x divide-black/10">
                {["Kanso (Simplicity)", "Shizen (Natural)", "Seijaku (Stillness)"].map((item, i) => (
                    <div key={i} className="p-12 text-center space-y-4 hover:bg-black/[0.02] cursor-pointer">
                        <div className="text-black/20 text-3xl">0{i + 1}</div>
                        <h3 className="text-lg uppercase tracking-widest font-bold">{item}</h3>
                        <p className="text-xs text-black/50 leading-relaxed font-sans font-light">Minimal architecture celebrating absolute simplicity.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 18. Tech Dashboard Preview
// ==========================================
function TechDashboardPreview() {
    return (
        <div className="space-y-6 p-8 bg-[#0F172A] text-slate-200 font-mono">
            {/* Header */}
            <header className="flex justify-between items-center border-b border-slate-800 pb-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-black tracking-tighter uppercase">CORE_OS v9.1</h2>
                </div>
                <div className="flex gap-4 text-xs font-bold">
                    <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" /> NETWORK_OK</span>
                    <span className="text-slate-500">PING: 0 MS</span>
                </div>
            </header>

            {/* Dashboard grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "TELEMETRY ALPHA", value: "89.4k", pct: 70 },
                            { title: "ALLOCATED BUFFER", value: "24.1 GB", pct: 40 },
                            { title: "TRANSFORMERS OK", value: "100%", pct: 100 }
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#1E293B] border border-slate-800 p-6 rounded-xl space-y-3">
                                <span className="text-slate-500 text-[10px] uppercase font-bold">{stat.title}</span>
                                <div className="text-3xl font-black text-indigo-400 tabular-nums">{stat.value}</div>
                                <div className="h-1.5 bg-slate-800 w-full rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500" style={{ width: `${stat.pct}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chart visualization mockup */}
                    <div className="h-72 bg-[#1E293B] border border-slate-800 rounded-xl p-6 relative flex flex-col justify-between">
                        <span className="text-xs text-slate-500 uppercase font-bold">NETWORK TRAFFIC HISTOGRAM</span>
                        <div className="w-full h-44 flex items-end gap-1.5 pt-4">
                            {[40, 70, 45, 90, 65, 30, 85, 45, 75, 55, 95, 40, 60, 80, 50, 70, 35, 90, 55, 75].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-indigo-500/20 hover:bg-indigo-500 transition-all rounded-t-sm" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-[#1E293B] border border-slate-800 p-6 rounded-xl space-y-6">
                        <h3 className="text-xs font-bold uppercase text-slate-500">Active Modules</h3>
                        <div className="space-y-3">
                            {[
                                { name: "SECURE LAYER", active: true },
                                { name: "TRANSFORMERS", active: true },
                                { name: "COGNITIVE STACK", active: false }
                            ].map((mod, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-[#0F172A] rounded border border-slate-700">
                                    <span className="text-xs font-bold text-slate-300">{mod.name}</span>
                                    <Badge size="sm" className={mod.active ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" : "bg-slate-800 text-slate-500"}>
                                        {mod.active ? "READY" : "INERT"}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs h-12 rounded-lg">
                            RELOAD PIPELINES
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 19. Bold Typography Preview
// ==========================================
function BoldTypographyPreview() {
    return (
        <div className="p-0 bg-white text-black overflow-hidden font-sans">
            {/* Monumental header */}
            <div className="relative pt-32 pb-44 px-12 border-b-[30px] border-black space-y-6">
                <h1 className="text-[14vw] font-black uppercase leading-[0.85] tracking-tighter">
                    WORDS <br /> THAT <br /> <span className="text-blue-600">SCREAM.</span>
                </h1>
                <div className="absolute bottom-12 right-12 max-w-sm text-right space-y-4">
                    <p className="text-2xl font-black leading-tight text-neutral-800">
                        An experimental layout grid where typography acts as the primary structure. Heavy, loud, and monumental.
                    </p>
                    <Button className="bg-black text-white hover:bg-blue-600 rounded-none px-12 py-8 text-2xl font-black uppercase tracking-tight transition-all">
                        TAKE ACTION
                    </Button>
                </div>
            </div>

            {/* Row slots */}
            <div className="flex border-b-[15px] border-black">
                {["HEAVY_WEIGHT", "NO_NOISE", "EXPERIMENTAL"].map((word, i) => (
                    <div key={i} className={`flex-1 p-12 text-center text-5xl font-black uppercase border-black ${i < 2 ? 'border-r-[15px]' : ''} hover:bg-black hover:text-white transition-all cursor-crosshair`}>
                        {word}
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 20. Gaming Theme Preview
// ==========================================
function GamingPreview() {
    return (
        <div className="space-y-12 p-12 bg-black text-white font-sans relative overflow-hidden">
            {/* Grid Red Light */}
            <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-red-950/20 via-transparent to-transparent -rotate-12 translate-y-[-50%] pointer-events-none" />

            {/* Gaming Header */}
            <div className="relative z-10 flex justify-between items-center bg-zinc-900 border-b-2 border-red-600/30 p-4">
                <span className="font-black text-xl tracking-wider text-red-500">ALPHA_X_LOBBY</span>
                <div className="flex items-center gap-6 text-sm font-bold">
                    <span>RANK: ELITE</span>
                    <span className="text-red-500 animate-pulse">MATCHMAKING ACTIVE</span>
                </div>
            </div>

            {/* Gaming lobby main banner */}
            <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-red-600 skew-x-[-15deg]" />
                    <h2 className="text-xs font-black italic tracking-[0.2em] uppercase text-red-500">UPGRADE YOUR WEAPON ARSENAL</h2>
                </div>
                <h1 className="text-8xl font-black italic uppercase tracking-tighter leading-none [text-shadow:0_5px_0_#991b1b] skew-x-[-8deg]">
                    ELITE <span className="text-red-500">SQUAD</span> <br /> ARENA ACTIVE.
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                    Choose your squad layout, monitor e-sports telemetry matches, reload weapon stat loadouts, and configure server protocols with high-octane red/black visuals.
                </p>
                <div className="flex gap-4">
                    <Button className="bg-red-600 hover:bg-red-500 text-white font-black italic text-2xl h-20 px-12 rounded-none skew-x-[-15deg] shadow-[5px_5px_0_#991b1b] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                        DEPLOY TO MAP
                    </Button>
                </div>
            </div>

            {/* E-sports Squad Status */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {[
                    { label: "SQUAD ASSIGNED", value: "OMEGA_SECTOR_9", active: true },
                    { label: "SERVER STABILITY", value: "EU_WEST_14 (04ms)", active: true },
                    { label: "ARSENAL AMMUNITION", value: "FULL CAP", active: false }
                ].map((item, i) => (
                    <div key={i} className="bg-zinc-900 border-l-4 border-red-600 p-6 shadow-xl">
                        <div className="text-[10px] text-zinc-500 font-bold uppercase">{item.label}</div>
                        <div className="text-2xl font-black italic text-white mt-1 uppercase">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 21. Health & Wellness Preview
// ==========================================
function HealthWellnessPreview() {
    return (
        <div className="space-y-12 p-8 bg-[#F0F9FF] font-sans text-slate-800">
            {/* Header */}
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 border-b border-sky-100">
                <span className="text-xl font-bold text-sky-600 flex items-center gap-2">🧘‍♀️ HALO_WELLNESS</span>
                <div className="flex gap-8 text-sm font-semibold text-slate-500">
                    <span>Programs</span>
                    <span>Nutrition</span>
                    <span>Consultation</span>
                </div>
            </div>

            {/* Well Hero */}
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                <div className="flex-1 space-y-6">
                    <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-200 border-0 px-4 py-1.5 rounded-full font-bold">
                        🌿 RECONNECT WITH BALANCE
                    </Badge>
                    <h1 className="text-6xl font-bold text-slate-900 leading-tight">
                        Your Guided Journey to <span className="text-sky-500">Absolute Calm.</span>
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed font-light">
                        Personalized meditation schedules, physical rehabilitation routines, calorie calculators, and serene water trackers. Beautifully clean sky-blue layouts.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Button className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 py-6 h-auto font-bold shadow-lg">
                            Request Assessment
                        </Button>
                    </div>
                </div>
                <div className="flex-1 h-[400px] bg-white rounded-[4rem] relative overflow-hidden shadow-xl border border-sky-100 flex items-center justify-center">
                    <span className="text-8xl opacity-15">🧘‍♀️</span>
                </div>
            </div>

            {/* Well Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                    { label: "Guided Meditation", value: "48 Sessions" },
                    { label: "Hydration Status", value: "2.8 Liters/day" },
                    { label: "Optimal Sleeping", value: "8.1 Hrs/Night" },
                    { label: "Heart Rate Stability", value: "62 BPM" }
                ].map((stat, i) => (
                    <Card key={i} className="border-0 shadow-md rounded-3xl p-6 bg-white space-y-2">
                        <div className="w-10 h-10 bg-sky-50 rounded-2xl flex items-center justify-center">
                            <Heart className="w-5 h-5 text-sky-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">{stat.label}</h3>
                        <div className="text-2xl font-black text-sky-600">{stat.value}</div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 22. Education & Learning Preview
// ==========================================
function EducationLearningPreview() {
    return (
        <div className="space-y-12 p-8 bg-white font-sans text-indigo-950">
            {/* Header / Banner */}
            <div className="bg-[#7C3AED] rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[90px] pointer-events-none" />
                <div className="relative z-10 max-w-3xl space-y-6">
                    <Badge className="bg-amber-400 text-indigo-950 font-bold border-0 px-4 py-1 rounded-full">
                        ⚡ LEARNING SUITE 2026
                    </Badge>
                    <h1 className="text-6xl font-bold leading-tight">
                        Acquire Verified Skills <br />
                        With Certified Courses.
                    </h1>
                    <p className="text-xl text-indigo-100 font-light max-w-xl leading-relaxed">
                        Track study syllabus milestones, watch custom lectures, interact with live coding assignments, and unlock globally recognized graduation credentials.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Input className="max-w-xs bg-white text-indigo-950 h-14 rounded-2xl border-0" placeholder="Search syllabus database..." />
                        <Button className="bg-amber-400 hover:bg-amber-500 text-indigo-950 font-black h-14 px-8 rounded-2xl shadow-lg border-0">
                            Find Class
                        </Button>
                    </div>
                </div>
            </div>

            {/* Courses Showcase Grid */}
            <div className="space-y-8 max-w-6xl mx-auto">
                <div className="flex justify-between items-end">
                    <h2 className="text-3xl font-extrabold">Popular Certification Tracks</h2>
                    <Button variant="link" className="text-[#7C3AED] font-bold">See all syllabuses &rarr;</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "React Architecture Mastery", price: "$49", rating: "4.9" },
                        { title: "Applied Neural Classifiers", price: "$59", rating: "4.8" },
                        { title: "Vibrant Layout Principles", price: "$39", rating: "4.7" }
                    ].map((course, i) => (
                        <Card key={i} className="rounded-3xl border-slate-100 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
                            <div className="aspect-video bg-indigo-50 group-hover:bg-indigo-100 transition-colors" />
                            <CardContent className="p-6 space-y-4">
                                <div className="flex justify-between items-center text-xs font-bold text-amber-600 uppercase">
                                    <span>Advanced</span>
                                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-current" /> {course.rating}</span>
                                </div>
                                <h3 className="text-xl font-bold">{course.title}</h3>
                                <p className="text-sm text-slate-400 font-light">Comprehensive 12-week layout containing live labs.</p>
                                <div className="pt-4 border-t flex justify-between items-center">
                                    <span className="text-2xl font-black text-[#7C3AED]">{course.price}</span>
                                    <Button size="sm" className="rounded-xl bg-indigo-950 text-white font-bold hover:bg-indigo-900">Enroll Today</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 23. Architect Portfolio Preview
// ==========================================
function ArchitectPortfolioPreview() {
    return (
        <div className="space-y-0 p-0 bg-[#FAFAFA] font-sans text-neutral-900">
            <header className="px-12 py-8 flex justify-between items-center border-b border-neutral-100">
                <div className="text-2xl font-black tracking-tighter">STUDIO_ATELIER</div>
                <nav className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-widest text-neutral-400">
                    <span className="text-neutral-900">Exposition</span>
                    <span>Blueprints</span>
                    <span>Studio Profile</span>
                </nav>
            </header>

            {/* Split Structural Section */}
            <div className="flex flex-col md:flex-row min-h-screen">
                <div className="w-full md:w-1/2 p-24 flex flex-col justify-center space-y-8 bg-white">
                    <h1 className="text-8xl font-bold tracking-tighter leading-[0.95] text-neutral-950">
                        Space <br /> Refined.
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-md leading-relaxed font-light">
                        Deploying minimalist structure coordinates, high contrast raw concrete pillars, coordinates blueprint grids, and silent organic shadows.
                    </p>
                    <div className="pt-6">
                        <Button className="bg-[#171717] hover:bg-black text-white px-12 py-8 rounded-none text-xs font-bold uppercase tracking-widest h-auto">
                            Expose Blueprint
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-[#EAEAEA] relative flex items-center justify-center border-l border-neutral-100">
                    <div className="absolute inset-24 border border-black/5 flex items-center justify-center font-mono text-xs text-neutral-400">
                        [ BLUEPRINT_GRID_OVERLAY ]
                    </div>
                    <span className="text-[12rem] font-black text-white/40 font-mono">01</span>
                </div>
            </div>

            {/* Project List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border-b border-neutral-200">
                {[
                    { name: "Glass Monolith", loc: "Valais, Switzerland" },
                    { name: "Raw Concrete Oasis", loc: "Oaxaca, Mexico" }
                ].map((p, i) => (
                    <div key={i} className="aspect-square bg-white p-16 flex flex-col justify-end group cursor-pointer overflow-hidden transition-all hover:bg-neutral-50">
                        <h3 className="text-4xl font-bold tracking-tight mb-2 group-hover:-translate-y-2 transition-all">{p.name}</h3>
                        <p className="text-neutral-400 font-medium uppercase tracking-widest text-xs">{p.loc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 24. Coffee Shop Cozy Preview
// ==========================================
function CoffeeShopCozyPreview() {
    return (
        <div className="space-y-12 p-8 bg-[#FFFBEB] font-serif text-[#78350F]">
            {/* Header */}
            <div className="max-w-4xl mx-auto flex justify-between items-center py-4 border-b border-[#78350F]/15">
                <span className="text-xl font-bold italic tracking-tight">☕ Cozy Roasters</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#78350F]/70">PICKUP HOURS: 7AM - 8PM</span>
            </div>

            {/* Cozy Hero */}
            <div className="max-w-4xl mx-auto text-center py-16 space-y-6">
                <span className="text-[#D97706] italic text-2xl">Traditional Beans Since 1994</span>
                <h1 className="text-8xl font-bold leading-tight">The Morning Roast.</h1>
                <p className="text-2xl text-[#78350F]/70 max-w-2xl mx-auto italic leading-relaxed">
                    Fresh cinnamon pastry selections, espresso dials, cozy fire embers backdrops, and hand-ground warm drip catalog menus.
                </p>
                <div className="flex justify-center gap-6 font-sans pt-4">
                    <Button className="bg-[#78350F] hover:bg-[#5C270A] text-white px-10 py-7 rounded-full text-lg font-bold">
                        Order Pickup Catalog
                    </Button>
                </div>
            </div>

            {/* Menu catalog */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 py-8 border-t border-[#78350F]/10">
                {[
                    { name: "Cinnamon Latte", price: "$4.80", desc: "Warm cinnamon, fresh organic milk, single shot." },
                    { name: "Ethiopian Drip", price: "$3.90", desc: "Coarse hand-ground beans with high fruit aromas." },
                    { name: "Warm Maple Pastry", price: "$4.20", desc: "Oven fresh pastry crust with dark maple glaze." }
                ].map((item, i) => (
                    <div key={i} className="text-center space-y-3">
                        <div className="w-20 h-20 bg-[#FEF3C7] rounded-full mx-auto flex items-center justify-center border-2 border-dashed border-[#78350F]/20">
                            ☕
                        </div>
                        <h3 className="text-2xl font-bold">{item.name}</h3>
                        <p className="italic text-[#78350F]/70 text-sm">{item.desc}</p>
                        <div className="text-xl font-bold text-[#D97706] font-sans">{item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 25. Crypto Dashboard Preview
// ==========================================
function CryptoDashboardPreview() {
    return (
        <div className="space-y-6 p-8 bg-[#020617] text-slate-200 font-mono">
            {/* Top Bar */}
            <div className="flex justify-between items-center bg-slate-900/50 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl">
                <div className="flex items-center gap-8">
                    <div className="text-xl font-black text-emerald-400">COIN_FLOW</div>
                    <div className="hidden sm:flex gap-6 text-sm">
                        <span className="text-emerald-400/80">GAS FEE: 18 GWEI</span>
                        <span className="text-slate-500">BLOCK: #182049</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Badge className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs py-1.5 px-3">
                        WALLET_ACTIVE // 0x8a...2e4f
                    </Badge>
                </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <Card className="lg:col-span-3 bg-slate-900 border-slate-800 rounded-3xl p-8 space-y-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Aggregate Portfolio Balance</span>
                            <div className="text-5xl font-black text-white mt-2">$294,840.10 <span className="text-emerald-400 text-lg ml-2 font-bold">+18.4%</span></div>
                        </div>
                    </div>

                    {/* Token Price Feed list */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                        {[
                            { token: "Bitcoin", price: "$64,280.00", chg: "+4.2%" },
                            { token: "Ethereum", price: "$3,450.20", chg: "+8.9%" },
                            { token: "Solana", price: "$142.10", chg: "+14.2%" }
                        ].map((coin, i) => (
                            <div key={i} className="bg-slate-950 p-4 border border-slate-800 rounded-2xl space-y-2">
                                <span className="text-[10px] text-slate-500 font-bold uppercase">{coin.token} ticker</span>
                                <div className="text-xl font-bold text-white">{coin.price}</div>
                                <span className="text-xs text-emerald-400 font-bold">{coin.chg} today</span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Quick swap buffer */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6">
                    <h3 className="font-bold text-sm text-slate-400 uppercase tracking-widest">Connect Liquidity Pools</h3>
                    <div className="space-y-3">
                        {["ETH / USDC", "SOL / USDT", "BTC / USDC"].map((pair, i) => (
                            <div key={i} className="flex justify-between items-center p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs">
                                <span className="font-bold text-white">{pair}</span>
                                <span className="text-emerald-400 font-bold">STABLE (99%)</span>
                            </div>
                        ))}
                    </div>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black h-14 rounded-2xl shadow-xl">
                        SWAP TOKENS NOW
                    </Button>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 26. Real Estate Modern Preview
// ==========================================
function RealEstatePreview() {
    return (
        <div className="space-y-0 bg-white font-sans text-slate-800">
            {/* Real Estate Hero */}
            <div className="relative min-h-[450px] bg-gradient-to-br from-rose-950 via-rose-900 to-rose-800 flex items-end p-12 overflow-hidden">
                <div className="relative z-10 max-w-2xl space-y-6">
                    <Badge className="bg-white/20 text-white border-0 backdrop-blur-md">🏠 GOLD_LISTINGS</Badge>
                    <h1 className="text-6xl font-black text-white leading-tight">Find Luxurious Spaces.</h1>
                    <p className="text-white/80 text-lg">Detailed blueprint specs, curated structural locations, square footage indices, and luxury pool checks.</p>
                    <div className="flex gap-4">
                        <Button className="bg-white text-rose-800 hover:bg-rose-50 font-bold px-8 py-6 rounded-xl">Browse Catalog</Button>
                    </div>
                </div>
            </div>

            {/* Properties Catalog */}
            <div className="p-12 bg-slate-50 space-y-8">
                <h2 className="text-3xl font-extrabold text-slate-950">Featured Spaces</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "Villa Obsidian", loc: "St. Tropez, France", price: "$4.2M", sqft: "6,500" },
                        { name: "Zephyr Heights", loc: "Kyoto, Japan", price: "$2.9M", sqft: "4,100" },
                        { name: "Silva Residence", loc: "Valais, Switzerland", price: "$3.5M", sqft: "5,200" }
                    ].map((house, i) => (
                        <Card key={i} className="overflow-hidden rounded-2xl border-0 shadow-md bg-white">
                            <div className="aspect-video bg-rose-100 flex items-center justify-center text-rose-800/40 text-xl font-bold">
                                [ SCENIC ST. TROPEZ ]
                            </div>
                            <CardContent className="p-6 space-y-3">
                                <span className="text-xs font-bold text-rose-700 uppercase">Featured Listing</span>
                                <h3 className="font-bold text-xl">{house.name}</h3>
                                <p className="text-xs text-slate-400">📍 {house.loc} • {house.sqft} SQ FT</p>
                                <div className="pt-4 border-t flex justify-between items-center">
                                    <span className="text-xl font-black text-rose-900">{house.price}</span>
                                    <Button size="sm" className="bg-rose-800 text-white rounded-lg">View Specs</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 27. Fashion Boutique Preview
// ==========================================
function FashionBoutiquePreview() {
    return (
        <div className="bg-white text-stone-900 font-sans space-y-0">
            {/* Header */}
            <div className="flex justify-between items-center px-12 py-6 border-b">
                <span className="text-3xl font-black tracking-[0.4em] uppercase">VECTR</span>
                <span className="text-xs tracking-widest text-stone-400 font-bold uppercase">SPRING ATELIER 2026</span>
            </div>

            {/* Split layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
                <div className="bg-stone-100 p-16 flex flex-col justify-center space-y-8">
                    <Badge className="w-fit bg-stone-900 text-white border-0 rounded-none text-xs tracking-widest uppercase py-1.5 px-4 font-bold">
                        SEASON SPOTLIGHT
                    </Badge>
                    <h1 className="text-7xl font-extralight tracking-tighter leading-none text-stone-950">
                        Effortless <br />
                        <span className="font-semibold italic">Aesthetics.</span>
                    </h1>
                    <p className="text-xl text-stone-500 font-light leading-relaxed max-w-md">
                        Fine organic fabrics, tailored silhouette metrics, editorial lookbook collages, and premium minimalist catalog selectors.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-stone-900 hover:bg-black text-white rounded-none px-8 py-6 h-auto tracking-widest text-xs uppercase font-bold">
                            View Lookbook
                        </Button>
                    </div>
                </div>
                <div className="bg-stone-200 flex items-center justify-center border-l">
                    <span className="text-[12rem] font-light italic text-stone-400/30">V</span>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 28. Photography Dark Preview
// ==========================================
function PhotographyDarkPreview() {
    return (
        <div className="bg-black text-white font-sans space-y-12 p-12">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <span className="text-xl font-bold tracking-widest uppercase">SHADOW_WORKS</span>
                <Badge className="bg-zinc-800 text-zinc-400 border border-zinc-700">FOCAL VALUE: F/1.8</Badge>
            </div>

            {/* Photo Hero */}
            <div className="relative min-h-[400px] bg-zinc-900/50 border border-zinc-800 rounded-3xl p-12 flex items-center overflow-hidden">
                <div className="relative z-10 max-w-xl space-y-6">
                    <Badge className="bg-white/10 text-white border border-white/20">📷 STUDIO_LIGHTS</Badge>
                    <h1 className="text-7xl font-black tracking-tight leading-none uppercase">Aperture &amp; Light.</h1>
                    <p className="text-zinc-400 text-lg">High-contrast darkroom portfolio grids, photographic lens parameters, and editorial storyboards.</p>
                    <div className="flex gap-4">
                        <Button className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-xl font-bold">Expose Studio Portfolio</Button>
                    </div>
                </div>
            </div>

            {/* Photo Masonry Mockup */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { title: "PORTRAITS", size: "aspect-square" },
                    { title: "SAGE SHADOWS", size: "aspect-[4/3]" },
                    { title: "CHROME DETAILS", size: "aspect-[3/4]" },
                    { title: "ARCHITECTURE", size: "aspect-square" }
                ].map((item, i) => (
                    <div key={i} className={`bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col justify-end p-6 ${item.size} group hover:border-white/30 transition-all cursor-pointer`}>
                        <span className="text-xs font-bold text-zinc-500">EXPOSURE 0{i + 1}</span>
                        <h3 className="font-bold text-lg text-white group-hover:text-amber-500 transition-colors uppercase mt-1">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 29. Travel Explorer Preview
// ==========================================
function TravelExplorerPreview() {
    return (
        <div className="space-y-12 bg-white font-sans text-slate-800 p-8 rounded-3xl">
            {/* Travel Hero */}
            <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-cyan-500 rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10 max-w-2xl space-y-6">
                    <Badge className="bg-white/20 text-white border-0 text-xs font-bold py-1 px-3">✈️ EXPEDITIONS 2026</Badge>
                    <h1 className="text-7xl font-black leading-none">Explore The Wild.</h1>
                    <p className="text-lg text-white/90 font-medium max-w-xl">
                        Beach &amp; mountain destination packs, custom package trip estimators, and dynamic travel routes databases.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-5 rounded-2xl shadow-xl">
                            Estimate Trip Package
                        </Button>
                    </div>
                </div>
            </div>

            {/* Travel Packs Grid */}
            <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900">Trending Expeditions</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { title: "Bali Coastlines", days: "7 Days", color: "from-orange-400 to-amber-500" },
                        { title: "Alpine Peaks", days: "5 Days", color: "from-cyan-400 to-blue-500" },
                        { title: "Tokyo Districts", days: "10 Days", color: "from-pink-400 to-rose-500" },
                        { title: "Patagonia Ridges", days: "14 Days", color: "from-emerald-400 to-teal-500" }
                    ].map((pack, i) => (
                        <div key={i} className={`rounded-3xl bg-gradient-to-br ${pack.color} p-6 text-white aspect-[4/5] flex flex-col justify-end shadow-md hover:scale-[1.03] transition-all cursor-pointer`}>
                            <span className="text-xs font-bold opacity-80 uppercase block">{pack.days} Package</span>
                            <h3 className="text-2xl font-black tracking-tight mt-1">{pack.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 30. Law Firm Professional Preview
// ==========================================
function LawFirmPreview() {
    return (
        <div className="bg-white font-sans text-slate-900 space-y-0">
            {/* Header */}
            <div className="border-b px-12 py-5 flex justify-between items-center bg-white shadow-sm">
                <div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">HARTWELL & ASSOCIATES</span>
                    <div className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">Attorneys at Law · Since 1978</div>
                </div>
                <Button className="bg-[#1E3A8A] hover:bg-blue-900 text-white rounded-none px-6">
                    Consultation Desk
                </Button>
            </div>

            {/* Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
                <div className="bg-[#1E3A8A] text-white p-16 flex flex-col justify-center space-y-8">
                    <div className="w-16 h-1 bg-amber-500" />
                    <h1 className="text-5xl font-bold leading-tight">Integrity. Authority.</h1>
                    <p className="text-blue-200 text-lg leading-relaxed font-light">
                        Trustworthy legal counselors, marble-column prestige branding, court credentials grids, and secure practice consultation forms.
                    </p>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-5 rounded-none w-fit">
                        Explore Legal Practice
                    </Button>
                </div>
                <div className="bg-slate-50 p-16 flex flex-col justify-center gap-6">
                    {["Corporate Asset Law", "Trusts & Estates Advisory", "Global Arbitrage"].map((area, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
                                <span className="font-bold text-slate-800">{area}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-300" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 31. Music Studio Pro Preview
// ==========================================
function MusicStudioPreview() {
    return (
        <div className="bg-[#0B0F19] text-white font-sans space-y-12 p-12 rounded-3xl">
            {/* Visualizer header */}
            <div className="flex justify-between items-center border-b border-zinc-800 pb-6">
                <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">SOUND_ENGINE</span>
                <Badge className="bg-pink-500/20 text-pink-300 border border-pink-500/30">AUDIO DRIVER: ASIO v4</Badge>
            </div>

            {/* Studio console hero */}
            <div className="relative min-h-[350px] bg-gradient-to-r from-pink-950/40 via-purple-950/20 to-transparent border border-pink-500/20 rounded-3xl p-12 flex items-center overflow-hidden">
                {/* Simulated waveforms */}
                <div className="absolute right-12 bottom-0 flex items-end gap-1 h-3/4 w-72 opacity-25 pb-4 pointer-events-none">
                    {[40, 70, 55, 90, 65, 80, 45, 95, 60, 75, 50, 85, 40, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-pink-500 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                </div>

                <div className="relative z-10 max-w-xl space-y-6">
                    <Badge className="bg-pink-500/10 text-pink-400 border border-pink-500/30">🎵 ALBUM DECK ACTIVE</Badge>
                    <h1 className="text-6xl font-black leading-tight uppercase">Master The Beats.</h1>
                    <p className="text-zinc-400 text-lg">Interactive sound wave visualizers, active audio level meters, BPM controls, and professional tracks listing.</p>
                    <div className="flex gap-4">
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-8 py-5 rounded-2xl font-bold shadow-lg">
                            Render Master Track
                        </Button>
                    </div>
                </div>
            </div>

            {/* Tracks listing */}
            <div className="space-y-3">
                {[
                    { title: "Midnight Reflections", plays: "4.8M plays", chs: 5 },
                    { title: "Neon Waves", plays: "3.2M plays", chs: 3 },
                    { title: "Obsidian Core Beats", plays: "1.9M plays", chs: 4 }
                ].map((track, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-xs">
                                0{i + 1}
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{track.title}</h4>
                                <span className="text-xs text-zinc-500">{track.plays}</span>
                            </div>
                        </div>
                        <div className="flex items-end gap-0.5 h-6">
                            {Array.from({ length: track.chs }).map((_, j) => (
                                <div key={j} className="w-1 bg-pink-400 rounded-full h-full" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 32. Non-Profit Impact Preview
// ==========================================
function NonProfitPreview() {
    return (
        <div className="bg-white font-sans text-slate-800 space-y-12 p-8 rounded-3xl">
            {/* Impact Hero */}
            <div className="bg-[#DC2626] rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
                <div className="relative z-10 max-w-2xl space-y-6">
                    <Badge className="bg-white/20 text-white border-0 px-4 py-1.5 rounded-full">❤️ IMPACT PORTAL 2026</Badge>
                    <h1 className="text-6xl font-bold leading-tight">Together, We Shape Lives.</h1>
                    <p className="text-lg text-red-100 font-light max-w-xl">
                        Real-time crowdsourced donation meters, live micro-donor feeds, secure community program funding, and volunteering boards.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Button className="bg-white text-red-700 hover:bg-red-50 font-bold px-8 py-5 rounded-2xl shadow-xl">
                            Donate to Campaigns
                        </Button>
                    </div>
                </div>
            </div>

            {/* Campaign meters progress cards */}
            <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900">Active Campaigns</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Clean Water Grid", raised: "$145,000", target: "$200,000", pct: 72 },
                        { title: "Education Syllabus Books", raised: "$84,200", target: "$100,000", pct: 84 },
                        { title: "Forest Reforestation Silva", raised: "$210,000", target: "$250,000", pct: 84 }
                    ].map((camp, i) => (
                        <Card key={i} className="p-6 border-0 shadow-md rounded-3xl space-y-4">
                            <h3 className="font-extrabold text-xl">{camp.title}</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400">Raised: {camp.raised}</span>
                                    <span className="font-bold text-emerald-600">{camp.pct}%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500" style={{ width: `${camp.pct}%` }} />
                                </div>
                            </div>
                            <Button className="w-full bg-[#DC2626] hover:bg-red-700 text-white rounded-xl py-3 text-xs font-bold">
                                Back Project
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 33. E-commerce Modern Preview
// ==========================================
function EcommercePreview() {
    return (
        <div className="bg-white font-sans text-slate-800 space-y-0">
            {/* Header */}
            <div className="border-b px-12 py-5 flex justify-between items-center bg-white">
                <span className="text-2xl font-black text-indigo-700">MODERN_CART</span>
                <div className="flex items-center gap-4">
                    <Badge className="bg-rose-500 text-white rounded-full border-0">4 ITEMS</Badge>
                </div>
            </div>

            {/* Shop Hero */}
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white p-16 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-80 h-full bg-white/5 skew-x-[-15deg] translate-x-1/3 pointer-events-none" />
                <div className="relative z-10 max-w-xl space-y-6">
                    <Badge className="bg-rose-500 text-white border-0 font-bold px-3 py-1 text-xs">🔥 SEASON OUTLET</Badge>
                    <h1 className="text-6xl font-black leading-none">Spring Outerwear <br /> Catalogue 2026</h1>
                    <Button className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-8 py-5 rounded-2xl shadow-xl">
                        Shop Catalog
                    </Button>
                </div>
            </div>

            {/* Products with carts quantity add */}
            <div className="p-12 space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900">Featured Releases</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: "Carbon Fiber Sneakers", price: "$149.00" },
                        { title: "Minimal Sage Jacket", price: "$92.00" },
                        { title: "Obsidian Classic Tote", price: "$52.00" },
                        { title: "Bubbly Clay Hoodie", price: "$78.00" }
                    ].map((prod, i) => (
                        <div key={i} className="group space-y-3 cursor-pointer">
                            <div className="aspect-square bg-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center font-bold text-slate-400 group-hover:shadow-lg transition-shadow">
                                [ PROD_IMAGE_0{i + 1} ]
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">{prod.title}</h4>
                                <div className="text-indigo-700 font-extrabold text-lg mt-1">{prod.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 34. Fitness Tracker Preview
// ==========================================
function FitnessTrackerPreview() {
    return (
        <div className="bg-white font-sans text-slate-800 space-y-12 p-8 rounded-3xl">
            {/* Fitness Hero */}
            <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,#fff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                <div className="relative z-10 max-w-2xl space-y-6">
                    <Badge className="bg-white/20 text-white border-0">💪 ATHLETE CORE v9</Badge>
                    <h1 className="text-7xl font-black leading-none uppercase">Crush Goals.</h1>
                    <p className="text-lg text-orange-100 font-medium">
                        Active daily streak boards, heart rate telemetry feeds, training progress tracking rings, and personalized AI coaching schedules.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-5 rounded-2xl shadow-xl">
                            Unlock AI Training
                        </Button>
                    </div>
                </div>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: "Active Calories Burned", value: "982 KCAL", icon: "🔥", chg: "+14%" },
                    { label: "Steps Accounted", value: "11,840", icon: "👟", chg: "Goal Met" },
                    { label: "Heart Rate Baseline", value: "64 BPM", icon: "💓", chg: "Steady" },
                    { label: "Hydration Intake", value: "3.2 LITERS", icon: "💧", chg: "+24%" }
                ].map((stat, i) => (
                    <Card key={i} className="p-6 border-0 shadow-md rounded-3xl space-y-2 bg-slate-50">
                        <span className="text-3xl block">{stat.icon}</span>
                        <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                        <div className="text-xs text-slate-400 font-bold uppercase">{stat.label}</div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 35. AI SaaS Platform Preview
// ==========================================
function AISaaSPreview() {
    return (
        <div className="bg-[#0B0F19] text-white font-sans space-y-12 p-12 rounded-3xl relative overflow-hidden">
            {/* Glow background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-700/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Hero */}
            <div className="relative z-10 max-w-3xl space-y-6">
                <Badge className="bg-violet-500/10 text-violet-300 border border-violet-500/20 px-4 py-1.5 rounded-full text-xs font-bold">
                    🔮 TRANSFORMER INSTANCE v3.4
                </Badge>
                <h1 className="text-7xl font-bold leading-tight bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
                    The Platform for AI Developers.
                </h1>
                <p className="text-zinc-400 text-xl leading-relaxed font-light max-w-2xl">
                    Configure transformer prompt temperature variables, calculate live API token fees, test cognitive outputs, and deploy to server node clusters instantly.
                </p>
                <div className="flex gap-4 pt-4">
                    <Button className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-5 rounded-2xl font-bold shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                        Deploy Model Hub
                    </Button>
                </div>
            </div>

            {/* AI Control widgets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 border-t border-zinc-800 pt-12">
                {[
                    { title: "Cognitive Prompt", desc: "Fine-tune model temperature and decay rates." },
                    { title: "Engine Telemetry", desc: "Stream response metrics at sub-millisecond latencies." },
                    { title: "Cluster Status", desc: "Deploy to 84 edge nodes with automated failover." }
                ].map((widget, i) => (
                    <div key={i} className="p-6 bg-white/[0.02] border border-zinc-800 rounded-3xl space-y-3">
                        <span className="text-xs font-bold text-violet-400 uppercase">Feature 0{i + 1}</span>
                        <h4 className="font-bold text-lg text-white">{widget.title}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{widget.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// 36. News Editorial Preview
// ==========================================
function NewsEditorialPreview() {
    return (
        <div className="bg-white font-sans text-slate-900 space-y-6 p-8 border-4 border-slate-900 rounded-3xl">
            {/* Masthead */}
            <div className="border-b-4 border-red-700 pb-4 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black tracking-tight uppercase text-slate-900">THE_GLOBAL_CHRONICLE</h1>
                    <span className="text-xs font-bold text-slate-400 tracking-wider">Wednesday, May 20, 2026 // GENEVA</span>
                </div>
                <div className="hidden sm:flex gap-4 text-xs font-bold text-slate-500 uppercase">
                    <span>Dispatch</span>
                    <span>Editorial Board</span>
                    <span>Finance Ticker</span>
                </div>
            </div>

            {/* News Ticker marquee */}
            <div className="bg-red-700 text-white p-3 rounded-lg flex items-center gap-4 text-xs font-bold">
                <Badge className="bg-white text-red-700 border-0 font-black">BREAKING</Badge>
                <span className="truncate">Global carbon neutrality treaties officially finalized at Genevan summit... E-sports championship nets record attendance...</span>
            </div>

            {/* Newspaper Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                <div className="col-span-2 space-y-4 pr-4 border-r border-slate-200">
                    <Badge className="bg-red-100 text-red-700 border-0 rounded font-bold uppercase text-xs">SUMMIT COVERAGE</Badge>
                    <h2 className="text-4xl font-extrabold leading-tight text-slate-950">
                        Geneva finalizes binds for carbon neutrality pathways by 2045.
                    </h2>
                    <p className="text-slate-600 leading-relaxed font-light border-l-4 border-red-700 pl-4">
                        In a monumental shift for international environmental policies, 195 delegations signed compliance binding grids to enforce emissions reductions benchmarks globally.
                    </p>
                </div>
                <div className="space-y-6 pl-2">
                    <span className="text-xs font-bold text-red-700 uppercase tracking-widest block border-b border-slate-200 pb-2">Latest Bulletins</span>
                    {[
                        "Transformers cluster scales database bounds.",
                        "Obsidian residencies list reaches new peak values.",
                        "Macro indicators stable ahead of central decisions."
                    ].map((item, i) => (
                        <div key={i} className="space-y-1">
                            <span className="text-[10px] text-slate-400 font-bold">0{i + 1} • NEWS DISPATCH</span>
                            <h4 className="font-bold text-slate-800 leading-snug hover:text-red-700 cursor-pointer">{item}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 37. Restaurant Premium Preview
// ==========================================
function RestaurantPremiumPreview() {
    return (
        <div className="bg-[#FFFBEB] font-serif text-[#78350F] space-y-12 p-12 rounded-[40px] border border-[#78350F]/15">
            {/* Luxury Dining Hero */}
            <div className="bg-[#451A03] rounded-3xl p-12 text-white text-center space-y-6 relative overflow-hidden">
                <span className="text-amber-400 italic text-2xl">Michelin Star Experience</span>
                <h1 className="text-7xl font-bold text-white">Le Jardin Doré.</h1>
                <p className="text-amber-200 text-xl font-light max-w-2xl mx-auto italic">
                    Exquisite gourmet menus, seasonal organic truffles, elegant velvet reservation desks, and curated chef selectors.
                </p>
                <div className="flex justify-center gap-4 pt-4 font-sans">
                    <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-5 rounded-none">
                        Reserve a Velvet Table
                    </Button>
                </div>
            </div>

            {/* Menu Sections */}
            <div className="space-y-8">
                <h2 className="text-3xl font-bold text-center border-b border-[#78350F]/10 pb-4 max-w-md mx-auto">Seasonal Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { course: "Entrée", dish: "Velouté of Truffles", desc: "Black truffles, fresh cream glaze, sage crisps.", price: "$38" },
                        { course: "Plat Principal", dish: "Wagyu A5 Medallion", desc: "Seared tenderloin, bone marrow emulsion, micro-shoots.", price: "$145" },
                        { course: "Dessert", dish: "Grand Cru Mousse", desc: "Dark Valrhona cacao, salted honey honeycomb, gold sheets.", price: "$28" }
                    ].map((menu, i) => (
                        <div key={i} className="border-t border-amber-300 pt-6 space-y-2 text-center">
                            <span className="text-xs uppercase font-sans text-[#D97706] font-bold">{menu.course}</span>
                            <h3 className="text-2xl font-bold">{menu.dish}</h3>
                            <p className="text-sm italic text-[#78350F]/70">{menu.desc}</p>
                            <span className="font-sans font-bold text-lg text-amber-700 block pt-2">{menu.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 38. Productivity Tool Preview
// ==========================================
function ProductivityToolPreview() {
    return (
        <div className="bg-white font-sans text-slate-800 rounded-3xl border border-slate-100 shadow-xl overflow-hidden" style={{ minHeight: 650 }}>
            {/* Header */}
            <div className="border-b px-6 py-4 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                        <Zap className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-900">FlowSpace.</span>
                </div>
                <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-700 border-0">ACTIVE BOARD</Badge>
                </div>
            </div>

            {/* Kanban dashboard */}
            <div className="p-8 bg-slate-50/50 min-h-[450px]">
                <h2 className="text-2xl font-extrabold text-slate-950 mb-6">Sprint Planner</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "To Do Tasks", count: 3, tasks: ["Redesign product layouts", "Audit CSS variable sheets"] },
                        { name: "In Progress", count: 2, tasks: ["Enriching template previews"] },
                        { name: "Completed", count: 4, tasks: ["Establish planning mode", "Task list configuration"] }
                    ].map((col, i) => (
                        <div key={i} className="space-y-4">
                            <div className="flex justify-between items-center font-bold text-sm text-slate-400">
                                <span>{col.name}</span>
                                <Badge variant="secondary" className="rounded-full">{col.count}</Badge>
                            </div>
                            {col.tasks.map((task, j) => (
                                <Card key={j} className="border-0 shadow-sm rounded-2xl p-4 bg-white space-y-3 cursor-pointer hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-slate-800 text-sm leading-snug">{task}</h4>
                                    <div className="flex justify-between items-center pt-2">
                                        <Badge className="bg-blue-50 text-blue-600 border-0 text-[10px]">Sprint v4</Badge>
                                        <CheckCircle className={`w-4 h-4 ${i === 2 ? "text-green-500" : "text-slate-200"}`} />
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

// ==========================================
// 39. Art Gallery Preview
// ==========================================
function ArtGalleryPreview() {
    return (
        <div className="bg-white text-stone-900 font-sans space-y-12 p-12 border rounded-3xl">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-6">
                <div>
                    <span className="text-2xl font-black tracking-[0.2em] uppercase">MUSEUM_VECTR</span>
                    <div className="text-[10px] text-stone-400 tracking-widest uppercase font-bold">CONTEMPORARY EXHIBITION HALLS</div>
                </div>
                <Button className="border-stone-900 text-stone-900 hover:bg-stone-50 rounded-none border px-6">
                    Order Access Tickets
                </Button>
            </div>

            {/* Exposition showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">SPOTLIGHT EXHIBITION</span>
                    <h2 className="text-5xl font-black leading-tight text-stone-950">Infinite Coordinates &amp; Forms.</h2>
                    <p className="text-stone-500 leading-relaxed font-light">
                        Curated critiques by Elena Voss, ticket order pricing matrix guides, and minimalist art panels.
                    </p>
                    <div className="text-sm text-stone-400 font-bold">
                        Exhibition Dates: May 1 – July 20, 2026 // Hall A &amp; C
                    </div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 to-fuchsia-100 border rounded-2xl flex items-center justify-center text-stone-300 font-bold text-xl">
                    [ ABSTRACT EXPOSITION ]
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 40. Gaming News Preview
// ==========================================
function GamingNewsPreview() {
    return (
        <div className="bg-[#090D1A] text-white font-sans space-y-8 p-8 border border-zinc-800 rounded-3xl">
            {/* Banner Header */}
            <div className="bg-[#111A35] p-6 border-b-2 border-yellow-400/20 rounded-2xl flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center text-indigo-950 font-bold">
                        🎮
                    </div>
                    <span className="text-2xl font-black text-yellow-400 tracking-tight">GAME_RIFT</span>
                </div>
                <Badge className="bg-red-500/20 text-red-400 border border-red-500/30">LATEST REVIEWS</Badge>
            </div>

            {/* Featured Article */}
            <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-2xl p-8 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
                <Badge className="bg-yellow-400 text-indigo-950 font-black border-0">HOT STORY</Badge>
                <h2 className="text-4xl font-black leading-snug">
                    Stellar Odyssey 2 Redefines Open World RPGs at 9.4 Score.
                </h2>
                <p className="text-zinc-400 leading-relaxed text-sm">
                    Read extensive game patch list analysis digests, e-sports schedules updates, video game score indices, and review blogs.
                </p>
                <Button className="bg-yellow-400 hover:bg-yellow-300 text-indigo-950 font-black px-6 py-4 rounded-xl text-xs uppercase tracking-wider">
                    Read Full Article
                </Button>
            </div>
        </div>
    );
}

// ==========================================
// 41. Default Preview
// ==========================================
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
