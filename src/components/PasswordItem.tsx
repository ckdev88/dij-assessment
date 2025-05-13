export default function PasswordItem({ index, p }: { index: number; p: Password }) {
    return (
        <>
            <div key={`passwordListItem${index}`} style={{ backgroundColor: p.customer_color }}>
                {p.title}
            </div>
            <div style={{ backgroundColor: p.customer_color }}>{p.password}</div>
            <div style={{ backgroundColor: p.customer_color }}>{p.customer_name}</div>
        </>
    )
}
