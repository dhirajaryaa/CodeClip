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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy } from "lucide-react";
import { useState } from "react";

import AceEditor from "react-ace";

// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/ext-language_tools";

function SnippetFormPage() {
  const [code, setCode] = useState(`
function onLoad(editor) {
  console.log("i've loaded");
}
`);
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
                <div className="w-full min-h-[15rem] max-h-96 overflow-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background flex flex-col ">
                  <div className="flex items-center justify-between mb-2">
                    <Select>
                      <SelectTrigger className="w-[110px]">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      size="sm"
                      variant="ghost"
                      type="button"
                      className="focus:text-primary"
                    >
                      <Copy />
                    </Button>
                  </div>
                  {/* code here */}

                  <AceEditor
                    width="100%"
                    height="100%"
                    placeholder="Placeholder Text"
                    mode="javascript"
                    theme="monokai"
                    name="blah2"
                    fontSize={"1em"}
                    lineHeight={19}
                    showPrintMargin={false}
                    showGutter={false}
                    highlightActiveLine={true}
                    value={code}
                    setOptions={{
                      enableBasicAutocompletion: false,
                      enableLiveAutocompletion: false,
                      enableSnippets: false,
                      showLineNumbers: true,
                      tabSize: 2,
                    }}
                  />
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
