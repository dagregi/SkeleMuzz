import { drawerStore, type DrawerSettings } from "@skeletonlabs/skeleton";

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
