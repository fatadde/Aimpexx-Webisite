export default function shippin2() {
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




           <section className="shipping">
                       <h2>Generate Address</h2>
                       <p>Select a shipment Type that fits your Goods</p>
                       <form method="POST" action="/shipping2">
                           <div className="column">
                               <div className="field">
                                   <input type="name" placeholder="Input your Full Name" name="fullName" /><br />
                               </div>    
           
                               <div className="field">
                                   <input type="email" placeholder="Input E-mail Address" name="email" /><br />
                               </div>    
           
                               <div className="field">
                                   <input type="phone" placeholder="Phone Number (whatsapp)" name="contact" /><br />
                               </div>    
           
                               <div className="field">
                                   <select name="shipmentType" id="shipmentType" required>
                                       <option disabled hidden>Select Shipment</option>
                                       
                                       <option value="Air Shipment">Air Shipment</option>
                                       <option value="Sea Shipment">Sea Shipment</option>
                                   </select>
                               </div>
                           </div>    
                           <div id="shipmentInfo">
                               <span>Warehouse Address</span>
                           </div> 
                           <button type="submit">Continue to Shipping</button><br />
                           <span>Join the moving train and make your business reach the global standard</span>
                       </form> 
            </section>           
        </main>
    )
};