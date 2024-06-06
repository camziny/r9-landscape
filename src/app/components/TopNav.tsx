import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold bg-gray-100">
      <div className="flex space-x-8">
        <Link href="/" className="hover:text-gray-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-600">
          About
        </Link>
        <Link href="/products" className="hover:text-gray-600">
          Products
        </Link>
        <Link href="/contact" className="hover:text-gray-600">
          Contact Us
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link
          href="https://www.facebook.com/route9landscapeproducts/"
          className="hover:text-gray-600"
          aria-label="Facebook"
        >
          <FaSquareFacebook size={24} />
        </Link>
        <Link
          href="https://www.instagram.com/route9landscapeproducts/"
          className="hover:text-gray-600"
          aria-label="Instagram"
        >
          <FaInstagramSquare size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/company/rosado-landscape-supplies/"
          className="hover:text-gray-600"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </Link>
      </div>
    </nav>
  );
}
