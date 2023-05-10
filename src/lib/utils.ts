export const formatDuration = (sec: number | undefined) => {
  if (!sec) return "00:00";
  sec = Math.trunc(+sec);
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;

  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
};

export const convertTime = (seconds: number | undefined): string => {
  if (!seconds) return "00:00";
  const hrs = ~~(seconds / 3600);
  const mins = ~~((seconds % 3600) / 60);
  const secs = ~~seconds % 60;

  let ret = "";

  if (hrs > 1) {
    ret += "" + hrs + " hours ";
  } else if (hrs === 1) {
    ret += "" + hrs + " hour ";
    ret += "" + mins + " min ";
    ret += "" + secs + " sec ";
  } else if (hrs === 0) {
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
  }

  return ret;
};
