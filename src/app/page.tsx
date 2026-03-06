import { env } from "@/lib/env";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">{env.NEXT_PUBLIC_APP_NAME}</h1>

    </div>
  );
}
