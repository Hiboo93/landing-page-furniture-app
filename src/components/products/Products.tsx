import { CHAIRS } from "../../constants.ts";
import { RiStarSFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Products = () => {
  return (
    <div
      id="shop"
      className="w-full bg-[#F7F7F7] py-[50px] md:px-[120px] px-[40px] flex flex-col items-center justify-center"
    >
      <span className="font-bold text-[42px] text-[#1e1e1e]">
        Best Selling Products
      </span>
      <div className="w-full flex md:flex-row flex-col items-center justify-between mt-10 gap-10">
        {CHAIRS.map((chair) => (
          <div
            key={chair.title}
            className="bg-white w-full rounded-[20px] flex flex-col items-center justify-center"
          >
            <div className="grid place-items-center w-full bg-[#FAFAFA]">
              <img src={chair.image} alt={chair.title} />
            </div>
            <div className="w-full px-[20px] pb-[27px] pt-4 flex flex-col">
              <span className="text-[#8D8D8BD]">Chair</span>
              <span className="font-semibold text-[#0d1b39] text-[20px] my-[5px]">
                {chair.title}
              </span>
              <div className="flex">
                <RiStarSFill className="text-yellow-500 text-2xl" />
                <RiStarSFill className="text-yellow-500 text-2xl" />
                <RiStarSFill className="text-yellow-500 text-2xl" />
                <RiStarSFill className="text-yellow-500 text-2xl" />
                <RiStarSFill className="text-yellow-500 text-2xl" />
              </div>
              <div className="flex w-full items-center justify-between mt-7">
                <span className="font-semibold text-[22px] text-[#0d1b39]">
                  $ {chair.price}
                </span>
                <div className="rounded-full grid place-items-center bg-[#0D1B39] w-[48px] h-[48px] cursor-pointer">
                  <span className="text-white mt-[-3px] text-[35px]">+</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-3 mt-14">
        <a href="#" className="font-medium text-[18px] text-[#E58411]">
          View All
        </a>
        <BsArrowRight className="text-[#E58411]" />
      </div>
    </div>
  );
};

export default Products;
