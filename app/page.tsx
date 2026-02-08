import Link from "next/link"

export default function Home() {
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
            <Link href="/track">
                <button id="track" >Track Shipment</button>
            </Link>
        </header>




        <section className="herosection">
          <div className="hero">
            <div className="hero-bg">
                <img className="img1" src="/images/Rectangle 165.png" />
                <img className="img2" src="/images/Rectangle 164.png" />
                <img className="img3" src="/images/Rectangle 163.png" />
            </div>

            <div className="hero-info">
                <h2>Ship Quality Products from<br/>
                <span><b className="pan">China</b>Smoothly, Securely,</span>
                <br />
                  and Without<b className="pan2">Stress</b> </h2>
                <p>No guesswork. No delays. Just a seamless flow from order 
                  <br /> to delivery.</p>
                <div>
                    <Link href="/started">
                        <button id="start" className="button1">Get Started</button>
                    </Link>

                    <Link href="/shippingcost">
                        <button id="shippingcost" className="button2">Shipping Cost</button>
                    </Link>
                </div>
            </div>
          </div>
        </section>

        <section className="article">
            <h2>Importing from China Doesn’t Have to Be<br />
                Complicated, With Aimpexx, It’s Not.
            </h2>
            <p>Most businesses face serious challenges when importing from<br />China — do any of these sound familiar?</p>   
            
            <div className="product-info">
                <div className="suppliers">
                  <h2>Unverified Suppliers</h2>
                  <p>Finding dependable suppliers in China<br /> can be overwhelming — and costly.<br /> Many businesses lose funds to<br /> fraudulent vendors.</p>
                  <b>67%</b><br />
                  <span>of businesses report being affected</span>
                </div>
              

                <div className="cover1"></div>
                
                <div className="img1">
                  <img src="images/Ellipse 11.png" />
                </div>

                <div className="cover2"></div>

                <div className="quality">
                  <h2>Substandard Product<br /> Quality</h2>
                  <p>Receiving poor-quality goods leads to refunds, customer complaints, and financial loss.</p>
                  <b>72%</b><br />
                  <span>of importers experience quality issues.</span>
                </div>
            </div>

            <div className="cost-info">
                 <div className="shipping">
                  <h2>Hidden Charges That<br /> Cut Your Profit</h2>
                  <p>Unplanned fees, exchange rate changes, and shipping surprises can destroy your profit margin overnight.</p>
                  <b>35%</b><br />
                  <span>report profit erosion due to hidden costs.</span>
                </div>

                <div className="cover11"></div>
                
                <div className="img2">
                  <img src="images/Ellipse 12.png" />
                </div>

                <div className="cover22"></div>

                <div className="quality2">
                  <h2>Costly Shipping Delays</h2>
                  <p>Late arrivals disrupt operations and damage customer trust — a major threat to business growth.</p>
                  <b>78%</b><br />
                  <span>of importers face repeated delivery delays.</span>
                </div>
            </div>
            <Link href="/shipping">
                <button id="shipping">Ship Now</button>
            </Link>
        </section>

        <section className="info-center">
            <h2>We provide end-to-end logistics solutions designed for speed, transparency, and peace of mind.</h2>
            <div className="boxs">
                <div className="box">
                    <h2>Sourcing</h2>
                    <p>Finding quality products in China shouldn’t be a gamble. We eliminate the guesswork by connecting you with verified, trustworthy suppliers—ensuring you get the right products at the right price. From supplier verification to quality checks, we manage the entire sourcing lifecycle so your business stays focused on growth, not the complexities of international procurement.</p>
                    <ul>
                        <li>Verified and trusted supplier network</li>
                        <li>Thorough product quality validation</li>
                        <li>Fair and optimized pricing</li>
                        <li>Custom product options when needed</li>
                    </ul>    
                    <img className="boxpng1" src="/images/fluent-box.png" />
                </div>
                <div className="box">
                    <h2>Payment to Suppliers</h2>
                    <p>Paying suppliers in China can be stressful and expensive. We make it effortless. Simply pay in Naira through local transfer, and we handle supplier payments instantly in RMB—securely and transparently. No hidden charges, no FX confusion, no payment delays.</p>
                    <ul>
                        <li>Pay locally in your home currency</li>
                        <li>Fraud-proof, secure transactions</li>
                        <li>Zero hidden fees</li>
                        <li>Fast, reliable payment processing</li>
                    </ul>
                    <img className="boxpng" src="/images/fluent-box.png" />
                </div>

                <div className="arrow" >
                    <img className="arrow-image" src="/images/circular arrow 1.png" />
                </div>    

                <div className="box">
                    <h2>Quality Check (Inspection)</h2>
                    <p>Before your goods leave China, our inspection team ensures everything meets your exact specifications. We physically check your items for quality, accuracy, safety, packaging, and compliance. No surprises. No substandard products. Only verified, inspected goods that match what you paid for.</p>
                    <ul>
                        <li>Thorough pre-shipment inspections</li>
                        <li>Product quantity & quality verification</li>
                        <li>Packaging and specification checks</li>
                        <li>Photo & video reports for transparency</li>
                    </ul>
                    <img className="boxpng" src="/images/fluent-box.png" />    
                </div>
                <div className="box">
                    <h2>Manufacturing</h2>
                    <p>Your production process is fully overseen by our on-ground team in China. From factory visits to real-time production monitoring, we ensure your products meet the agreed standards. Every batch is checked for quality, compliance, and consistency—so you always receive what you ordered.</p>
                    <ul>
                        <li>Detailed quality control at every stage</li>
                        <li>Real-time production monitoring</li>
                        <li>Compliance and certification checks</li>
                        <li>Tailored manufacturing solutions</li>
                    </ul>
                    <img className="boxpng" src="/images/fluent-box.png" />    
                </div>
                <div className="box lastbox">
                    <h2>Manufacturing</h2>
                    <p>Your production process is fully overseen by our on-ground team in China. From factory visits to real-time production monitoring, we ensure your products meet the agreed standards. Every batch is checked for quality, compliance, and consistency—so you always receive what you ordered.</p>
                    <ul>
                        <li>Detailed quality control at every stage</li>
                        <li>Real-time production monitoring</li>
                        <li>Compliance and certification checks</li>
                        <li>Tailored manufacturing solutions</li>
                    </ul> 
                    <img src="/images/fluent-box.png" />
                </div>
            </div>
        </section>

        <section className="howitworks">
            <div className="head">
                <h2>How It Works</h2>
                <p>Our streamlined process makes importing goods from China fast, predictable, and fully transparent.</p>
            </div>

            <div className="steps">
                <div className="step">
                    <div className="profile-img">
                      <img src="/images/4.png" />
                    </div>    
                    <h2>Tell Us What You Need</h2>
                    <p>We start by understanding your requirements and business goals. Our team develops a tailored plan that guides your order from China to your doorstep.</p>
                    <ul>
                        <li>Requirement breakdown</li>
                        <li>Market & feasibility analysis</li>
                        <li>ROI-focused planning</li>
                        <li>Risk assessment & mitigation</li>
                    </ul>
                </div>

                <div className="step">
                     <div className="profile-img">
                        <img src="/images/4.png" />
                    </div>    
                    <h2>We Handle the Supplier<br /> Side</h2>
                    <p>Whether you have a preferred factory or need guidance, we help you verify suppliers, assess product quality, and ensure compliance</p>
                    <ul>
                        <li>Verified supplier checks</li>
                        <li>Multi-level product quality
                          <br />
                          review</li>
                        <li>Price and value optimization</li>
                        <li>Certification & compliance<br />control</li>
                    </ul>
                </div>

                <div className="step">
                     <div className="profile-img">
                        <img src="/images/4.png" />
                    </div>    
                    <h2>We Manage the Entire Journey</h2>
                    <p>From warehouse handling to final delivery, every step is covered. Track your shipment in real time and enjoy a worry-free experience</p>
                    <ul>
                        <li>End-to-end logistics management</li>
                        <li>Real-time tracking</li>
                        <li>Smooth customs processing</li>
                        <li>Fast doorstep delivery</li>
                    </ul>
                </div>
              </div>  
        </section>

        <section className="booking">
            <img src="/images/celephone.png" />
            <div>
                <h1>Schedule a Strategy Call</h1>
                <p>Book a 30-minute consultation</p>
                <span>Speak directly with an experienced service agent</span>
                <h2>Available 9:00 AM – 4:30 PM WAT (Monday–Friday)</h2>
                <Link href="/scheldule">
                <button id="book">Book a Session Now</button>
                </Link>
            </div>    
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

        <section className="getupdate">
            <div className="update">
                <img src="images/email.png" />
                <div className="mail">
                    <h2>Receive Weekly China Update</h2>
                    <p>Receive exclusive updates, market intelligence, and strategic tips for smarter importing. Join 10,000+ businesses already learning from our insights.</p>
                    <form>
                        <input type="text" placeholder="Your Email Address" />
                        <button id="update">Get Updates</button>
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
                    <a href="/quality-check"><li>Quality Check<br />(Inspection)</li></a>
                    <a href="/manufacturing"><li>Manufacturing</li></a>
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
                    <a href="/aboutus"><li>21 Kodesho Street, Computer Village,<br /> Lagos State</li></a>
                    <a href="/aboutus"><li>+234 808 333 9380</li></a>
                    <a href="/aboutus"><li>aimpexx</li></a>
                    <a href="/aboutus"><li>aimpexxworldwide@gmail.com</li></a>
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
