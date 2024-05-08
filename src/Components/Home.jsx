import { Helmet } from "react-helmet-async";
import Estates from "./Estates";
import Slider from "./Slider";
import Contact from "./Contact";
import Faq from "./Faq";
import CountrySection from "./CountrySection";


const Home = () => {
    return (
        <div>
            <Helmet><title>Paradise of Earth</title></Helmet>
            <Slider></Slider>
            <Estates></Estates>
            <CountrySection></CountrySection>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;