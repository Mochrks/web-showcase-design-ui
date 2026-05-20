"use client";

import { motion } from "framer-motion";
import { Palette, Download, Code, Zap, Layers, Sparkles } from "lucide-react";

const features = [
    {
        icon: Palette,
        title: "20 Unique Themes",
        description: "From Neo Brutalism to Glassmorphism, explore diverse design styles crafted for real products",
        accentColor: "var(--accent-orange)",
    },
    {
        icon: Download,
        title: "Instant Download",
        description: "Get complete boilerplate packages ready for Next.js or React — production-grade from day one",
        accentColor: "var(--accent-blue)",
    },
    {
        icon: Code,
        title: "shadcn/ui Components",
        description: "Built with the best component library for React applications, fully typed and accessible",
        accentColor: "var(--accent-green)",
    },
    {
        icon: Zap,
        title: "Production Ready",
        description: "Clean code, TypeScript, and best practices out of the box — deploy with confidence",
        accentColor: "var(--accent-yellow)",
    },
    {
        icon: Layers,
        title: "Design System",
        description: "Preview all components styled for each template theme with full token documentation",
        accentColor: "var(--accent-red)",
    },
    {
        icon: Sparkles,
        title: "Fully Customizable",
        description: "Tailwind CSS configuration and theme tokens included — make it yours in minutes",
        accentColor: "var(--accent-blue)",
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="relative py-24" style={{ backgroundColor: "var(--canvas)" }}>
            {/* Atmospheric glow */}
            <div
                className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at top center, var(--accent-green-glow) 0%, transparent 60%)",
                }}
            />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-display-xl text-[var(--ink)] mb-6">
                            Everything you need
                        </h2>
                        <p className="text-subtitle text-[var(--body-text)] max-w-2xl mx-auto">
                            Professional UI templates with complete design systems, ready to download
                            and customize for your next project
                        </p>
                    </motion.div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div
                                className="group h-full p-8 rounded-xl transition-all duration-300 hover:bg-[var(--surface-elevated)]"
                                style={{
                                    backgroundColor: "var(--surface-card)",
                                    border: "1px solid var(--hairline-strong)",
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `color-mix(in srgb, ${feature.accentColor} 15%, transparent)`,
                                    }}
                                >
                                    <feature.icon
                                        className="w-5 h-5"
                                        style={{ color: feature.accentColor }}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-heading-md text-[var(--ink)] mb-2">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[16px] leading-[1.5] text-[var(--body-text)]" style={{ letterSpacing: "-0.8px" }}>
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Info Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-5 py-2"
                        style={{
                            backgroundColor: "var(--surface-elevated)",
                            border: "1px solid var(--hairline-strong)",
                        }}
                    >
                        <Sparkles className="w-4 h-4 text-[var(--accent-yellow)]" />
                        <span className="text-[14px] font-medium text-[var(--body-text)] tracking-[0.35px]">
                            All templates include Tailwind CSS config, color palettes, and component examples
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
