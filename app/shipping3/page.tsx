export default function Shipping3() {
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
            <button id="track">Track Shipment</button>
        </header>




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
            <button id="track">Track Shipment</button>
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
                                        <option value="" disabled selected hidden>Select Category</option>
                                        <option value="Air Shipment">Air Shipment</option>
                                        <option value="Sea Shipment">Sea Shipment</option>
                                    </select>
                                </div>     
            
                                <div className="field">
                                    <input type="text" placeholder="Input Weight (KG)" name="weight" /><br />
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
                            <button type="button">Consolidate</button>   
                            <button type="submit">Generate</button><br />
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
        </main>
    )
}