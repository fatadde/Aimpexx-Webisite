export default function Track() {
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
                            <a href="/source">Sourcing</a>
                            <a href="/payment">Payment to suppliers</a>
                            <a href="/qualitycheck">Quality Check(Inspection)</a>
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
            <button id="track">Track Shipment</button>
        </header>



            <section className="trackshipment">
                    <h2>Track your Shipment</h2>
        
                    <div className="track">
                        <div className="track-form">
                            <form method="POST" action="trackShipment">
                                <div className="field">
                                    <label>Input your Tracking ID</label><br />
                                    <input type="text" />
                                </div>
                                <button type="submit">Track Shipment</button>
                            </form>
                        </div>
        
                        <img src="images/track.png" />
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