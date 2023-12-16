import React from "react";
import "./index.css";
import Container from "components/Container";
import {
  Facebook,
  Send,
  Instagram,
  Linkedln,
  X,
  LogosGooglePlayIcon,
  LogosAppleAppStore,
} from "components/Icons/Icons";
function Footer() {
  return (
    <footer className="footer-area">
      <Container>
        <div className="footer-grid">
          <ul className="fot-sect1">
            <li className="font-16 text-underline">Exclusive</li>
            <li className="font-14">Subscribe</li>
            <li className="font-14">Get 10% off your first order</li>
            <div className="display-flex">
              <input type="text" placeholder="Enter your email" />
              <Send width={25} height={25} />
            </div>
          </ul>
          <ul className="fot-sect2">
            <li className="font-16 text-underline">Support</li>
            <li className="font-14">
              111 Bijoy sarani, Dhaka,<br></br> DH 1515, Bangladesh.
            </li>
            <li className="font-14">exclusive@gmail.com</li>
            <li className="font-14">+88015-88888-9999</li>
          </ul>
          <ul className="fot-sect3">
            <li className="font-16 text-underline">Account</li>
            <li className="font-14">My Account</li>
            <li className="font-14">Login / Register</li>
            <li className="font-14">Cart</li>
            <li className="font-14">Wishlist</li>
            <li className="font-14">Shop</li>
          </ul>
          <ul className="fot-sect4">
            <li className="font-16 text-underline ">Download App</li>
            <li className="font-14">Save $3 with App New User Only</li>
            <li className="social-media">
              <LogosGooglePlayIcon width={25} height={25} />
              <LogosAppleAppStore width={25} height={25} />
            </li>
            <li className="social-media">
              <Facebook />
              <Instagram />
              <Linkedln />
              <X />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
