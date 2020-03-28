import styled from 'styled-components';
import { COLORS, spacing } from 'styles/theme';
import { NOTIFICATION_TYPES } from 'config/interfaces';
import { flexContainer } from 'styles/mixins';

const NOTIFICATION_TYPE_TO_BACKGROUND_COLOR = {
  [NOTIFICATION_TYPES.SUCCESS]: COLORS.PASTEL_GREEN,
  [NOTIFICATION_TYPES.ERROR]: COLORS.BITTERSWEET,
  [NOTIFICATION_TYPES.INFO]: COLORS.HONEY,
};

type StyledNotificationCardProps = {
  type: NOTIFICATION_TYPES;
};

export default styled.span`
  height: 100%;
  margin-bottom: ${spacing(2)};
  border-radius: ${spacing(1)};
  padding: ${spacing(2)};
  background: ${(props: StyledNotificationCardProps) =>
    NOTIFICATION_TYPE_TO_BACKGROUND_COLOR[props.type]};
  ${flexContainer({ alignItems: 'center', justifyContent: 'flex-end' })}
`;
