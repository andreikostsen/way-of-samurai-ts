import React from 'react'
import {v1} from "uuid";

export type UserType = {
    id: string,
    name: string,
    info: string,
    address: string,
    photo: string
}

type showMoreUsersActiontype = {
    type: "SHOW-MORE-USERS",
    usersCount: number
}


const initialState: Array<UserType> = [
    {
        id: v1(),
        name: "Andrei",
        info: "Guitar player",
        address: "Minsk, Belarus",
        photo: "adasd"
    },
    {
        id: v1(),
        name: "Katya",
        info: "Osteo.beauty",
        address: "Minsk, Belarus",
        photo: "adasd"
    },
    {
        id: v1(),
        name: "Daminik",
        info: "Magician",
        address: "Minsk, Belarus",
        photo: "adasd"
    },
    {
        id: v1(),
        name: "Ian",
        info: "BFA Chairman",
        address: "Minsk, Belarus",
        photo: "adasd"
    },

]

export const usersReducer = (state: Array<UserType> = initialState, action: showMoreUsersActiontype) => {



    switch (action.type) {

        case "SHOW-MORE-USERS":
            let stateCopy = [...state]
            let resultState: Array<UserType> = []

            for (let i = 0; i < action.usersCount; i++) {
                resultState.push(initialState[i])
            }
            return resultState;

        default:
            return state;
    }

}


export const showMoreUsersActionCreator = (usersCount: number):showMoreUsersActiontype => (

    {type: "SHOW-MORE-USERS", usersCount } as const
)