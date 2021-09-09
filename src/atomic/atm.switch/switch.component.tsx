import * as React from 'react';

import {
  SwitchBackgroundStyled,
  SwitchHandleStyled,
  SwitchRootStyled,
  SwitchStyledProps,
} from './switch.component.style';

export interface SwitchProps extends SwitchStyledProps {
  onChange?: (checked: boolean, id: number, event: any) => void;
  id?: number;
}

export const Switch: React.FC<SwitchProps> = (props) => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const handleClick = (event: any) => {
    const { onChange, id } = props;

    onChange?.(!checked, id, event);
    setChecked(!checked);
  };

  return (
    <SwitchRootStyled disabled={props.disabled} onClick={props.disabled ? undefined : handleClick}>
      <SwitchBackgroundStyled checked={checked}>&nbsp;</SwitchBackgroundStyled>
      <SwitchHandleStyled checked={checked} disabled={props.disabled} />
    </SwitchRootStyled>
  );
};
