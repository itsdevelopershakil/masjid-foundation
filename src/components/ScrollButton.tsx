"use client";

type Props = {
  label: string;
  scrollId: string;
};

export default function ScrollButton({ label, scrollId }: Props) {
  const handleClick = () => {
    document.getElementById(scrollId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="font-semibold text-text hover:text-secondary duration-300"
    >
      {label}
    </button>
  );
}
