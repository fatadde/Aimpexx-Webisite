'use client';

import { useState } from "react";
import Link from "next/link";

export default function Scheldule2() {
  const [selectedTime, setSelectedTime] = useState(null);

  const timeframeOptions = [
    "0-1 Week",
    "2-3 Weeks",
    "1 Month",
    "My Time",
    "Not Ready, still Planning",
  ];


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



    <section className="scheldule2">
      <h2>What time best suits you?</h2>

      <div className="progress-bar">
        <div className="progress"></div>
      </div>

      <p>Select the time that suits the request of your Service</p>

      <form method="POST" action="/scheldule2">
        <div id="timeframeOptions">
          {timeframeOptions.map((time, index) => (
            <div key={index}>
              <input
                type="radio"
                name="timeframe"
                value={time}
                checked={selectedTime === index}
                readOnly
                required
                style={{ display: "none" }}
              />

              <p
                className={`timeframe-option ${selectedTime === index ? "selected" : ""}`}
                data-time={time}
                onClick={() => setSelectedTime(index)}
              >
                {time}
              </p>
            </div>
          ))}
        </div>

          <Link href="/scheldule3">
        <button type="submit" id="submitBtn" disabled={selectedTime === null}>
          Begin your Journey
        </button>
        </Link>

        <br />

        <span>
          Join the moving train and make your business reach the global standard
        </span>
      </form>
    </section>
    </main>
  );
};