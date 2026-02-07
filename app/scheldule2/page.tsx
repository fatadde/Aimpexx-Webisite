export default function Scheldule2() {
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




            <section className="scheldule2">
                        <h2>What time best suits you?</h2>
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                        <p>Select the time that suits the request of your Service</p>
                        <form method="POST" action="/scheldule2">
                            <div id="timeframeOptions">
                                <input type="radio" id="time1" name="timeframe" value="0-1 Week" required />
                                <p className="timeframe-option" data-time="0-1 Week">0-1 Week</p>
                                
                                <input type="radio" id="time2" name="timeframe" value="2-3 Weeks" required />
                                <p className="timeframe-option" data-time="2-3 Weeks">2-3 Weeks</p>
                                
                                <input type="radio" id="time3" name="timeframe" value="1 Month" required />
                                <p className="timeframe-option" data-time="1 Month">1 Month</p>
                                
                                <input type="radio" id="time4" name="timeframe" value="My Time" required />
                                <p className="timeframe-option" data-time="My Time">My Time</p>
                                
                                <input type="radio" id="time5" name="timeframe" value="Not Ready, still Planning" required />
                                <p className="timeframe-option" data-time="Not Ready, still Planning">Not Ready, still Planning</p>
                            </div>
                            <button type="submit" id="submitBtn">Begin your Journey</button><br />
                            <span>Join the moving train and make your business reach the global standard</span>
                        </form>
                    </section>
        </main>
    )
}