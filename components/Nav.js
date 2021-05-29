export default function Nav({ props }) {
  return (
    <nav className="h-12 bg-gray-300 flex items-center justify-between px-4">
      {props}
      <p>logo</p>
      <p>log out</p>
    </nav>
  );
}
