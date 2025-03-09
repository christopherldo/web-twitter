"use client";

import { Logo } from "@/components/ui/logo";
import { redirect } from "next/navigation";

export default function Home() {
  setTimeout(() => {
    redirect("/home");
  }, 2000);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Logo size={80} />
    </div>
  );
}
