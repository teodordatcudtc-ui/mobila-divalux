import Hero from '@/components/Hero';
import Bestsellers from '@/components/Bestsellers';
import MoreProducts from '@/components/MoreProducts';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bestsellers />
      <Categories />
      <MoreProducts />
      <Features />
      <Testimonials />
    </>
  );
}
