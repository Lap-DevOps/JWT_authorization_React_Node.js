import React, { FC, useContext, useState } from 'react';
import { Context } from '..';
import classes from './LoginForm.module.css'
import { observer } from 'mobx-react-lite';


const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { store } = useContext(Context);



    return (
        <div className={classes.login_form}>
            <input
                className={classes.input}
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <input
                className={classes.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />



            <div className={classes.button_container} >
                <button className={classes.button} onClick={() => store.login(email, password)}>Login</button>
                <button className={classes.button} onClick={() => store.registration(email, password)}>Registration</button>
            </div>


            {/* <button
                className={classes.button}
                onClick={() => store.login(email, password)}>Login</button>
            <button
                className={classes.button}
                onClick={() => store.registration(email, password)}>Registration</button> */}
        </div>
    );
};

export default observer(LoginForm);