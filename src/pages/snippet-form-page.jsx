import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DashboardLayout } from "@/layout/dashboard-layout";
import { Text } from "lucide-react";
import { Tags } from "lucide-react";
import { Code2 } from "lucide-react";
import { Plus } from "lucide-react";
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
                  className="sm:h-40"
                  placeholder="Type your Description here...."
                />
              </div>
              {/* tags  */}
              <div className="flex w-full items-center gap-3">
                <Label htmlFor="description" className="text-primary">
                  <Tags />
                </Label>
                <Badge className="rounded-sm cursor-pointer">
                  <Plus size={16} />
                  <span className=" ml-1">No Tags</span>
                </Badge>
              </div>
              {/* code  */}
              <div className="flex w-full items-stretch gap-2">
                <Label htmlFor="code" className="text-primary mt-2">
                  <Code2 />
                </Label>
                <div className="w-full min-h-[15rem] max-h-96 overflow-scroll rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background ">
                  
                  code here
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default SnippetFormPage;
