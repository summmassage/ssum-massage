import React from "react";

interface TrophyIconProps {
    className?: string;
}

export default function TrophyIcon({ className = "" }: TrophyIconProps) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
            <path d="M7 4h10v2a5 5 0 1 1-10 0V4Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 6h3a3 3 0 0 1-3 3M7 6H4a3 3 0 0 0 3 3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 14h6v3H9v-3Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 21h10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}