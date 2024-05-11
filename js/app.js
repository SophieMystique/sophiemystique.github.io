// Interception Observer
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);
sections.forEach((section) => {
  observer.observe(section);
});

// Fetching the DB
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const list = document.getElementById("data-list");

    data.forEach((item) => {
      const li = document.createElement("li");

      li.textContent = `${item.title}`;

      list.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
