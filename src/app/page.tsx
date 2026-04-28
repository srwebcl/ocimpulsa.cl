import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyUs } from "@/components/home/WhyUs";
import { GoogleReviews } from "@/components/home/GoogleReviews";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Hero />
      <WhyUs />
      <GoogleReviews />
      <ServicesPreview />
      <Trust />
    </main>
  );
}
