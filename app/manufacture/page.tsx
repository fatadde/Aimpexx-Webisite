export default function manufacture() {
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



            <section className="manufacture">
                        <div className="manufacture-text">
                            <h2><b >Stop Struggling</b> with<br /> Factories</h2>
                            <span>We Manage Your Production End-to-End</span>
                            <p >Your production process is fully overseen<br /> by our on-ground team in China. From<br /> factory visits to real-time production<br /> monitoring, we ensure your products meet<br /> the agreed standards. Every batch is<br /> checked for quality, compliance, and<br /> consistency—so you always receive what<br /> you ordered.</p>
                        </div>
            
                        <img src="/images/manufacture.png" />
                    </section>
            
                    <section className="manufacture-form" id="form1">
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                        <form  method="POST" action="/manufacturing">
                            <div className="column">
                                <div className="form-group">
                                    <input type="text" placeholder="Input your Full Name" name="fullName" />
                                </div> 
                                
                                <div className="form-group">
                                    <input type="tel" placeholder="Phone Number (whatsapp)" name="contact" />
                                </div>  
                    
                                <div className="form-group">
                                    <input type="email" placeholder="Input E-mail Address" name="email" />
                                </div>      
                    
                                <div className="form-group">
                                    <select name="shipmentType" id="shipmentType" required>
                                        <option value="" disabled selected hidden>Product Category</option>
                                        <option value="Air Shipment">Air Shipment</option>
                                        <option value="Sea Shipment">Sea Shipment</option>
                                    </select>
                                </div>
                            </div>    
                            <button type="submit">Continue</button>
                        </form>
                    </section> 
            
                   <section className="shipping-boxes">
                        <div className="box">
                            <span>1</span>
                            <p>Verified and<br /> trusted <br />supplier<br /> network</p>
                        </div>
            
                        <div className="box">
                            <span>2</span>
                            <p>Thorough<br /> product quality<br /> validation</p>
                        </div>
            
                        <div className="box">
                            <span>3</span>
                            <p>Fair and<br /> optimized<br /> pricing</p>
                        </div>
            
                        <div className="box">
                            <span>4</span>
                            <p>Custom product<br /> options when<br /> needed</p>
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
                                <a href="#"><li>Why Choose Us</li></a>
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