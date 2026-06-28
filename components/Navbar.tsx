import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          AI Interview Coach
        </Link>

        {/* Menu */}
        <div className="flex gap-6 items-center text-slate-300">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/interview" className="hover:text-white transition">
            Interview
          </Link>

          <Link href="/resume" className="hover:text-white transition">
            Resume
          </Link>

          <Link href="/dashboard" className="hover:text-white transition">
            Dashboard
          </Link>

          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>

          <Link href="/about" className="hover:text-white transition">
            About
          </Link>

          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}