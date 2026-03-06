import Link from "next/link"

export default function Custom404() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <Link href="/" className="px-4 py-2 rounded-md font-semibold text-indigo-500 bg-none hover:bg-white/20 transition-colors mt-4">
              Go back home
            </Link>
          </div>
        );
      }