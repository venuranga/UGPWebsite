
import React from 'react'
import './rectanglefooter.css'
import './footer.css'

export default function Footer() {
  return (
    <div className="rectanglefooter">
        <span className="hover-effect links">Useful Links</span>
        <span className="hover-effect depts">Departments</span>
        <span className="hover-effect pnum">Phone: +(94)0 91 2245765/6</span>
        <span className="hover-effect address">Faculty of Engineering,Hapugala,Galle,Sri Lanka.</span>
       <a href="https://www.ruh.ac.lk/" target="_blank" rel="noopener noreferrer">
        <span className="hover-effect contact">Contact Us</span>
        <p className="hover-effect university-link">University of Ruhuna</p>
      </a>
      <a href="http://www.eng.ruh.ac.lk/" target="_blank" rel="noopener noreferrer">
        <p className="hover-effect fac-link">Faculty of Engineering</p>
      </a>
      <a href="http://paravi.ruh.ac.lk/foenmis/index.php" target="_blank" rel="noopener noreferrer">
        <p className="hover-effect mis-link">ENG-MIS</p>
      </a>
      <a href="https://www.iesl.lk/index.php?lang=en" target="_blank" rel="noopener noreferrer">
        <p className="hover-effect iesl-link">IESL</p>
      </a>
      <a href="http://eie.eng.ruh.ac.lk/" target="_blank" rel="noopener noreferrer">
        <p className="hover-effect eie-link">Electrical and Information Engineering</p>
      </a>

      <a href="http://www.eng.ruh.ac.lk/dmme/" target="_blank" rel="noopener noreferrer">
        <p className="hover-effect mme-link">Mechanical and Manufacturing Engineering</p>
      </a>

      <a href="http://www.lib.ruh.ac.lk/Eng/index.php" target="_blank" rel="noopener noreferrer">
        <p className="hover-effect lib-link">Library</p>
      </a>

      <a href="http://www.eng.ruh.ac.lk/is/" target="_blank" rel="noopener noreferrer">
        <p className="hover-effect is-link">Interdisciplinary Studies</p>
      </a>

      <a href="http://www.dcee.ruh.ac.lk/" target="_blank" rel="noopener noreferrer">
        <p className="hover-effect cee-link">Civil and Environmental Engineering</p>
      </a>

      <a href="mailto:webmaster@eng.ruh.ac.lk" target="_blank" rel="noopener noreferrer">
        <p className="hover-effect email">E-mail: webmaster@eng.ruh.ac.lk</p>
      </a>
    </div>
  )
}
