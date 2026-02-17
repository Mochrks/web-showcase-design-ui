"use client";

import { Template } from "@/lib/templates-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Copy, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { TemplatePreview } from "@/components/template-preview";
import { downloadTemplate, copyToClipboard, formatColorPalette } from "@/lib/download-utils";

interface PreviewContentProps {
    template: Template;
}

export function PreviewContent({ template }: PreviewContentProps) {
    const [copied, setCopied] = useState(false);

    const handleCopyPalette = () => {
        copyToClipboard(formatColorPalette(template));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = async (framework: "nextjs" | "react") => {
        await downloadTemplate(template, framework);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b sticky top-0 bg-background/80 backdrop-blur-lg z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/">
                                <Button variant="ghost" size="sm">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back
                                </Button>
                            </Link>
                            <div>
                                <h1 className="text-xl font-bold">{template.name}</h1>
                                <p className="text-sm text-muted-foreground">Preview Demo</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Link href={`/templates/${template.slug}/design-system`}>
                                <Button variant="outline">View Components</Button>
                            </Link>
                            <Button
                                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                                onClick={() => handleDownload("nextjs")}
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview Content */}
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Template Info */}
                    <Card className="mb-8">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold mb-2">{template.name}</h2>
                                    <p className="text-muted-foreground mb-4">{template.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {template.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="font-semibold">Features:</h3>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                            {template.features.map((feature) => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Download Options */}
                                    <div className="mt-6 space-y-3">
                                        <h3 className="font-semibold">Download Options:</h3>
                                        <div className="flex gap-3">
                                            <Button
                                                onClick={() => handleDownload("nextjs")}
                                                className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                                            >
                                                <Download className="w-4 h-4 mr-2" />
                                                Next.js Version
                                            </Button>
                                            <Button
                                                onClick={() => handleDownload("react")}
                                                variant="outline"
                                                className="flex-1"
                                            >
                                                <Download className="w-4 h-4 mr-2" />
                                                React Version
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-64">
                                    <h3 className="font-semibold mb-3">Color Palette</h3>
                                    <div className="space-y-2">
                                        {Object.entries(template.colors).map(([name, color]) => (
                                            <div key={name} className="flex items-center gap-2">
                                                <div
                                                    className="w-10 h-10 rounded border-2 border-background shadow-sm"
                                                    style={{ background: color }}
                                                />
                                                <div className="flex-1">
                                                    <div className="text-sm font-medium capitalize">{name}</div>
                                                    <div className="text-xs text-muted-foreground font-mono">
                                                        {color.length > 20 ? color.substring(0, 20) + "..." : color}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full mt-4"
                                        onClick={handleCopyPalette}
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-4 h-4 mr-2" />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4 mr-2" />
                                                Copy Palette
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Demo Preview */}
                    <Card>
                        <CardContent className="p-0">
                            <TemplatePreview template={template} />
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
