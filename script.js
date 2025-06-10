const imagesContainer = document.querySelector('.images-container');
const filterButtons = document.querySelectorAll('.filter-button');

const images = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mountain landscape with dramatic sky',
    category: 'Nature',
    photographer: 'Pixabay',
    width: 800,
    height: 600
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Modern glass architecture',
    category: 'Architecture',
    photographer: 'Expect Best',
    width: 800,
    height: 1200
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Portrait of a woman',
    category: 'People',
    photographer: 'Pixabay',
    width: 800,
    height: 800
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Laptop and coffee on desk',
    category: 'Technology',
    photographer: 'Life Of Pix',
    width: 800,
    height: 600
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Colorful abstract paint',
    category: 'Abstract',
    photographer: 'Daian Gan',
    width: 800,
    height: 800
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Forest path with sunlight',
    category: 'Nature',
    photographer: 'Chevanon Photography',
    width: 800,
    height: 1067
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'City skyline at night',
    category: 'Architecture',
    photographer: 'Pixabay',
    width: 800,
    height: 600
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Group of friends laughing',
    category: 'People',
    photographer: 'Pixabay',
    width: 800,
    height: 533
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Smartphone and headphones',
    category: 'Technology',
    photographer: 'Jess Bailey Designs',
    width: 800,
    height: 1200
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Geometric abstract pattern',
    category: 'Abstract',
    photographer: 'Anni Roenkae',
    width: 800,
    height: 800
  },
  {
    id: '11',
    src: 'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Ocean waves at sunset',
    category: 'Nature',
    photographer: 'Pixabay',
    width: 800,
    height: 600
  },
  {
    id: '12',
    src: 'https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Modern interior design',
    category: 'Architecture',
    photographer: 'Pixabay',
    width: 800,
    height: 600
  },
  {
    id: '13',
    src: 'https://images.pexels.com/photos/3251851/pexels-photo-3251851.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Snow-covered mountains under blue sky',
    category: 'Nature',
    photographer: 'Tatiana Syrikova',
    width: 800,
    height: 600
  },
  {
    id: '14',
    src: 'https://images.pexels.com/photos/2090651/pexels-photo-2090651.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Skyscraper with mirror reflection',
    category: 'Architecture',
    photographer: 'Alex Powell',
    width: 800,
    height: 1200
  },
  {
    id: '15',
    src: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Smiling man outdoors',
    category: 'People',
    photographer: 'Ketut Subiyanto',
    width: 800,
    height: 800
  },
  {
    id: '16',
    src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Circuit board close-up',
    category: 'Technology',
    photographer: 'ThisIsEngineering',
    width: 800,
    height: 533
  },
  {
    id: '17',
    src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Abstract geometric background with pink and blue',
    category: 'Abstract',
    photographer: 'Scott Webb',
    width: 800,
    height: 800
  },
  {
    id: '18',
    src: 'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Stacked stones in misty forest',
    category: 'Nature',
    photographer: 'Pixabay',
    width: 800,
    height: 600
  },
  {
    id: '19',
    src: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Old cathedral at sunset',
    category: 'Architecture',
    photographer: 'Pixabay',
    width: 800,
    height: 600
  },
  {
    id: '20',
    src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Friends taking a selfie at a cafe',
    category: 'People',
    photographer: 'Helena Lopes',
    width: 800,
    height: 533
  },
  {
    id: '21',
    src: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Sunset over the ocean',
    category: 'Nature',
    photographer: 'Pixabay',
    width: 800,
    height: 533
  },
  {
    id: '22',
    src: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Glass office building with reflections',
    category: 'Architecture',
    photographer: 'Expect Best',
    width: 800,
    height: 1200
  },
  {
    id: '23',
    src: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Young woman smiling in urban street',
    category: 'People',
    photographer: 'Luis Quintero',
    width: 800,
    height: 1000
  },
  {
    id: '24',
    src: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Futuristic tech with neon lighting',
    category: 'Technology',
    photographer: 'ThisIsEngineering',
    width: 800,
    height: 600
  },
  {
    id: '25',
    src: 'https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Abstract lines in vibrant colors',
    category: 'Abstract',
    photographer: 'Pixabay',
    width: 800,
    height: 800
  },
  {
    id: '26',
    src: 'https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'River running through forest',
    category: 'Nature',
    photographer: 'Harrison Haines',
    width: 800,
    height: 533
  },
  {
    id: '27',
    src: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'White minimalist building',
    category: 'Architecture',
    photographer: 'Pixabay',
    width: 800,
    height: 800
  },
  {
    id: '28',
    src: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Child playing in autumn leaves',
    category: 'People',
    photographer: 'Misael Garcia',
    width: 800,
    height: 533
  },
  {
    id: '29',
    src: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Close-up of circuit chips',
    category: 'Technology',
    photographer: 'Pixabay',
    width: 800,
    height: 533
  },
  {
    id: '30',
    src: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Spiral pattern abstract art',
    category: 'Abstract',
    photographer: 'Miguel Á. Padriñán',
    width: 800,
    height: 800
  }
];

