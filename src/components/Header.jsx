import { useState } from "react";

export default function Header({
  onHomeClick,
  onProductsClick,
  onAboutClick,
  onContactClick,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto md:px-24 px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={onHomeClick}
          className="text-xl font-serif tracking-wider font-semibold text-charcoal"
        >
          Auralumè
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {["Home", "Produk", "Tentang", "Kontak"].map((item) => (
            <button
              key={item}
              onClick={
                item === "Home"
                  ? onHomeClick
                  : item === "Produk"
                  ? onProductsClick
                  : item === "Tentang"
                  ? onAboutClick
                  : onContactClick
              }
              className="nav-item"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-charcoal"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] max-w-sm bg-white z-50 md:hidden
        transform transition-transform duration-300 ease-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full w-full flex flex-col items-center  py-6">
          {/* Brand */}
          <div className="w-full text-center pb-6 mb-2 border-b border-stone-200">
            <h2 className="text-2xl font-serif tracking-widest font-semibold text-charcoal">
              Auralumè
            </h2>
          </div>

          {/* Menu */}
          <nav className="w-full flex flex-col divide-y divide-stone-200">
            <MobileItem
              label="Home"
              onClick={onHomeClick}
              close={() => setIsMenuOpen(false)}
            />
            <MobileItem
              label="Produk"
              onClick={onProductsClick}
              close={() => setIsMenuOpen(false)}
            />
            <MobileItem
              label="Tentang"
              onClick={onAboutClick}
              close={() => setIsMenuOpen(false)}
            />
            <MobileItem
              label="Kontak"
              onClick={onContactClick}
              close={() => setIsMenuOpen(false)}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ======================
   MOBILE ITEM
   ====================== */
function MobileItem({ label, onClick, close }) {
  return (
    <button
      onClick={() => {
        onClick();
        close();
      }}
      className="p-4 text-lg font-medium text-start
      hover:text-gold transition"
    >
      {label}
    </button>
  );
}
