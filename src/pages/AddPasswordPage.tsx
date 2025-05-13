import { useState } from 'react'
import PasswordList from '../components/PasswordList'

export default function AddPasswordPage({ customerList }: { customerList: CustomerList }) {
    const [passwordList, setPasswordList] = useState<PasswordList>([])

    function processAddPasswordForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        function newPasswordCustomerColor(customer: Customer['name']): Customer['color'] {
            for (let i = 0; i < customerList.length; i++) {
                if (customerList[i].name === customer) {
                    return customerList[i].color
                }
            }
            return ''
        }

        const newPassword: Password = {
            password: event.currentTarget.add_password_password.value,
            title: event.currentTarget.add_password_title.value,
            customer_name: event.currentTarget.add_password_customer_name.value,
            customer_color: newPasswordCustomerColor(
                event.currentTarget.add_password_customer_name.value
            ),
        }

        const newPasswordList = [...passwordList, newPassword]
        setPasswordList(newPasswordList)
    }

    return (
        <>
            <h2>Nieuw wachtwoord</h2>
            <form onSubmit={processAddPasswordForm}>
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
                        <option value="">Selecteer een klant...</option>
                        {customerList.map((customer, index) => {
                            return (
                                <option
                                    key={`add_password_customer_name${index}`}
                                    value={customer.name}
                                >
                                    {customer.name}
                                </option>
                            )
                        })}
                    </select>
                    <br />
                    <i>* verplicht veld</i>
                    <br />
                    <br />
                    <button>Wachtwoord toevoegen</button>
                </fieldset>
            </form>

            <PasswordList passwordList={passwordList} />
        </>
    )
}
