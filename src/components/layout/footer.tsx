"use client";



export function Footer() {


    return (
        <footer >
            <div className="container mx-auto px-4 py-12">
                {/* Bottom */}
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © 2026 UI Showcase. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                        Created by{" "}
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
