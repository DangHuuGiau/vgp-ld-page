'use client'

import Overview from "./sections/Overview";
import Subdivision from "./sections/Subdivision";
import LandscapeUtilities from "./sections/LandscapeUtilities";
import MasterPlan from "./sections/MasterPlan";
import LivingSection from "./sections/LivingSection";
import RegistrationForm from "./sections/RegistrationForm";
import Contact from "./sections/Contact";
import DelayedContactForm from "./sections/FormContact";
import HotspotMap from "./sections/HotspotMap";
import FloatingButtons from "./sections/CallButtons";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Overview />
      <LivingSection />
      <RegistrationForm />
      <HotspotMap />
      <Subdivision setOpen={setShowForm} />
      <LandscapeUtilities />
      <RegistrationForm />
      <MasterPlan />  
      <Contact />
      <DelayedContactForm  open={showForm} setOpen={setShowForm}/>
      <FloatingButtons />
    </div>
  );
}
