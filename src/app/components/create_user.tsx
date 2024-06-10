"use client"
import {createUser} from "@/app/user";

interface CreateUserProps {

}
export default function CreateUser(props: CreateUserProps) {

    return(
        <form>
            <button onClick={() => createUser() }>
                create user
            </button>
        </form>

    )
}
