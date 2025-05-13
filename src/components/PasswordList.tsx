import PasswordItem from './PasswordItem'

export default function PasswordList({ passwordList }: { passwordList: PasswordList }) {
    return (
        <>
            <h2>Overzicht</h2>
            {passwordList.length > 0 ? (
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
                    {passwordList.map((p, index) => {
                        return <PasswordItem p={p} index={index} />
                    })}
                </div>
            ) : (
                <i>Er zijn nog geen wachtwoorden aangemaakt.</i>
            )}
        </>
    )
}
