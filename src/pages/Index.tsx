import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import PopArtSection from '../components/PopArtSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <PopArtSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;