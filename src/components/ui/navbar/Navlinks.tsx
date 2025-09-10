import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Sign Up", href: "/signup" },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex space-x-8 xl:space-x-12 text-sm lg:text-base xl:text-lg font-medium">
      {navLinks.map((link, idx) => {
        const isActive =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <li key={idx}>
            <Link
              href={link.href}
              className={`hover:text-primary cursor-pointer transition relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                isActive ? "text-primary after:w-full" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
