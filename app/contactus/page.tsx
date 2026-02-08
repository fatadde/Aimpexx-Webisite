import Link from "next/link";


export default function Contact() {
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
            <Link href="/track">
            <button id="track">Track Shipment</button>
            </Link>
        </header>


            <section className="contact">
                        <div>
                            <p>Contact Us</p>
                        </div>
                    </section>  
                    
                    <section className="contact-form">
                        <div className="columns">
                            <form  method="POST" action="/contact" >
                                <div className="column">
                                    <div className="form-group">
                                        <label>Name</label><br />
                                        <input type="text" name="fullName" /><br />
                                    </div> 
                                    
                                    <div className="form-group">
                                        <label>E-mail</label><br />
                                        <input type="email" name="email" />
                                    </div> 
                            
                                    <div className="form-group">
                                        <label>Contact No</label>
                                        <input type="text" name="contact" />
                                    </div>     
                            
                                    <div className="form-group">
                                        <label>Message</label>
                                    </div> 
                                </div>    
                                <Link href="/">
                                <button type="submit">Submit</button>
                                </Link>
                            </form>
                        </div>
            
                        <img src="images/contact2.png" />
                    </section>
            
                    <section className="contact-address">
                        <p>
                            Nigeria Contact:<br />
                            21 Kodesoh, Computer Village,Ikeja, Lagos State.
            
                            <br />
                            <br />
                            +234 808 333 9380,<br />
                            aimpexxworldwide@gmail.com
                        </p>
            
                        <p>
                            China Contact:<br />
                            Air Address:<br />
                            所在地区: 广东省佛山市南海区大沥镇 详细地址: 教育路<br />与沙溪路交叉口东北方向90米一番街E座0722
                            <br /><br />
            
                            Sea Address: 仓库地址：广东省佛山市南海区里水镇里广路海<br />南州工业区44号费加罗仓储<br />
                            Shipping mark: ABRAHAMOLAS  L0S1320 + SEA<br />
                            +86 159 2016 5954,
                        </p>
                    </section>
            
                        <section className="questions">
                            <div className="que-text">
                                <p>What services does Aimpexx Worldwide offer?</p>
                                <p>How can I track my shipment?</p>
                                <p>How do I get a quote for my shipment?</p>
                                <p>What are the shipping timeframes for air and sea<br />shipments?</p>
                                <p>Can Aimpexx Worldwide handle my customs<br />clearance?</p>
                                <p>How do I know if my goods are safe during<br />transit?</p>
                                <p>How do I request local delivery within Nigeria?</p>
                                <p>Do you offer warehousing services?</p>
                            </div>

                            <div className="plusicon">
                            <p>+</p>
                            <p>+</p>
                            <p>+</p>
                            <p>+</p>
                            <p>+</p>
                            <p>+</p>
                            <p>+</p>
                            <p>+</p>
                            </div>

                            <div className="que">
                                <h2>FAQs</h2>
                                <p>Here are answers to some frequently asked questions we have received in the past.</p>
                                <img src="images/Rectangle 133.png" />
                            </div>
                        </section>
            
                    <footer>
                        <div className="foot">
                            <ul>
                                <h2>Our Services</h2>
                                <a href="/sourcing"><li>Sourcing</li></a>
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
                                <a href="/track"><li>Track your<br />Shipment</li></a>
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
}