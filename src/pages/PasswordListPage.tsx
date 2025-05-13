export default function PasswordListPage() {
    return (
        <>
            <h2>Overzicht</h2>
            {/* TODO: loop saved passwords, showing title, password (with hidden-toggle?), customer name (if connected), customer color (if connected) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                <div>
                    <b>Titel</b>
                </div>
                <div>
                    <b>Wachtwoord</b>
                </div>
                <div>
                    <b>Klant</b>
                </div>
                { /* TODO: start looped data */ }
                <div>testtitel</div>
                <div>testwachtwoord</div>
                <div>testklant</div>
                <div>testtitel2</div>
                <div>testwachtwoord2</div>
                <div>testklant2</div>
            </div>
        </>
    )
}
