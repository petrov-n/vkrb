import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import cl from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/slices/authSlice';

function LoginForm({ handleClose }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [emptyField, setEmptyField] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!password && !login) {
            setEmptyField(true);
            return;
        }

        if (rememberMe) {
            localStorage.setItem('auth', true);
        }
        handleClose();
        dispatch(setAuth(true));
        navigate('/profile');

    }

    const onChangeLogin = (e) => {
        if (emptyField) {
            setEmptyField(false);
        }
        setLogin(e.target.value);
    }

    const onChangePassword = (e) => {
        if (emptyField) {
            setEmptyField(false);
        }
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5" component="h2">
                Авторизация
            </Typography>
            <div className={cl.box}>
                <Typography variant="overline" display="block" gutterBottom color='red'>
                    {emptyField && 'Введите логин и пароль'}
                </Typography>
                <TextField
                    label="Введите логин"
                    variant="standard"
                    size='small'
                    value={login}
                    required
                    onChange={onChangeLogin}
                />
                <TextField
                    label="Введите пароль"
                    variant="standard"
                    type='password'
                    size='small'
                    value={password}
                    required
                    onChange={onChangePassword}
                />
            </div>
            <div className={cl.switch}>
                <Button variant="contained" type='submit' onClick={handleSubmit}>Войти</Button>
                <FormControlLabel control={
                    <Switch defaultChecked value={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                } label="Запомнить меня" />
            </div>
            <Typography variant="body2" gutterBottom>
                Нет аккаунта? <Link className={cl.link} to='/register'>Зарегистрироваться</Link>
            </Typography>
        </form>
    )
}

export default LoginForm;
