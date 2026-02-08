import Link from "next/link"

export default function Scheldule() {
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





            <section className="scheldule3" id="form1">
                        <h2>Let us know you better</h2>
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                        <p>Input your personal details</p>
                        <form method="POST" action="/scheldule3">
                            <div className="column">
                                <div className="form-group">
                                    <input type="text" placeholder="Input your Full Name" name="fullName" /><br />
                                </div> 
                                
                                <div className="form-group">
                                    <input type="tel" placeholder="Phone Number (whatsapp)" name="contact" /><br />
                                </div>  
                    
                                <div className="form-group">
                                    <input type="email" placeholder="Input E-mail Address" name="email" /><br />
                                </div>       
                            </div>   
                            <Link href="/"> 
                            <button type="submit">Submit</button>
                            </Link>
                            <br />
                            <span>Join the moving train and make your business reach the global standard</span>
                        </form>
                    </section> 
        </main>
    )
}