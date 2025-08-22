const navList = document.querySelector('.nav-list');

const openMenu = () => {
  navList.style.display = 'block';
};

const closeMenu = () => {
  navList.style.display = 'none';
};

menuBar.addEventListener('click', openMenu);
menuBar.addEventListener('click', closeMenu);

