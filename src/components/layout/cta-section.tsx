"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden" style={{ backgroundColor: "var(--canvas)" }}>
            {/* Atmospheric glow — red wash */}
            <div
                className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at top center, var(--accent-red-glow) 0%, transparent 55%)",
                }}
            />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 bg-grid-editorial opacity-15 pointer-events-none"
                style={{
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                    maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                }}
            />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Headline */}
                    <h2 className="text-display-xl text-[var(--ink)] mb-6">
                        Ready to build{" "}
                        <span className="text-[var(--charcoal)]">something remarkable?</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-subtitle text-[var(--body-text)] mb-10 max-w-xl mx-auto">
                        Start with any of our 40+ professional templates and customize it to match your vision.
                        High-performance, accessibility-first, production-ready.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                            className="inline-flex items-center justify-center cursor-pointer h-11 px-8 rounded-lg text-[14px] font-medium transition-all duration-200 bg-[var(--ink)] text-[var(--canvas)] hover:opacity-80 active:scale-[0.98] group"
                            onClick={() => {
                                document.getElementById("templates")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Browse All Templates
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        <button
                            className="inline-flex items-center justify-center cursor-pointer h-11 px-8 rounded-lg text-[14px] font-medium transition-all duration-200 text-[var(--ink)] hover:bg-[var(--surface-elevated)]"
                            style={{
                                backgroundColor: "var(--surface-elevated)",
                                border: "1px solid var(--hairline-strong)",
                            }}
                            onClick={() => {
                                window.open("https://ui.shadcn.com/docs", "_blank");
                            }}
                        >
                            View Documentation shadcn/ui
                        </button>
                    </div>

                    {/* Decorative hairline */}
                    <div className="mt-16 flex justify-center">
                        <div className="w-24 h-px" style={{ backgroundColor: "var(--hairline-strong)" }} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
