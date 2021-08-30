import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                 <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">History</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Technical</a>
                    </li>
                    <li>
                      <a href="#">Tech Support</a>
                    </li>
                    <li>
                      <a href="#">Backend</a>
                    </li>
                    <li>
                      <a href="#">Full Stack</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">Banking</a>
                    </li>
                    <li>
                      <a href="#">online-24x7</a>
                    </li>
                    <li>
                      <a href="#">Net Banking</a>
                    </li>
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                    <a
                        href="https://facebook.com/shashi.yadav.0809/"
                        target="ShashiPay">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/shashi.0896/"
                        target="ShashiPay">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.linkedin.com/in/shashi-prakash-yadav"
                        target="ShashiPay">
                      <i class="fab fa-linkedin fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                    <a
                        href="https://github.com/shashiyadav366"
                        target="ShashiPay">
                      <i class="fab fa-github fontawesome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 ShashiPay. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
