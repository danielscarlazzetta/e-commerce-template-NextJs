import { title_font } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>Wenaza</h1>
      <h1 className={`${title_font.className} font-bold`}>Wenaza</h1>
      <h1 className={title_font.className}>Wenaza</h1>
    </main>
  );
}
