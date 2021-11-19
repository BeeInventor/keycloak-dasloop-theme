document.addEventListener("DOMContentLoaded", (event) => {
	const params = new URLSearchParams(window.location.search);
	params.forEach((value, key) => {
		const matches = key.match(/^prefill-(.*)$/);
		if(matches) {
			const input = document.getElementById(matches[1]);
			input.disabled = true;
			input.value = value;
		}
	});
});