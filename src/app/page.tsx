import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Hello World!
      <Button variant={"destructive"}>button nè</Button>
    </main>
  );
}
