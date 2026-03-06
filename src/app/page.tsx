import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 text-foreground">
      <h1 className="text-3xl font-semibold">{env.NEXT_PUBLIC_APP_NAME}</h1>

      <div className="rounded-sm border border-border  p-6 ">
        <p className="text-muted-foreground">
          A calm journaling interface for behavior awareness.
        </p>
      </div>
      <Link href="/ui-preview" className="text-sm text-primary underline">
        View UI components
      </Link>

      <Button>Primary action</Button>
    </main>
  );
}
