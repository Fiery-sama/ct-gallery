import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className='sticky top-0 left-0 w-full z-50 items-center justify-between bg-[#FBFBFB] text-black px-4 py-2 shadow-xl shadow-emerald-500/50'>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex">
                <Link href="https://www.collegetips.in/">
                    <Image src="/logo.webp" alt="CollegeTips.in" width={65} height={0} />
                </Link>
                <Link href="https://www.collegetips.in/" className="nav-company-name px-1">
                    CollegeTips.in
                </Link>
                </div>
            </div>
        </nav>
    )
}