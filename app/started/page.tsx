'use client';
import Link from 'next/link';

import { useState } from 'react';

export default function Started() {
  const services = [
    {
      value: 'Sourcing',
      title: 'Sourcing',
      description: 'Finding quality products in China',
    },
    {
      value: 'Payment to Suppliers',
      title: 'Payment to Suppliers',
      description: 'No hidden charges, no FX confusion, no payment delays.',
    },
    {
      value: 'Quality Check (Inspection)',
      title: 'Quality Check (Inspection)',
      description:
        'Our inspection team ensures everything meets your exact specifications.',
    },
    {
      value: 'Manufacturing',
      title: 'Manufacturing',
      description:
        'From factory visits to real-time production monitoring, we ensure your products meet the agreed standards.',
    },
    {
      value: 'Shipping',
      title: 'Shipping',
      description:
        'We handle the journey from China to your final destination—smoothly, safely, and efficiently.',
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <main>
        <header className="header">
                <div className="logo">
                  <img src="/images/logo.png" alt="Logo" />
                </div>
        
                <nav>
                  <ul>
                    <li className="dropdown">
                      <a href="#">Company▾</a>
                      <div className="dropdown-content">
                        <Link href="/about">About Us</Link>
                        <Link href="/about">Why Choose Us</Link>
                        <Link href="/terms">Terms & Conditions</Link>
                      </div>
                    </li>
        
                    <li className="dropdown">
                      <a href="#">Services▾</a>
                      <div className="dropdown-content">
                        <Link href="/sourcing">Sourcing</Link>
                        <Link href="/payment">Payment to suppliers</Link>
                        <Link href="/quality">Quality Check(Inspection)</Link>
                        <Link href="/manufacture">Manufacturing</Link>
                        <Link href="/shipping">Shipping</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                      </div>
                    </li>
        
                    <li className="dropdown">
                      <a href="#">Contact▾</a>
                      <div className="dropdown-content">
                        <span>21 Kodesho Street, Computer Village, Lagos State</span>
                        <span>+234 808 333 9380</span>
                        <span>aimpexx</span>
                        <span>aimpexxworldwide@gmail.com</span>
                      </div>
                    </li>
                  </ul>
                </nav>
        
                <Link href="/track">
                  <button id="track">Track Shipment</button>
                </Link>
              </header>
        

        
      <section className="started1">
        <h2>Choose the Service you need</h2>

        <div className="progress-bar">
          <div className="progress"></div>
        </div>

        <p>Select the Service to best direct you with the right partner</p>

        <form method="POST" action="/started">
          <div id="serviceOptions">
            {services.map((service, index) => {
              const isSelected = selected === index;

              return (
                <div key={service.value}>
                  <input
                    type="radio"
                    name="service"
                    value={service.value}
                    checked={isSelected}
                    readOnly
                    required
                    style={{ display: 'none' }}
                  />

                  <p
                    className={`service-option ${isSelected ? 'selected' : ''}`}
                    data-service={service.value}
                    onClick={() => setSelected(index)}
                  >
                    {service.title}
                    <br />
                    <span>{service.description}</span>
                  </p>
                </div>
              );
            })}
          </div>

          <Link href="/Started2">
          <button type="submit" id="btn1" disabled={selected === null}>
            Next
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
}
