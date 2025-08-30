import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ChatPat" },
    { name: "description", content: "Welcome to ChatPat!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
