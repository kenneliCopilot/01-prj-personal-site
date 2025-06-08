const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const container = document.querySelector(".container");

// 监听滚动并高亮导航
container.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (container.scrollTop >= sectionTop - window.innerHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// 点击导航栏跳转到对应 section（平滑滚动）
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    const target = document.getElementById(id);
    container.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});


document.getElementById("copyBtn").addEventListener("click", () => {
  const range = document.createRange();
  const textDiv = document.getElementById("copyText");
  range.selectNodeContents(textDiv);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand("copy");
    selection.removeAllRanges();
    alert("Copied to clipboard!");
  } catch (err) {
    alert("Failed to copy.");
  }
});
