"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { templates, categories } from "@/lib/templates-data";
import { TemplateCard } from "@/components/template-card";
import { Search } from "lucide-react";

export function TemplateGrid() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTemplates = templates.filter((template) => {
        const matchesCategory =
            selectedCategory === "All" || template.category === selectedCategory;
        const matchesSearch =
            template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.tags.some((tag) =>
                tag.toLowerCase().includes(searchQuery.toLowerCase())
            );
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="templates" className="relative py-24" style={{ backgroundColor: "var(--canvas)" }}>
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-display-xl text-[var(--ink)] mb-6">
                            Explore Templates
                        </h2>
                        <p className="text-subtitle text-[var(--body-text)] max-w-2xl mx-auto">
                            Choose from 40+ professionally designed UI templates, each with unique
                            styling and complete component libraries
                        </p>
                    </motion.div>
                </div>

                {/* Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-md mx-auto mb-8"
                >
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--mute)]" />
                        <input
                            type="text"
                            placeholder="Search templates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-10 pl-10 pr-4 rounded-lg text-[14px] text-[var(--ink)] placeholder:text-[var(--stone)] outline-none transition-all duration-200 focus:border-[var(--ink)]"
                            style={{
                                backgroundColor: "var(--surface-card)",
                                border: "1px solid var(--hairline-strong)",
                            }}
                        />
                    </div>
                </motion.div>

                {/* Category Filter — Pill Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex flex-wrap gap-2 justify-center mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`h-9 px-4 rounded-lg text-[14px] font-medium transition-all duration-200 ${
                                selectedCategory === category
                                    ? "bg-[var(--ink)] text-[var(--canvas)]"
                                    : "text-[var(--charcoal)] hover:text-[var(--ink)] hover:bg-[var(--surface-elevated)]"
                            }`}
                            style={
                                selectedCategory !== category
                                    ? {
                                          backgroundColor: "var(--surface-card)",
                                          border: "1px solid var(--hairline-strong)",
                                      }
                                    : undefined
                            }
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.04 }}
                        >
                            <TemplateCard template={template} />
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredTemplates.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-heading-md text-[var(--mute)]">
                            No templates found
                        </p>
                        <p className="text-[14px] text-[var(--stone)] mt-2">
                            Try adjusting your search or filter criteria
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
