import { drawerStore, type DrawerSettings } from "@skeletonlabs/skeleton";
import {
  currentTime,
  duration,
  isPlaying,
  playlistStore,
  trackStore,
} from "./store";
import { get } from "svelte/store";

const drawerSettings: DrawerSettings = {
  id: "player",

  bgDrawer: "variant-glass",
  width: "w-screen",
  height: "h-screen",
  position: "bottom",
};

export function openPlayer() {
  drawerStore.open(drawerSettings);
}

export function createPlayer() {
  const track = get(trackStore);
  const playList = get(playlistStore);
  const audio: HTMLAudioElement = new Audio(track.preview);

  audio.addEventListener("play", () => isPlaying.set(true));
  audio.addEventListener("pause", () => isPlaying.set(false));

  audio.addEventListener("ended", (ev) =>
    skipNext(new URL(ev.target?.src).pathname)
  );
  audio.addEventListener("canplay", () => audio.play());

  audio.addEventListener("loadedmetadata", (ev) => {
    currentTime.set(ev.target?.currentTime);
    duration.set(ev.target?.duration);
  });
  audio.addEventListener("timeupdate", (ev) => {
    currentTime.set(ev.target?.currentTime);
  });

  const skipNext = (src: string | undefined) => {
    const idx = playList.findIndex((m) => m.preview === src);

    // if we are in last music
    if (idx === playList.length - 1) {
      // go to first one
      trackStore.set(playList[0]);
    } else {
      trackStore.set(playList[idx + 1]);
    }
  };

  const skipPrev = (src: string | undefined) => {
    const idx = playList.findIndex((m) => m.preview === src);

    if (idx === 0) {
      trackStore.set(playList[playList.length - 1]);
    } else {
      trackStore.set(playList[idx - 1]);
    }
  };
  return {
    skipNext,
    skipPrev,
    audio,
  };
}
