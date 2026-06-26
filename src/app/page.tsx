import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Collections } from "@/components/Collections";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Collections />
      <FeaturedProducts />
      <Story />
      <Testimonials />
      <Newsletter />
    </>
  );
}
