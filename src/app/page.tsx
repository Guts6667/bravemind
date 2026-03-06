
import { APP_NAME } from "@/lib/text";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center text-3xl font-bold justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>{APP_NAME}</h1>
    </div>
  );
}
