export default function scheldule() {
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




            <section className="scheldule">
                <h2>Choose the Service you need</h2>
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
                <p>Select the Service to best direct you with the right partner</p>
                <form method="POST" action="/scheldule">
                    <div id="serviceOptions">
                        <input type="radio" id="service1" name="service" value="Sourcing" required />
                        <p className="service-option" data-service="Sourcing">Sourcing<br /><span>Finding quality products in China</span></p>
                        
                        <input type="radio" id="service2" name="service" value="Payment to Suppliers" required />
                        <p className="service-option" data-service="Payment to Suppliers">Payment to Suppliers<br /><span>No hidden charges, no FX confusion, no payment delays.</span></p>
                        
                        <input type="radio" id="service3" name="service" value="Quality Check (Inspection)" required />
                        <p className="service-option" data-service="Quality Check (Inspection)">Quality Check (Inspection)<br /><span>our inspection team ensures everything meets your exact specifications. </span></p>
                        
                        <input type="radio" id="service4" name="service" value="Manufacturing" required />
                        <p className="service-option" data-service="Manufacturing">Manufacturing<br /><span>From factory visits to real-time production monitoring, we ensure your products<br /> meet the agreed standards.</span></p>
                        
                        <input type="radio" id="service5" name="service" value="Shipping" required />
                        <p className="service-option" data-service="Shipping">Shipping<br /><span>We handle the journey from China to your final destination—smoothly,<br /> safely, and efficiently.</span></p>
                    </div>
                    <button type="submit" id="btn1">Next</button><br />
                    <span>Join the moving train and make your business reach the global standard</span>
                </form>
            </section>
        </main>
    )
}