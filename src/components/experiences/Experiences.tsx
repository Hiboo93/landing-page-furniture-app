import experience from "../../assets/images/bgfutur.jpg";
import { BsArrowRight } from "react-icons/bs";
// ligne 10 w-[90%] et ml-5 peut etre à enlever
// ligne 14 lg:mr-120px peut etre à enlever

const Experiences = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center md:gap-48 gap-20 mt-[240px] mb-[120px]">
      <div className="relative">
        <div className="absolute bg-[#F7F7F7] rounded-tr-[20px] left-0 top-[-66px] w-[450px] h-[300px] z-[-1]"></div>
        <img src={experience} alt="image" className="rounded-2xl w-[90%] ml-5" />
        <div className="absolute bg-[#F7F7F7] rounded-[20px] right-0 top-[45%] -translate-y-1/2 translate-x-[50px] w-[450px] h-[300px] z-[-1]"></div>
      </div>
      <div className="flex flex-col mt-[-60px] md:px-0 px-8 lg:mr-[120px]">
        <span className="font-medium text-[#E58411] text-[18px] tracking-[0.2em]">
          EXPERIENCES
        </span>
        <div className="font-bold text-[#1E1E1E] text-[42px] max-w-[450px] leading-[50px] mt-5">
          We Provide You The Best Experience
        </div>
        <p className="mt-5 max-w-[500px]">
          You don't have to worry about the result because all of these interiors are made by people who are professionals in their with an elegant and lucurious style and with premium quality materials
        </p>
        <div className="w-full flex items-center justify-start gap-3 mt-6">
          <a href="#" className="font-medium text-[14px] text-[#E58411]">More Info</a>
          <BsArrowRight className="text-[#E58411]" />
        </div>
      </div>
    </div>
  )
}

export default Experiences
