import {FC, PropsWithChildren} from "react";
import s from './Grid.module.css'

export const Grid: FC<PropsWithChildren> = ({children}) => (
    <div className={s.grid}>{children}</div>
)