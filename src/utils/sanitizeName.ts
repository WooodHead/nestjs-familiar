export const sanitizeName = (name: string) =>
	name
		.trim()
		.replace(/\s\s+/g, " ")
		.toLowerCase()
		.split(" ")
		.map((str) => str.charAt(0).toUpperCase() + str.slice(1, str.length))
		.join(" ");
