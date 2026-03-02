import { DatePickerDemo } from "@/components/date-picker";
import { RadioGroupDemo } from "@/components/radio-group";
import { Button } from "@/components/ui/button";
import { fart } from "@/lib/stress";

import React, { use, useEffect } from "react";

export const Home = () => {
  const [date, setDate] = React.useState<Date>();
  const [answer, setAnswer] = React.useState<number>();
  const [result, setResult] = React.useState<number>();

  useEffect(() => {
    setResult(undefined);
  }, [date, answer]);

  const handleClick = () => {
    if (date && answer) {
      setResult(fart(date, answer));
    }
  };

  const emojis = () => {
    const emoji = new URL(`../../assets/emojis/${result}.png`, import.meta.url)
      .href;
    return (
      <img
        className="h-48 w-96 object-contain"
        src={emoji}
        alt={`${result}.png`}
      />
    );
  };

  return (
    <div className="flex gap-15 h-screen w-screen flex-col items-center content-center justify-center">
      <h1 className="text-4xl font-bold">™️מחשבון לחץ - מלי ואופיר</h1>
      <DatePickerDemo date={date} setDate={setDate} />
      <RadioGroupDemo setAnswer={setAnswer} />

      <Button onClick={handleClick}>הצג תשובה נבחרת</Button>
      {result !== undefined && <div>תוצאה: {emojis()}</div>}
    </div>
  );
};
