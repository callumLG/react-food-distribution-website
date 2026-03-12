'use client'; // Make this a client component

import { Navbar } from './components/navbar';
import { CartProvider } from './context/cartContext';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Products } from './components/products';
import { Services } from './components/services';
import {WhyChooseUs} from './components/whyChooseUs';
import {Testimonials} from './components/testimonials';
import {Contact} from './components/contact';
import {Footer } from './components/footer';
import {Cart} from './components/cart';

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <Cart/>
      <Hero/>
      <About/>
      <Products/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </CartProvider>
  );
}