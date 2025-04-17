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
      <DelayedContactForm />
      <FloatingButtons />
    </div>
  );
}
