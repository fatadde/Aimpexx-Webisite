import Link from "next/link"

export default function Quality3() {
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




            <section className="quality3-form" id="form3">
                    
                         <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                        <form method="POST" action="/quality-check3">
                            <div className="column">    
                                <div className="form-group">
                                    <input type="text" placeholder="What Kind of Product(s) are you purchasing?" name="description" /><br />
                                </div>     
                        
                                <div className="form-group">
                                    <select name="shipmentType" id="shipmentType" required>
                                        <option disabled selected hidden>Expected Order Value</option>
                                        
                                        <option value="Air Shipment">Air Shipment</option>
                                        <option value="Sea Shipment">Sea Shipment</option>
                                    </select>
                                </div>
                            </div>    
                            <Link href="/">
                            <button type="submit">Submit</button>
                            </Link>
                        </form>
                    </section>
            
                    <section className="shipping-boxes">
                        <div className="box">
                            <span>1</span>
                            <p>Thorough pre-<br />shipment<br /> inspections</p>
                        </div>
            
                        <div className="box">
                            <span>2</span>
                            <p>Product<br /> quantity &<br /> quality<br /> verification</p>
                        </div>
            
                        <div className="box">
                            <span>3</span>
                            <p>Packaging<br /> and<br /> specification<br /> checks</p>
                        </div>
            
                        <div className="box">
                            <span>4</span>
                            <p>Photo & video<br /> reports for<br /> transparency</p>
                        </div>
                    </section>
            
                    <footer>
                    <div className="foot">
                        <ul>
                            <h2>Our Services</h2>
                            <a href="/source"><li>Sourcing</li></a>
                            <a href="/payment"><li>Payment to suppliers</li></a>
                            <a href="/qualitycheck"><li>Quality Check<br />(Inspection)</li></a>
                            <a href="/manufacture"><li>Manufacturing</li></a>
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
                            <a href="#"><li>21 Kodesho Street, Computer Village,<br /> Lagos State</li></a>
                            <a href="#"><li>+234 808 333 9380</li></a>
                            <a href="#"><li>aimpexx</li></a>
                            <a href="#"><li>aimpexxworldwide@gmail.com</li></a>
                        </ul>
        
                        <form>
                            <h2>Subscribe to our News letter</h2>
                            <label>
                                <input type="email" placeholder="Enter your E-mail Address" />
                            </label><br/>
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div className="line"></div>
                    <p className="reserved">2025 <span>c</span> Aimpexx All rights reserved</p>
                </footer>
        </main>
    )
}