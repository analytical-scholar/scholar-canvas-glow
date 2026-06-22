import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shonibare AbdulGhaffar — Analytical Scholar" },
      { name: "description", content: "Portfolio of Shonibare AbdulGhaffar — BSc Chemistry student, AI Development trainee at BELIGHT TECH, and designer." },
      { property: "og:title", content: "Shonibare AbdulGhaffar — Analytical Scholar" },
      { property: "og:description", content: "BSc Chemistry · AI Dev Trainee · Designer. Learning, building, growing." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
