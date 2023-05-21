const darkLightButton = document.querySelector(".menu__button");

darkLightButton.addEventListener("click", () => {
	const body = document.querySelector("body");
	body.classList.toggle("dark-mode");
});
