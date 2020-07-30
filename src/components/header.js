import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/SUPN.png"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      marginBottom: `2rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <img width="200" src={logo} alt={siteTitle} />
      </Link>

      <nav style={{ float: "right", margin: "2.5rem" }}>
        <ul style={{ display: "flex", flex: 1 }}>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
              }}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
