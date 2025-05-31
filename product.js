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
    discount: "10% OFF",
    slash_price: "$200.00",
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
    discount: "15% OFF",
    slash_price: "$120.00",
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
    discount: "5% OFF",
    slash_price: "$100.00",
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

photo_grid.forEach((products, index) => {
  const photoItem = document.createElement("div");
  photoItem.classList.add("photo_item");

  const img = document.createElement("img");
  img.classList.add("photo_img");
  img.src = products.src;
  img.alt = products.alt;

  const imageWrap = document.createElement("div");
  imageWrap.classList.add("imageWrap");

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

  const discount = document.createElement("div");
  discount.textContent = products.discount;
  discount.classList.add("discount");

  const slash_price = document.createElement("div");
  slash_price.classList.add("slash_price");
  slash_price.textContent = products.slash_price;

  const costWrap = document.createElement("div");
  costWrap.classList.add("costWrap");

  // Using the append method

  imageWrap.appendChild(img);
  imageWrap.appendChild(img);

  if (products.discount) {
    imageWrap.appendChild(discount);
  }
  costs.appendChild(costWrap);
  costWrap.appendChild(cost);
  costWrap.appendChild(slash_price);

  costs.appendChild(ratingWrap);

  ratingWrap.appendChild(rating_star);
  ratingWrap.appendChild(rating);

  textWrap.appendChild(categories);
  textWrap.appendChild(item);
  textWrap.appendChild(description);
  textWrap.appendChild(costs);

  photoItem.appendChild(imageWrap);
  photoItem.appendChild(textWrap);

  photo.appendChild(photoItem);
});

const footer = [
  {
    footer_logo: "P",
    footer_heading: "ProductX",
    list1:
      "Elevating everyday experiences with premium technology and thoughful design",
    list2: "",
    list3: "",
    list4: "",
  },

  {
    footer_heading: "Products",
    list1: "Features",
    list2: "Pricing",
    list3: "Whats new",
    list4: "Accessories",
  },
  {
    footer_heading: "Support",
    list1: "Contact Us",
    list2: "Help Center",
    list3: "FAQ",
    list4: "Warranty",
  },
  {
    footer_heading: "Company",
    list1: "About Us",
    list2: "Careers",
    list3: "Press",
    list4: "Sustainability",
  },
  {
    footer_heading: "Legal",
    list1: "Terms of Service",
    list2: "Privacy Policy",
    list3: "Cookie Policy",
    list4: "Compliance",
  },
];

const footer_grid = document.querySelector(".footer_grid");

footer.forEach((grid, index) => {
  const title = document.createElement("div");
  title.textContent = grid.footer_heading;
  title.classList.add("footer_heading");

  const logo = document.createElement("div");
  logo.textContent = grid.footer_logo;
  logo.classList.add("footer_logo");

  const titleWrap = document.createElement("div");
  titleWrap.classList.add("title_wrapper");

  const list1 = document.createElement("div");
  list1.textContent = grid.list1;
  list1.classList.add("list");

  const list2 = document.createElement("div");
  list2.textContent = grid.list2;
  list2.classList.add("list");

  const list3 = document.createElement("div");
  list3.textContent = grid.list3;
  list3.classList.add("list");

  const list4 = document.createElement("div");
  list4.textContent = grid.list4;
  list4.classList.add("list");

  const socials = document.createElement("div");
  socials.classList.add("socials");

  const twitter = document.createElement("img");
  twitter.classList.add("twitter");
  twitter.src = "./socials/twitter.png";

  const facebook = document.createElement("img");
  facebook.classList.add("facebook");
  facebook.src = "./socials/facebook.png";

  const instagram = document.createElement("img");
  instagram.classList.add("instagram");
  instagram.src = "./socials/instagram.png";

  const linkin = document.createElement("img");
  linkin.classList.add("twitter");
  linkin.src = "./socials/linkin.png";

  const footerWrap = document.createElement("div");
  footerWrap.classList.add("footer_wrapper");

  titleWrap.appendChild(logo);

  if (index === 0) {
    titleWrap.appendChild(title);
    footerWrap.appendChild(titleWrap);
    footWrap();
    footerWrap.appendChild(socials);
    socials.appendChild(twitter);
    socials.appendChild(facebook);
    socials.appendChild(instagram);
    socials.appendChild(linkin);
  } else {
    footerWrap.appendChild(title);
    footWrap();
  }

  function footWrap() {
    footerWrap.appendChild(list1);
    footerWrap.appendChild(list2);
    footerWrap.appendChild(list3);
    footerWrap.appendChild(list4);
  }

  // Append footerWrap to footer container
  footer_grid.appendChild(footerWrap);
});
