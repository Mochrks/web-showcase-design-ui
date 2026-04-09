"use client";

import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import { motion } from "framer-motion";


export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <BackgroundRippleEffect />
            {/* ═══ Hero Content ═══ */}
            <div className="container mx-auto px-4 relative z-10 pointer-events-none">
                <div className="max-w-5xl mx-auto text-center pointer-events-auto">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-background/60 border border-border/60 rounded-full px-4 py-2 mb-8 backdrop-blur-md"
                    >
                        <Sparkles className="w-4 h-4 text-foreground" />
                        <span className="text-sm font-medium">40+ Premium UI Templates</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-4"
                    >
                        Experience Next-Gen{" "}
                        <span className="text-muted-foreground">
                            UI Design
                        </span>
                        <br />
                        Crafted for Modern Apps
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto px-4"
                    >
                        Explore 40+ meticulously designed UI templates. From Neo-Brutalism to
                        Japanese Zen, discover diverse design systems and download high-performance
                        boilerplates for Next.js and React.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
                    >
                        <Button
                            size="lg"
                            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group shadow-xl"
                            onClick={() => {
                                document.getElementById("templates")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Explore Collection
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-2 shadow-sm backdrop-blur-sm"
                            onClick={() => {
                                document.getElementById("templates")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                            Get Started
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-2xl mx-auto px-4"
                    >
                        {[
                            { value: "40+", label: "Ready Templates" },
                            { value: "2", label: "Core Frameworks" },
                            { value: "60+", label: "Components" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
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
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-foreground/40 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
