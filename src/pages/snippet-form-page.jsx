import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DashboardLayout } from "@/layout/dashboard-layout";
import { Text, Tags, Code2, Plus, Type, ArrowLeft, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Loader } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSnippet } from "@/redux/slices/snippetSlice";
import { useSelector } from "react-redux";

function SnippetFormPage() {
  const {user} = useSelector(state=>state.auth)
  const language = [
    { mode: "javascript", name: "JavaScript" },
    { mode: "java", name: "Java" },
    { mode: "python", name: "Python" },
    { mode: "xml", name: "XML" },
    { mode: "ruby", name: "Ruby" },
    { mode: "sass", name: "Sass" },
    { mode: "markdown", name: "Markdown" },
    { mode: "mysql", name: "MySQL" },
    { mode: "json", name: "JSON" },
    { mode: "html", name: "HTML" },
    { mode: "golang", name: "Go" },
    { mode: "csharp", name: "C#" },
    { mode: "coffee", name: "CoffeeScript" },
    { mode: "css", name: "CSS" },
  ];
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [code, setCode] = useState(``);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript"); // Default language
  const formRef = useRef();
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const title = form["title"].value;
    const desc = form["description"].value;
    const tags = ["javascript","react","html"];
    const viability = false;
    const uid = user.uid

    const res =  dispatch(addSnippet({title,desc,selectedLanguage,code,tags,viability,uid}))
    console.log(res);
    

    // console.log(title, desc, selectedLanguage, code);
  };

  // Handle code change
  const onChangeCode = (event) => {
    setCode(event.target.value);
  };

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
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="flex flex-col w-full max-w-5xl mx-auto gap-6 bg-muted rounded-xl">
              {/* Title */}
              <div className="flex w-full items-center gap-2 relative">
                <Label htmlFor="title" className="text-primary">
                  <Type />
                </Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Type your Title here..."
                />
                <span className="text-red-600 absolute -right-1 -top-3">*</span>
              </div>
              {/* Description */}
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
              {/* Tags */}
              <div className="flex w-full items-center gap-3">
                <Label htmlFor="tags" className="text-primary">
                  <Tags />
                </Label>
                <Badge className="rounded-sm cursor-pointer">
                  <Plus size={16} />
                  <span className="ml-1">No Tags</span>
                </Badge>
              </div>

              {/* Code Editor */}
              <div className="flex w-full items-stretch gap-2">
                <Label htmlFor="code" className="text-primary mt-2">
                  <Code2 />
                </Label>
                <div className="w-full min-h-[15rem] max-h-96 overflow-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <Select
                      value={selectedLanguage}
                      onValueChange={setSelectedLanguage}
                    >
                      <SelectTrigger className="w-[110px]">
                        <SelectValue placeholder="Language" />
                      </SelectTrigger>
                      <SelectContent>
                        {language.map((lang, index) => (
                          <SelectItem
                            key={index}
                            value={lang.mode}
                            className="capitalize"
                          >
                            {lang.name}
                          </SelectItem>
                        ))}
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
                  {/* Textarea for Code */}
                  <Textarea
                    value={code}
                    onChange={onChangeCode}
                    placeholder="Enter your code snippet here"
                    className={`${
                      theme === "dark"
                        ? "bg-transparent text-secondary-foreground"
                        : ""
                    } border-2 rounded-md`}
                    style={{ minHeight: "15rem", maxHeight: "400px" }} // Adjust as needed
                    rows={10} // Set number of visible rows
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex w-full justify-center gap-6">
              <Button
                type="reset"
                variant="outline"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </Button>
              <Button type="submit">
                {loading ? (
                  <Loader className="animate-spin w-8" />
                ) : (
                  <>
                    <Plus size={15} />
                    <span>Add Snippet</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default SnippetFormPage;
