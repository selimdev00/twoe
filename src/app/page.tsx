import { Metadata } from "next";
import HomePageComponent from "@/components/pages/Home";

export const metadata: Metadata = {
  title: "Главная страница | Фильмы и сериалы на любой вкус",
  description: "Фильмы и сериалы на любой вкус",
};

export default function Home() {
  return <HomePageComponent />;
}