function createImageCard(image, index) {
  const aspectRatio = (image.width && image.height) ? `${image.width}/${image.height}` : '4/3';
  const card = document.createElement('div');
  card.className = 'image-card loaded';
  card.style.aspectRatio = aspectRatio;
  card.dataset.index = index;

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;

  const overlayGradient = document.createElement('div');
  overlayGradient.className = 'overlay-gradient';

  const contentOverlay = document.createElement('div');
  contentOverlay.className = 'content-overlay';

  const title = document.createElement('h3');
  title.textContent = image.alt;

  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.innerHTML = `<span class="icon">👤</span><span>${image.photographer}</span>`;

  contentOverlay.appendChild(title);
  contentOverlay.appendChild(meta);

  const categoryTag = document.createElement('div');
  categoryTag.className = 'category-tag';
  categoryTag.textContent = image.category;

  card.appendChild(img);
  card.appendChild(overlayGradient);
  card.appendChild(contentOverlay);
  card.appendChild(categoryTag);

  card.addEventListener('click', () => openLightbox(index));

  return card;
}

function imageLoader(category = 'All') {
  imagesContainer.innerHTML = '';
  images.forEach((image, idx) => {
    if (category === 'All' || image.category === category) {
      imagesContainer.appendChild(createImageCard(image, idx));
    }
  });
}

let lightboxElements = null;
function openLightbox(index) {
  closeLightbox();

  const backdrop = document.createElement('div');
  backdrop.className = 'lightbox-backdrop';
  backdrop.addEventListener('click', closeLightbox);

  const content = document.createElement('div');
  content.className = 'lightbox-content';

  const inner = document.createElement('div');
  inner.className = 'lightbox-inner';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.innerHTML = '×';
  closeBtn.addEventListener('click', closeLightbox);

  const prevBtn = document.createElement('button');
  prevBtn.className = 'lightbox-prev';
  prevBtn.setAttribute('aria-label', 'Previous');
  prevBtn.innerHTML = '←';
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showLightboxImage(index - 1);
  });

  const nextBtn = document.createElement('button');
  nextBtn.className = 'lightbox-next';
  nextBtn.setAttribute('aria-label', 'Next');
  nextBtn.innerHTML = '→';
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showLightboxImage(index + 1);
  });

  const img = document.createElement('img');
  img.className = 'lightbox-img';

  const info = document.createElement('div');
  info.className = 'lightbox-info';

  const downloadBtn = document.createElement('button');
  downloadBtn.className = 'lightbox-download';
  downloadBtn.setAttribute('aria-label', 'Download');
  downloadBtn.innerHTML = '↓';

  function onKey(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showLightboxImage(index - 1);
    if (e.key === 'ArrowRight') showLightboxImage(index + 1);
  }
  document.addEventListener('keydown', onKey);

  downloadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    window.open(images[index].src, '_blank'); 
  });

  function showLightboxImage(idx) {
    if (idx < 0) idx = images.length - 1;
    if (idx >= images.length) idx = 0;
    index = idx;
    const image = images[index];
    img.src = image.src;
    img.alt = image.alt;
    info.innerHTML = `
      <h2 style="margin-bottom: 0.5rem;">${image.alt}</h2>
      <div class="meta">
        <span class="icon">👤 ${image.photographer}</span>
        <span class="icon">📷 ${image.category}</span>
        <span class="count">${index + 1} of ${images.length}</span>
      </div>
    `;
  }

  inner.appendChild(closeBtn);
  inner.appendChild(prevBtn);
  inner.appendChild(nextBtn);
  inner.appendChild(img);
  inner.appendChild(info);
  inner.appendChild(downloadBtn);

  content.appendChild(inner);

  document.body.appendChild(backdrop);
  document.body.appendChild(content);

  lightboxElements = { backdrop, content, onKey };

  showLightboxImage(index);
}

function closeLightbox() {
  if (lightboxElements) {
    document.body.removeChild(lightboxElements.backdrop);
    document.body.removeChild(lightboxElements.content);
    document.removeEventListener('keydown', lightboxElements.onKey);
    lightboxElements = null;
  }
}

filterButtons.forEach(element => {
  element.addEventListener('click', () => {
    const category = element.getAttribute('data-filter');
    imageLoader(category);
  });
});

imageLoader('All');