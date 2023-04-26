import { FaPlusCircle, FaHome, FaListOl } from "react-icons/fa";

const Nav = ({dataHandle}) => {
    return (
        <div className="visible md:invisible text-center absolute inset-x-0 bottom-0 w-full bg-sky-800 h-16">
            <div className="static z-10 grid grid-cols-3 items-center text-lg font-bold">
                <div className="absolute left-[10%] text-[40px] top-3 text-gray-200"><FaHome /></div>
                <div className="text-indigo-200 absolute bottom-2 justify-self-center">
                  <FaPlusCircle onClick={dataHandle} className="text-[70px] cursor-pointer"/>
                </div>
                <div className="absolute right-[10%] text-[30px] top-4 text-gray-200"><FaListOl /></div>
            </div>
        </div>
    )
}

export default Nav;