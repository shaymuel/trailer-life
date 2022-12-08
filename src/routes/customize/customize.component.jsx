import { Outlet } from "react-router-dom";

import TrailerCustom from "../../components/trailer-customization/trailer-customization.component";
import HowToOrder from "../../components/how-to-order/how-to-order.component";
import Footer from "../../components/footer/footer.component";

const Customize = () => {
    return (
        <div>
            <TrailerCustom />
            <HowToOrder />
            <Footer />
            <Outlet />
        </div>
    );
}

export default Customize;