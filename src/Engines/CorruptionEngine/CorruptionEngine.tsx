import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../../store/corruptionSlice";
import { RootState } from "../../store/store";
import { useAppSelector } from "../../hooks/reduxHooks";

const INCREMENT_ON_CLICK: number = 1;
const INCREMENT_BY_TIME: number = 0.5;

export const CorruptionEngine = () => {
  const dispatch = useDispatch();

  const hasWhispered = useRef(false);

  const corruption = useAppSelector((state) => state.corruption.value);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(increase(INCREMENT_BY_TIME));
    }, 1000);

    const clickHandler = () => {
      dispatch(increase(INCREMENT_ON_CLICK));
    };

    window.addEventListener("click", clickHandler);

    return () => {
      clearInterval(interval);
      window.removeEventListener("click", clickHandler);
    };
  }, [dispatch]);

  
  useEffect(() => {
    if (corruption > 80 && !hasWhispered.current) {
        const utter: SpeechSynthesisUtterance = new SpeechSynthesisUtterance("GET OUT OF HERE");
        const voices: SpeechSynthesisVoice[] = speechSynthesis.getVoices();

        utter.volume = 5;
        utter.pitch = 20;
        utter.voice = voices[2]
        speechSynthesis.speak(utter);

        hasWhispered.current = true;
    }
  }, [corruption])

  return null;
};
