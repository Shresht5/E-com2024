import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="">
            <footer className=" text-white m-5 p-5  border-gray-300 border-4 border-solid bg-gray-600 space-y-4">
                <div className="space-y-3">
                    <h2 className="text-center text-lg">About Us</h2>
                    <p>
                        We are a small company providing high-quality products and services. Our mission is to ensure the best customer satisfaction with our personalized approach and dedication to excellence.
                    </p>
                </div>

                <div className="flex justify-between space-x-3">
                    <div className="space-y-2">
                        <h2 className="text-lg">Quick Links</h2>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg">Contact Us</h2>
                        <ul>
                            <li>Address: 456 Small Street, Town, Country</li>
                            <li>Email: <a href="mailto:info@smallcompany.com">info@smallcompany.com</a></li>
                            <li>Phone: <a href="tel:+123456789">+123-456-789</a></li>
                            <li>Working Hours: Mon - Fri, 10:00 AM - 6:00 PM</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg">Follow Us</h2>
                        <ul>
                            <li><a href="https://facebook.com/smallcompany"><FaFacebookSquare className="Icon" /></a></li>
                            <li><a href="https://twitter.com/smallcompany"><FaSquareXTwitter className="Icon" /></a></li>
                            <li><a href="https://instagram.com/smallcompany"><FaInstagramSquare className="Icon" /></a></li>
                            <li><a href="https://linkedin.com/company/smallcompany"><FaLinkedin className="Icon" /></a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p className="text-center">&copy; 2024 Small Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer