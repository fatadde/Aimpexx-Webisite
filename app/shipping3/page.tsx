import Link from "next/link"

export default function Shipping3() {
    return (
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
                            <a href="/about">About Us</a>
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
            <Link href="/track">
                <button id="track">Track Shipment</button>
            </Link>
        </header>

            <section className="shipping3">
                        <div className="herosection">
                            <div className="text">
                                <h2>No More <b>Shipping<br />Uncertainty</b></h2>
                                <span>Track Your Goods from China to Your Doorstep</span>
                                <p>We handle the journey from China to your final destination—smoothly, safely, and efficiently. Whether by air or sea, our logistics system ensures your goods pass through customs seamlessly and arrive on time. You’ll always know where your goods are through real-time tracking.</p>
                            </div>
            
                            <div className="image">
                                <img src="/images/shipping-hero.png" alt="shipping image"/>
                                <img className="png2-hero" src="/images/shipping-hero2.png" alt="shipping image"/>
                            </div>
                        </div>
            
                        <form method="POST" action="/shipping3">
                            <div className="column">
                                <div className="field">
                                    <select name="shipmentType" required>
                                        <option value="" disabled hidden>Select Category</option>
                                        <option value="Air Shipment">Air Shipment</option>
                                        <option value="Sea Shipment">Sea Shipment</option>
                                    </select>
                                </div>     
            
                                <div className="field">
                                    <input type="text" placeholder="Input Weight (KG)" name="weight" />
                                </div>    
            
                                <div className="field">
                                    <select name="shipmentType" required>
                                        <option disabled hidden>Shipping Category</option>
                                        
                                        <option value="Air Shipment">Air Shipment</option>
                                        <option value="Sea Shipment">Sea Shipment</option>
                                    </select>
                                </div>    
            
                                <div className="field">
                                    <input type="email-address" placeholder="Input E-mail Address" name="email" /><br />
                                </div> 
            
                                <div className="field">
                                    <input type="text" placeholder="Input Tracking ID" name="track-id" id="trackId" /><br />
                                </div> 
                            </div>
                            <Link href="/">
                            <button type="button">Consolidate</button>   
                            </Link>

                            <Link href="/">
                            <button type="submit">Generate</button><br />
                            </Link>
                            <span>Note: For consolidation, we typically have a 5-day window to receive<br /> goods before shipping. Extended storage can incur additional costs. Our<br /> sea shipments typically depart on Mondays and Wednesdays.</span>
                        </form>
                    </section>
            
                    <section className="shipping-boxes">
                        <div className="box">
                            <span>1</span>
                            <p>Real-time<br /> shipment<br /> tracking</p>
                        </div>
            
                        <div className="box">
                            <span>2</span>
                            <p>Hassle free<br /> customs<br /> clearing</p>
                        </div>
            
                        <div className="box">
                            <span>3</span>
                            <p>Competitive<br /> freight rates</p>
                        </div>
            
                        <div className="box">
                            <span>4</span>
                            <p>Fast, reliable<br /> door-to-door<br /> delivery</p>
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
                    <a href="/aboutus"><li>About Us</li></a>
                    <a href="/aboutus"><li>Why Choose Us</li></a>
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
                    <a href="/aboutus"><li>21 Kodesho Street, Computer Village,<br /> Lagos State</li></a>
                    <a href="/aboutus"><li>+234 808 333 9380</li></a>
                    <a href="/aboutus"><li>aimpexx</li></a>
                    <a href="/aboutus"><li>aimpexxworldwide@gmail.com</li></a>
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
    )
};