"use client";

import Link from "next/link";

const footerLinks = {
    Product: [
        { label: "Templates", href: "#templates" },
        { label: "Features", href: "#features" },

    ],
    Resources: [
        { label: "Documentation", href: "https://ui.shadcn.com/docs" },
        { label: "Next.js", href: "https://nextjs.org" },
        { label: "Tailwind CSS", href: "https://tailwindcss.com" },
    ],
    Community: [
        { label: "GitHub", href: "https://github.com/mochrks" },

    ],
};

export function Footer() {
    return (
        <footer style={{ backgroundColor: "var(--canvas)" }}>
            {/* Top divider */}
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="h-px w-full" style={{ backgroundColor: "var(--hairline)" }} />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 py-16">
                {/* Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">

                            <span className="font-medium text-[14px] text-[var(--body-text)]">
                                Web UI Showcase
                            </span>
                        </Link>
                        <p className="text-[14px] text-[var(--ash)] leading-relaxed max-w-[240px]">
                            Premium UI templates crafted for modern web applications.
                        </p>


                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-[14px] font-medium text-[var(--ink)] mb-4">
                                {title}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-[14px] text-[var(--ash)] hover:text-[var(--ink)] transition-colors duration-200"
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom row */}
                <div
                    className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
                    style={{ borderTop: "1px solid var(--divider-soft)" }}
                >
                    <p className="text-[12px] text-[var(--stone)]">
                        © 2026 UI Showcase. All rights reserved.
                    </p>
                    <p className="text-[12px] text-[var(--stone)]">
                        Created by{" "}
                        <a
                            href="https://github.com/mochrks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[var(--ash)] hover:text-[var(--ink)] transition-colors underline underline-offset-2"
                        >
                            MOCHRKS
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
