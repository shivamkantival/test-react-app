import React, {memo} from "react";

//typeDefs
import {LoaderProps} from "./interfaces";

//components
import StyledLoader from "./styles"

const Loader:React.FC<LoaderProps> = (props) => {
  return <StyledLoader dimension={props.dimension}>
    <div className="fixedCenter" />
    <div className="outerExpandingConcentric" />
    <div className="innerExpandingConcentric" />
  </StyledLoader>
}


Loader.defaultProps = {
  dimension: 100
}

export default memo(Loader);