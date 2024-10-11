import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SnippetCard } from "@/components/custom";
import { DashboardLayout } from "@/layout/dashboard-layout";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <main className="flex flex-1 flex-col h-full max-h-[93.5vh] overflow-hidden w-full bg-muted p-4 md:p-6 gap-3">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">My Snippets</h1>
          <Link to={"/add-snippet"} className="ml-auto">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Snippet
          </Button>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 scrollbar-hide">
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
    </DashboardLayout>
  );
};
