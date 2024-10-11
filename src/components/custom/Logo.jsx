import { Code } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="#" className="flex items-center justify-center">
      <Code className="h-6 w-6 text-primary" />
      <span className="ml-2 text-lg font-bold">CodeClip</span>
    </Link>
  );
}

export default Logo;
