import { Code } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { UserProfile } from ".";

function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 w-full z-10 backdrop-blur-sm bg-secondary/50 shadow-xl">
      <Link to="#" className="flex items-center justify-center">
        <Code className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-bold">CodeClip</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <UserProfile />
      </nav>
    </header>
  );
}

export default Header;
