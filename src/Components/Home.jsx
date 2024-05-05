import { Helmet } from "react-helmet-async";
import Estates from "./Estates";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Helmet><title>Paradise of Earth</title></Helmet>
            <Slider></Slider>
            <Estates></Estates>
        </div>
    );
};

export default Home;