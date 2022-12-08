import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import ModelsRoute from './routes/models/models.component';
import Contact from './routes/contact/contact.component';
import Customize from './routes/customize/customize.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='models' element={<ModelsRoute />} />
        <Route path='custom' element={<Customize />} />
        <Route path='contact' element={<Contact />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
