/* =========================================================
   script.js
   Ditambahkan oleh Anggota 3 di branch "scripting"
   ========================================================= */

const members = [
  {
    name: "Ivriel Dei Gratia Gunawan",
    role: "Frontend Developer",
    image: "https://i.pinimg.com/736x/fc/af/7a/fcaf7aec4b7be05a0d062eff7851d2aa.jpg",
    description: "Saya adalah seorang Frontend Developer yang antusias dalam membangun antarmuka web yang bersih, terstruktur rapi, responsif, dan mudah digunakan. Terbiasa merancang kerangka HTML semantik, memastikan performa halaman optimal di berbagai resolusi layar, serta menjaga konsistensi komponen UI demi menghadirkan pengalaman pengguna yang menyenangkan.",
    skills: ["HTML5", "CSS3", "JavaScript", "Git & GitHub"]
  },
  {
    name: "Raffy Reshaina Pasha",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=12",
    description: "Saya adalah seorang UI/UX Designer dan Styling Engineer yang fokus merancang pengalaman visual yang estetik, modern, dan berpusat pada pengguna. Gemar mengeksplorasi tata letak yang ergonomis, sistem warna yang harmonis, animasi mikro, serta memastikan tampilan website tetap nyaman dinikmati dalam mode terang maupun gelap.",
    skills: ["UI/UX Design", "Figma", "Responsive CSS", "Wireframing"]
  },
  {
    name: "Dinda Octaviani Sofyan",
    role: "JavaScript Developer",
    image: "https://i.pravatar.cc/300?img=47",
    description: "Saya adalah seorang JavaScript Developer yang berdedikasi mengembangkan logika web interaktif, manipulasi DOM dinamis, dan integrasi fitur modern. Berpengalaman dalam pengelolaan state di sisi klien melalui Web Storage API, optimasi alur navigasi aplikasi, serta penanganan event yang responsif dan efisien.",
    skills: ["JavaScript (ES6+)", "DOM Manipulation", "Web Storage API", "Git Workflow"]
  }
];

const memberLinks = document.querySelectorAll(".member-link");
const userName = document.getElementById("user-name");
const userRole = document.getElementById("user-role");
const avatar = document.querySelector(".avatar");
const aboutText = document.querySelector(".about p");
const skillList = document.getElementById("skill-list");
const counterBtn = document.getElementById("counter-btn");
const counterSpan = document.getElementById("counter");
const themeToggleBtn = document.getElementById("theme-toggle");

// ---------- LocalStorage Helper for Likes ----------
const STORAGE_KEY_LIKES = "devcard_likes";
const STORAGE_KEY_THEME = "devcard_theme";

function getStoredLikes() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_LIKES);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length === members.length) {
        return parsed;
      }
    }
  } catch (err) {
    console.error("Gagal membaca localStorage likes:", err);
  }
  return [0, 0, 0];
}

const likeCounts = getStoredLikes();
let activeMember = 0;

// Set tampilan awal counter saat halaman dimuat
if (counterSpan) {
  counterSpan.textContent = likeCounts[activeMember];
}

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

// ---------- Dark mode toggle (dengan LocalStorage) ----------
const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Light Mode";
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    try {
      localStorage.setItem(STORAGE_KEY_THEME, isDark ? "dark" : "light");
    } catch (err) {
      console.error("Gagal menyimpan tema ke localStorage:", err);
    }
  });
}

// ---------- Like counter (dengan LocalStorage & Animasi Transisi) ----------
if (counterBtn && counterSpan) {
  counterBtn.addEventListener("click", () => {
    likeCounts[activeMember] += 1;
    counterSpan.textContent = likeCounts[activeMember];

    // Trigger transisi animasi pulse tombol like
    counterBtn.classList.remove("like-animated");
    void counterBtn.offsetWidth; // trigger reflow untuk me-restart animasi
    counterBtn.classList.add("like-animated");

    try {
      localStorage.setItem(STORAGE_KEY_LIKES, JSON.stringify(likeCounts));
    } catch (err) {
      console.error("Gagal menyimpan like ke localStorage:", err);
    }
  });
}