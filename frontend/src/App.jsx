import FeaturedImages from "./components/FeaturedImg";
import ImageSlider from "./components/ImageSlider";

const sliderImages = [
  "/images/Slider1.jpg",
  "/images/Slider2.jpg",
  "/images/Slider3.jpg",
];

const featureImages = [
  "/images/eximg.jpg",
  "/images/eximg.jpg",
  "/images/eximg.jpg",
  "/images/eximg.jpg",
  "/images/eximg.jpg",
];

function App() {
  return (
    <>
      <nav>Navbar</nav>
      <ImageSlider images={sliderImages} />
      <main>
        <FeaturedImages images={featureImages} />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
