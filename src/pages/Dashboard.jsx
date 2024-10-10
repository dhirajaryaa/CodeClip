import { Header, ProfileSettings } from "@/components/custom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Dashboard = () => {
  return (
    <>
      {/* header show  */}
      <Header />
      {/* user profile edit  */}
      <ProfileSettings />
      {/* dashboard content here  */}
     <section className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between">
       <Button size="sm">
        Filters
       </Button>
       <div>
        <Input placeholder=""/>
       </div>
       <Button variant="destructive" size="sm">
        New Snippets
       </Button>
      </div>
     </section>
    </>
  );
};
