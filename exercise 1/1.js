const btn = document.getElementById("btn");
const ageInput = document.getElementById("age");
const message = document.getElementById("message");

btn.onclick = function () {
	const age = Number(ageInput.value);

	if (age >= 18) {
		message.innerText = "Welcome to my class";
	} else if (age < 18) {
		message.innerText =
			"Sorry, you are not allowed to take that class because of your age is under 18";
	}
};
