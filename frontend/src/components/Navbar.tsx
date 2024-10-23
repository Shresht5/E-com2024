import { FcTimeline } from "react-icons/fc"
import { GiShoppingBag } from "react-icons/gi"
import { IoReorderThreeOutline, IoSearch } from "react-icons/io5"
import { RiAccountBoxLine } from "react-icons/ri"


const Navbar = () => {
    return (
        <div>
            <nav>
                <div>
                    <IoReorderThreeOutline />
                    <FcTimeline /> StyleNest
                </div>
                <div>
                    <IoSearch />
                </div>
                <div>
                    <GiShoppingBag />
                    <RiAccountBoxLine />
                </div>
            </nav>
        </div>
    )
}

export default Navbar