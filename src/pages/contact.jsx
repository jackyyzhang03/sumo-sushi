import * as React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero/Hero';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';

function ContactPage() {
  return (
    <main>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Wine and Beer</title>
        <meta name="description" content="Best Sushi in Montreal" />
      </Helmet>
      <Header />
      <Hero url="/contact" />
      <Contact />
    </main>
  );
}

export default ContactPage;
