import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { increase } from "../../store/corruptionSlice";

const INCREMENT_ON_CLICK: number = 1;
const INCREMENT_BY_TIME: number = 0.5;

export const CorruptionEngine = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(increase(INCREMENT_BY_TIME))
        }, 1000)

        const clickHandler = () => {
            dispatch(increase(INCREMENT_ON_CLICK))
        }

        window.addEventListener("click", clickHandler)

        return () => {
            clearInterval(interval);
            window.removeEventListener("click", clickHandler);
        }
    }, [dispatch])

    return null;
}








