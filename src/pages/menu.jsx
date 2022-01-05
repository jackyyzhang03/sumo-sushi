import * as React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';
import Menu from '../components/Menu/Menu';

function MenuPage() {
  return (
    <main>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Menu</title>
        <meta name="description" content="Best Sushi in Montreal" />
      </Helmet>
      <Nav />
      <Hero url="/menu" />
      <Menu />
    </main>
  );
}

export default MenuPage;