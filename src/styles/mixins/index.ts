//typeDefs
import { FlexContainerOptions } from './interfaces';

export function centerToParent(): string {
  return `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
}

export function circular(): string {
  return `border-radius: 50%;`;
}

export function flexContainer({
  flexDirection = 'row',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  flexWrap = 'nowrap',
}: FlexContainerOptions) {
  return `
    display: flex;
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${flexWrap}
  `;
}

export function centerContent() {
  return `${flexContainer({ alignItems: 'center', justifyContent: 'center' })}`;
}
