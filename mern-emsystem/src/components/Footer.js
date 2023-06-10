
import React from 'react'
import './rectanglefooter.css'
import './footer.css'

export default function Footer() {
  return (
    <div className="rectanglefooter">
        <span className="links">Useful Links</span>
        <span className="depts">Departments</span>
        <span className="pnum">Phone: +(94)0 91 2245765/6</span>
        <span className="address">Faculty of Engineering,Hapugala,Galle,Sri Lanka.</span>
       <a href="https://www.ruh.ac.lk/" target="_blank" rel="noopener noreferrer">
        <span className="contact">Contact Us</span>
        <p className="university-link">University of Ruhuna</p>
      </a>
      <a href="http://www.eng.ruh.ac.lk/" target="_blank" rel="noopener noreferrer">
        <p className="fac-link">Faculty of Engineering</p>
      </a>
      <a href="http://paravi.ruh.ac.lk/foenmis/index.php" target="_blank" rel="noopener noreferrer">
        <p className="mis-link">ENG-MIS</p>
      </a>
      <a href="https://www.iesl.lk/index.php?lang=en" target="_blank" rel="noopener noreferrer">
        <p className="iesl-link">IESL</p>
      </a>
      <a href="http://eie.eng.ruh.ac.lk/" target="_blank" rel="noopener noreferrer">
        <p className="eie-link">Electrical and Information Engineering</p>
      </a>

      <a href="http://www.eng.ruh.ac.lk/dmme/" target="_blank" rel="noopener noreferrer">
        <p className="mme-link">Mechanical and Manufacturing Engineering</p>
      </a>

      <a href="http://www.lib.ruh.ac.lk/Eng/index.php" target="_blank" rel="noopener noreferrer">
        <p className="lib-link">Library</p>
      </a>

      <a href="http://www.eng.ruh.ac.lk/is/" target="_blank" rel="noopener noreferrer">
        <p className="is-link">Interdisciplinary Studies</p>
      </a>

      <a href="http://www.dcee.ruh.ac.lk/" target="_blank" rel="noopener noreferrer">
        <p className="cee-link">Civil and Environmental Engineering</p>
      </a>

      <a href="mailto:webmaster@eng.ruh.ac.lk" target="_blank" rel="noopener noreferrer">
        <p className="email">E-mail: webmaster@eng.ruh.ac.lk</p>
      </a>
    </div>
  )
}
