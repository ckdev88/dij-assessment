import { useState, useEffect } from 'react'

// TODO: use only one URL, test with/without VPN on
const url: string = 'https://pastebin.com/raw/zSFTiVWr'
const urlFallback: string = 'https://ckdev88.github.io/dij/api.json'

export default function useFetchCustomers(): CustomerList {

    const [customerList, setCustomerList] = useState<CustomerList>([])
    const url = urlFallback // TODO remove when only using 1 url

    function fetchCustomers() {
        let customerListPromise = fetch(url)
        // TODO add error handling
        customerListPromise
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCustomerList(data)
            })
    }

    useEffect(() => {
        fetchCustomers()
    }, [])

    return customerList
}
