import { useState } from 'react'

export default function PasswordItem({ p }: { p: Password }) {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
        <>
            <div style={{ backgroundColor: p.customer_color }}>{p.title}</div>
            <div style={{ backgroundColor: p.customer_color }}>
                {passwordVisible ? (
                    <>{p.password} </>
                ) : (
                    <>&bull;&bull;&bull;&bull;&bull;&bull;&bull; </>
                )}
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
