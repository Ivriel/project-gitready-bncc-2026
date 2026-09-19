/* =========================================================
   script.js
   Ditambahkan oleh Anggota 3 di branch "scripting"
   ========================================================= */

const members = [
  {
    name: "Nama Anggota 1",
    role: "Frontend Developer",
    image: "https://i.pinimg.com/736x/fc/af/7a/fcaf7aec4b7be05a0d062eff7851d2aa.jpg",
    description: "Saya fokus membangun tampilan web yang rapi, responsif, dan mudah digunakan melalui struktur HTML dan desain antarmuka yang konsisten.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Nama Anggota 2",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=47",
    description: "Saya merancang pengalaman pengguna yang sederhana, menarik, dan mudah dipahami dengan memperhatikan kebutuhan pengguna di setiap halaman.",
    skills: ["Figma", "Wireframing", "Prototyping"]
  },
  {
    name: "Nama Anggota 3",
    role: "JavaScript Developer",
    image: "https://i.pravatar.cc/300?img=12",
    description: "Saya mengembangkan interaksi halaman yang dinamis dan memastikan setiap fitur berjalan lancar, cepat, serta nyaman digunakan.",
    skills: ["JavaScript", "DOM", "Git"]
  }
];

const memberLinks = document.querySelectorAll(".member-link");
const userName = document.getElementById("user-name");
const userRole = document.getElementById("user-role");
const avatar = document.querySelector(".avatar");
const aboutText = document.querySelector(".about p");
const skillList = document.getElementById("skill-list");
const likeCounts = [0, 0, 0];
let activeMember = 0;

function renderMember(memberIndex) {
  const member = members[memberIndex];
  activeMember = memberIndex;

  userName.textContent = member.name;
  userRole.textContent = member.role;
  avatar.src = member.image;
  avatar.alt = `Foto profil ${member.name}`;
  aboutText.textContent = member.description;
  skillList.innerHTML = member.skills.map((skill) => `<li>${skill}</li>`).join("");
  counterSpan.textContent = likeCounts[activeMember];

  memberLinks.forEach((link, index) => {
    const isActive = index === memberIndex;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-pressed", String(isActive));
  });
}

memberLinks.forEach((link) => {
  link.addEventListener("click", () => {
    renderMember(Number(link.dataset.member));
  });
});

// ---------- Dark mode toggle ----------
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ---------- Like counter ----------
const counterBtn = document.getElementById("counter-btn");
const counterSpan = document.getElementById("counter");

counterBtn.addEventListener("click", () => {
  likeCounts[activeMember] += 1;
  counterSpan.textContent = likeCounts[activeMember];
});