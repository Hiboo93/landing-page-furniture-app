import bg from "../../assets/images/bg02.jpg";
import { FaCartArrowDown } from "react-icons/fa6";
import { LINKS } from "../../constants.ts";
//px-5 peut etre a supprimer  sur la ligne 10 et 22 et 25

const Header = () => {
  return (
    <div
      className="w-full md:h-[105vh] h-screen bg-cover relative bg-center md:px-[80px] py-[40px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full flex items-center justify-between px-5">
        <span className="text-white font-bold text-[28px] cursor-pointer">
          Panto
        </span>
        <nav className="hidden md:flex items-center gap-[62px]">
          {LINKS.map((items) => (
            <a
              key={items.link}
              href={items.href}
              className="text-white no-underline font-medium text-[18px] transition-all duration-300 hover:text-[#11e5c2]"
            >
              {items.link}
            </a>
          ))}
        </nav>
        <FaCartArrowDown className="text-2xl text-white cursor-pointer hover:text-[#11e5c2]" />
      </div>
      <div className="w-full flex flex-col gap-5 items-center justify-center md:mt-[100px] mt-5">
        <div className="text-center text-white font-bold md:text-[80px] text-[60px] md:max-w-[900px] leading-[90px] px-5">
          Make Your Interior More Minimalistic & Modern
        </div>
        <p className="text-white md:text-[24px] text-[18px] font-[200] max-w-[600px] text-center px-5">
          Turn your room with panto a lot more minimalist and modern with ease
          and speed
        </p>
      </div>
      <div className="w-full h-[80px] bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0"></div>
    </div>
  );
};

export default Header;
