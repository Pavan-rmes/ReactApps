import logo from "./logo.svg";
import "./App.css";
import { images } from "./utlity";
import { NotifySlider } from "./homescreen/NotifySlider";
import { ImageSlider } from "./homescreen/ImageSlider";
import { ReviewButton } from "./homescreen/ReviewButton";

function App() {
  return (
    <div>
      <div className="imageSlider">
        <NotifySlider />
        <ImageSlider />
        {/* <Navbar /> */}
        <ReviewButton />
      </div>
      <div>
        <BrandDetails />
      </div>
    </div>
  );
}







function BrandDetails() {
  return (
    <div className="flex flex-col px-4 h-96 items-center">
      <p className="text-4xl">About the Brand</p>
      <p className="text-center text-xl mt-4 font-medium">
        We believe in creating products that connect with your vibe and
        personality.
      </p>
      <p className="text-center mt-2">
        Fashion is a brilliant way to express yourself, and our ever expanding
        library of designs help you do that in style. You're sure to find
        something relatable, no matter how quirky you are.
      </p>
    </div>
  );
}

export default App;
