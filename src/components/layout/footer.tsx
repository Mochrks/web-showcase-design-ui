"use client";

import { Github, Linkedin } from "lucide-react";

export function Footer() {
    const footerLinks = {
        Product: [
            { label: "Templates", href: "#templates" },
            { label: "Features", href: "#features" },
            { label: "Components", href: "https://ui.shadcn.com/docs/components" },
            { label: "Documentation", href: "https://ui.shadcn.com/docs" },
        ],
        Resources: [
            { label: "Next.js", href: "https://nextjs.org" },
            { label: "React", href: "https://react.dev" },
            { label: "Tailwind CSS", href: "https://tailwindcss.com" },
            { label: "shadcn/ui", href: "https://ui.shadcn.com" },
        ],
        Company: [
            { label: "GitHub", href: "https://github.com/mochrks" },
            { label: "Portfolio", href: "https://github.com/mochrks" },
            { label: "Contact", href: "mailto:contact@mochrks.dev" },
            { label: "About", href: "https://github.com/mochrks" },
        ],
    };

    return (
        <footer className="border-t bg-muted/30">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-xl">U</span>
                            </div>
                            <span className="font-bold text-xl">
                                UI Showcase
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Premium UI templates built with Next.js, React, and shadcn/ui.
                            Free and open-source.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/mochrks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mochrks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-semibold mb-4">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        {link.href.startsWith('#') ? (
                                            <button
                                                onClick={() => {
                                                    const section = document.getElementById(link.href.slice(1));
                                                    section?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                                            >
                                                {link.label}
                                            </button>
                                        ) : (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © 2026 UI Showcase. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                        Built with ❤️ by{" "}
                        <a
                            href="https://github.com/mochrks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:text-foreground transition-colors underline"
                        >
                            MOCHRKS
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
