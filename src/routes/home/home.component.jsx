import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import HeroSection from '../../components/hero-section/hero-section.component';
import About from '../../components/about/about.component';
import Reviews from '../../components/reviews/reviews.componet';
import PhoneCallRequest from '../../components/phone-call-request/phone-call.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {

  return (
    <div>
      <HeroSection />
      <Directory />
      <About />
      <Reviews />
      <PhoneCallRequest />
      <Footer />
      <Outlet />
    </div>
  );
};

export default Home;
