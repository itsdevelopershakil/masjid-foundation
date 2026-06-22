"use client";

import { useEffect } from "react";
import { getPendingScroll, scrollTo } from "../lib/scrollTo";

export default function ScrollHandler() {
    useEffect(() => {
        const id = getPendingScroll();

        if (id) {
            requestAnimationFrame(() => scrollTo(id));
        }
    }, []);

    return null;
}
