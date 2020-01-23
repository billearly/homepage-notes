import React from "react";
import "./NoteTimestamp.scss";

interface INoteTimestampProps {
  timestamp: number;
}

export const NoteTimestamp: React.FC<INoteTimestampProps> = ({ timestamp }) => {
  const getTimestamp = (): string => {
    if (!timestamp) {
      return "";
    }

    const locale = "en-US";

    const dateFormat = {
      year: "numeric",
      month: "short",
      day: "numeric"
    };

    const timeFormat = {
      hour: "numeric",
      minute: "numeric"
    };

    const date = new Date(timestamp);
    const dateString = date.toLocaleString(locale, dateFormat);
    const timeString = date.toLocaleString(locale, timeFormat);

    return `${dateString} - ${timeString}`;
  }

  return (
    <p className="note-timestamp">
      {getTimestamp()}
    </p>
  );
}
