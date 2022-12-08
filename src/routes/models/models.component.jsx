import { Outlet } from 'react-router-dom';

import ModelsHeroSection from '../../components/models-hero/models-hero.component';
import Models from '../../components/models/models.components';
import OrderNow from '../../components/order-now/order-now.component';
import Footer from '../../components/footer/footer.component'

const ModelsRoute = () => {
  return (
    <div>
      <ModelsHeroSection />
      <Models />
      <OrderNow />
      <Footer />
      <Outlet />
    </div>
  );
};

export default ModelsRoute;