import { Folder, Home, Settings, Star, Tags } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Logo } from ".";

function NavLinks() {
  return (
    <nav className="grid gap-2 text-md font-medium  mt-5">
      <div
        href="#"
        className="flex items-center gap-2 text-lg font-semibold sm:hidden"
      >
        <Logo />
      </div>
      <h3 className="text-muted-foreground/50">Quick Links</h3>
      <Link
        to="#"
        className="mx-[-0.65rem] hover:bg-muted duration-100 ease-in-out flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        to="#"
        className="mx-[-0.65rem] hover:bg-muted duration-100 ease-in-out flex items-center gap-4 rounded-xl px-3 py-2  text-muted-foreground hover:text-foreground"
      >
        <Star className="h-5 w-5" />
        Favorites
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs">
          582
        </Badge>
      </Link>
      <Link
        to="#"
        className="mx-[-0.65rem] hover:bg-muted duration-100 ease-in-out flex items-center gap-4 rounded-xl px-3 py-2 text-foreground hover:text-foreground"
      >
        <Folder className="h-5 w-5" />
        My Snippets
      </Link>
      <Link
        to="#"
        className="mx-[-0.65rem] hover:bg-muted duration-100 ease-in-out flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Tags className="h-5 w-5" />
        Tags
      </Link>
      <Link
        to="#"
        className="mx-[-0.65rem] hover:bg-muted duration-100 ease-in-out flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Settings className="h-5 w-5" />
        Settings
      </Link>
    </nav>
  );
}

export default NavLinks;
