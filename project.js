const projects = [
    {
        title: 'Mockup Kitties',
        image: 'image/kitties.png',
        alt: 'Mockup Kitties Project',
        description: 'Build with valid HTML and CSS, styling to match theme of mockup.',
        skills: ['HTML', 'CSS', 'Accessibility', 'Responsive Design'],
        demo: 'https://ssaipin.github.io/mock-up-kitties/',
        code: 'https://github.com/ssaipin/mock-up-kitties'
    },
    {
        title: 'Archery Academy',
        image: 'image/archery1.jpeg',
        alt: 'Archery Academy Project',
        description: 'Create a site architecture based on expected audience and desired content.',
        skills: ['HTML', 'CSS', 'Accessibility', 'Responsive Design'],
        demo: 'https://ssaipin.github.io/archery/',
        code: 'https://github.com/ssaipin/archery'
    },
     {
        title: 'CSS Animations',
        image: 'image/animation.jpeg',
        alt: 'Animations with CSS Project',
        description: 'Explore various CSS animations and transitions.',
        skills: ['HTML', 'CSS', 'Animations'],
        demo: 'https://transition-css.netlify.app/',
        code: 'https://github.com/ssaipin/animation'
    },
    {
        title: 'Adopt A Dog',
        image: 'image/adopt.png',
        alt: 'Adopt A Dog Project',
        description: `Create click handlers that alerts dog's info and total price when "Adopt" button is clicked.`,
        skills: ['HTML', 'CSS', 'Javascript', 'Responsive Design'],
        demo: 'https://ssaipin.github.io/html200-adopt-a-dog/',
        code: 'https://github.com/ssaipin/html200-adopt-a-dog'
    },
    {
        title: 'Banking App',
        image: 'image/banking.jpeg',
        alt: 'Banking App Project',
        description: `The users should see prompt so they can type which action to perform.`,
        skills: ['HTML', 'CSS', 'Javascript'],
        demo: '#',
        code: 'https://github.com/ssaipin/html200/tree/lesson06-assignment/lesson06'
    },
    {
        title: 'Weather App',
        image: 'image/weather.jpeg',
        alt: 'Weather App Project',
        description: `Real time weather application using Vue.js, Nuxt.js and OpenWeatherMap API.`,
        skills: ['HTML', 'CSS', 'Javascript', 'API', 'JSON', 'Vue', 'Nuxt', 'SEO'],
        demo: 'https://gao-weather-app.netlify.app/',
        code: 'https://github.com/ssaipin/weather-app'
    },
    {
        title: 'Spaceship Game',
        image: 'image/spaceship.png',
        alt: 'Spaceship Game Project',
        description: `A fun spaceship game built with HTML, CSS, and JavaScript.`,
        skills: ['HTML', 'CSS', 'Javascript', 'Canvas'],
        demo: 'https://ssaipin.github.io/spaceship-game/',
        code: 'https://github.com/ssaipin/spaceship-game'
    },
    {
        title: 'Food Fortune Stick',
        image: 'image/stick.jpeg',
        alt: 'Food Fortune Stick Project',
        description: `A fun food fortune stick game built with HTML, CSS, and JavaScript.`,
        skills: ['HTML', 'CSS', 'Javascript', 'React', 'Tailwind CSS'],
        demo: 'https://food-fortune-stick.netlify.app/',
        code: 'https://github.com/ssaipin/food-fortune-stick'
    }
]

const projectGrid = document.getElementById("project-grid");

projects.forEach(project => {
  projectGrid.innerHTML += `
    <div class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.alt}">
      </div>

      <div class="project-content">
        <h2>${project.title}</h2>
        <p>${project.description}</p>

        <div class="skill-tag">
          ${project.skills.map(skill => `<span class="tag">${skill}</span>`).join("")}
        </div>

        <div class="project-links">
          <a href="${project.demo}" target="_blank">↗ Demo</a>
          <a href="${project.code}" target="_blank">→ Code</a>
        </div>
      </div>
    </div>
  `;
});
