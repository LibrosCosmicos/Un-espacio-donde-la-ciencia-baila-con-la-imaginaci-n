fetch('libros.json')
.then(response => response.json())
.then(data => {
  const galeria = document.getElementById('galeria-libros');
  const reseñas = document.getElementById('reseñas');

  data.forEach(libro => {
    // Crear card para galería
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${libro.portada}" alt="${libro.titulo} - ${libro.autor}">
      <h3>${libro.titulo}</h3>
      <p class="autor">${libro.autor}</p>
      <a href="${libro.enlace}" target="_blank" class="btn">Ver más</a>
    `;
    galeria.appendChild(card);

    // Crear reseña detallada
    const reseña = document.createElement('div');
    reseña.className = 'reseña';
    reseña.innerHTML = `
      <img src="${libro.portada}" alt="${libro.titulo} - ${libro.autor}">
      <div class="texto">
        <h3>${libro.titulo} - ${libro.autor}</h3>
        <p>${libro.reseña}</p>
        <p class="estrellas">${'⭐'.repeat(libro.estrellas)}</p>
        <a href="${libro.enlace}" target="_blank" class="btn">Leer más</a>
      </div>
    `;
    reseñas.appendChild(reseña);
  });
})
.catch(error => console.error('Error al cargar libros:', error));
