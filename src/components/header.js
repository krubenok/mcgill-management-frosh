import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Logo from "../images/fotp.svg";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-gray-200">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4 md:p-8 ">
        <Link to="/" className="flex items-start">
          <img src={Logo} alt="Frosh of the Penguins Logo" />
        </Link>

        <button
          className="block md:hidden m-4 border border-black items-end px-3 py-2 rounded "
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-black h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-no-wrap md:items-end w-full md:w-auto`}
        >
          <div className="text-sm">
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black text-lg hover:text-blue-500"
            >
              About
            </Link>

            <Link
              to="/team"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black text-lg hover:text-blue-500"
            >
              Team
            </Link>

            <Link
              to="/schedule"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black text-lg hover:text-blue-500"
            >
              Schedule
            </Link>
            <Link
              to="/resources"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black text-lg hover:text-blue-500"
            >
              Resources
            </Link>
            <Link
              to="/partners"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black text-lg hover:text-blue-500"
            >
              Partners
            </Link>
            <Link
              to="mailto:frosh@mus.mcgill.ca"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-black text-lg hover:text-blue-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
