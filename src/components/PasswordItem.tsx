import { useState } from 'react'

export default function PasswordItem({ index, p }: { index: number; p: Password }) {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
        <>
            <div key={`passwordListItem${index}`} style={{ backgroundColor: p.customer_color }}>
                {p.title}
            </div>
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
