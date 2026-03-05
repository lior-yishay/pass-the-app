import { DatePickerDemo } from "@/components/date-picker";
import { RadioGroupDemo } from "@/components/radio-group";
import { Button } from "@/components/ui/button";
import { fart } from "@/lib/stress";

import React, { useEffect } from "react";
import { OfirModeToggle } from "@/components/ofir-mode-toggle";
import { StressMeter } from "@/components/stress-meter";
import { FunnyResponse } from "@/components/funny-response";
import { AnimatedEmoji } from "@/components/animated-emoji";
import { ResetButton } from "@/components/reset-button";
import { HistoryPanel, type HistoryEntry } from "@/components/history-panel";

export const Home = () => {
  const [date, setDate] = React.useState<Date>();
  const [answer, setAnswer] = React.useState<number>();
  const [result, setResult] = React.useState<number>();
  const [ofirMode, setOfirMode] = React.useState(false);
  const [history, setHistory] = React.useState<HistoryEntry[]>([]);

  // Load history on mount
  useEffect(() => {
    const saved = localStorage.getItem("stressHistory");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  // Save history on change
  useEffect(() => {
    localStorage.setItem("stressHistory", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    setResult(undefined);
  }, [date, answer]);

  const getStressLevel = (score: number): "low" | "medium" | "high" => {
    if (score === 1) return "low";
    if (score === 2) return "medium";
    return "high";
  };

  const getCategoryName = (level: "low" | "medium" | "high") => {
    if (level === "low") return "צ'יל 😎";
    if (level === "medium") return "קצת לחוץ 😬";
    return "פאניקה 😵";
  };

  const handleClick = () => {
    if (date && answer) {
      const calcResult = fart(date, answer);
      setResult(calcResult);

      // Add to history
      const level = getStressLevel(answer);
      const newEntry: HistoryEntry = {
        date: new Date().toLocaleDateString("en-GB"),
        category: getCategoryName(level),
        emojiUrl: new URL(`../../assets/emojis/${calcResult}.png`, import.meta.url).href,
      };

      setHistory((prev) => [newEntry, ...prev].slice(0, 5));
    }
  };

  const handleReset = () => {
    setDate(undefined);
    setAnswer(undefined);
    setResult(undefined);
  };

  const renderResultSection = () => {
    if (result === undefined || answer === undefined) return null;

    const emojiSrc = new URL(`../../assets/emojis/${result}.png`, import.meta.url).href;
    const stressLevel = getStressLevel(answer);

    return (
      <div className="flex flex-col items-center gap-4 mt-6 p-6 rounded-2xl bg-white shadow-lg border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800">תוצאה</h2>
        <AnimatedEmoji stressLevel={stressLevel} src={emojiSrc} alt={`${result}.png`} />
        <StressMeter stressLevel={stressLevel} score={answer} />
        <FunnyResponse stressLevel={stressLevel} ofirMode={ofirMode} />
        <ResetButton onReset={handleReset} />
      </div>
    );
  };

  return (
    <div className="flex gap-6 min-h-screen w-screen flex-col items-center justify-center p-6 bg-gray-50/30" dir="rtl">
      <div className="fixed top-6 left-6 z-50">
        <OfirModeToggle enabled={ofirMode} onToggle={setOfirMode} />
      </div>

      <div className="flex flex-col items-center gap-8 w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          ™️מחשבון לחץ - מלי ואופיר
        </h1>

        <div className="flex flex-col gap-6 w-full items-center">
          {(!date || result === undefined) && (
            <DatePickerDemo date={date} setDate={setDate} />
          )}

          {(!answer || result === undefined) && (
            <RadioGroupDemo setAnswer={setAnswer} />
          )}

          {result === undefined ? (
            <Button
              onClick={handleClick}
              className="mt-4 px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              הצג תשובה נבחרת
            </Button>
          ) : null}
        </div>
      </div>

      {renderResultSection()}
      <HistoryPanel history={history} />
    </div>
  );
};
