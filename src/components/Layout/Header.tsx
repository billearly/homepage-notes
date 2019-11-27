import React from "react";
import { DrawerButton, IContentListItem } from "../";
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

      <DrawerButton
        infoHeader={infoHeader}
        contentList={contentList}
      />
    </div>
  </header>
