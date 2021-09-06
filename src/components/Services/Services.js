import React from "react";

// Styles
import "./../../index.css";

// Images
import gatsbyImg from "./../../images/jamstack/gatsby.svg";
import graphqlImg from "./../../images/jamstack/graphql.svg";
import faunaImg from "./../../images/jamstack/fauna.png";
import contentfulImg from "./../../images/jamstack/contentful.svg";

import reactImg from "./../../images/stack/react.svg";
import nodeImg from "./../../images/stack/node.svg";
import netlifyImg from './../../images/stack/netlify.svg'

const Services = () => {
  return (
    <section
      data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Services I Provide</h1>
      <div className="services-wrapper">
        <div className="services">
          <li>
            <img src={reactImg} alt="" className="left" />
            <img src={nodeImg} alt="" className="left" />
            <img src={netlifyImg} alt="" className="left" />
            <p>React,Node and Netlify</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={gatsbyImg} alt="" />
            <img src={graphqlImg} alt="" className="left" />
            <img src={contentfulImg} alt="" className="left" />
            <img src={faunaImg} alt="" className="left" />
            <p>JAM Stack Development</p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Services;
