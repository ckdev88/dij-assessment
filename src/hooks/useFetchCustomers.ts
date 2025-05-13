import { useState, useEffect } from 'react'

// const url: string = 'https://pastebin.com/raw/zSFTiVWr' // FIXME: Access to fetch at 'https://pastebin.com/raw/zSFTiVWr' from origin 'http://localhost:5174' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
const url: string = 'https://ckdev88.github.io/dij/api.json'

export default function useFetchCustomers(): CustomerList {
    const [customerList, setCustomerList] = useState<CustomerList>([])

    function fetchCustomers() {
        let customerListPromise:Promise<Response> = fetch(url)
        customerListPromise
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCustomerList(data)
            })
            .catch((error) => {
                console.error(`Something went wrong fetching... ${error}`)
            })
    }

    useEffect(() => {
        fetchCustomers()
    }, [])

    return customerList
}
