import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector, useDispatch } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, User } from "lucide-react";
import { signOut } from "@/redux/slices/authSlice";
import { openProfileSettings } from "@/redux/slices/uiSlice";

function UserProfile() {
  const { user, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-12 duration-100 h-12 rounded-full border-[3px] border-primary p-1 hover:border-destructive-foreground">
              <AvatarImage
                src={`${
                  user?.photoUrl != ""
                    ? user?.photoUrl
                    : "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png"
                }`}
                alt={user?.name != "" ? user?.name : "Avatar"}
                className="w-full h-full object-cover rounded-full"
              />
              <AvatarFallback>
                {user?.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel align="center">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                onClick={() => dispatch(openProfileSettings())}
                className="w-full"
                size="xs"
                variant="ghost"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                onClick={() => dispatch(signOut())}
                className="w-full"
                size="xs"
                variant="ghost">
                <LogOutIcon className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to={"/signin"}>
          <Button size="sm">Sign In</Button>
        </Link>
      )}
    </div>
  );
}

export default UserProfile;
