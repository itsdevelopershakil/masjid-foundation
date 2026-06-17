"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ScrollLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
