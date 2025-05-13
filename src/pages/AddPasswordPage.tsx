export default function AddPasswordPage() {
    return (
        <>
            <h2>Nieuw wachtwoord</h2>
            <form>
                <fieldset>
                    <legend>Wachtwoord aanmaken</legend>
                    <label htmlFor="add_password_title">Titel:*</label>
                    <input id="add_password_title" type="text" name="add_password_title" required />
                    <br />
                    <label htmlFor="add_password_password">Wachtwoord:*</label>
                    <input
                        type="password"
                        name="add_password_password"
                        id="add_password_password"
                        autoComplete="off"
                        required
                    />
                    <br />
                    <label htmlFor="add_password_customer_name">Klant:</label>
                    <select name="add_password_customer_name" id="add_password_customer_name">
                        <option value=""></option>
                        {/* TODO: load fetched customer array, select name */}
                    </select>
                    <br />
                    <i>* verplicht veld</i>
                    <br/>
                    <br/>
                    <button>Wachtwoord toevoegen</button>
                </fieldset>
            </form>
        </>
    )
}
