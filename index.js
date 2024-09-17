function displayPoem(response) {
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 1,
		cursor: "",
	});
}

function generatePoem(event) {
	event.preventDefault();

	let instructionsInput = document.querySelector("#user-instructions");
	let apiKey = "97e4tabb40o4f358e853d5ee1101046c";
	let context = 
	"You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Do not include ```html. Sign the poem with 'Diona Moss - SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
	let prompt = `User instructions: Generate a Spanish poem about ${instructionsInput.value}`;
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `<div class="generating">⏳ Generating a Spanish poem about ${instructionsInput.value}</div>`;

	axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);