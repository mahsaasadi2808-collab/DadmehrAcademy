
const galleryImages = [
  {
    image: "images/gallery/photo-1.jpg",
    title: "Classroom Activities"
  },
  {
    image: "images/gallery/photo-2.jpg",
    title: "Learning Together"
  },
  {
    image: "images/gallery/photo-3.jpg",
    title: "Academy Moments"
  },
  {
    image: "images/gallery/photo-4.jpg",
    title: "English Class"
  }
];

const galleryGrid = document.getElementById("galleryGrid");

galleryImages.forEach(item => {
  galleryGrid.innerHTML += `
    <div class="gallery-item">
      <img src="${item.image}" alt="${item.title}">
      <div class="gallery-caption">${item.title}</div>
    </div>
  `;
});
