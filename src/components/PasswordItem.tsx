import { useState } from 'react'

export default function PasswordItem({ p, index }: { p: Password; index: number }) {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
        <>
            <div style={{ backgroundColor: p.customer_color }}>{p.title}</div>
            <div
                style={{ backgroundColor: p.customer_color }}
                data-testid={`passwordItem-${index}`}
            >
                {passwordVisible ? <>{p.password} </> : <>•••••••</>}
                <u
                    style={{ cursor: 'pointer', paddingLeft: '.5em' }}
                    onClick={() => setPasswordVisible(!passwordVisible)}
                >
                    {passwordVisible ? <>verbergen</> : <>tonen</>}
                </u>
            </div>
            <div style={{ backgroundColor: p.customer_color }}>{p.customer_name}</div>
        </>
    )
}
