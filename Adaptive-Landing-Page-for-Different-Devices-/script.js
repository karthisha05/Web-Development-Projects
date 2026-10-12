
function detectDeviceType() {
  const width = window.innerWidth;
  let message = "";

  if (width <= 767) {
    message = "You're using a Mobile Device.";
  } else if (width <= 1024) {
    message = "You're using a Tablet Device.";
  } else {
    message = "You're using a Desktop Device.";
  }

  document.getElementById("deviceType").textContent = message;
}

const features = [
  {
    title: "Responsive Design",
    image: "images/responsive.jpg",
    desc: "Looks great on all devices, from phones to desktops."
  },
  {
    title: "Fast Performance",
    image: "images/performance.jpg",
    desc: "Optimized loading speeds for seamless interaction."
  },
  {
    title: "Modern UI/UX",
    image: "images/uiux.jpg",
    desc: "Sleek, intuitive, and easy to use interfaces."
  },
  {
    title: "Secure by Design",
    image: "images/security.jpg",
    desc: "We prioritize your data safety with best practices."
  }
];

function populateFeatures() {
  const container = document.getElementById("featureList");
  features.forEach(feature => {
    const div = document.createElement("div");
    div.classList.add("feature-card");
    div.innerHTML = `
      <img src="${feature.image}" alt="${feature.title}" />
      <h3>${feature.title}</h3>
      <p>${feature.desc}</p>
    `;
    container.appendChild(div);
  });
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  e.target.reset();
});

window.addEventListener("load", () => {
  detectDeviceType();
  populateFeatures();
});

window.addEventListener("resize", detectDeviceType);