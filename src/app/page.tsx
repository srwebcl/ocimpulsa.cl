import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyUs } from "@/components/home/WhyUs";
import dynamic from 'next/dynamic';

const GoogleReviews = dynamic(() => import('@/components/home/GoogleReviews').then(mod => mod.GoogleReviews), {
  loading: () => <div className="h-[400px] w-full bg-white flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#CCA43B] border-t-transparent rounded-full animate-spin"></div></div>,
});

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
