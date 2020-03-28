import React, { memo } from 'react';

//typeDefs
import { LoaderProps } from './interfaces';

//components
import StyledLoader from './styles';

const Loader: React.FC<LoaderProps> = ({ dimension, className }) => (
  <StyledLoader dimension={dimension} className={className}>
    <div className="fixedCenter" />
    <div className="outerExpandingConcentric" />
    <div className="innerExpandingConcentric" />
  </StyledLoader>
);

export default memo<LoaderProps>(Loader);
