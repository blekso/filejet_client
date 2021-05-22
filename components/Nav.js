import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-12 bg-gray-300 flex items-center justify-between px-4">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </nav>
  );
}
