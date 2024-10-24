import { FcTimeline } from "react-icons/fc"
import { GiShoppingBag } from "react-icons/gi"
import { IoReorderThreeOutline, IoSearch } from "react-icons/io5"
import { RiAccountBoxLine } from "react-icons/ri"


const Navbar = (props: any) => {
    return (
        <div className="flex flex-col">
            <nav className="px-4 py-2 w-full flex justify-between items-center space-y  ">
                <div className="flex items-center">
                    <button onClick={props.handleSidebar} className="p-1 border-gray-600 border-solid border-2 rounded-lg mr-2">
                        <IoReorderThreeOutline className="Icon" />
                    </button>
                    <div className="flex items-center"  >
                        <FcTimeline className="Icon" />
                        <h1 className="text-2xl">StyleNest</h1>
                    </div>
                </div>
                <div className="hidden  items-center sm:flex">
                    <input className="border-2 border-gray-300 rounded-md"></input><IoSearch className="Icon" />
                </div>
                <div className="flex items-end">
                    <GiShoppingBag className="Icon" />
                    <RiAccountBoxLine className="Icon" />
                </div>
            </nav>
            <div className="flex items-center mx-auto sm:hidden ">
                <input className="border-2 border-gray-300 rounded-md"></input><IoSearch className="Icon" />

            </div>
        </div>
    )
}

export default Navbar