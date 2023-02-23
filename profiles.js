const profiles = [
  {
    img: './images/profile1.jpg',
    name: 'Luisa Perez',
    expertise: 'Front end dev from the University of Valencia, has a masters degree in ICT.',
    role: 'Front end and information technology teacher.',
  },
  {
    img: './images/profile2.png',
    name: 'Carlos Baez',
    expertise: 'Human capital graduate from UVM University, expert in professional profiles.',
    role: 'In charge of the human capital and admission department.',
  },
  {
    img: './images/profile3.jpg',
    name: 'Miguel Martinez',
    expertise: 'Computer Engineer from the Technological Institute of Queretaro. Current CEO of Twitter.',
    role: 'Professor of the information technology course.',
  },
  {
    img: './images/profile4.jpg',
    name: 'Jacinta Hernandez',
    expertise: 'Back end dev graduated from microverse. Expert in developer tools.',
    role: 'Back end teacher.',
  },
  {
    img: './images/profile5.jpg',
    name: 'Lourdes Coli',
    expertise: 'Back end dev graduated from Henry. Expert in UX/UI design.',
    role: 'Success team mentor',
  },
  {
    img: './images/profile6.jpg',
    name: 'Andres Garcia',
    expertise: 'Founder and CEO of happy coding, self-taught Full Stack dev and creator of the Happy Coding learning method.',
    role: 'Rector of the school and monitor of educational experiences.',
  },
];

const professionalProfiles = document.getElementById('professionalProfiles');

for (let i = 0; i < profiles.length; i += 1) {
  const profile = document.createElement('div');
  profile.className = 'tutors__profile';
  profile.innerHTML = `
    <div class="profile__img-container">
    <img class="profile__img" src= ${profiles[i].img} alt="Professional profile picture">
    </div>
    <div class="profile__content">
    <h4 class="profile__name">${profiles[i].name}</h4>
    <p class="profile__expertise">${profiles[i].expertise}</p>
    <hr class="profile__hr">
    <p class="profile__role">${profiles[i].role}</p>
    </div>
    `;
  professionalProfiles.appendChild(profile);
}