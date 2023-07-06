import React from 'react';
import './footer1.css';

export default function Footer() {
  return (
    <div className="footer text-white" style={{ top: '30px', backgroundColor: '#4390bc' }}>
      <div className="container"  style={{ top: '30px', backgroundColor: '#4390bc' }}>
        <div className="row">
          <div className="col-lg-4">
            <h2 className="section-heading">Useful Links</h2>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.ruh.ac.lk/" target="_blank" rel="noopener noreferrer" className="footer-link">University of Ruhuna</a>
              </li>
              <li>
                <a href="http://www.eng.ruh.ac.lk/" target="_blank" rel="noopener noreferrer" className="footer-link">Faculty of Engineering</a>
              </li>
              <li>
                <a href="http://paravi.ruh.ac.lk/foenmis/index.php" target="_blank" rel="noopener noreferrer" className="footer-link">ENG-MIS</a>
              </li>
              <li>
                <a href="https://www.iesl.lk/index.php?lang=en" target="_blank" rel="noopener noreferrer" className="footer-link">IESL</a>
              </li>
              <li>
                <a href="http://eie.eng.ruh.ac.lk/" target="_blank" rel="noopener noreferrer" className="footer-link">Electrical and Information Engineering</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h2 className="section-heading">Departments</h2>
            <ul className="list-unstyled">
              <li>
                <a href="http://www.eng.ruh.ac.lk/dmme/" target="_blank" rel="noopener noreferrer" className="footer-link">Mechanical and Manufacturing Engineering</a>
              </li>
              <li>
                <a href="http://www.lib.ruh.ac.lk/Eng/index.php" target="_blank" rel="noopener noreferrer" className="footer-link">Library</a>
              </li>
              <li>
                <a href="http://www.eng.ruh.ac.lk/is/" target="_blank" rel="noopener noreferrer" className="footer-link">Interdisciplinary Studies</a>
              </li>
              <li>
                <a href="http://www.dcee.ruh.ac.lk/" target="_blank" rel="noopener noreferrer" className="footer-link">Civil and Environmental Engineering</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h2 className="section-heading">Contact Information</h2>
            <ul className="list-unstyled">
              <li>
                <p className="contact-info">Phone: +(94)0 91 2245765/6</p>
              </li>
              <li>
                <p className="contact-info">Faculty of Engineering, Hapugala, Galle, Sri Lanka.</p>
              </li>
              <li>
                <p className="contact-info">E-mail: <a href="mailto:webmaster@eng.ruh.ac.lk">webmaster@eng.ruh.ac.lk</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
