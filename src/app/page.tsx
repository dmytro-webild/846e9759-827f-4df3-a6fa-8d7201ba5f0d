"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Facilities",          id: "#features"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="K.L Sports Club"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "sparkles-gradient"}}
      title="K.L Sports Club: Your Aquatic Home"
      description="Experience world-class facilities and expert coaching designed for swimmers of all levels. Dive into excellence today."
      buttons={[
        {
          text: "Join Us",          href: "#pricing"},
        {
          text: "Learn More",          href: "#about"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hammocks-spa-with-wooden-boxes_1203-1120.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pool-chair_1203-3124.jpg",          alt: "Pool chair"},
        {
          src: "http://img.b2bpic.net/free-photo/chair-pool_74190-3499.jpg",          alt: "Chair pool"},
        {
          src: "http://img.b2bpic.net/free-photo/circular-pool-with-hammocks_1203-383.jpg",          alt: "Circular pool with hammocks"},
        {
          src: "http://img.b2bpic.net/free-photo/hammocks-placed-semicircle_1203-387.jpg",          alt: "Hammocks placed in semicircle"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-girls-swimwear-sun-glasses-are-drinking-cocktails-smiling-while-sunbathing-chaise-longue-near-pool-with-cocktails_496169-1986.jpg",          alt: "Beautiful girls in swimwear"},
      ]}
      avatarText="Join our growing community of 1000+ members"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/closeup-asian-woman-sitting-by-pool-with-diverse-friends_53876-26384.jpg",          alt: "Closeup of asian woman"},
        {
          type: "text",          text: "World-Class Facilities"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/cheerful-friends-smiling-rejoicing-resting-party-near-swimming-pool_176420-1452.jpg",          alt: "Cheerful friends"},
        {
          type: "text",          text: "Expert Coaching"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/young-girl-two-her-multiracial-male-friends-relaxing-sunbeds-near-swimming-pool_1157-49522.jpg",          alt: "Multiracial friends"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Excellence in Every Stroke"
      description="We are dedicated to providing a professional, supportive environment for our members, fostering healthy habits and competitive excellence in the pool."
      metrics={[
        {
          value: "15+",          title: "Years Experience"},
        {
          value: "1000+",          title: "Active Members"},
        {
          value: "5",          title: "Pro Coaches"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/professional-swimmer-fixing-swimming-goggles_23-2148393586.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          label: "Pool",          title: "Olympic-sized Pool",          items: [
            "Heated 50m lanes",            "Continuous access",            "Professional timing systems"],
        },
        {
          id: "f2",          label: "Training",          title: "Pro Coaching",          items: [
            "One-on-one sessions",            "Group classes",            "Performance analytics"],
        },
        {
          id: "f3",          label: "Wellness",          title: "Recovery Zone",          items: [
            "Sauna facilities",            "Massage therapy",            "Gym equipment access"],
        },
      ]}
      title="World-Class Facilities"
      description="Comprehensive amenities designed to help you reach your aquatic fitness goals effectively."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",          tag: "Essentials",          price: "$49",          period: "/mo",          description: "Perfect for casual swimming.",          button: {
            text: "Select Basic"},
          featuresTitle: "Included",          features: [
            "Limited access",            "Group classes",            "Sauna access"],
        },
        {
          id: "p2",          tag: "Pro Athlete",          price: "$99",          period: "/mo",          description: "Best for serious swimmers.",          button: {
            text: "Select Pro"},
          featuresTitle: "Included",          features: [
            "Full facility access",            "Priority lanes",            "Performance coaching"],
        },
      ]}
      title="Membership Options"
      description="Flexible plans tailored to your swimming lifestyle and training frequency."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={false}
      title="Our Expert Coaching Staff"
      tag="The Team"
      membersAnimation="slide-up"
      members={[
        {
          id: "t1",          name: "Alice Johnson",          imageSrc: "http://img.b2bpic.net/free-photo/healthy-swimmer-posing-indoors_23-2148393581.jpg"},
        {
          id: "t2",          name: "Bob Smith",          imageSrc: "http://img.b2bpic.net/free-photo/slim-dark-skinned-female-swimmer-black-bathingsuit-points-thumb-free-space_273609-25388.jpg"},
        {
          id: "t3",          name: "Chloe Williams",          imageSrc: "http://img.b2bpic.net/free-photo/rest-by-swimming-pool_1098-13916.jpg"},
        {
          id: "t4",          name: "David Brown",          imageSrc: "http://img.b2bpic.net/free-photo/water-polo-player-pool-with-trophy_23-2150893982.jpg"},
      ]}
      memberVariant="card"
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah Connor",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-handsome-male-basin_23-2148326775.jpg"},
        {
          id: "t2",          name: "Mark Miller",          imageSrc: "http://img.b2bpic.net/free-photo/positive-black-female-swimming-instructor-dressed-swimsuit-swimcap-goggles_273609-30299.jpg"},
        {
          id: "t3",          name: "Lucy Hall",          imageSrc: "http://img.b2bpic.net/free-photo/view-senior-man-enjoying-summer-pool_23-2151159959.jpg"},
        {
          id: "t4",          name: "Sam Rivers",          imageSrc: "http://img.b2bpic.net/free-photo/empowered-grandpa-relaxing-having-great-time_23-2149232904.jpg"},
        {
          id: "t5",          name: "Elena V.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-muscular-young-man-race-track_23-2148162181.jpg"},
      ]}
      cardTitle="Member Success Stories"
      cardTag="Community"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Do I need a booking?",          content: "Bookings are recommended during peak hours but open lanes are available throughout the day."},
        {
          id: "q2",          title: "Are swim caps mandatory?",          content: "Yes, for hygiene and filtration maintenance, swim caps must be worn by all swimmers."},
        {
          id: "q3",          title: "Can I bring guests?",          content: "Members can purchase guest passes for family and friends at our reception."},
        {
          id: "q4",          title: "What should I bring on my first visit?",          content: "Please bring your swimwear, a towel, a swim cap, and a padlock for your locker. We provide water stations throughout the facility."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/pool-water-texture-background_1203-2624.jpg"
      title="Need Help?"
      description="Common questions regarding our facilities and membership."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get In Touch"
      description="Have questions about our swimming club? Send us a message today."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Email Address",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "How can we help?",        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/indoors-swimming-pool_1385-1391.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/attractive-couple-handsome-muscular-male-sexy-woman-jump-water-enjoying-vacation_613910-16455.jpg"
      logoText="K.L Sports"
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Membership",              href: "#pricing"},
            {
              label: "About",              href: "#about"},
            {
              label: "Facilities",              href: "#features"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
      ]}
      copyrightText="© 2025 K.L Sports Club"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}