import { WHYITEMS } from "../../constants.ts";
import { BsArrowRight } from "react-icons/bs";

const Why = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="w-full flex md:flex-row flex-col md:items-center items-start justify-between md:px-[80px] px-[40px] py-[120px]"
    >
      <span className="text-black font-bold text-[42px]">
        Why <br /> Choosing Us
      </span>
      <div className="flex md:flex-row flex-col items-center gap-[28px] md:mt-0 mt-8">
        {WHYITEMS.map((item) => (
          <div key={item.title} className="flex flex-col">
            <span className="font-bold text-[#1E1E1E] text-[24px]">
              {item.title}
            </span>
            <p className="mt-5 font-[300] text-[#1E1E1E] max-w-[300px]">
              {item.description}
            </p>
            <div className="flex items-center gap-4 mt-4 cursor-pointer">
              <a href="#" className="font-medium text-[14px] text-[#E58411]">
                More Info
              </a>
              <BsArrowRight className="text-[#E58411]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
