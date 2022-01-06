import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import WineMenu from '../components/WineMenu/WineMenu';

function WinePage() {
  return (
    <main>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Wine and Beer</title>
        <meta name="description" content="Best Sushi in Montreal" />
      </Helmet>
      <Header />
      <Hero url="/wine" />
      <WineMenu />
    </main>
  );
}

export default WinePage;
