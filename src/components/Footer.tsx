import React, { useState, useEffect } from "react";
import "./Footer.scss";

interface IFooterProps {
  link: string;
  linkText: string;
}

export const Footer: React.FC<IFooterProps> = ({
  link,
  linkText
}) => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <div className="footer">
      <div className="footer__items">
        <span>© {year}</span>
        <a href={link}>{linkText}</a>
      </div>
    </div>
  );
};
