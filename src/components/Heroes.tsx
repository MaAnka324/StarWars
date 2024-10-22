import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../store/store";
import {getUsersTC} from "../reducers/users-reducer";
import Hero from "./Hero";
import s from "./Hero.module.css"
import {Button} from "@mui/material";

const Heroes = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.users);
    // const total_users = useAppSelector(state => state.users.total_users);
    const [count, setCount] = useState(6);

    useEffect(() => {
        const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`;
        dispatch(getUsersTC(url));
    }, [dispatch, count]);

    const handleNextUsersList = () => {
        setCount(prevCount => prevCount + 6);
    };

    // const disable = count >= total_users

    return (
        <div className={s.usersComponent} id="usersSection">
            <h1>Star Wars</h1>
            <div className={s.usersBlock}>
                {/* {users.users.map(u => (
                    <User
                        key={u.id}
                        name={u.name}
                        photo={u.photo}
                        email={u.email}
                        position={u.position}
                        phone={u.phone}
                    />
                ))} */}
            </div>
            <div className={s.buttonBlock}>
                <Button className={s.button} onClick={handleNextUsersList} variant={'contained'} 
                // disabled={disable}
                >SHOW
                    MORE</Button>
            </div>
        </div>
    );
};

export default Heroes;