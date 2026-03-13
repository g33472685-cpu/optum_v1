import React from 'react';
import HeroScrollytelling from '../components/HeroScrollytelling';
import Services from '../components/Services';
import ProblemAwareness from '../components/ProblemAwareness';
import ValueProposition from '../components/ValueProposition';
import BeforeAfter from '../components/BeforeAfter';
import Gallery from '../components/Gallery';
import Quiz from '../components/Quiz';
import CertifiedInstallers from '../components/CertifiedInstallers';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import SectionWrapper from '../components/SectionWrapper';

export default function Home() {
  return (
    <main className="space-y-32">
      <SectionWrapper><HeroScrollytelling /></SectionWrapper>
      <SectionWrapper><Services /></SectionWrapper>
      <SectionWrapper><Quiz /></SectionWrapper>
      <SectionWrapper><ProblemAwareness /></SectionWrapper>
      <SectionWrapper><ValueProposition /></SectionWrapper>
      <SectionWrapper><BeforeAfter /></SectionWrapper>
      <SectionWrapper><Gallery /></SectionWrapper>
      <SectionWrapper><CertifiedInstallers /></SectionWrapper>
      <SectionWrapper><Testimonials /></SectionWrapper>
      <SectionWrapper><CTA /></SectionWrapper>
    </main>
  );
}
