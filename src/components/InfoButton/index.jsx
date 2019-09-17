import React, { useState } from "react";
import styled from "styled-components";
import { Drawer } from "@material-ui/core";
import { Info, XCircle } from "react-feather";
import { ContentHeader } from "./ContentHeader";
import { ContentInfo } from "./ContentInfo";
import { ContentWarning } from "./ContentWarning";
import { IconButton } from "../";

const Content = styled.div`
  padding: ${props => props.theme.paddingX2};
  width: 20rem;
`;

const ButtonWrapper = styled.span`
  position: absolute;
  right: ${props => props.theme.paddingX2};
  top: ${props => props.theme.paddingX2};
`;

export const InfoButton = ({
  infoHeader,
  contentList
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = e => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  }

  const generateContent = contentList => {
    if (contentList) {
      return contentList.map(content => {
        return content.type === "warning"
          ? <ContentWarning>{content.body}</ContentWarning>
          : <ContentInfo>{content.body}</ContentInfo>
      });
    }
  };

  return (
    <>
      <IconButton
        onClick={openDrawer}
        color="white"
      >
        <Info />
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={closeDrawer}
      >
        <Content>
          <ContentHeader>
            {infoHeader}
          </ContentHeader>

          <ButtonWrapper>
            <IconButton onClick={closeDrawer}>
              <XCircle />
            </IconButton>
          </ButtonWrapper>

          {generateContent(contentList)}
        </Content>
      </Drawer>
    </>
  )
};
