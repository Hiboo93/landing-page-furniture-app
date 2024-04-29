import materials1 from "../../assets/images/materials1.jpg";
import materials2 from "../../assets/images/materials2.jpg";
import { BsArrowRight } from "react-icons/bs";
// ligne 13 lg:mr-300px peut etre à enlever
// ligne 14 lg:mr-400px peut etre à enlever

const Materials = () => {
  return (
    <div
      id="about"
      className="w-full flex md:flex-row-reverse flex-col items-center justify-between md:pl-[80px] pl-0 mb-[120px]"
    >
      <div className="relative flex items-center md:gap-[42px] gap-0 ">
        <div className="absolute bg-[#F7F7F7] rounded-tl-[20px] right-0 top-3 w-[300px] h-[300px] z-[-1] md:block hidden"></div>
        <img src={materials1} alt="image" className="w-[400px] h-[700px]" />
        <img
          src={materials2}
          alt="image"
          className="w-[500px] h-[500px] rounded-lg"
        />
      </div>
      <div className="flex flex-col md:mt-[-60px] mt-5 md:px-0 px-8 lg:mr-[400px]">
        <span className="font-medium text-[#E58411] text-[18px] tracking-[0.2em]">
          Materials
        </span>
        <span className="font-bold text-[#1E1E1E] text-[42px] max-w-[450px] leading-[50px] mt-5">
          Very Serious Materials For Making Furniture
        </span>
        <p className="mt-5 max-w-[500px]">
          Because panto was very serious about designing furniture for our
          environement, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <div className="w-full flex items-center justify-start gap-3 mt-6">
          <a href="#" className="font-medium text-[14px] text-[#E58411]">
            More Info
          </a>
          <BsArrowRight className="text-[#E58411]" />
        </div>
      </div>
    </div>
  );
};

export default Materials;
