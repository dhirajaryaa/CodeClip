import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo, NavLinks, ProfileSettings, Sidebar } from "@/components/custom";

export const Dashboard = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
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

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 w-full bg-muted">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">My Snippets</h1>
            <Button size="sm" className="ml-auto">
              <Plus className="mr-2 h-4 w-4" />
              New Snippet
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>React useEffect Hook</CardTitle>
                <CardDescription>JavaScript, React</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded bg-muted/70 p-4">
                  <code>{`useEffect(() => {
  // Effect code here
  return () => {
    // Cleanup code here
  };
}, [dependencies]);`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CSS Flexbox</CardTitle>
                <CardDescription>CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="overflow-x-auto rounded bg-muted/70 p-4">
                  <code>{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
