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
        <CardTitle className="font-bold capitalize block truncate w-full overflow-hidden">
          React useEffect
        </CardTitle>
        <CardDescription>JavaScript, React</CardDescription>
        <div className="flex items-center gap-1">
          <Badge className="rounded bg-primary/20 text-primary">
            JavaScript
          </Badge>
          <Badge className="rounded bg-primary/20 text-primary">React</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <pre className="rounded bg-muted/70 p-2 text-xs sm:text-sm ">
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
