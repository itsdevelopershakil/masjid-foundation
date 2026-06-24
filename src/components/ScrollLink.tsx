"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { scrollTo, setPendingScroll } from "../lib/scrollTo";

export default function ScrollLink({
    href,
    className,
    onClick,
    children,
    scrollId,
}: {
    href: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    scrollId?: string;
}) {
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

    return (
        <Link
            href={href}
            onClick={() => {
                handleClick();
                onClick?.();
            }}
            className={className}
        >
            {children}
        </Link>
    );
}
