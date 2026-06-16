import Link from "next/link";
import React from "react";
import { getLanguage } from "../lib/getLanguage";
import { scrollTo } from "../lib/scrollTo";

const PrimaryButton = async ({
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
  const language = await getLanguage();
  return scrollId && scrollId.length > 0 ? (
    <button
      type="button"
      onClick={() => scrollTo(scrollId)}
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
