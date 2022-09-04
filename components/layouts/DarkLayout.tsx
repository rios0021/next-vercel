import { FC, PropsWithChildren } from "react"

export const DarkLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div style={{
            backgroundColor: 'rgba(10,10,10,2.3)',
            padding: '10px',
            borderRadius: '5px',
        }}>
            <h3>Dark-Layout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}