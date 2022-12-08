import { Outlet } from 'react-router-dom';

import ContactHero from '../../components/contact-hero/contact-hero.component';
import Footer from '../../components/footer/footer.component';
import HowToOrder from '../../components/how-to-order/how-to-order.component';
import QAndASection from '../../components/QandA/QandA.componet';

const Contact = () => {

  return (
    <div>
      <ContactHero />
      <HowToOrder />
      <QAndASection />
      <Footer />
      <Outlet />
    </div>
  );
};

export default Contact;
