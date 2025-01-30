const albums = {
    'All Photos': [
        'images/animal1.jpeg',
        'images/animal2.jpeg',
        'images/animal3.jpeg',
        'images/animal4.jpeg',
        'images/animal5.jpeg',
        'images/animal6.jpeg',
        'images/backpacker1.jpeg',
        'images/backpacker2.jpeg',
        'images/backpacker3.jpeg',
        'images/backpacker4.jpeg',
        'images/backpacker5.jpeg',
        'images/backpacker6.jpeg',
        'images/nature1.jpeg',
        'images/nature2.jpeg',
        'images/nature3.jpeg',
        'images/nature4.jpeg',
        'images/nature5.jpeg',
        'images/nature6.jpeg',
    ],
    'Camera': [
        'images/backpacker1.jpeg',
        'images/backpacker2.jpeg',
        'images/backpacker3.jpeg',
        'images/backpacker4.jpeg',
        'images/backpacker5.jpeg',
        'images/backpacker6.jpeg',
    ],
    'Screenshots': [
        'images/nature1.jpeg',
        'images/nature2.jpeg',
        'images/nature3.jpeg',
        'images/nature4.jpeg',
        'images/nature5.jpeg',
        'images/nature6.jpeg',
    ],
    'WhatsApp': [
      'images/animal1.jpeg',
        'images/animal2.jpeg',
        'images/animal5.jpeg',
        'images/backpacker1.jpeg',
        'images/backpacker6.jpeg',
        'images/nature2.jpeg',
        'images/nature3.jpeg',
    ],
    'Instagram': [
        'images/animal1.jpeg',
        'images/animal2.jpeg',
        
        'images/animal4.jpeg',
        ,
        'images/animal6.jpeg',
        
        'images/backpacker2.jpeg',
        ,
        'images/backpacker4.jpeg',
        
        'images/backpacker6.jpeg',
        'images/nature1.jpeg',
        
        'images/nature3.jpeg',
        
        'images/nature5.jpeg',
        
    ]
};

const albumContainer = document.getElementById('album-container');
const photoContainer = document.getElementById('photo-container');
const photoViewer = document.getElementById('photo-viewer');
const viewerImage = document.getElementById('viewer-image');
const closeViewer = document.getElementById('close-viewer');
const prevImage = document.getElementById('prev-image');
const nextImage = document.getElementById('next-image');
const backToAlbumsButton = document.getElementById('back-to-albums');
const albumNameHeader = document.createElement('div');
albumNameHeader.classList.add('album-name');
photoContainer.appendChild(albumNameHeader);

let currentAlbum = [];
let currentAlbumName = '';
let currentIndex = 0;

function loadAlbums() {
    for (const albumName in albums) {
        const albumDiv = document.createElement('div');
        albumDiv.className = 'album';
        albumDiv.textContent = albumName;
        albumDiv.addEventListener('click', () => openAlbum(albumName));
        albumContainer.appendChild(albumDiv);
    }
}

function openAlbum(albumName) {
    currentAlbumName = albumName;
    currentAlbum = albums[albumName];
    albumNameHeader.textContent = albumName; // Display album name at the top
    photoContainer.innerHTML = ''; // Clear any previous content
    photoContainer.appendChild(albumNameHeader); // Add the album name header
    const imageGrid = document.createElement('div');
    imageGrid.classList.add('image-grid');
    currentAlbum.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.className = 'photo';
        img.addEventListener('click', () => openPhoto(index));
        imageGrid.appendChild(img);
    });
    photoContainer.appendChild(imageGrid); // Add images below the album name
    albumContainer.style.display = 'none';
    photoContainer.style.display = 'flex';
    backToAlbumsButton.style.display = 'block';
}

function openPhoto(index) {
    currentIndex = index;
    viewerImage.src = currentAlbum[currentIndex];
    photoViewer.style.display = 'flex';
}

function closePhotoViewer() {
    photoViewer.style.display = 'none';
}

function showNextImage() {
    if (currentAlbum.length > 0) {
        currentIndex = (currentIndex + 1) % currentAlbum.length;
        viewerImage.src = currentAlbum[currentIndex];
    }
}

function showPrevImage() {
    if (currentAlbum.length > 0) {
        currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
        viewerImage.src = currentAlbum[currentIndex];
    }
}

function goBackToAlbums() {
    photoContainer.style.display = 'none';
    albumContainer.style.display = 'grid';
    backToAlbumsButton.style.display = 'none';
}

closeViewer.addEventListener('click', closePhotoViewer);
nextImage.addEventListener('click', showNextImage);
prevImage.addEventListener('click', showPrevImage);
backToAlbumsButton.addEventListener('click', goBackToAlbums);

loadAlbums();