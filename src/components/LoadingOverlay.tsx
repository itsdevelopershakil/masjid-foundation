// components/LoadingOverlay.tsx
"use client";

import { useAppContext } from "@/src/context/AppContext";
import LoadingScreen from "./LoadingScreen";

export default function LoadingOverlay() {
    const { isLoading } = useAppContext();
    return isLoading ? <LoadingScreen /> : null;
}
