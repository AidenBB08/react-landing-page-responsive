import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Band } from "./components/sections/Band";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import { Grids } from "./components/Grids";

function App() {
  return (
    <Layout title="Test">
      <Hero />
      <Band/>
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
}

export default App;
