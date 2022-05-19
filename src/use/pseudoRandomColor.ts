const colors = [
	"bg-cyan-100",
	"bg-lime-100",
	"bg-amber-100",
	"bg-orange-100",
	"bg-emerald-100",
	"bg-sky-100",
	"bg-pink-100",
];

export default function usePseudoRandomColor(id: number) {
	const stringifiedId = id.toString();
	const hashString = hashCode(stringifiedId);
	const hashNumber = hashString.valueOf();
	const randomIndex = mod(hashNumber, colors.length);
	return colors[randomIndex];
}

const hashCode = (s: string) => {
	return s
		.split("")
		.reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);
};

//https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n: number, m: number) => {
	return ((n % m) + m) % m;
};
