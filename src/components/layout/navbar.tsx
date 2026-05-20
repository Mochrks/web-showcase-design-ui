"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Check initial theme
        const hasDark = document.documentElement.classList.contains("dark");
        setIsDark(hasDark);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const navLinks = [
        { href: "#features", label: "Features" },
        { href: "#templates", label: "Templates" },
        { href: "#about", label: "About" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 h-16 ${scrolled ? "border-b border-[var(--hairline)]" : ""}`}
            style={{
                backgroundColor: scrolled ? "var(--surface-dark)" : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
            }}
        >
            <div className="max-w-[1200px] mx-auto px-6 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo / Wordmark */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="font-medium text-[14px] tracking-[0.35px] text-[var(--body-text)]">
                            Web UI Showcase
                        </span>
                    </Link>

                    {/* Desktop Navigation — Centre */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[14px] font-medium tracking-[0.35px] text-[var(--charcoal)] hover:text-[var(--ink)] transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        {/* Dark/Light Mode Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center cursor-pointer w-9 h-9 rounded-lg border border-[var(--hairline-strong)] bg-[var(--surface-elevated)] text-[var(--ink)] transition-colors hover:bg-[var(--surface-card)]"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="w-4 h-4" />
                            ) : (
                                <Moon className="w-4 h-4" />
                            )}
                        </button>


                        {/* Mobile Hamburger */}
                        <button
                            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--hairline-strong)] bg-[var(--surface-elevated)] text-[var(--ink)] transition-colors hover:bg-[var(--surface-card)]"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <X className="w-4 h-4" />
                            ) : (
                                <Menu className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden overflow-hidden border-t border-[var(--hairline)]"
                        style={{
                            backgroundColor: "rgba(0,0,0,0.95)",
                            backdropFilter: "blur(24px)",
                        }}
                    >
                        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[16px] font-medium text-[var(--body-text)] hover:text-[var(--ink)] transition-colors py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
