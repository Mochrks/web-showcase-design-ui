"use client";

import { motion } from "framer-motion";
import { Palette, Download, Code, Zap, Layers, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        icon: Palette,
        title: "20 Unique Themes",
        description: "From Neo Brutalism to Glassmorphism, explore diverse design styles",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        icon: Download,
        title: "Instant Download",
        description: "Get complete boilerplate packages ready for Next.js or React",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Code,
        title: "shadcn/ui Components",
        description: "Built with the best component library for React applications",
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        icon: Zap,
        title: "Production Ready",
        description: "Clean code, TypeScript, and best practices out of the box",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: Layers,
        title: "Design System",
        description: "Preview all components styled for each template theme",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: Sparkles,
        title: "Fully Customizable",
        description: "Tailwind CSS configuration and theme tokens included",
        gradient: "from-violet-500 to-purple-500",
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Everything You Need to{" "}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Start Building
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Professional UI templates with complete design systems, ready to download
                            and customize for your next project
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                                <CardContent className="p-6">
                                    <div
                                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-6 py-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="font-medium">
                            All templates include Tailwind CSS config, color palettes, and component examples
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
