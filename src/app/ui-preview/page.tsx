import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function UiPreviewPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Save</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
          <Button disabled>Disabled</Button>
          <Button variant="loading" disabled>
            Loading...
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="Situation..." />
          <Input placeholder="Disabled input" disabled />
          <Textarea placeholder="Automatic thoughts..." />
          <Textarea placeholder="Disabled textarea" disabled />
        </CardContent>
      </Card>
    </div>
  );
}
