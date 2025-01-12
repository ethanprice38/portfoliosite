"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MyButton = ({
  text,
  redirectValue,
  isDownload,
}: {
  text: string;
  redirectValue: string;
  isDownload: boolean;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${redirectValue}`);
  };

  if (isDownload) {
    return (
      <button
        onClick={() => window.open(`${redirectValue}`, "_blank")}
        className="relative rounded bg-[#333333] px-5 py-3 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
      >
        <span className="relative font-mono tracking-tight">{text}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="relative rounded bg-[#333333] px-5 py-3 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
    >
      <span className="relative font-mono tracking-tight">{text}</span>
    </button>
  );
};

export default MyButton;
