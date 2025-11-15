import React from "react";
import { ShoppingCart, Heart, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-700">E-Shop</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">Shop</li>
          <li className="hover:text-purple-600 cursor-pointer">Categories</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact</li>
        </ul>

        {/* Icons (Right Section) */}
        <div className="hidden md:flex items-center gap-4">
          <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-purple-600" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white w-full shadow-md px-4 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="hover:text-purple-600 cursor-pointer">Home</li>
            <li className="hover:text-purple-600 cursor-pointer">Shop</li>
            <li className="hover:text-purple-600 cursor-pointer">Categories</li>
            <li className="hover:text-purple-600 cursor-pointer">Contact</li>
          </ul>

          {/* Icons for mobile */}
          <div className="flex items-center gap-4 pt-4 border-t">
            <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-purple-600" />
          </div>
        </div>
      )}
    </nav>
  );
}
