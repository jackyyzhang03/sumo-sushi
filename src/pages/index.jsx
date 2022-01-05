import * as React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';

function IndexPage() {
  return (
    <main>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Home</title>
        <meta name="description" content="Best Sushi in Montreal" />
      </Helmet>
      <Nav />
      <Hero />
    </main>
  );
}

export default IndexPage;
