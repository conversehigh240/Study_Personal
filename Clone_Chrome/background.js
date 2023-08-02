const imgs = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
  ]
  
  const showImage = imgs[Math.floor(Math.random() * imgs.length)];
  const img = document.createElement("img");
  img.className = "background";
  
  img.src = `img/${showImage}`;
  
  document.body.appendChild(img);