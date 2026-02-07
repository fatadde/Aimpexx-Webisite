
import { useRouter } from 'next/navigation';


export default function About() {
     const router = useRouter();
    return (
        <main>
            <main>
            <header className="header">
            <div className="logo">
                <img src="/images/logo.png" />
            </div>

            <nav>
                <ul>
                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropbtn">Company▾</a>
                        <div className="dropdown-content">
                            <a href="/aboutName">About Us</a>
                            <a href="/about">Why Choose Us</a>
                            <a href="/terms">Terms & Conditions</a>
                        </div>
                    </li>

                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropbtn">Services▾</a>
                        <div className="dropdown-content">
                            <a href="/sourcing">Sourcing</a>
                            <a href="/payment">Payment to suppliers</a>
                            <a href="/quality">Quality Check(Inspection)</a>
                            <a href="/manufacture">Manufacturing</a>
                            <a href="/shipping">Shipping</a>
                            <a href="/privacy">Privacy Policy</a>
                        </div>
                    </li>

                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropbtn">Contact▾</a>
                        <div className="dropdown-content">
                            <a href="#">21 Kodesho Street, Computer Village,Lagos State</a>
                            <a href="#">+234 808 333 9380</a>
                            <a href="#">aimpexx</a>
                            <a href="#">aimpexxworldwide@gmail.com</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <button id="track"  onClick={() => router.push('/track')}>Track Shipment</button>
        </header>


            <section className="aboutus">
                    <h2>About Us</h2>
                    <div className="herosection">
                        <div className="text">
                            <p>Who we are</p>
                            <span>At Aimpexx, we provide seamless, reliable logistics and supply chain solutions designed to meet your unique business needs. Our mission is to deliver exceptional services that foster long-term relationships and promote sustainable growth for our clients.<br/>With a vision to lead the logistics industry in Nigeria and beyond, we are committed to excellence, innovation, and customer satisfaction. Our goal is to simplify global trade, making it faster, easier, and more reliable.
                                Partner with Aimpexx Worldwide and experience unparalleled efficiency, reliability, and customer-focused service
                            </span>
                        </div>

                        
                        <img src="/images/aboutus-hero.png" alt="about us image"/>
                    </div>
                </section>

                <section className="valuessection">
                    <h2>Core Values</h2>
                        <div className="values">
                            <div className="value val1">
                                <h3>Trust</h3>
                                <p>We prioritize transparency,<br /> honesty, and integrity in all<br /> our dealings, ensuring that<br /> our customers can<br /> confidently rely on us for<br /> secure and seamless<br /> logistics solutions.</p>
                            </div>

                            <div className="value val2">
                                <h3>Efficiency</h3>
                                <p>From sourcing to delivery,<br /> we optimize every step of<br /> the process to save time,<br /> reduce costs, and<br /> eliminate unnecessary<br /> delays, ensuring a smooth<br /> logistics experience.</p>
                            </div>

                            <div className="value val1">
                                <h3>Innovation</h3>
                                <p>We continuously evolve,<br /> adopting cutting-edge<br /> technology and modern<br /> logistics strategies to<br /> enhance service delivery<br /> and stay ahead in the<br /> global supply chain<br /> industry.</p>
                            </div>

                            <div className="value val2">
                                <h3>Customer-<br />Centricity</h3>
                                <p>Our customers are at the<br /> heart of our operations.<br /> We tailor our services to<br /> meet unique needs,<br /> providing personalized<br /> solutions, real-time<br /> updates, and top-notch<br /> customer support.</p>
                            </div>

                            <div className="value val1">
                                <h3>Swift Delivery</h3>
                                <p>Time is critical in logistics.<br /> We are committed to fast<br /> and reliable deliveries,<br /> ensuring that goods arrive<br /> safely and on schedule,<br /> meeting the demands of<br /> modern businesses and<br /> individuals.</p>
                            </div>
                        </div>
                </section>

                <section className="chooseus" id="chooseus">
                    <h2>WHY CHOOSE US</h2>
                    <div className="chooseuscontent">
                        <div className="chooseusitem">
                            <img src="/images/chooseus1.png" alt="choose us image"/>
                            <h3 className="h3">Expertise</h3>
                            <p className="p">With years of experience in international<br /> trade, we solve logistics challenges<br /> quickly and efficiently</p>
                        </div>

                        <div className="chooseusitem">
                            <h3>Trust</h3>
                            <p>We’ve earned a reputation for reliability<br /> and integrity, ensuring your goods are in<br /> safe, dependable hands</p>
                        </div>

                        <div className="chooseusitem">
                            <img src="/images/chooseus2.png" alt="choose us image"/>
                            <h3 className="h3">Network</h3>
                            <p className="p">Our strong relationships with top<br /> suppliers in China enable fast, cost-<br />effective, and smooth deliveries.</p> 
                        </div>

                        <div className="chooseusitem choose" >
                            <img src="/images/chooseus3.png" />
                            <h3 className="h3">Support</h3>
                            <p className="p">Our dedicated customer service team is<br /> always available to assist, ensuring a<br /> seamless experience every time.</p>
                        </div>
                    </div>
                </section>

                <footer>
                <div className="foot">
                    <ul>
                        <h2>Our Services</h2>
                        <a href="/sourcing"><li>Sourcing</li></a>
                        <a href="/payment"><li>Payment to suppliers</li></a>
                        <a href="/quality-check"><li>Quality Check<br />(Inspection)</li></a>
                        <a href="/manufacturing"><li>Manufacturing</li></a>
                        <a href="/shipping"><li>Shipping</li></a>
                    </ul>

                    <ul>
                        <h2>Company</h2>
                        <a href="/about"><li>About Us</li></a>
                        <a href="/about"><li>Why Choose Us</li></a>
                        <a href="/terms"><li>Terms & Conditions</li></a>
                        <a href="/privacy"><li>Privacy Policy</li></a>
                    </ul>

                    <ul>
                        <h2>Tools</h2>
                        <a href="/shippingcost"><li>Calculate Shipping<br />Cost</li></a>
                        <a href="/trackShipment"><li>Track your<br />Shipment</li></a>
                    </ul>

                    <ul>
                        <h2>Contact Us</h2>
                        <a href="/about"><li>21 Kodesho Street, Computer Village,<br /> Lagos State</li></a>
                        <a href="/about"><li>+234 808 333 9380</li></a>
                        <a href="/about"><li>aimpexx</li></a>
                        <a href="/about"><li>aimpexxworldwide@gmail.com</li></a>
                    </ul>

                    <form>
                        <h2>Subscribe to our News letter</h2>
                        <label>
                            <input type="email" placeholder="Enter your E-mail Address" />
                        </label><br />
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className="line"></div>
                <p className="reserved">2025 <span>c</span> Aimpexx All rights reserved</p>
            </footer>  
        </main>
    )};