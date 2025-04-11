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
    'url(images/epika1.webp)',
    'url(images/epika4.webp)',
    'url(images/epika3.webp)',
    'url(images/epika2.webp)',
    'url(images/epika6.webp)',
    'url(images/epika5.webp)',
  ];
  
  let current = 0;
  let showingBg1 = true;
  
  function changeBackground() {
    const bg1 = document.getElementById('bg1');
    const bg2 = document.getElementById('bg2');
  
    const nextImage = backgrounds[current];
    current = (current + 1) % backgrounds.length;
  
    if (showingBg1) {
      bg2.style.backgroundImage = nextImage;
      bg2.classList.add('visible');
      bg1.classList.remove('visible');
    } else {
      bg1.style.backgroundImage = nextImage;
      bg1.classList.add('visible');
      bg2.classList.remove('visible');
    }
  
    showingBg1 = !showingBg1;
  }
  
  changeBackground(); // Mostrar la primera al inicio
  setInterval(changeBackground, 5000); // Cambia cada 5 seg
  
  