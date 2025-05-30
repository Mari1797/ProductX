"use strict";

const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".nav_container");
const close = document.querySelector(".close");

ham.addEventListener("click", () => {
  nav.style.display = "block";
  close.style.display = "block";
  ham.style.display = "none";
});

close.addEventListener("click", () => {
  nav.style.display = "none";
  close.style.display = "none";
  ham.style.display = "block";
});

const photo_grid = [
  {
    src: "./products/headphones.png",
    alt: "Headphones",
    categories: "AUDIO",
    item: "Wireless Noise-Cancelling",
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life",
    cost: "$289.99",
    rating: "4.8",
  },
  {
    src: "./products/watch.png",
    alt: "Watch",
    categories: "WEARABLES",
    item: "Smart Watch Series X",
    description:
      "Advanced fitness tracking, heart rate monitoring, and notifications on your wrist",
    cost: "$349.99",
    rating: "4.7",
  },
  {
    src: "./products/speaker.png",
    alt: "Speaker",
    categories: "AUDIO",
    item: "Portable Bluetooth Speaker",
    description:
      "Waterproof Blurtooth Speaker with 360 sound and 20 hour battery life for any adventure",
    cost: "$110.49",
    rating: "4.5",
  },
  {
    src: "./products/laptop.png",
    alt: "Laptop",
    categories: "COMPUTER",
    item: "Ultra-Thin Laptop Pro",
    description:
      "Powerful performance in a sleeek design with all-day battery life",
    cost: "$1299.99",
    rating: "4.8",
  },
  {
    src: "./products/headphones.png",
    alt: "Headphones",
    categories: "AUDIO",
    item: "Wireless Noise-Cancelling",
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life",
    cost: "$289.99",
    rating: "4.8",
  },
  {
    src: "./products/laptop.png",
    alt: "Laptop",
    categories: "COMPUTER",
    item: "Ultra-Thin Laptop Pro",
    description:
      "Powerful performance in a sleeek design with all-day battery life",
    cost: "$1299.99",
    rating: "4.8",
  },
];

const photo = document.querySelector(".photo_grid");

photo_grid.forEach((products) => {
  const photoItem = document.createElement("div");
  photoItem.classList.add("photo_item");

  const img = document.createElement("img");
  img.classList.add("photo_img");
  img.src = products.src;
  img.alt = products.alt;

  const textWrap = document.createElement("div");
  textWrap.classList.add("photo_text");

  const categories = document.createElement("div");
  categories.classList.add("categories");
  categories.textContent = products.categories;

  const item = document.createElement("div");
  item.classList.add("item");
  item.textContent = products.item;

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = products.description;

  const costs = document.createElement("div");
  costs.classList.add("costs");

  const cost = document.createElement("div");
  cost.classList.add("cost");
  cost.textContent = products.cost;
  const ratingWrap = document.createElement("div");
  ratingWrap.classList.add("rating_wrap"); // You'll style this class

  const rating = document.createElement("div");
  rating.classList.add("item_rating");
  rating.textContent = products.rating;

  const rating_star = document.createElement("img");
  rating_star.classList.add("rating_star");
  rating_star.src = "./stars/star.png";

  // Using the append method
  costs.appendChild(cost);

  costs.appendChild(ratingWrap);

  ratingWrap.appendChild(rating_star);
  ratingWrap.appendChild(rating);

  textWrap.appendChild(categories);
  textWrap.appendChild(item);
  textWrap.appendChild(description);
  textWrap.appendChild(costs);

  photoItem.appendChild(img);
  photoItem.appendChild(textWrap);

  photo.appendChild(photoItem);
});
