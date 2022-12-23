const BTN_SEND_FORM = document.getElementById('btn__send')
const INPUT_EMAIL = document.getElementById('email')
const ACTIVE_ERROR = document.getElementById("active__error");
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

BTN_SEND_FORM.addEventListener('click', (e) => {
	e.preventDefault()

	if (INPUT_EMAIL.value === null || INPUT_EMAIL.value === '') {
		ACTIVE_ERROR.classList.add('active')
	} else if (INPUT_EMAIL.value.match(REGEX_EMAIL)) {
		ACTIVE_ERROR.classList.remove('active')
	} else {
		ACTIVE_ERROR.classList.add("active");
	}
})

