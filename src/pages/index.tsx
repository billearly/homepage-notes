import React from "react";
import { Note } from "../components";
import { MainLayout } from "../layouts";

export default () => {
  return (
    <MainLayout>
      <Note
        titleLabel="Title"
        inputLabel="Note"
      />
    </MainLayout>
  );
};
