import React, { FC } from 'react';
import { SvgSelector } from '../Svg.Selector';
import style from './Button.module.scss';

interface IButton {
  btnText: string;
  handleClick: () => void;
  isPlus?: boolean;
}

const Button: FC<IButton> = (props) => {
  const { btnText, handleClick, isPlus = false } = props;
  return (
    <button type="button" className={style.button} onClick={handleClick}>
      {btnText}
      <div className={style.plus}>{isPlus && <SvgSelector id="plus" />}</div>
    </button>
  );
};

Button.defaultProps = {
  isPlus: false,
};

export default Button;
