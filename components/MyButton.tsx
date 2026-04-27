"use client";
import Link from "next/link";
import React from "react";

const MyButton = ({
  text,
  redirectValue,
  isDownload,
  otherClasses,
}: {
  text: string;
  redirectValue: string;
  isDownload: boolean;
  otherClasses?: string;
}) => {
  if (isDownload) {
    return (
      <button
        onClick={() => window.open(`${redirectValue}`, "_blank")}
        className={`relative rounded px-5 py-3 text-white transition-all duration-300 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 ${otherClasses}`}
      >
        <span className="relative font-mono tracking-tight">{text}</span>
      </button>
    );
  }

  return (
    <Link
      href={`/${redirectValue}`}
      className={`relative rounded px-5 py-3 text-white transition-all duration-300 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2 ${otherClasses}`}
    >
      <span className="relative font-mono tracking-tight">{text}</span>
    </Link>
  );
};

export default MyButton;
