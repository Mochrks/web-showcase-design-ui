"use client";

import { useState } from "react";
import { Template } from "@/lib/templates-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Copy, Check } from "lucide-react";

interface ColorPaletteEditorProps {
    template: Template;
    onColorsChange: (colors: Template["colors"]) => void;
}

export function ColorPaletteEditor({ template, onColorsChange }: ColorPaletteEditorProps) {
    const [colors, setColors] = useState(template.colors);
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const handleColorChange = (key: keyof Template["colors"], value: string) => {
        const newColors = { ...colors, [key]: value };
        setColors(newColors);
        onColorsChange(newColors);
    };

    const resetColors = () => {
        setColors(template.colors);
        onColorsChange(template.colors);
    };

    const copyColor = (color: string) => {
        navigator.clipboard.writeText(color);
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    const colorFields: Array<{
        key: keyof Template["colors"];
        label: string;
        description: string;
    }> = [
            { key: "primary", label: "Primary", description: "Main brand color" },
            { key: "secondary", label: "Secondary", description: "Supporting color" },
            { key: "accent", label: "Accent", description: "Highlight color" },
            { key: "background", label: "Background", description: "Page background" },
            { key: "foreground", label: "Foreground", description: "Text color" },
        ];

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Color Palette</CardTitle>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={resetColors}
                    className="gap-2"
                >
                    <RefreshCw className="w-4 h-4" />
                    Reset
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                {colorFields.map(({ key, label, description }) => (
                    <div key={key} className="space-y-2">
                        <Label htmlFor={key} className="text-sm font-medium">
                            {label}
                        </Label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Input
                                    id={key}
                                    type="text"
                                    value={colors[key]}
                                    onChange={(e) => handleColorChange(key, e.target.value)}
                                    className="pr-20"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                    <div
                                        className="w-8 h-8 rounded border-2 border-border cursor-pointer"
                                        style={{
                                            background: colors[key].includes("gradient")
                                                ? colors[key]
                                                : colors[key]
                                        }}
                                        onClick={() => {
                                            const input = document.createElement("input");
                                            input.type = "color";
                                            input.value = colors[key].startsWith("#") ? colors[key] : "#000000";
                                            input.onchange = (e) => {
                                                const target = e.target as HTMLInputElement;
                                                handleColorChange(key, target.value);
                                            };
                                            input.click();
                                        }}
                                    />
                                    <button
                                        onClick={() => copyColor(colors[key])}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {copiedColor === colors[key] ? (
                                            <Check className="w-4 h-4 text-green-500" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">{description}</p>
                    </div>
                ))}

                {/* Color Preview */}
                <div className="pt-4 border-t">
                    <h4 className="text-sm font-medium mb-3">Preview</h4>
                    <div className="grid grid-cols-5 gap-2">
                        {colorFields.map(({ key, label }) => (
                            <div key={key} className="space-y-1">
                                <div
                                    className="w-full h-16 rounded-lg border-2 border-border"
                                    style={{
                                        background: colors[key].includes("gradient")
                                            ? colors[key]
                                            : colors[key],
                                    }}
                                />
                                <p className="text-xs text-center text-muted-foreground truncate">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
