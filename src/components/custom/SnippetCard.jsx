import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function SnippetCard() {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>React useEffect Hook</CardTitle>
        <CardDescription>JavaScript, React</CardDescription>
        <div className="flex items-center gap-1">
          <Badge className="rounded">hello</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <pre className="overflow-x-auto rounded bg-muted/70 p-2 text-xs sm:text-sm md:text-lg">
          <code>{`useEffect(() => {
// Effect code here
return () => {
// Cleanup code here
};
}, [dependencies]);`}</code>
        </pre>
      </CardContent>
    </Card>
  );
}

export default SnippetCard;
