export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-lightGray/10">
      <h1 className="text-accent text-xl font-semibold tracking-tight">
        Ekzeek
      </h1>

      <div className="flex gap-4">
        <button className="text-lightGray text-sm hover:opacity-80">
          Login
        </button>
        <button className="bg-lightGray text-bg px-4 py-1.5 rounded-md text-sm font-medium hover:opacity-90">
          Register
        </button>
      </div>
    </nav>
  );
}
