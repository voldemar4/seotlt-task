import {FC, PropsWithChildren} from "react";
import s from './Title.module.css'


export const Title: FC<PropsWithChildren> = ({ children }) => (
    <h1 className={s.title}>{children}</h1>
)