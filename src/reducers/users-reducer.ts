import {AppThunk} from "../store/store";
import {usersAPI} from "../api/users-api";

export type UserType = {
    
}


let initialState: InitialStateType = {
    
}

export type InitialStateType = {
    
}

export const setUsers = (users: Array<UserType>) => (
    {type: "SET-USERS", users} as const
)


export type UsersActionsTypes = ReturnType<typeof setUsers>
   

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {
                ...state,
                users: action.users
            }
        
        default:
            return state
    }
}

export default usersReducer

export const getUsersTC = (nextUrl: string): AppThunk => async dispatch => {
    try {
        // const res = await usersAPI.getUsers(nextUrl)
        // dispatch(setUsers(res.data.users))
    } catch (e) {
        console.log(e)
        throw new Error()
    }
}

