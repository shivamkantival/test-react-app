//typeDefs
import { ScrollRatioComputeParams } from './interfaces';

//utils
import isEmpty from 'lodash/isEmpty';
import { isScrollable } from 'utils/DOMUtils';

export function computeScrollRatioWithNonNullParams(params: ScrollRatioComputeParams): number {
  const { scrollHeight, scrollTop, clientHeight } = params;
  return isScrollable({ clientHeight, scrollHeight })
    ? scrollTop / (scrollHeight - clientHeight)
    : 1;
}

export function computeScrollRatio(params: ScrollRatioComputeParams | null): number {
  return isEmpty(params)
    ? 0
    : computeScrollRatioWithNonNullParams(params as ScrollRatioComputeParams);
}
