'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Calendar, DayValue } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const DateInput: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<DayValue>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // کنترل کلیک بیرون از تقویم برای بستن آن
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (day: DayValue) => {
    if (!day) return '';
    return `${day.year}/${day.month}/${day.day}`;
  };

  return (
    <div className="relative inline-block">
      <input
        ref={inputRef}
        type="text"
        readOnly
        value={formatDate(selectedDay)}
        placeholder="انتخاب تاریخ"
        className="border p-2 rounded w-40 text-center"
        onClick={() => setShowCalendar(!showCalendar)}
      />

      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute z-50 mt-2"
        >
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            locale="fa"
            calendarClassName="custom-calendar"
            colorPrimary="#0fbcf9" // رنگ اصلی تقویم
          />
        </div>
      )}
    </div>
  );
};

export default DateInput;
