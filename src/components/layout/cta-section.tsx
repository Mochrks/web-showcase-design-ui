"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-muted/30" />
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-4">
                        Ready to Build Something{" "}
                        <span className="text-primary">
                            Amazing?
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
                        Start with a professional template and customize it to match your vision.
                        All templates are free, open-source, and production-ready.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group"
                            onClick={() => {
                                const templatesSection = document.getElementById('templates');
                                templatesSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Browse All Templates
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg border-2"
                            onClick={() => {
                                window.open('https://ui.shadcn.com/docs', '_blank');
                            }}
                        >
                            View Documentation
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
