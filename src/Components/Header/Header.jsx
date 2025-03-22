import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

function Header() {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setManuOpened] = useState(false)
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div style={{ backgroundColor: "var(--appColor)", padding: '0.5rem', borderRadius: '5px' }}
          onClick={() => setManuOpened(true)}
        >
          <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) :
        <ul className='header-manu'>
          <li><Link
            onClick={() => setManuOpened(false)}
            activeClass='active'
            to='Hero'
            span={true}
            smooth={true}
          >Home</Link></li>

          <li><Link
            onClick={() => setManuOpened(false)}
            to='programs'
            span={true}
            smooth={true}
          >Programs</Link></li>

          <li><Link
            onClick={() => setManuOpened(false)} 
            to='reasons'
            span={true}
            smooth={true}
          >Why us</Link></li>

          <li><Link
            onClick={() => setManuOpened(false)}
            to='plans'
            span={true}
            smooth={true}
          >Plans</Link></li>

          <li><Link
            onClick={() => setManuOpened(false)}
            to='testimonials'
            span={true}
            smooth={true}
          >Testimonials</Link></li>
        </ul>
      }

    </div>
  )
}

export default Header