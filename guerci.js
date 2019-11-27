
function classToggle() {
    const navs = document.querySelectorAll('.Navbar_items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'));
  }
  
  document.querySelector('.Navbar_link_toggle')
    .addEventListener('click', classToggle);

    