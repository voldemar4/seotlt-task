import {ButtonHTMLAttributes, FC} from "react";
import s from './Button.module.css'


export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...restProps}) => (
    <button className={s.button} {...restProps}>{children}</button>
)