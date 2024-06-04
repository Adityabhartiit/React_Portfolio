import React from 'react';
import './footer.css'; // Assuming you save the CSS file as Footer.css
import { getImageUrl } from "../../utils";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Connect with Me</h3>
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/aditya-bharti-23890b231/" target="_blank" rel="noopener noreferrer"><img src={getImageUrl("footer/in.jpg")}  alt="LinkedIn" /></a></li>
            <li><a href="https://leetcode.com/u/AdityaCoding_it" target="_blank" rel="noopener noreferrer"><img src={getImageUrl("footer/l.jpg")}  alt="LeetCode" /></a></li>
            <li><a href="https://codeforces.com/profile/Adityabharti_it" target="_blank" rel="noopener noreferrer"><img src={getImageUrl("footer/cf.jpg")}  alt="Codeforces" /></a></li>
            <li><a href="https://www.codechef.com/users/aditya_bharti" target="_blank" rel="noopener noreferrer"><img src={getImageUrl("footer/c.jpg")} alt="CodeChef" /></a></li>
            <li><a href="https://www.geeksforgeeks.org/user/adityabhahzuq/" target="_blank" rel="noopener noreferrer"><img src={getImageUrl("footer/gfg.jpg")} alt="GFG" /></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Aditya Bharti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
