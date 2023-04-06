"use client";
import { BiArrowBack } from "react-icons/bi";

export function BackButton() {
  return (
    <button
      onClick={() => {
        history.back();
      }}
      className="flex items-center justify-center text-slate-800 text-sm"
    >
      <div className="mr-1">
        <BiArrowBack />
      </div>
      <div>Πίσω</div>
    </button>
  );
}
