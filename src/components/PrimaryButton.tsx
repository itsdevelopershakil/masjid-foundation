"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useAppContext } from "../context/AppContext";
import { scrollTo, setPendingScroll } from "../lib/scrollTo";

const PrimaryButton = ({
    link,
    children,
    className,
    scrollId,
}: {
    link: string;
    children: React.ReactNode;
    className?: string;
    scrollId?: string;
}) => {
    const { selectedLanguage: language } = useAppContext();
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = () => {
        if (scrollId) {
            if (pathname === "/") {
                scrollTo(scrollId);
            } else {
                setPendingScroll(scrollId);
                router.push("/");
            }
        }
    };
    return scrollId && scrollId.length > 0 ? (
        <button
            type="button"
            onClick={() => handleClick()}
            className={`text-xs sm:text-base bg-primary hover:bg-hover duration-300 inline-flex text-container rounded-md ${language === "bn" ? "font-noirrit" : "font-philosopher font-bold"} ${className}`}
        >
            {children}
        </button>
    ) : (
        <Link
            href={link}
            className={`text-xs sm:text-base bg-primary hover:bg-hover duration-300 inline-flex text-container rounded-md ${language === "bn" ? "font-noirrit" : "font-philosopher font-bold"} ${className}`}
        >
            {children}
        </Link>
    );
};

export default PrimaryButton;
