import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { Projects } from "@/components/sections/projects";
import { Products } from "@/components/sections/products";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { Vision } from "@/components/sections/vision";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Projects />
      <Products />
      <Process />
      <TechStack />
      <Vision />
      <Cta />
    </>
  );
}
