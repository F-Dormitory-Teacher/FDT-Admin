import React from "react";
import { observer } from "mobx-react";
import Header from "../../components/Header/Header"
import Lost from "../../components/Lost/Lost"

const LostContainer = ({}) => {
  return (
    <>
      <Header />
      <Lost/>
    </>
  );
};

export default observer(LostContainer);
