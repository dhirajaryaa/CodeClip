import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

function UserProfile() {
  const { user, isAuth } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <div>
      {isAuth ? (
        <Avatar className="w-12 duration-100 h-12 rounded-full border-[3px] border-primary p-1 hover:border-destructive-foreground">
          <AvatarImage
            src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png"
            alt="Avatar"
          />
          <AvatarFallback>
            {"Avatar"
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      ) : (
        <Link to={"/signin"}>
          <Button size="sm">Sign In</Button>
        </Link>
      )}
    </div>
  );
}

export default UserProfile;
