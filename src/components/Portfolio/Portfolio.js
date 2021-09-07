import React from "react";
import "./../../index.css";
import { motion } from "framer-motion";
import figmaIMG from '../../images/stack/figma.svg'

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project - Space X App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ahm-spacex.netlify.app"
          >
            <div className="project-images" id="spacexApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Space X</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmedabid/space-x"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://ahm-spacex.netlify.app"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Diaries Manager App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ahm-diaryapp.netlify.app"
          >
            <div className="project-images" id="diariesApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Diaries Manager App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmedabid/diary-app"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://ahm-diaryapp.netlify.app"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://ahm-shoestore.surge.sh"
          >
            <div className="project-images" id="shoeStore"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Nike Shoe Store</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmedabid/shoe_store"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://ahm-shoestore.surge.sh"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project - Blog Site */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ahm-contentful-blog.netlify.app"
          >
            <div className="project-images" id="gatsbyBlog"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Blog Site (GatsbyJs)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmedabid/Contentful-Blog"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://ahm-contentful-blog.netlify.app"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project - TodoApp */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ahm-todoapp.netlify.app/"
          >
            <div className="project-images" id="todoApp"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Todo App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Mahmedabid/todoapp"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://ahm-todoapp.netlify.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project - Figma Recipe App */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.figma.com/proto/hrGYcjLvYRZWc2SmDqrHoe/Recipe-App?node-id=1%3A8&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A39/"
          >
            <div className="project-images" id="recipeApp"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Figma Recipe App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.figma.com/proto/hrGYcjLvYRZWc2SmDqrHoe/Recipe-App?node-id=1%3A8&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A39/"
                target="_blank"
              >
                <img src={figmaIMG} alt="figma" id="figma_live" />
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Mahmedabid/"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
