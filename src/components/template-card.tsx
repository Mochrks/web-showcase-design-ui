"use client";

import Link from "next/link";
import { Template } from "@/lib/templates-data";
import { Eye, Palette, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

interface TemplateCardProps {
    template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full"
        >
            <div
                className="group overflow-hidden rounded-xl h-full flex flex-col transition-all duration-300 hover:border-[var(--charcoal)]"
                style={{
                    backgroundColor: "var(--surface-card)",
                    border: "1px solid var(--hairline-strong)",
                }}
            >
                {/* Preview Area */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 p-3 transition-transform duration-500 group-hover:scale-[1.02]">
                        {/* Mini Code Window */}
                        <div
                            className="rounded-lg h-full flex flex-col overflow-hidden"
                            style={{
                                backgroundColor: "var(--surface-deep)",
                                border: "1px solid var(--hairline-strong)",
                            }}
                        >
                            {/* Traffic Light Header */}
                            <div
                                className="flex items-center justify-between px-3 py-2"
                                style={{ borderBottom: "1px solid var(--hairline)" }}
                            >
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent-red)" }} />
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent-yellow)" }} />
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent-green)" }} />
                                </div>
                                <div className="text-[8px] font-mono text-[var(--stone)] uppercase tracking-wider">
                                    {template.slug}.ui
                                </div>
                            </div>

                            {/* Content Area — Theme-specific mockups */}
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
                                        <div className="w-8 h-full space-y-2 pr-1" style={{ borderRight: "1px solid var(--hairline)" }}>
                                            {[1, 2, 3].map(i => <div key={i} className="h-2 w-2 rounded-full bg-[var(--stone)]" />)}
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <div className="h-10 rounded-lg flex items-end gap-1 p-1" style={{ backgroundColor: "var(--surface-elevated)" }}>
                                                {[30, 60, 45, 80, 50].map((h, i) => (
                                                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: template.colors.primary }} />
                                                ))}
                                            </div>
                                            <div className="space-y-1">
                                                <div className="h-1.5 w-full rounded" style={{ backgroundColor: "var(--hairline-strong)" }} />
                                                <div className="h-1.5 w-2/3 rounded" style={{ backgroundColor: "var(--hairline)" }} />
                                            </div>
                                        </div>
                                    </div>
                                ) : template.category === "Fashion" || template.category === "Food" ? (
                                    <div className="space-y-3">
                                        <div className="h-16 rounded-xl relative overflow-hidden" style={{ backgroundColor: template.colors.secondary }}>
                                            <div className="absolute top-2 left-2 h-2 w-1/2 bg-white/20 rounded-full" />
                                            <div className="absolute bottom-2 left-2 h-4 w-4 rounded-full bg-white/40" />
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--surface-elevated)" }}>
                                                    <div className="w-1/2 h-1 rounded" style={{ backgroundColor: "var(--hairline-strong)" }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : template.slug === "cyberpunk-futuristic" || template.category === "Gaming" ? (
                                    <div className="space-y-3 font-mono">
                                        <div className="h-12 border-l-4 flex items-center px-2 relative skew-x-[-10deg]" style={{ borderColor: template.colors.primary, backgroundColor: template.colors.primary + '10' }}>
                                            <div className="h-1 w-1/3" style={{ backgroundColor: template.colors.primary }} />
                                            <div className="absolute top-0 right-0 w-2 h-full" style={{ backgroundColor: template.colors.primary + '30' }} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 skew-x-[-10deg]">
                                            <div className="h-10 border-r-2" style={{ backgroundColor: template.colors.accent + '20', borderColor: template.colors.accent }} />
                                            <div className="h-10 border-r-2" style={{ backgroundColor: template.colors.primary + '20', borderColor: template.colors.primary }} />
                                        </div>
                                    </div>
                                ) : template.category === "Zen" || template.slug === "minimalist-clean" ? (
                                    <div className="space-y-4 flex flex-col items-center py-2">
                                        <div className="h-0.5 w-1/3" style={{ backgroundColor: "var(--hairline-strong)" }} />
                                        <div className="h-12 w-full flex items-center justify-center">
                                            <div className="w-2/3 h-full rounded-sm" style={{ border: "1px solid var(--hairline)" }} />
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="h-0.5 w-8" style={{ backgroundColor: "var(--hairline-strong)" }} />
                                            <div className="h-0.5 w-8" style={{ backgroundColor: "var(--hairline-strong)" }} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: template.colors.primary + '15' }}>
                                            <div className="h-1 w-1/3 rounded-full" style={{ backgroundColor: template.colors.primary }} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="h-10 rounded-lg" style={{ backgroundColor: template.colors.secondary }} />
                                            <div className="h-10 rounded-lg" style={{ backgroundColor: template.colors.accent }} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="h-1 w-full rounded" style={{ backgroundColor: "var(--hairline-strong)" }} />
                                            <div className="h-1 w-4/5 rounded" style={{ backgroundColor: "var(--hairline)" }} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Hover Overlay — always dark, so use hardcoded colors */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-6"
                        style={{
                            backgroundColor: "rgba(0,0,0,0.85)",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <div className="flex flex-col gap-2 w-full max-w-[160px]">
                            <Link href={`/templates/${template.slug}/preview`}>
                                <button
                                    className="cursor-pointer w-full h-9 rounded-lg text-[14px] font-medium transition-colors flex items-center justify-center gap-2"
                                    style={{
                                        backgroundColor: "#fcfdff",
                                        color: "#000000",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#e0e4e8"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fcfdff"; }}
                                >
                                    <Eye className="w-3.5 h-3.5" />
                                    Live Demo
                                </button>
                            </Link>
                            <Link href={`/templates/${template.slug}/design-system`}>
                                <button
                                    className="cursor-pointer w-full h-9 rounded-lg text-[14px] font-medium transition-colors flex items-center justify-center gap-2"
                                    style={{
                                        backgroundColor: "rgba(255,255,255,0.08)",
                                        color: "#fcfdff",
                                        border: "1px solid rgba(255,255,255,0.14)",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.16)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
                                >
                                    <Palette className="w-3.5 h-3.5" />
                                    Components
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 z-10">
                        <span
                            className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium text-[var(--body-text)]"
                            style={{
                                backgroundColor: "var(--surface-elevated)",
                                border: "1px solid var(--hairline-strong)",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            {template.category}
                        </span>
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="font-medium text-[18px] text-[var(--ink)] mb-1.5 group-hover:text-[var(--accent-blue)] transition-colors">
                        {template.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-[var(--mute)] mb-5 line-clamp-2 leading-relaxed">
                        {template.description}
                    </p>

                    {/* Color Palette + Tags */}
                    <div className="mt-auto space-y-3">
                        {/* Color dots */}
                        <div className="flex gap-1.5">
                            {Object.values(template.colors).slice(0, 5).map((color, index) => (
                                <div
                                    key={index}
                                    className="w-4 h-4 rounded-full transition-transform hover:scale-125"
                                    style={{
                                        background: color,
                                        border: "1px solid var(--hairline-strong)",
                                    }}
                                    title={color}
                                />
                            ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                            {template.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] uppercase tracking-widest font-medium px-2 py-0.5 rounded"
                                    style={{
                                        color: "var(--ash)",
                                        backgroundColor: "var(--surface-elevated)",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Footer Action */}
                        <div
                            className="pt-3 flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-[var(--mute)] group-hover:text-[var(--ink)] transition-colors"
                            style={{ borderTop: "1px solid var(--hairline)" }}
                        >
                            <Link
                                href={`/templates/${template.slug}/preview`}
                                className="flex items-center group/footer"
                            >
                                View Full Showcase
                                <ArrowRight className="ml-1.5 w-3 h-3 group-hover/footer:translate-x-0.5 transition-transform" />
                            </Link>
                            <Download className="w-3 h-3 opacity-40" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
