import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Collections } from './components/Collections';
import { Occasions } from './components/Occasions';
import { Tailoring } from './components/Tailoring';
import { Features } from './components/Features';
import { About } from './components/About';
import { Locations } from './components/Locations';
import { Gallery } from './components/Gallery';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { CookieBanner } from './components/CookieBanner';
import { BackToTop } from './components/BackToTop';
import { MobileCallButton } from './components/MobileCallButton';

export default function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [privacyModalTab, setPrivacyModalTab] = useState<'privacy' | 'cookies'>('privacy');
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  const handleOpenPrivacyPolicy = () => {
    setPrivacyModalTab('privacy');
    setIsPrivacyModalOpen(true);
  };

  const handleOpenCookiePolicy = () => {
    setPrivacyModalTab('cookies');
    setIsPrivacyModalOpen(true);
  };

  const handleOpenCookieSettings = () => {
    setIsCookieSettingsOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#b08d57] selection:text-white bg-[#f7f5f0]">
      {/* Header with Top-bar & Navbar */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <Intro />
        <Collections />
        <Occasions />
        <Tailoring />
        <Features />
        <About />
        <Locations />
        <Gallery />
        <Newsletter onOpenPrivacyPolicy={handleOpenPrivacyPolicy} />
      </main>

      {/* Footer with Privacy & Cookie Policy links */}
      <Footer
        onOpenPrivacyPolicy={handleOpenPrivacyPolicy}
        onOpenCookiePolicy={handleOpenCookiePolicy}
        onOpenCookieSettings={handleOpenCookieSettings}
      />

      {/* Privacy Policy & Cookie Details Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        initialTab={privacyModalTab}
        onOpenCookieSettings={handleOpenCookieSettings}
      />

      {/* Interactive Cookie Consent Banner & Preferences Modal */}
      <CookieBanner
        onOpenPrivacyPolicy={handleOpenPrivacyPolicy}
        onOpenCookiePolicy={handleOpenCookiePolicy}
        isSettingsOpen={isCookieSettingsOpen}
        setIsSettingsOpen={setIsCookieSettingsOpen}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Floating Mobile Call Button */}
      <MobileCallButton />
    </div>
  );
}
