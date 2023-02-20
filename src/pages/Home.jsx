import Banner from "../composents/Banner";
import Gallery from "../composents/Gallery";
import bannerImg from "../assets/home-banner.png";

function Home() {
  return (
    <div>
      <Banner picture={bannerImg} text="Chez vous, partout et ailleurs"/>
      <Gallery />
    </div>
  );
}

export default Home;
