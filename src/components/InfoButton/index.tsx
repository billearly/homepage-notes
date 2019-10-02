import React, { useState } from "react";
import classnames from "classnames";
import { Drawer } from "@material-ui/core";
import { Info, XCircle } from "react-feather";
import { IconButton, IconButtonColor } from "../";
import "./InfoButton.scss";

interface IInfoButtonProps {
  infoHeader: string
  contentList: Array<ContentListItem>
}

// you were trying to export this interface but it wasn't working
// ultimately your goal was to get this and ContentType all the way to the top
// so that the Warning type comes through properly
// Right now the error is not getting styled correctly, and I think thats because
// its getting set as "warning" when the comparison is expecting "Warning" (from the enum)

// also need to wrap up
// GlobalStyle
// Main
// index.js => index.ts
// hooks
// layouts
// pages?
// remove anything having to do with styled-components

export interface ContentListItem {
  type: ContentType
  body: string
}

export enum ContentType {
  Unknown,
  Info,
  Warning
}

export const InfoButton: React.FC<IInfoButtonProps> = ({
  infoHeader,
  contentList
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = (e: Event) => {
    console.log('hello');
    setIsOpen(true);
  };

  const closeDrawer = (e: Event) => {
    setIsOpen(false);
  }

  const generateContent = (contentList: Array<ContentListItem>) => {
    if (contentList) {
      return contentList.map(content => {
        const classes: string = content.type === ContentType.Warning
          ? "info-button__content__info--warning"
          : "info-button__content__info";

        return <p className={classes}>{content.body}</p>
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
