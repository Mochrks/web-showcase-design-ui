"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Template } from "@/lib/templates-data";
import { Eye, Download, Palette, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface TemplateCardProps {
    template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="h-full"
        >
            <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl h-full flex flex-col bg-card/50 backdrop-blur-sm">
                {/* Preview Image / Mockup */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted group-hover:bg-muted/30 transition-colors">
                    <div className="absolute inset-0 p-4 transition-transform duration-500 group-hover:scale-[1.02]">
                        {/* Mini Browser Window */}
                        <div className="bg-background rounded-lg shadow-2xl h-full flex flex-col overflow-hidden border">
                            {/* Browser Header */}
                            <div className="flex items-center justify-between px-3 py-2 border-b bg-muted/20">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-[8px] text-muted-foreground font-medium uppercase tracking-tighter opacity-50">
                                    {template.slug}.demo
                                </div>
                            </div>

                            {/* Content Area - Theme Specific Mockups */}
                            <div className="flex-1 p-3 overflow-hidden">
                                {template.slug === "neo-brutalism" ? (
                                    <div className="space-y-2">
                                        <div className="h-10 border-2 border-black shadow-[3px_3px_0_0_black] flex items-center px-2" style={{ backgroundColor: template.colors.primary }}>
                                            <div className="h-1 w-1/2 bg-black/20" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="h-12 border-2 border-black shadow-[3px_3px_0_0_black]" style={{ backgroundColor: template.colors.secondary }} />
                                            <div className="h-12 border-2 border-black shadow-[3px_3px_0_0_black]" style={{ backgroundColor: template.colors.accent }} />
                                        </div>
                                    </div>
                                ) : template.slug === "glassmorphism" ? (
                                    <div className="h-full relative overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-2 space-y-2">
                                        <div className="absolute top-2 right-2 w-12 h-12 bg-white/20 rounded-full blur-xl" />
                                        <div className="h-8 backdrop-blur-md bg-white/30 border border-white/20 rounded-lg" />
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="h-14 backdrop-blur-md bg-white/20 border border-white/20 rounded-xl" />
                                            <div className="h-14 backdrop-blur-md bg-white/10 border border-white/10 rounded-xl" />
                                        </div>
                                    </div>
                                ) : template.slug === "skeuomorphism-modern" ? (
                                    <div className="space-y-3 p-1">
                                        <div className="h-10 bg-slate-100 rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] border border-white/50" />
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="h-14 bg-slate-100 rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]" />
                                            <div className="h-14 bg-blue-500 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),inset_2px_2px_4px_rgba(255,255,255,0.3)]" />
                                        </div>
                                    </div>
                                ) : template.slug === "claymorphism" ? (
                                    <div className="space-y-3">
                                        <div className="h-10 rounded-3xl bg-blue-100 shadow-[8px_8px_16px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(0,0,0,0.05),inset_4px_4px_8px_white] border-2 border-white" />
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="h-14 rounded-[2rem] bg-indigo-50 shadow-[8px_8px_16px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(0,0,0,0.05),inset_4px_4px_8px_white] border-2 border-white" />
                                            <div className="h-14 rounded-[2rem] bg-indigo-500 shadow-[8px_8px_16px_rgba(59,130,246,0.2),inset_-4px_-4px_8px_rgba(0,0,0,0.1),inset_4px_4px_8px_rgba(255,255,255,0.2)] border-2 border-white/30" />
                                        </div>
                                    </div>
                                ) : template.slug === "retro-80s" ? (
                                    <div className="h-full bg-slate-900 rounded-lg p-2 flex flex-col border border-pink-500/30 overflow-hidden">
                                        <div className="h-1/2 bg-[linear-gradient(transparent_95%,rgba(244,63,94,0.3)_95%),linear-gradient(90deg,transparent_95%,rgba(244,63,94,0.3)_95%)] bg-[size:10px_10px] rounded border border-pink-500/20" />
                                        <div className="flex-1 pt-2">
                                            <div className="h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded skew-x-[-10deg] shadow-[2px_2px_0_cyan]" />
                                        </div>
                                    </div>
                                ) : template.slug === "retro-pixel-art" ? (
                                    <div className="h-full bg-blue-900 border-4 border-white p-2 space-y-2 pixelated">
                                        <div className="h-8 bg-white" />
                                        <div className="grid grid-cols-3 gap-1">
                                            {[1, 2, 3].map(i => <div key={i} className="h-6 bg-yellow-400 border-2 border-white" />)}
                                        </div>
                                        <div className="h-2 bg-red-500 w-1/2" />
                                    </div>
                                ) : template.category === "Dashboard" || template.category === "Fintech" ? (
                                    <div className="flex gap-2 h-full">
                                        <div className="w-8 border-r h-full space-y-2 pr-1">
                                            {[1, 2, 3].map(i => <div key={i} className="h-2 w-2 rounded-full bg-muted" />)}
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <div className="h-10 rounded-lg flex items-end gap-1 p-1 bg-muted/30">
                                                {[30, 60, 45, 80, 50].map((h, i) => (
                                                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: template.colors.primary }} />
                                                ))}
                                            </div>
                                            <div className="space-y-1">
                                                <div className="h-1.5 w-full bg-muted rounded" />
                                                <div className="h-1.5 w-2/3 bg-muted rounded" />
                                            </div>
                                        </div>
                                    </div>
                                ) : template.category === "Fashion" || template.category === "Food" ? (
                                    <div className="space-y-3">
                                        <div className="h-16 rounded-xl relative overflow-hidden" style={{ backgroundColor: template.colors.secondary }}>
                                            <div className="absolute top-2 left-2 h-2 w-1/2 bg-primary/20 rounded-full" />
                                            <div className="absolute bottom-2 left-2 h-4 w-4 rounded-full bg-primary/40" />
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="h-8 rounded-lg bg-muted/40 flex items-center justify-center">
                                                    <div className="w-1/2 h-1 bg-primary/10 rounded" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : template.slug === "cyberpunk-futuristic" || template.category === "Gaming" ? (
                                    <div className="space-y-3 font-mono">
                                        <div className="h-12 border-l-4 border-primary bg-primary/5 flex items-center px-2 relative skew-x-[-10deg]">
                                            <div className="h-1 w-1/3 bg-primary" />
                                            <div className="absolute top-0 right-0 w-2 h-full bg-primary/20" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 skew-x-[-10deg]">
                                            <div className="h-10 bg-accent/20 border-r-2 border-accent" />
                                            <div className="h-10 bg-primary/20 border-r-2 border-primary" />
                                        </div>
                                    </div>
                                ) : template.category === "Zen" || template.slug === "minimalist-clean" ? (
                                    <div className="space-y-4 flex flex-col items-center py-2">
                                        <div className="h-0.5 w-1/3 bg-foreground/30" />
                                        <div className="h-12 w-full flex items-center justify-center">
                                            <div className="w-2/3 h-full border border-foreground/5 rounded-sm" />
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="h-0.5 w-8 bg-foreground/20" />
                                            <div className="h-0.5 w-8 bg-foreground/20" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="h-12 rounded-2xl flex items-center justify-center shadow-inner" style={{ backgroundColor: template.colors.primary + '20' }}>
                                            <div className="h-1 w-1/3 rounded-full" style={{ backgroundColor: template.colors.primary }} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="h-10 rounded-xl" style={{ backgroundColor: template.colors.secondary }} />
                                            <div className="h-10 rounded-xl" style={{ backgroundColor: template.colors.accent }} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="h-1 w-full bg-muted rounded" />
                                            <div className="h-1 w-4/5 bg-muted rounded" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Gradient Decorative Orbs */}
                    <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
                        <div
                            className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[40px] opacity-20 transition-transform duration-700 group-hover:scale-150"
                            style={{ backgroundColor: template.colors.primary }}
                        />
                        <div
                            className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[40px] opacity-20 transition-transform duration-700 group-hover:scale-150"
                            style={{ backgroundColor: template.colors.accent }}
                        />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="flex flex-col gap-2 w-full max-w-[140px]"
                        >
                            <Link href={`/templates/${template.slug}/preview`}>
                                <Button size="sm" className="w-full shadow-lg">
                                    <Eye className="w-3.5 h-3.5 mr-2" />
                                    Live Demo
                                </Button>
                            </Link>
                            <Link href={`/templates/${template.slug}/design-system`}>
                                <Button size="sm" variant="outline" className="w-full bg-background/50 hover:bg-background">
                                    <Palette className="w-3.5 h-3.5 mr-2" />
                                    Components
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 z-10">
                        <Badge variant="outline" className="bg-background/90 backdrop-blur-md shadow-sm border font-semibold px-3">
                            {template.category}
                        </Badge>
                    </div>
                </div>

                <CardContent className="p-5 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                            {template.name}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                        {template.description}
                    </p>

                    {/* Color Palette + Tags */}
                    <div className="mt-auto space-y-4">
                        <div className="flex gap-1.5">
                            {Object.values(template.colors).slice(0, 5).map((color, index) => (
                                <div
                                    key={index}
                                    className="w-5 h-5 rounded-full border-2 border-background ring-1 ring-border shadow-sm transition-transform hover:scale-125"
                                    style={{ background: color }}
                                    title={color}
                                />
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                            {template.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground bg-muted/50 px-2 py-0.5 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Quick Action Footer */}
                        <div className="pt-4 border-t flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors cursor-pointer group/footer">
                            <Link href={`/templates/${template.slug}/preview`} className="flex items-center">
                                View Full Showcase
                                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/footer:translate-x-1 transition-transform" />
                            </Link>
                            <Download className="w-3.5 h-3.5 opacity-40" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
