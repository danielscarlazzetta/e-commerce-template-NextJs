import { Title } from "@/components";
import { title_font } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Title
    title="Tienda"
    subtitle="Todos los productos"
    className="mb-2" />
    </>
  );
}
