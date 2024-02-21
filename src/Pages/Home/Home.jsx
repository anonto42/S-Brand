import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout';
import myContext from '../../Context/MyContext';
import HeroSection from '../../Components/HearoSection/HeroSection';
import Filter from '../../Components/Filter/Filter';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Testimonial from '../../Components/Testimonial/Testmonial';

const Home = () => {
  const context = useContext(myContext);
  const {state} = context;

  return (
      <Layout>
        <HeroSection/>
        <Filter />
        <ProductCard />
        <Testimonial />

      </Layout>
  )
}

export default Home