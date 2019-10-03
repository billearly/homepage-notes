import React from "react";
import "./ErrorMessage.scss";

interface IErrorMessageProps {
  header: string;
  subHeader: string;
  message: string;
  errorCode: number;
}

export const ErrorMessage: React.FC<IErrorMessageProps> = ({
  header,
  subHeader,
  message,
  errorCode
}) =>
  <main className="error">
    <header className="error__header">
      {header}
    </header>

    <p
      className="error__message"
      dangerouslySetInnerHTML={{ __html: subHeader }}
    />

    <p
      className="error__message"
      dangerouslySetInnerHTML={{ __html: message }}
    />

    <div className="error__code">
      <span>{errorCode}</span>
    </div>
  </main >
