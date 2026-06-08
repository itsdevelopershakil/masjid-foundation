import Link from "next/link";
import React from "react";
import { getLanguage } from "../lib/getLanguage";

const PrimaryButton = async ({
  link,
  children,
  className,
}: {
  link: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const language = await getLanguage();
  return (
    <Link
      href={link}
      className={`text-xs sm:text-base bg-primary hover:bg-hover duration-300 text-container rounded-md ${language === "bn" ? "font-noirrit" : "font-philosopher font-bold"} ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
