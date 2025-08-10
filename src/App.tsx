import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Band } from "./components/sections/Band";
import { CTA } from "./components/sections/CallToAction";
import { Carousel } from "./components/sections/Carousel";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import { Container } from "./components/shared/Container";

function App() {
  return (
    <Container className="floatIn">
      <Layout title="ST✦R">
        <Hero />
        <Band />
        <Services />
        <Carousel/>
        <AboutUs />
        <Pricing/>
        <CTA />
      </Layout>
    </Container>
  );
}

export default App;
