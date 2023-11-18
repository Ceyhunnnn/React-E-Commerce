import React from "react";
import "./index.css";
import Container from "components/Container";
import { Facebook, Send, Instagram, Linkedln } from "components/Icons";
function Footer() {
  return (
    <footer className="footer-area">
      <Container>
        <div className="footer-body">
          <div className="footer-grid">
            <ul className="fot-sect1">
              <li className="font-16">Exclusive</li>
              <li className="font-14">Subscribe</li>
              <li className="font-14">Get 10% off your first order</li>
              <div className="display-flex">
                <input type="text" placeholder="Enter your email" />
                <Send width={25} height={25} />
              </div>
            </ul>
            <ul className="fot-sect2">
              <li className="font-16">Support</li>
              <li className="font-14">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </li>
              <li className="font-14">exclusive@gmail.com</li>
              <li className="font-14">+88015-88888-9999</li>
            </ul>
            <ul className="fot-sect3">
              <li className="font-16">Account</li>
              <li className="font-14">My Account</li>
              <li className="font-14">Login / Register</li>
              <li className="font-14">Cart</li>
              <li className="font-14">Wishlist</li>
              <li className="font-14">Shop</li>
            </ul>
            <ul className="fot-sect4">
              <li className="font-16">Quick Link</li>
              <li className="font-14">Privacy Policy</li>
              <li className="font-14">Terms Of Use</li>
              <li className="font-14">FAQ</li>
              <li className="font-14">Contact</li>
            </ul>
            <ul className="fot-sect5">
              <li className="font-16">Download App</li>
              <li className="font-14">Save $3 with App New User Only</li>
              <li className="social-media">
                <img
                  src="/images/GooglePlay.png"
                  alt="PlayStore"
                  width={80}
                  height={30}
                />
                <img
                  src="/images/AppStore.png"
                  alt="AppStore"
                  width={80}
                  height={30}
                />
              </li>
              <li className="social-media">
                <Facebook />
                <Instagram />
                <Linkedln />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
