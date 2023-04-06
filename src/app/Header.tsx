import Link from "next/link";
import { Julius_Sans_One } from "next/font/google";

export const logoFont = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

export function Header() {
  return (
    <header className="pl-2 pr-3 py-3 border-b flex justify-start items-center gap-4 sticky top-0 bg-white z-10">
      <Link
        href="/"
        className={`text-3xl font-bold text-[#b22234] ${logoFont.className}`}
      >
        Wushu Academy
      </Link>
      {/* <ul className="flex justify-center items-center gap-2">
        <Link href="/study">Study</Link>
        <Link href="/practice">Practice</Link>
      </ul> */}
      <div className="ml-auto">Psst! You are doing great 🐼</div>
    </header>
  );
}
