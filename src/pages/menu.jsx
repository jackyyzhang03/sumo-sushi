import * as React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';

function MenuPage() {
  return (
    <main>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Menu</title>
        <meta name="description" content="Best Sushi in Montreal" />
      </Helmet>
      <Header />
      <Hero url="/menu" />
      <Menu />
    </main>
  );
}

export default MenuPage;
