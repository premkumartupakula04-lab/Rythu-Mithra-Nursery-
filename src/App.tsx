/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ChilliSeedlings } from './components/ChilliSeedlings';
import { ChilliVarieties } from './components/ChilliVarieties';
import { NurseryProcess } from './components/NurseryProcess';
import { FieldExperience } from './components/FieldExperience';
import { SupplyArea } from './components/SupplyArea';
import { OwnerDetails } from './components/OwnerDetails';
import { OurFarmers } from './components/OurFarmers';
import { PhotoGallery } from './components/PhotoGallery';
import { ContactEnquiry } from './components/ContactEnquiry';
import { Footer } from './components/Footer';
import { BUSINESS_INFO } from './data/nurseryData';

export default function App() {
  const [selectedVariety, setSelectedVariety] = useState<string>('General Chilli Seedlings');

  const handleSelectVariety = (varietyName: string) => {
    setSelectedVariety(varietyName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcf9] text-[#1c2e22]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero />

        {/* 2. OWNER & NURSERY DETAILS (8 OFFICIAL POINTS & OWNER PHOTO) */}
        <OwnerDetails onSelectVariety={handleSelectVariety} />

        {/* 3. ABOUT NURSERY */}
        <About />

        {/* 4. CHILLI SEEDLINGS */}
        <ChilliSeedlings />

        {/* 5. CHILLI VARIETIES */}
        <ChilliVarieties onSelectVariety={handleSelectVariety} />

        {/* 6. OUR FARMERS (10 FARMERS WITH REAL CROP PHOTOS, SEED TYPE & ACRES) */}
        <OurFarmers onSelectVariety={handleSelectVariety} />

        {/* 7. NURSERY PROCESS */}
        <NurseryProcess />

        {/* 8. WHY RYTHU MITHRA */}
        <WhyChooseUs />

        {/* 9. FARMER / FIELD EXPERIENCE */}
        <FieldExperience />

        {/* 10. SUPPLY AREA */}
        <SupplyArea />

        {/* 11. PHOTO GALLERY */}
        <PhotoGallery />

        {/* 12. CONTACT / ENQUIRY */}
        <ContactEnquiry preselectedVariety={selectedVariety} />
      </main>

      {/* 13. FOOTER */}
      <Footer />


      {/* Mobile Floating Action Bar for Quick Nursery Contact */}
      <aside
        id="mobile-bottom-bar"
        aria-label="Quick contact actions"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#061e10]/95 backdrop-blur-md border-t border-emerald-800/80 p-2.5 px-4 flex items-center gap-3 shadow-2xl"
      >
        <a
          id="mobile-bottom-call"
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold shadow-md active:scale-95"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span>Call Now</span>
        </a>

        <a
          id="mobile-bottom-whatsapp"
          href={`https://wa.me/91${BUSINESS_INFO.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-sm font-bold shadow-md active:scale-95"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
