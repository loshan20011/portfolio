import ContactUs from "@/components/main/ContactUs";
import Hero from "@/components/main/Hero";
import MySkills from "@/components/main/MySkills";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col">
        <Hero />
        <MySkills />
        <Projects />
        <ContactUs />
      </div>
    </main>
  );
}
