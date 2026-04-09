const themeButton = document.querySelector("#theme-button");
const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
	const isDark = theme === "dark";

	document.documentElement.classList.toggle("dark", isDark);
	themeButton.textContent = isDark ? "☀️" : "🌙";
	themeButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
	localStorage.setItem("theme", theme);
}

function closeMenu() {
	mobileMenu.classList.add("hidden");
	menuButton.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
	const isOpen = mobileMenu.classList.toggle("hidden") === false;
	menuButton.setAttribute("aria-expanded", String(isOpen));
}

setTheme(savedTheme || (prefersDark ? "dark" : "light"));
closeMenu();

themeButton.addEventListener("click", () => {
	const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
	setTheme(nextTheme);
});

menuButton.addEventListener("click", toggleMenu);

window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		closeMenu();
	}
});
