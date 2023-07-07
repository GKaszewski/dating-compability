import {writable} from "svelte/store";

export const yourName = writable<string>('');
export const partnersName = writable<string>('');
export const compatibility = writable<number>(0);
export const checkClicked = writable<boolean>(false);
