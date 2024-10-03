import {FC, PropsWithChildren} from "react";
import s from './Modal.module.css'


export const Modal: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                {children}
            </div>
        </div>
    )
}