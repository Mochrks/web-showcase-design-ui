"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
    cellSize = 56,
}: {
    cellSize?: number;
}) => {
    const [clickedCell, setClickedCell] = useState<{
        row: number;
        col: number;
    } | null>(null);
    const [rippleKey, setRippleKey] = useState(0);
    const [dimensions, setDimensions] = useState({ rows: 0, cols: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setDimensions({
                    rows: Math.ceil(height / cellSize),
                    cols: Math.ceil(width / cellSize),
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [cellSize]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute inset-0 h-full w-full overflow-hidden z-0",
                "[--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:var(--color-neutral-100)] [--cell-shadow-color:var(--color-neutral-500)]",
                "dark:[--cell-border-color:var(--color-neutral-700)] dark:[--cell-fill-color:var(--color-neutral-900)] dark:[--cell-shadow-color:var(--color-neutral-800)]",
            )}
        >
            <DivGrid
                key={`base-${rippleKey}`}
                className="opacity-100"
                rows={dimensions.rows || 20}
                cols={dimensions.cols || 40}
                cellSize={cellSize}
                borderColor="var(--cell-border-color)"
                fillColor="var(--cell-fill-color)"
                clickedCell={clickedCell}
                onCellClick={(row, col) => {
                    setClickedCell({ row, col });
                    setRippleKey((k) => k + 1);
                }}
                interactive
            />
        </div>
    );
};

type DivGridProps = {
    className?: string;
    rows: number;
    cols: number;
    cellSize: number; // in pixels
    borderColor: string;
    fillColor: string;
    clickedCell: { row: number; col: number } | null;
    onCellClick?: (row: number, col: number) => void;
    interactive?: boolean;
};

type CellStyle = React.CSSProperties & {
    ["--delay"]?: string;
    ["--duration"]?: string;
};

const DivGrid = ({
    className,
    rows,
    cols,
    cellSize,
    borderColor = "#3f3f46",
    fillColor = "rgba(14,165,233,0.3)",
    clickedCell = null,
    onCellClick = () => { },
    interactive = true,
}: DivGridProps) => {
    const cells = useMemo(
        () => Array.from({ length: rows * cols }, (_, idx) => idx),
        [rows, cols],
    );

    const gridStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        width: cols * cellSize,
        height: rows * cellSize,
    };

    return (
        <div 
            className={cn(
                "relative z-[3]", 
                // Custom mask using inline style for better compatibility
                className
            )} 
            style={{
                ...gridStyle,
                WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
                maskImage: "radial-gradient(ellipse at center, black, transparent 80%)",
            }}
        >
            {cells.map((idx) => {
                const rowIdx = Math.floor(idx / cols);
                const colIdx = idx % cols;
                const distance = clickedCell
                    ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
                    : 0;
                const delay = clickedCell ? Math.max(0, distance * 55) : 0; // ms
                const duration = 200 + distance * 80; // ms

                const style: CellStyle = clickedCell
                    ? {
                        "--delay": `${delay}ms`,
                        "--duration": `${duration}ms`,
                    }
                    : {};

                return (
                    <div
                        key={idx}
                        className={cn(
                            "cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-100 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]",
                            clickedCell && "animate-cell-ripple [animation-fill-mode:none]",
                            !interactive && "pointer-events-none",
                        )}
                        style={{
                            backgroundColor: fillColor,
                            borderColor: borderColor,
                            ...style,
                        }}
                        onClick={
                            interactive ? () => onCellClick?.(rowIdx, colIdx) : undefined
                        }
                    />
                );
            })}
        </div>
    );
};
