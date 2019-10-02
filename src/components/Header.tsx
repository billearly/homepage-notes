import React from "react";
import { InfoButton, ContentType } from "./";
import "./Header.scss";

interface IHeaderProps {
  name: string
  infoHeader: string
  contentList: Array<string>
}

export const Header: React.FC<IHeaderProps> = ({
  name,
  infoHeader,
  contentList
}) =>
  <header className="header">
    <div className="header__items">
      <p>{name}</p>

      <InfoButton
        infoHeader={infoHeader}
        contentList={contentList}
      />
    </div>
  </header>
