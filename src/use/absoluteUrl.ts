import { RouteLocation } from "vue-router";

export default function useAbsoluteURL(
	relativePostURL: RouteLocation & { href: string }
) {
	//see https://stackoverflow.com/questions/61153418/is-it-possible-to-get-full-url-including-origin-from-route-in-vuejs
	return new URL(relativePostURL.href, window.location.href).href;
}
