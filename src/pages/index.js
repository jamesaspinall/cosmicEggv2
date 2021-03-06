import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Heading from "../components/home/Heading";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Bike from "../components/home/Bike";
function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`revelwell`, `ride`, `yoga`, `eve smith`, `spin class`]}
        title="Home"
      />
      <section className="text-center">
        <Heading />
        <Services />
        <About />
        <Bike />
      </section>
    </Layout>
  );
}

export default IndexPage;
