import { writable } from 'svelte/store';

export const navbarTitle = writable({
  heading: '',
  text: '',
});
