/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import { Hero, About, CTA, FloatingWhatsApp, CompanyVideo } from './components/Core';
import { Services, WhyChooseUs, Projects, HowWeWork } from './components/Features';
import { Contact, Footer, VisitLocation } from './components/ContactFooter';

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <CompanyVideo />
        <Services />
        <WhyChooseUs />
        <Projects />
        <HowWeWork />
        <CTA />
        <VisitLocation />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
