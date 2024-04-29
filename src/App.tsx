import Experiences from "./components/experiences/Experiences.tsx";
import Header from "./components/header/Header.tsx";
import Materials from "./components/materials/Materials.tsx";
import Products from "./components/products/Products.tsx";
import Reviews from "./components/reviews/Reviews.tsx";
import Why from "./components/why/Why.tsx";

export default function App() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Why />
      <Products />
      <Experiences />
      <Materials />
      <Reviews/>
    </div>
  )
}
