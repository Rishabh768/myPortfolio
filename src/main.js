import "./animation.js";
import './script.js';

import {skills} from './skills.js';
import {projects} from './projects.js';
const skillsContainer = document.querySelector('.skill-container');
skills.forEach(skill=>{
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill');
    
    skillElement.innerHTML = `
        <img src="${skill.icon}" alt="${skill.name} icon">
        <h3>${skill.name}</h3>
    `;
    
    skillsContainer.appendChild(skillElement);
});



const projectsContainer = document.querySelector(".project-wrapper");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project-card");

  projectElement.innerHTML = `
    <div class="card-image">
      <img src="${project.image}" alt="Project Image">
      <div class="card-description">${
        project.description || "This is the project description"
      }</div>
    </div>
    <h4>${project.name}</h4>
    <div class="btns">
      <a href="${project.code}" target="_blank">Code</a>
      <a href="${project.link}" target="_blank">Visit</a>
    </div>
  `;

  projectsContainer.appendChild(projectElement);
});

