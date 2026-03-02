type Args = {
  setToast: (msg: string | null) => void;
  onDone: () => void;
};

export function runCaughtSequence({ setToast, onDone }: Args) {
  setToast("Deleting your computer data in 3…");
  window.setTimeout(() => setToast("Deleting your computer data in 2…"), 1000);
  window.setTimeout(() => setToast("Deleting your computer data in 1…"), 2000);
  window.setTimeout(() => {
    setToast(null);
    onDone();
  }, 3000);
}
