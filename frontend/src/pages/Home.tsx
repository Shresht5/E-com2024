import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Home = () => {
    const [sideBar, setsideBar] = useState<boolean>(false)
    const handleSidebar = () => {
        setsideBar(!sideBar);
    }
    return (
        <div className="relative" >
            <Navbar side={handleSidebar} />
            <div className="border-t border-gray-300 my-4"></div>
            Home
            <Footer />
        </div>
    )
}

export default Home