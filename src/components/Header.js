import React from 'react'
import {Link} from 'react-router-dom'
import NewsCategory from './NewsCategory'
const Header = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky" style={{zIndex: '99', top: '0'}}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-5 fst-italic fw-bold text-decoration-none text-warning me-4" to="/">News Express</Link>
    <a className="text-white" type="button" data-bs-toggle="collapse" href="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="bi bi-list"></span>
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
      </ul> */}
      <NewsCategory/>
    </div>
  </div>
</nav>
)
}

export default Header
// import React from 'react'

// export default function Header() {
//   return (
//     <div>
//       i am header
//     </div>
//   )
// }


