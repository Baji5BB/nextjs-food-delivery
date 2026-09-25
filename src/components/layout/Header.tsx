import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Foodly</Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
      </nav>
    </header>
  );
}