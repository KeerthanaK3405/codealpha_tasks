// Image data
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
];
];
];

// DOM Elements
const mainImg = document.getElementById('main-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentIndex = 0;

// Update main image and active thumbnail
function updateGallery(index) {
    // Update main image
    mainImg.src = images[index];

    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Next button click
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
});

// Previous button click
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
});

// Thumbnail click
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateGallery(currentIndex);
    });
});