import bg from "../../assets/images/bg2.jpg"

const Header = () => {
  return (
    <div className="w-full md:h-[105vh] h-screen bg-cover relative bg-center md:px-[80px] py-[40px]" style={{backgroundImage: `url(${bg})`}}>
      <div className="w-full flex items-center justify-between">
        <span className="text-white font-bold text-[28px] cursor-pointer">Panto</span>
      </div>
    </div>
  )
}

export default Header