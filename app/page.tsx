import AboutMe from "@/components/main/AboutMe";
import ContactUs from "@/components/main/ContactUs";
import Hero from "@/components/main/Hero";
import MySkills from "@/components/main/MySkills";
import MyProjects from "@/components/main/MyProjects";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col">
        <Hero />
        <AboutMe />
        <MySkills />
        <MyProjects />
        <ContactUs />
      </div>
    </main>
  );
}
