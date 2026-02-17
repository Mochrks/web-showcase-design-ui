"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Template } from "@/lib/templates-data";
import { Eye, Download, Palette } from "lucide-react";

interface TemplateCardProps {
    template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
    return (
        <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
            {/* Preview Image */}
            <div className="relative aspect-video overflow-hidden bg-muted">
                {/* Mockup UI Preview */}
                <div className="absolute inset-0 p-4">
                    {/* Mini Browser Window */}
                    <div className="bg-background rounded-lg shadow-lg h-full flex flex-col">
                        {/* Browser Header */}
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b">
                            <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 p-3 space-y-2">
                            {/* Header Bar */}
                            <div
                                className="h-8 rounded"
                                style={{ backgroundColor: template.colors.primary }}
                            ></div>

                            {/* Content Blocks */}
                            <div className="grid grid-cols-3 gap-2">
                                <div
                                    className="h-12 rounded opacity-60"
                                    style={{ backgroundColor: template.colors.secondary }}
                                ></div>
                                <div
                                    className="h-12 rounded opacity-60"
                                    style={{ backgroundColor: template.colors.accent }}
                                ></div>
                                <div
                                    className="h-12 rounded opacity-60"
                                    style={{ backgroundColor: template.colors.primary }}
                                ></div>
                            </div>

                            {/* Text Lines */}
                            <div className="space-y-1.5 pt-1">
                                <div className="h-1.5 bg-foreground/10 rounded w-3/4"></div>
                                <div className="h-1.5 bg-foreground/10 rounded w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Link href={`/templates/${template.slug}/preview`}>
                        <Button size="sm" variant="secondary">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                        </Button>
                    </Link>
                    <Link href={`/templates/${template.slug}/design-system`}>
                        <Button size="sm" variant="secondary">
                            <Palette className="w-4 h-4 mr-2" />
                            Components
                        </Button>
                    </Link>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {template.category}
                    </Badge>
                </div>
            </div>

            <CardContent className="p-4 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {template.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {template.description}
                </p>

                {/* Color Palette */}
                <div className="flex gap-1 mb-4">
                    {Object.values(template.colors).slice(0, 5).map((color, index) => (
                        <div
                            key={`color-${index}`}
                            className="w-6 h-6 rounded-full border-2 border-background shadow-sm"
                            style={{ background: color }}
                            title={color}
                        />
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                    <Link href={`/templates/${template.slug}/preview`} className="flex-1">
                        <Button variant="outline" className="w-full" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View Demo
                        </Button>
                    </Link>
                    <Link href={`/templates/${template.slug}/design-system`}>
                        <Button size="sm">
                            <Download className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
