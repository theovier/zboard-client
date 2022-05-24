import Echo from "laravel-echo";
import Pusher from "pusher-js";

//todo find another way for echo to work without using window.Pusher
declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		Pusher: any;
	}
}
window.Pusher = Pusher;

const PUSHER_HOST = import.meta.env.VITE_PUSHER_HOST;
const PUSHER_PORT = import.meta.env.VITE_PUSHER_PORT;
const PUSHER_APP_KEY = import.meta.env.VITE_PUSHER_APP_KEY;

export default new Echo({
	broadcaster: "pusher",
	key: PUSHER_APP_KEY,
	wsHost: PUSHER_HOST,
	wsPort: PUSHER_PORT,
	forceTLS: false,
	encrypted: true,
	disableStats: true,
	enabledTransports: ["ws", "wss"],
});
