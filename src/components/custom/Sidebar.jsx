import { Code } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks, UserProfile, SearchForm } from ".";

function Sidebar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Code className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          {/* NavLinks  */}
          <NavLinks />
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        {/* search form  */}
        <SearchForm />
      </div>
      {/* user profile  */}
      <UserProfile />
    </header>
  );
}

export default Sidebar;
