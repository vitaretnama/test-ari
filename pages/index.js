import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Galeri from "../components/Galeri";

export default function Home() {
  return (
    <>
      <SeoHead title="Arie Aripin" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        <Galeri />
      </Layout>
    </>
  );
}
