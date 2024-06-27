import { RiSearchEyeLine } from "react-icons/ri";

function Header() {
  return (
    <div className="mt-3 flex flex-col gap-0 justify-center item-centre text-black">
      <div className="flex text-5xl font-bold ml-20 p-3">
      <h1 className="text-5xl font-bold pl-10 ">Your ideal <span className="text-white">Job</span> awaits , start the <span className="text-white">Search</span></h1>
      <RiSearchEyeLine/>
      </div>
     
      <p className="text-2xl">gets latest job openings ,thats suits you!</p>
    </div>
  )
}

export default Header
