import Banner from "../components/Banner";
import FeaturedCollege from "../components/FeaturedCollege";
import Gallery from "../components/Gallery";
import Research from "../components/Research";
import Review from "../components/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
         <FeaturedCollege></FeaturedCollege>
         <Gallery></Gallery>
         <Research></Research>
         <Review></Review>
        </div>
    );
};

export default Home;