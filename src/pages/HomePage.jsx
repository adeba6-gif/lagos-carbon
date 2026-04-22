import { Hero } from '../sections/Hero';
import { TrustBar } from '../sections/TrustBar';
import { WhatWeDo } from '../sections/WhatWeDo';
import { HowItWorks } from '../sections/HowItWorks';
import { WhyLagosCarbon } from '../sections/WhyLagosCarbon';
import { Insights } from '../sections/Insights';
import { RFPBanner } from '../sections/RFPBanner';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhatWeDo />
      <HowItWorks />
      <WhyLagosCarbon />
      <Insights />
      <RFPBanner />
      <Footer />
    </>
  );
};
