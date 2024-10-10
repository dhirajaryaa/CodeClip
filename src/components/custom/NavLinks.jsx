import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Logo } from ".";
import {
  Grid2x2Icon,
  HeartIcon,
  Trash2Icon,
  FolderCodeIcon,
  Tags,
} from "lucide-react";

function NavLinks() {
  const navItems = [
    {
      name: "All Snippets",
      icon: <Grid2x2Icon className="h-5 w-5" />,
      link: "",
      badge: 0,
    },
    {
      name: "My Snippets",
      icon: <FolderCodeIcon className="h-5 w-5" />,
      link: "",
      badge: 0,
    },
    {
      name: "Favorites",
      icon: <HeartIcon className="h-5 w-5" />,
      link: "",
      badge: 0,
    },
    {
      name: "Tags",
      icon: <Tags className="h-5 w-5" />,
      link: "",
      badge: 0,
    },
    {
      name: "Trash",
      icon: <Trash2Icon className="h-5 w-5" />,
      link: "",
      badge: 0,
    },
  ];

  return (
    <nav className="grid gap-2 text-md font-medium  mt-5">
      <div className="flex items-center gap-2 text-lg font-semibold sm:hidden">
        <Logo />
      </div>
      <h3 className="text-muted-foreground/50 mt-8">Quick Links</h3>

      {navItems.map(({ name, icon, link, badge }, index) => (
        <Link
          key={index}
          to={link}
          className="mx-[-0.65rem] hover:bg-muted duration-100 ease-in-out flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          {icon}
          {name}
          {badge > 0 && (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs">
              {badge}
            </Badge>
          )}
        </Link>
      ))}
     
    </nav>
  );
}

export default NavLinks;
