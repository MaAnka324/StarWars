import {AppThunk} from "../store/store";
import {usersAPI} from "../api/users-api";
import {FormType} from "../../src/components/Form";

export type UserType = {
    id: string
    name: string
    email: string
    phone: string
    position: string
    position_id: string
    registration_timestamp: number
    photo: string
}


let initialState: InitialStateType = {
    "success": true,
    "page": 1,
    "total_pages": 10,
    "total_users": 47,
    "count": 5,
    "links": {
        "next_url": "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=2&count=5",
        "prev_url": null
    },
    users: [
        {
            "id": "30",
            "name": "Angel",
            "email": "angel.williams@example.com",
            "phone": "+380496540023",
            "position": "Designer",
            "position_id": "4",
            "registration_timestamp": 1537777441,
            "photo": ''
        }
    ]
}

export type InitialStateType = {
    success: boolean
    page: number
    total_pages: number
    total_users: number
    count: number
    links: {
        next_url: string
        prev_url: null
    },
    users: UserType[]
}

export const setUsers = (users: Array<UserType>) => (
    {type: "SET-USERS", users} as const
)

export const addUsers = (user: UserType) => (
    {type: "ADD-USERS", user} as const
)

export type UsersActionsTypes = ReturnType<typeof setUsers> | ReturnType<typeof addUsers>

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        case "ADD-USERS":
            return {
                ...state,
                users: [action.user, ...state.users]
            }
        default:
            return state
    }
}

export default usersReducer

export const getUsersTC = (): AppThunk => async dispatch => {
    try {
        const res = await usersAPI.getUsers()
        dispatch(setUsers(res.data.users))
    } catch (e) {
        console.log(e)
        throw new Error()
    }
}

export const addUsersTC = (data:FormType): AppThunk => async dispatch => {
    try {
        const res = await usersAPI.addUser(data);
        const res2 = await usersAPI.getUsers()
        const newUser = res2.data.users[0]
        dispatch(addUsers(newUser));
    } catch (e) {
        console.log(e)
        throw new Error()
    }
}