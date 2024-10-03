import s from './Layout.module.css'
import {Outlet} from "react-router-dom";


export const Layout = () => {
    return (
        <div className={s.wrapper}>
            <main className={s.content}>
                <Outlet />
            </main>
        </div>
    )
}