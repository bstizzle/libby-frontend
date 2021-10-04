import { Book } from "./book"

export class User {
    user_name: String
    password: String
    email: String
    bookList: Book[]
    holdList: Book[]
    admin: Boolean

    constructor(user_name: String, password: String, email: String, admin: Boolean)
    {
        this.user_name = user_name
        this.password = password
        this.email = email
        this.admin = admin
        this.bookList = []
        this.holdList = []
    }

}
