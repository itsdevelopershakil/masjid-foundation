"use client";

import { useState } from "react";
import { RxCheck, RxCopy } from "react-icons/rx";

interface CopyButtonProps {
    text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button onClick={handleCopy} title="Copy to clipboard">
            {copied ? (
                <RxCheck className="size-6 text-green-500" />
            ) : (
                <RxCopy className="size-6 cursor-pointer" />
            )}
        </button>
    );
}
