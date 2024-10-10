import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Logo,
  NavLinks,
  ProfileSettings,
  Sidebar,
  SnippetCard,
} from "@/components/custom";

export const Dashboard = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] overflow-hidden">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            {/* logo */}
            <Logo />
          </div>
          <div className="flex-1 p-4">
            {/* links  */}
            <NavLinks />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {/* sidebar  */}
        <Sidebar />

        {/* user setting popup */}
        <ProfileSettings />

        {/* dashboard content  */}

        <main className="flex flex-1 flex-col h-full max-h-[93vh] overflow-hidden w-full bg-muted p-4 md:p-6 gap-4 md:gap-8">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">My Snippets</h1>
            <Button size="sm" className="ml-auto">
              <Plus className="mr-2 h-4 w-4" />
              New Snippet
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 scrollbar-hide">
            {/* code snippet card  */}
            <SnippetCard />
            <SnippetCard />
            <SnippetCard />
            <SnippetCard />
            <SnippetCard />
            <SnippetCard />
            <SnippetCard />
            <SnippetCard />
          </div>
        </main>
      </div>
    </div>
  );
};
