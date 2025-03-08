import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/root/Navbar";
import Hero from "@/components/root/Hero";
import Stats from "@/components/root/Stats";
import Events from "@/components/root/Events";
import Features from "@/components/root/Features";
import Community from "@/components/root/Community";
import Footer from "@/components/root/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Events />
      <Community />
      <Footer />
    </div>
  );
}
