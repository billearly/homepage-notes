import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import { Info, XCircle } from "react-feather";
import { IconButton, IconButtonColor } from "../";
import "./DrawerButton.scss";

interface IInfoButtonProps {
  infoHeader: string;
  contentList: Array<IContentListItem>;
}

export interface IContentListItem {
  type: ContentType;
  body: string;
}

export enum ContentType {
  Unknown,
  Info,
  Warning
}

export const DrawerButton: React.FC<IInfoButtonProps> = ({
  infoHeader,
  contentList
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = (e: React.MouseEvent) => {
    setIsOpen(true);
  };

  const closeDrawer = (e: React.MouseEvent) => {
    setIsOpen(false);
  }

  const generateContent = (contentList: Array<IContentListItem>) => {
    if (contentList) {
      return contentList.map((content, i) => {
        const classes: string = content.type === ContentType.Warning
          ? "info-button__content__info--warning"
          : "info-button__content__info";

        return (
          <p
            className={classes}
            key={i}
          >
            {content.body}
          </p>
        );
      });
    }
  };

  return (
    <>
      <IconButton
        onClick={openDrawer}
        color={IconButtonColor.White}
      >
        <Info />
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={closeDrawer}
      >
        <div className="info-button__content">
          <h2 className="info-button__content__header">
            {infoHeader}
          </h2>

          <div className="info-button__content__button-wrapper">
            <IconButton onClick={closeDrawer}>
              <XCircle />
            </IconButton>
          </div>

          {generateContent(contentList)}
        </div>
      </Drawer>
    </>
  )
};
