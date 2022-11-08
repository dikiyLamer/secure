
export interface User {
    email: string,
    password: string
}

export interface Person {
    uid: string,
    name: string,
    surname: string,
    patronymic: string,
    company: string,
    position: string,
    department: string,
    email: string,
    phoneNumber: string,
    birthday: string,
    description: string
}

export interface Message {
    message: string
}