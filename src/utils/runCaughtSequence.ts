import { sleep } from "./sleep";

interface RunCaughtSequenceArgs {
  setToast: (msg: string | null) => void;
  onDone: () => void;
  countdownSeconds: number
  setTimeoutIds: (timeoutId: number[]) => void
};

export async function runCaughtSequence({ setToast, onDone, countdownSeconds, setTimeoutIds }: RunCaughtSequenceArgs) {

  const timeoutArr = Array.from({ length: countdownSeconds }, (a, index) => index);
  setTimeoutIds([
    ...timeoutArr.map((index) => window.setTimeout(() =>
      setToast(`Deleting your computer data in ${countdownSeconds - index}...`), index * 1000)),
    window.setTimeout(() => {
      setToast(null)
      onDone()
    }, countdownSeconds * 1000)
  ])

  // for (let i = countdownSeconds; i > 0; i--) {

  // }


  // const timeOutID = window.setTimeout(() => {
  //   onDone();
  // }, (countdownSeconds * 1000));

  // setTimeoutId([timeOutID]);

  // for (let i = countdownSeconds; i > 0; i--) {
  //   setToast(`Deleting your computer data in ${i}...`)
  //   await sleep(1000)
  //   // console.log(isSaved());
  //   // if (isSaved()) return
  // }

  // setToast(null);
  // onDone();

  // setToast("Deleting your computer data in 3…");
  // //sleep
  // if (if saved)
  //   return

  // window.setTimeout(() => setToast("Deleting your computer data in 2…"), 1000);
  // window.setTimeout(() => setToast("Deleting your computer data in 1…"), 2000);
  // window.setTimeout(() => {

  // }, 3000);
}
