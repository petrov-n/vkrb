import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import cl from './RegisterForm.module.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

function RegisterForm() {

    const [role, setRole] = useState('');

    const handleChangeRole = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = (e) => {

    }
    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5" component="h2">
                Регистрация
            </Typography>
            <div className={cl.box}>
                <TextField label="Введите логин" variant="standard" size='small' required />
                <TextField label="Введите имя" variant="standard" size='small' required />
                <TextField label="Введите пароль" variant="standard" type='password' size='small' required />
                <TextField label="Повторите пароль" variant="standard" type='password' size='small' required />
                <FormControl fullWidth>
                    <InputLabel id="select" size='small'>Тип</InputLabel>
                    <Select
                        labelId="select"
                        id="selectRole"
                        value={role}
                        label="Role"
                        onChange={handleChangeRole}
                        size='small'
                        required
                    >
                        <MenuItem value={10}>Организатор</MenuItem>
                        <MenuItem value={20}>Студент</MenuItem>
                        <MenuItem value={30}>Гость</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={cl.switch}>
                <Button variant="contained" type='submit' onClick={handleSubmit}>Зарегистрироваться</Button>
            </div>
            <Typography variant="body2" gutterBottom>
                Есть аккаунт? <Link className={cl.link} to='/login'>Войти</Link>
            </Typography>
        </form>
    )
}

export default RegisterForm;
