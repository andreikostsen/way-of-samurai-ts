import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {showMoreUsersActionCreator, UserType} from "../../redux/users-reducer";


export const Users = () => {


    const dispatch = useDispatch()

const users = useSelector<AppRootStateType, UserType[]>(store=>store.usersPage)

    const [usersCount, SetUsersCount] = useState<number>(2)

    const onClickHandler = () => {

        SetUsersCount( usersCount + 2)
        dispatch(showMoreUsersActionCreator(usersCount))

    }


    return (
        <div>
            <div>Users list</div>
            <ul>

            {
                users.map(u =><li>{u.name}</li>)
            }

            <button onClick={onClickHandler}>Show more...</button>

        </ul>
        </div>






        )

}