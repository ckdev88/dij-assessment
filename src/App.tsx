import AddPasswordPage from './pages/AddPasswordPage'
import useFetchCustomers from './hooks/useFetchCustomers'

function App() {
    const customerList = useFetchCustomers()

    return (
        <>
            <h1>Simpele password manager</h1>
            <AddPasswordPage customerList={customerList} />
        </>
    )
}

export default App
