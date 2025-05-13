import AddPasswordPage from './pages/AddPasswordPage'
import PasswordListPage from './pages/PasswordListPage'
import useFetchCustomers from './hooks/useFetchCustomers'

function App() {
    const customerList = useFetchCustomers()

    return (
        <>
            <h1>Simpele password manager</h1>
            <AddPasswordPage />
            <PasswordListPage />
        </>
    )
}

export default App
