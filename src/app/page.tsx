import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Collections } from "@/components/Collections";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <Collections />
        <FeaturedProducts />
        <Story />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
