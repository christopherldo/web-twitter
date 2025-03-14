"use client";

export const formatRelativeTime = (date: Date) => {
  const now = Date.now();
  const diffInMilliseconds = date.getTime() - now;

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 1000 * 60 * 60 * 24 * 365],
    ["month", 1000 * 60 * 60 * 24 * 30],
    ["day", 1000 * 60 * 60 * 24],
    ["hour", 1000 * 60 * 60],
    ["minute", 1000 * 60],
    ["second", 1000],
  ];

  const locale = navigator.language || "en-US";
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  const unit = units.find(
    ([_, milliseconds]) => Math.abs(diffInMilliseconds) >= milliseconds
  );

  return unit
    ? rtf.format(Math.round(diffInMilliseconds / unit[1]), unit[0])
    : rtf.format(0, "second");
};
