const navList = document.querySelector('.nav-list');

const openMenu = () => {
  navList.style.display = 'block';
};

const closeMenu = () => {
  navList.style.display = 'none';
};

navList.addEventListener('click', openMenu);
navList.addEventListener('click', closeMenu);

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    languages: 'React, Express, MongoDB',
    image: './work1.JPG',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    languages: 'React, Express, MongoDB',
    image: './work2.JPG',
    link: '#',
  },
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    languages: 'React, Express, MongoDB',
    image: './work1.JPG',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    languages: 'React, Express, MongoDB',
    image: './work2.JPG',
    link: '#',
  }
];

const projectsContainer = document.querySelector('.projects-container');

const projectDetailsSection = document.querySelector('.project-details-section');

const projectDetails = (project, closeProject) => {
  projectDetailsSection.innerHTML = '';

  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card-details');

  const projectImage = document.createElement('img');
  projectImage.classList.add('project-image');
  projectImage.src = project.image;
  projectImage.alt = project.title;
  projectCard.appendChild(projectImage);

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.title;
  projectCard.appendChild(projectTitle);

  const projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = project.description;
  projectCard.appendChild(projectDescription);

  const projectLanguages = document.createElement('p');
  projectLanguages.classList.add('project-languages');
  projectLanguages.textContent = project.languages;
  projectCard.appendChild(projectLanguages);

  const closeProjectBtn = document.createElement('button');
  closeProjectBtn.classList.add('close-project-btn');
  closeProjectBtn.textContent = "close";
  projectCard.appendChild(closeProjectBtn);
  closeProjectBtn.addEventListener('click', () => {
    projectDetailsSection.style.display = "none";
  });

  projectDetailsSection.appendChild(projectCard);

  projectDetailsSection.style.display = "flex";
};

const createWorks = (project) => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const projectImage = document.createElement('img');
  projectImage.classList.add('project-image');
  projectImage.src = project.image;
  projectImage.alt = project.title;
  projectCard.appendChild(projectImage);

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.title;
  projectCard.appendChild(projectTitle);

  const projectDescription = document.createElement('p');
  projectDescription.classList.add('project-description');
  projectDescription.textContent = project.description;
  projectCard.appendChild(projectDescription);

  const projectLink = document.createElement('a');
  projectLink.classList.add('project-link');
  projectLink.href = project.link;
  projectLink.textContent = "View Project";
  projectCard.appendChild(projectLink);

  const projectDetailsBtn = document.createElement('button');
  projectDetailsBtn.classList.add('project-details-btn');
  projectDetailsBtn.textContent = "Project Details";
  projectCard.appendChild(projectDetailsBtn);

  projectDetailsBtn.addEventListener('click', () => projectDetails(project))

  projectsContainer.appendChild(projectCard);
};

projects.forEach(createWorks);

const form = document.getElementById('form');
const emailInput = document.querySelector('.email-input');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (emailInput.value == emailInput.value.toLowerCase()) {
    form.submit();
  } else {
    error.innerHTML = "email should be capital";
  }
});

const nameInput = document.querySelector('.name-input');
const textarea = document.querySelector('.textarea');

const saveFormData = () => {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    textarea: textarea.value
  };

  localStorage.setItem('formData', JSON.stringify(formData));
};

[nameInput, emailInput, textarea].forEach(input => {
  input.addEventListener('input', saveFormData);
});

window.addEventListener('DOMContentLoaded', () => {
  const saveData = JSON.parse(localStorage.getItem('formData'));

  nameInput.value = saveData.name || '';
  emailInput.value = saveData.email || '';
  textarea.value = saveData.textarea || '';
})