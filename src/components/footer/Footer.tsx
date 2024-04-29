const Footer = () => {
  return (
    <div className="w-full bg-[#F7F7F7] pt-[120px] md:px-[190px] px-20 pb-[56px] mt-[120px]">
      <div className="w-full flex md:flex-row flex-col md:items-center justify-between md:gap-0 gap-8">
        <div className="flex flex-col gap-7">
          <span className="font-bold text-[#1E1E1E] text-[28px]">Panto</span>
          <p className="font-medium text-[15px] max-w-[300px] text-[#1E1E1E]">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
          <span className="font-medium text-[17px] mb-5 text-[#F6973F]">
            Services
          </span>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1E1E1E]">
            Email Marketing
          </a>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1E1E1E]">
            Campaigns
          </a>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1E1E1E]">
            Branding
          </a>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
          <span className="font-medium text-[17px] mb-5 text-[#F6973F]">
            Furniture
          </span>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1E1E1E]">
            Beds
          </a>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1E1E1E]">
            Chairs
          </a>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1E1E1E]">
            All
          </a>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-[17px] mb-5 text-[#F6973F]">
            Follow Us
          </span>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1E1E1E]">
            Facebook
          </a>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1E1E1E]">
            Twitter
          </a>
          <a href="#" className="font-medium text-[15px] mb-4 text-[#1E1E1E]">
            Instagram
          </a>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between w-full md:gap-0 gap-4 mt-[120px]">
        <span className="opacity-70 text-[#1E2833] text-[15px]">
          {" "}
          Copyright 2024
        </span>
        <div className="flex items-center gap-[18px]">
          <a href="#" className="font-medium text-[#1E1E1E]">
            Terms & Conditions
          </a>
          <a href="#" className="font-medium text-[#1E1E1E]">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
