// Definir las canciones y enlaces de redes sociales en un objeto
const menuItems = [
    { name: 'Inicio', link: '#inicio' },
    { name: 'Músicas', link: '#musicas' },
    { name: 'Bio', link: '#bio' },
    { name: 'Videos', link: '#videos' },
    { name: 'Fechas', link: '#fechas' },
    { name: 'Contacto', link: '#contacto' }
  ];
  
  // Agregar los elementos del menú dinámicamente
  const nav = document.getElementById('nav');
  menuItems.forEach(item => {
    const navItem = document.createElement('a');
    navItem.classList.add('nav-link');
    navItem.href = item.link;
    navItem.textContent = item.name;
    nav.appendChild(navItem);
  });
  
  // Función para alternar el menú en pantallas pequeñas
  function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('open');
  }
  
  let currentBackground = 0;

 const backgrounds = [
  'url(images/epikafondo1.JPG)',
  'url(images/epikafondo2.JPG)',
  'url(images/epikafondo2.JPG)',
  'url(images/epikafondo2.JPG)'
];
  
function changeBackground() {
  const slider = document.getElementById('background-slider');
  slider.style.backgroundImage = backgrounds[currentBackground];
  currentBackground = (currentBackground + 1) % backgrounds.length; // Cambia al siguiente fondo
}

// Inicializar con el primer fondo
changeBackground();
  