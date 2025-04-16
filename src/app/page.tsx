"use client";

import Overview from "./sections/Overview";
import Subdivision from "./sections/Subdivision";
import LandscapeUtilities from "./sections/LandscapeUtilities";
import MasterPlan from "./sections/MasterPlan";
import LivingSection from "./sections/LivingSection";
import dynamic from "next/dynamic";
import RegistrationForm from "./sections/RegistrationForm";
import Contact from "./sections/Contact";

const HotspotMap = dynamic(() => import("./sections/HotspotMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Overview />
      <LivingSection />
      <RegistrationForm />
      <HotspotMap />
      <Subdivision />
      <LandscapeUtilities />
      <RegistrationForm />
      <MasterPlan />
      <Contact />
    </div>
  );
}
