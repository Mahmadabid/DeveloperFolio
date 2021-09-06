import React from "react";
import classes from "./skills.module.css";
import { LinearProgress } from '@material-ui/core'

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">What I Am Good At &nbsp;&nbsp;?</h1>
      <div className={classes.techs}>
        <div className={classes.skillsHead}>
          <h3>Html</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={100} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>CSS</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={95} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>Material UI</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={90} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>Figma</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={80} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>Javascript and (ES+6)</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={95} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>ReactJs</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={95} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>GatsbyJs</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={90} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>Headless CMS</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={85} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>Netlify</h3>
          <LinearProgress className={classes.linear} variant="determinate" color="secondary" value={85} />
        </div>
        <div className={classes.skillsHead}>
          <h3>Typescript</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={90} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>GraphQl</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={85} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>Firebase</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={80} color="secondary" />
        </div>
        <div className={classes.skillsHead}>
          <h3>Faunadb</h3>
          <LinearProgress className={classes.linear} variant="determinate" value={85} color="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
