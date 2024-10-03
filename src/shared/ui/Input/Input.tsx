import {forwardRef, InputHTMLAttributes} from "react";
import s from './Input.module.css'


export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
    <input {...props} ref={ref} className={s.input} />
))