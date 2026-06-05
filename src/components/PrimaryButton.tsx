import Link from "next/link";
import React from "react";

const PrimaryButton = ({
  link,
  children,
  className,
}: {
  link: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={`bg-primary hover:bg-hover duration-300 text-container font-bold rounded-md font-philosopher ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
