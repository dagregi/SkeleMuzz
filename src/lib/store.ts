import { writable, type Writable } from "svelte/store";
import type { Track } from "./types";

export const trackStore: Writable<Track> = writable({});
export const playlistStore: Writable<Track[]> = writable([]);

export const currentTime = writable(0);
export const duration = writable(0);
export const isPlaying = writable(false);
