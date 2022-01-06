import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

function IndexPage() {
  return (
    <main>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Home</title>
        <meta name="description" content="Best Sushi in Montreal" />
      </Helmet>
      <Header />
      <Hero />
    </main>
  );
}

export default IndexPage;
