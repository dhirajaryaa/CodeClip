import { Code } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="#" className="flex items-center justify-center">
        <Code className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-bold">CodeClip</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link to={"/signin"}>
          <Button size="sm">Sign In</Button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
