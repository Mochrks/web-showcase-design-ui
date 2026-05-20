"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ColorBends from "../ColorBends";

export function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
            style={{ backgroundColor: "var(--canvas)" }}
        >
            {/* ═══ ColorBends Background ═══ */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <ColorBends
                    rotation={90}
                    speed={0.2}
                    colors={["#06B6D4"]}
                    transparent
                    autoRotate={0}
                    scale={1}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0.15}
                    iterations={1}
                    intensity={1.5}
                    bandWidth={6}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>

            {/* ═══ Atmospheric Glow — subtle blue-orange wash ═══ */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] animate-pulse-glow"
                    style={{
                        background: "radial-gradient(ellipse at 40% 0%, rgba(0,117,255,0.12) 0%, transparent 50%), radial-gradient(ellipse at 60% 0%, rgba(255,89,0,0.08) 0%, transparent 50%)",
                    }}
                />
            </div>

            {/* ═══ Grid Pattern ═══ */}
            <div
                className="absolute inset-0 bg-grid-editorial opacity-30 pointer-events-none"
                style={{
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
            />

            {/* ═══ Hero Content ═══ */}
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-10"
                        style={{
                            backgroundColor: "var(--surface-elevated)",
                            border: "1px solid var(--hairline-strong)",
                        }}
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
                        <span className="text-[12px] font-medium text-[var(--body-text)] tracking-wide">
                            40+ Premium UI Templates
                        </span>
                    </motion.div>

                    {/* Main Headline — Serif Display */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-display-xxl text-[var(--ink)] mb-6"
                    >
                        UI Design for{" "}
                        <br className="hidden sm:block" />
                        <span className="text-[var(--ink)]">Modern Builders</span>
                    </motion.h1>

                    {/* Subtitle — Body text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-subtitle text-[var(--body-text)] mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Explore 40+ meticulously designed UI templates. From Neo-Brutalism to
                        Japanese Zen — diverse design systems with download-ready boilerplates
                        for Next.js and React.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3"
                    >
                        {/* Primary — White pill */}
                        <button
                            className="inline-flex items-center justify-center cursor-pointer h-10 px-6 rounded-lg text-[14px] font-medium transition-all duration-200 bg-[var(--ink)] text-[var(--canvas)] hover:opacity-80 active:scale-[0.98] group"
                            onClick={() => {
                                document.getElementById("templates")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Explore Collection
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>

                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        className="flex items-center justify-center gap-12 mt-16"
                    >
                        {[
                            { value: "40+", label: "Templates" },
                            { value: "2", label: "Frameworks" },
                            { value: "60+", label: "Components" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                            >
                                <div className="text-display-lg text-[var(--ink)]">{stat.value}</div>
                                <div className="text-[14px] text-[var(--mute)] mt-1 font-medium tracking-wide">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div
                    className="w-5 h-8 rounded-full flex items-start justify-center p-1.5"
                    style={{ border: "1px solid var(--hairline-strong)" }}
                >
                    <div className="w-1 h-1.5 rounded-full bg-[var(--mute)]" />
                </div>
            </motion.div>
        </section>
    );
}
