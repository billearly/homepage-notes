import React from "react";
import { InfoButton, IContentListItem } from "./";
import "./Header.scss";

interface IHeaderProps {
  name: string;
  infoHeader: string;
  contentList: Array<IContentListItem>;
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
