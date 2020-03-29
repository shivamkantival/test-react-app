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

export function textEllipsis(): string {
  return `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

export function flexContainer({
  flexDirection = 'row',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  flexWrap = 'nowrap',
}: {
  flexDirection?: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  justifyContent?: 'flex-start' | 'center' | 'space-around' | 'space-between' | 'flex-end';
  flexWrap?: 'wrap' | 'nowrap';
}) {
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

export const setStylesForAllChildrenButLast = function (
  propsForAll: string,
  propsForLast: string
): string {
  return `
    & > * {
      ${propsForAll}
      
      &:last-child {
        ${propsForLast}
      }
    }
  `;
};
