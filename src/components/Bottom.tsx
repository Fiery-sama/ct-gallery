
import Link from "next/link";

export const MainFooter = () => {
  return (
    <div className="w-screen h-24 bg-[#FBFBFB] text-black px-4 py-4 shadow-xl shadow-emerald-500/50">
      <div className="w-full text-center">
        <Link href="https://www.linkedin.com/in/iamsuhailkhan1864/" className="text-black font-style-serif text-lg hover:underline hover:text-shadow-lg">Suhail Khan™ | 2025</Link>
      </div>
    </div>
  );
}
