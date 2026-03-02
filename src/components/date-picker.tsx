import * as React from "react";
import { format, setDate } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { he as heDayPicker } from "react-day-picker/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerDemoProps = {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export function DatePickerDemo(dateProps: DatePickerDemoProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!dateProps.date}
          className="w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
        >
          <CalendarIcon />
          {dateProps.date ? (
            format(dateProps.date, "dd/MM/yyyy")
          ) : (
            <span>נא לבחור תאריך</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          locale={heDayPicker}
          selected={dateProps.date}
          onSelect={dateProps.setDate}
          disabled={{ before: new Date() }}
        />
      </PopoverContent>
    </Popover>
  );
}
