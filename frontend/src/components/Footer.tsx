import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="bg-red-500 text-gray-400">
            <footer>
                <div>
                    <h2 className="">About Us</h2>
                    <p>
                        We are a small company providing high-quality products and services. Our mission is to ensure the best customer satisfaction with our personalized approach and dedication to excellence.
                    </p>
                </div>

                <div className="flex">
                    <div>
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Address: 456 Small Street, Town, Country</li>
                            <li>Email: <a href="mailto:info@smallcompany.com">info@smallcompany.com</a></li>
                            <li>Phone: <a href="tel:+123456789">+123-456-789</a></li>
                            <li>Working Hours: Mon - Fri, 10:00 AM - 6:00 PM</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Follow Us</h2>
                        <ul>
                            <li><a href="https://facebook.com/smallcompany"><FaFacebookSquare /></a></li>
                            <li><a href="https://twitter.com/smallcompany"><FaSquareXTwitter /></a></li>
                            <li><a href="https://instagram.com/smallcompany"><FaInstagramSquare /></a></li>
                            <li><a href="https://linkedin.com/company/smallcompany"><FaLinkedin /></a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p>&copy; 2024 Small Company. All rights reserved.</p>
                    <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer