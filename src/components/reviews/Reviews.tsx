import profil3 from "../../assets/images/profils3.png";
import { REVIEWS } from "../../constants.ts";

const Reviews = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col gap-2 w-full items-center justify-center">
        <span className="font-medium text-[#E58411] text-[18px] uppercase">Testimonials</span>
        <span className="font-bold text-[#1E1E1E] text-[42px]">Our client Reviews</span>
      </div>
      <div className="flex md:flex-row flex-col w-full items-center justify-between mt-[60px] px-[130px] gap-10 ">
        {REVIEWS.map((review) => (
          <div 
            key={review.title} 
            className="relative"
          >
            <img
              src={review.image}
              alt={review.title}
              className="md:w-fit w-full h-full rounded-xl"
            />
            <div className="bg-white absolute bottom-[10px] md:bottom-[10px]  left-[5%] md:left-[8%] md:w-[324px] w-[180px] mx-[15px] h-[200px] md:h-[250px] rounded-[18px]">
              <div className="absolute bg-white rounded-full w-[66px] h-[66px] top-[-25px] left-[50%] -translate-x-1/2 grid place-items-center">
                <img 
                  src={profil3} 
                  alt="profil" 
                  className="size-[60px]"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center mt-10 md:px-10 px-1">
                <span className="font-bold text-black text-[18px]">{review.user}</span>
                <span className=" text-black text-[12px] mb-[10px] font-semibold">{review.title}</span>
                <span className=" text-center text-black text-[12px]">{review.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
