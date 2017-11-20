import { TagCloud } from "react-tagcloud";
import React from "react";
import { Row, Panel } from "react-bootstrap";
import './Skills.css';

const data = [
  { value: "SQL", count: 25 },
  { value: "MongoDB", count: 37 },
  { value: "MySQL", count: 25 },
  { value: "PostgreSQL", count: 25 },
  { value: "JSON", count: 80 },
  { value: "Redux", count: 70 },
  { value: "Mongoose", count: 45 },
  { value: "Thunk", count: 30 }
];

const frameworks = [
  { value: "React Native", count: 40 },
  { value: "React", count: 80 },
  { value: "Redux", count: 70 },
  { value: "Angular 1", count: 10 },
  { value: "JQuery", count: 20 }
];

const design = [
  { value: "Bootstrap", count: 60 },
  { value: "React Bootstrap", count: 80 },
  { value: "CSS3", count: 65 },
  { value: "HTML5", count: 60 },
  { value: "SVG", count: 60 },
  { value: "Animation", count: 15 },
  { value: "Skeleton", count: 10 },
  { value: "Jekyll", count: 50 },
  { value: "WordPress", count: 50 },
  { value: "Drupal", count: 15 },
  { value: "Illustrator", count: 15 },
  { value: "Photoshop", count: 15 },
  { value: "SCSS", count: 30 },
  { value: "JSX", count: 60 }
];

const hosting = [
  { value: "GitHub Pages", count: 55 },
  { value: "Heroku", count: 45 },
  { value: "Generic web hosts", count: 35 }
];

const build = [
  { value: "npm", count: 55 },
  { value: "Babel", count: 25 },
  { value: "Browserify", count: 25 },
  { value: "Webpack", count: 35 },
  { value: "Jest", count: 40 }
];

const languages = [
  { value: "Javascript", count: 70 },
  { value: "Python", count: 25 },
  { value: "Ruby", count: 15 },
  { value: "SQL", count: 25 }
];

const Skills = (props) => {
  return(
    <Row className="skills">
      
      <h2>Skills</h2>
      <Panel header="Data">
        <TagCloud
          style={{"width": "200px"}}
          minSize={12}
          maxSize={35}
          tags={data}
          colorOptions={{luminosity: "dark", hue: "blue"}} />
      </Panel>

      <Panel header="Frameworks">
        <TagCloud
          style={{"width": "200px"}}
          minSize={12}
          maxSize={35}
          tags={frameworks}
          colorOptions={{luminosity: "dark", hue: "blue"}} />
      </Panel>

      <Panel header="Design">
        <TagCloud
          style={{"width": "300px"}}
          minSize={12}
          maxSize={35}
          tags={design}
          colorOptions={{luminosity: "dark", hue: "blue"}} />
      </Panel>

      <Panel header="Hosting">
        <TagCloud
          style={{"width": "230px"}}
          minSize={12}
          maxSize={35}
          tags={hosting}
          colorOptions={{luminosity: "dark", hue: "blue"}} />
      </Panel>

      <Panel header="Build">
        <TagCloud
          style={{"width": "200px"}}
          minSize={12}
          maxSize={35}
          tags={build}
          colorOptions={{luminosity: "dark", hue: "blue"}} />
      </Panel>

      <Panel header="Languages">
        <TagCloud
          style={{"width": "200px"}}
          minSize={12}
          maxSize={35}
          tags={languages}
          colorOptions={{luminosity: "dark", hue: "blue"}} />
      </Panel>

    </Row>
  );

};
export default Skills;
