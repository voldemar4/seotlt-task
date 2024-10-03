import {forwardRef, TextareaHTMLAttributes} from "react";
import s from './Textarea.module.css'


export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => (
    <textarea {...props} ref={ref} className={s.textarea} />
))