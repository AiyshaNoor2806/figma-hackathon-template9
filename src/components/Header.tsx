import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg font-bold">Foodtruck</div>

      {/* Nav Links */}
      <nav>
        <ul className="flex space-x-6">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-2 py-1"
        />
        <button className="p-2 bg-gray-200 rounded">🔍</button>
      </div>
    </header>
  );
};

export default Header;
