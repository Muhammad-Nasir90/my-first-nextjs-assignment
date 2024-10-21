import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-gray-900 p-4 shadow-lg sticky top-0 z-50">
            <nav className="flex items-center justify-between container mx-auto">
                <div className="flex items-center space-x-4">
                    <img 
                        src="/images/mn.jpeg" 
                        alt="logo" 
                        className="h-14 rounded-full transition-transform duration-300 hover:scale-110" 
                    />
                    <span className="font-serif font-semibold text-xl text-white transition-transform duration-300 hover:scale-105">
                        Muhammad-Nasir
                    </span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-white hover:text-yellow-300 font-semibold text-lg">
                        Home
                    </Link>
                    <Link href="/about" className="text-white hover:text-yellow-300 font-semibold text-lg">
                        About
                    </Link>
                    <Link href="/Contact" className="text-white hover:text-yellow-300 font-semibold text-lg">
                        Contact
                    </Link>
                    <Link href="/jobs" className="text-white hover:text-yellow-300 font-semibold text-lg">
                        Jobs
                    </Link>
                    <Link href="/skills" className="text-white hover:text-yellow-300 font-semibold text-lg">
                        Skills
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-white hover:text-yellow-300 focus:outline-none">
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden bg-gray-800 p-4">
                <Link href="/" className="block text-white hover:text-yellow-300 font-semibold text-lg py-2">
                    Home
                </Link>
                <Link href="/about" className="block text-white hover:text-yellow-300 font-semibold text-lg py-2">
                    About
                </Link>
                <Link href="/Contact" className="block text-white hover:text-yellow-300 font-semibold text-lg py-2">
                    Contact
                </Link>
                <Link href="/jobs" className="block text-white hover:text-yellow-300 font-semibold text-lg py-2">
                    Jobs
                </Link>
                <Link href="/skills" className="block text-white hover:text-yellow-300 font-semibold text-lg py-2">
                    Skills
                </Link>
            </div>
        </div>
    );
}
