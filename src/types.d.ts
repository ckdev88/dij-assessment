interface Customer {
    color: string
    name: string
}

type CustomerList = Customer[]

interface Password {
    title: string
    password: string
    customer_name: string
    customer_color: string
}

type PasswordList = Password[]
