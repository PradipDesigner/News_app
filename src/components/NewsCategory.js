import React from "react";
import { Link } from "react-router-dom";
const NewsCategory = () => {
  return (
    <ul className="flex-column flex-lg-row ms-auto nav">
      <li className="nav-item">
        <Link className="nav-link text-white fw-normal" to="/">
          All
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white fw-normal" to="/business">
          Business
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white fw-normal" to="/entertainment">
          Entertainment
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white fw-normal" to="/health">
          Health
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white fw-normal" to="/science">
          Science
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white fw-normal" to="/sports">
          Sports
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white fw-normal" to="/technology">
          Technology
        </Link>
      </li>
    </ul>
  );
};
export default NewsCategory;
