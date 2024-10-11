import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DashboardLayout } from "@/layout/dashboard-layout";
import { Text } from "lucide-react";
import { Type } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function SnippetFormPage() {
  return (
    <DashboardLayout>
      <main className="p-3 bg-muted w-full h-full">
        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <Button size="sm" variant="ghost" className="text-primary">
              <ArrowLeft />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold md:text-2xl">
            Add Code Snippet
          </h1>
        </div>
        <section className="p-4 mt-5">
          <form>
            <div className="flex flex-col w-full max-w-4xl mx-auto gap-6 bg-muted rounded-xl">
              {/* title  */}
              <div className="flex w-full items-center gap-2 relative">
                <Label htmlFor="title" className="text-primary">
                  <Type />
                </Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Type your Title here..."
                />
                <span className="text-red-600 absolute -right-1 -top-3">*</span>
              </div>
              {/* description  */}
              <div className="flex w-full items-center gap-2">
                <Label htmlFor="description" className="text-primary">
                  <Text />
                </Label>
                <Textarea
                  name="description"
                  id="description"
                  placeholder="Type your Description here...."
                />
              </div>
            </div>
          </form>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default SnippetFormPage;
