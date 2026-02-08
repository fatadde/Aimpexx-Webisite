export default function Cost() {
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



            <div className="shippingcost">
                            <h2>Current <b>Shipping Rates</b></h2>
                            <span>A competitive shipping rates to help you plan you import better.</span>
                        </div>
            
                        <section className="shippingcost2">
                            <p><b>Sea Cargo</b> (0.5CBM Minimum weight for Sea Shipping)</p>
                            <div className="column">
                                <div>
                                    <b>Service Type</b>
                                    <p>General Goods</p>
                                    <p>Light and Sensitive Goods</p>
                                </div>
            
                                <div>
                                    <b>0.5 CBM - 1CBM</b>
                                    <p>320USD/CBM</p>
                                    <p>410USD/CBM</p>
                                </div>
            
                                <div>
                                    <b>1 + CBM</b>
                                    <p>315USD/CBM</p>
                                    <p>405USD/CBM</p>
                                </div>
                            </div>    
                        </section>
            
                         <section className="shippingcost3">
                            <p><b>Air Cargo</b> (1KG Minimum weight for Air Shipping)</p>
                            <div className="column">
                                <div>
                                    <b>Service Type</b>
                                    <p>General Goods</p>
                                    <p>Light and Sensitive Goods</p>
                                    <p>Express goods</p>
                                    <p>Gadget Cargo (Non Packet phone)</p>
                                    <p>Gadget Cargo (Tablets)</p>
                                    <p>Gadget Cargo (Packet phone)</p>
                                    <p>Gadget Cargo (Laptops)</p>
                                </div>
            
                                <div>
                                    <b>Price</b>
                                    <p>$9.9/ KG</p>
                                    <p>$10.6/ KG</p>
                                    <p>$13/ KG</p>
                                    <p>₦20,000 each</p>
                                    <p>$14/ KG</p>
                                    <p>₦20,000 each</p>
                                    <p>$14/ KG</p>
                                </div>
            
                                <div>
                                    <b>Delivery TIme</b>
                                    <p>5-7 days Guangzhou to Lagos - Clearing ₦1100/ KG</p>
                                    <p>15-20 days Hongkong to Lagos - Clearing ₦1200/ KG</p>
                                    <p>2-5 days (Minimum weight 10kg)  - Clearing ₦1800/ KG</p>
                                    <p>5 days</p>
                                    <p>5 days Clearing ₦4,000/ KG</p>
                                    <p>5 days</p>
                                    <p>5 days Clearing ₦4,000/ KG</p>
                                </div>
                            </div>   
                            <span>Our prices are updated daily, confirm price list before booking.</span>
                        </section>
            
                        <section className="details-cost">
                            <div className="cost-head">
                                <h2>Calculate your Shipping Rates</h2>
                                <p>Get an instant quote for your shipment with transparent pricing</p>
                            </div>
            
                            <div className="shippingcost-form">
                                <div className="columns">
                                    <form>
                                        <div className="colum">
                                            <div className="column">
                                                <div className="field">
                                                    <label>Origin</label><br />
                                                    <input type="text" placeholder="China" required /><br/>
                                                </div>
            
                                                <div className="field">
                                                    <label>Cargo Type</label><br />
                                                    <select name="shipmentType" id="shipmentType" required>
                                                        <option value="" disabled hidden>Air</option>
                                                        <option value="Air Shipment">Air Shipment</option>
                                                        <option value="Sea Shipment">Sea Shipment</option>
                                                    </select>
                                                </div>
            
                                                <div className="field">
                                                    <label>Weight (KG)</label><br />
                                                    <input type="text" placeholder="0.0" required ></input>
                                                </div>
                                            </div>
            
                                            <div className="column">
                                                <div className="field">
                                                    <label>Destination</label><br />
                                                    <select name="shipmentType" id="shipmentType" required>
                                                        <option value="" disabled hidden>Lagos</option>
                                                        <option value="Air Shipment">Air Shipment</option>
                                                        <option value="Sea Shipment">Sea Shipment</option>
                                                    </select>
                                                </div>
            
                                                <div className="field">
                                                    <label>Service Type</label><br />
                                                    <select name="shipmentType" id="shipmentType" required>
                                                        <option value="" disabled hidden>General Goods</option>
                                                        <option value="Air Shipment">Air Shipment</option>
                                                        <option value="Sea Shipment">Sea Shipment</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>    
            
                                        <div className="balance">
                                            <div>
                                                <b>Estimated Shipping Cost</b>
                                                <p>Estimated Clearing Cost</p>
                                            </div>
            
                                            <div>
                                                <b>$0</b>
                                                <p>$0</p>
                                            </div>
                                        </div>
                                        <button type="submit">Get instant Cost</button>
                                    </form>
                                </div>
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
};