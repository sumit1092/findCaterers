import Logo from "@/assets/svg/Logo";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { label: "Home", href: "/caterers", active: true },
    { label: "Caterers", href: "#caterer-list", active: false },
    { label: "About Us", href: "#about", active: false },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/caterers" className="flex items-center gap-3" aria-label="Find Caterers home">
          <Logo />
          <span className="text-2xl font-extrabold tracking-tight text-brand-dark">
            findCaterers
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.active
                    ? "relative text-base font-semibold text-brand-orange after:h-0.5 after:w-full after:bg-brand-orange"
                    : "text-base font-semibold text-brand-dark transition hover:text-brand-orange"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;