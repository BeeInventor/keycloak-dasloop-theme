document.addEventListener("DOMContentLoaded", (event) => {
	const params = new URLSearchParams(window.location.search);
	params.forEach((value, key) => {
		const matches = key.match(/^prefill-(.*)$/);
		if(matches) {
			const input = document.querySelector('#kc-register-form input#' + matches[1]);
			// input.disabled = true; // can't just disable the field because form will not submit a disabled field
			input.parentElement.className = 'ui disabled input';
			input.value = value;
		}
	});
});