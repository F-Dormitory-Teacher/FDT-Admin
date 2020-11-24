import React from "react";
import { observer } from "mobx-react";
import Header from "../../components/Header/Header"
import Suggest from "../../components/Suggest/Suggest"

const SuggestContainer = ({}) => {
  return (
    <>
      <Header />
      <Suggest />
    </>
  );
};

export default observer(SuggestContainer);
