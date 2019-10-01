import React from "react";
import classnames from "classnames";
import "./Status.scss";

interface IStatusProps {
  percentage: number
}

export const Status: React.FC<IStatusProps> = ({ percentage }) => {
  const statusBarClasses = classnames("status__bar", {
    "status__bar--warning": percentage >= 80 && percentage < 100,
    "status__bar--error": percentage >= 100
  });

  const width = {
    width: `${percentage}%`
  };

  return (
    <div className="status">
      <div
        className={statusBarClasses}
        style={width}
      />
    </div>
  );
};
