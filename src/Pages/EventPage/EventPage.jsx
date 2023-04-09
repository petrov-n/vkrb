import { useParams, Link } from "react-router-dom";
import { useState } from 'react';
import { ROWS, USERS } from "../../consts/main";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import cl from './EventPage.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TransitionsModal from "../../Components/Modal/Modal";

function EventPage() {
    const { id } = useParams();
    let event = ROWS.find((el) => el.id === Number(id));
    const organizer = USERS[0];

    const [text, setText] = useState();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const onBook = () => {
        setText('Вы записались на мероприятие');
        setOpen(true);
    }

    const onEstimate = (e, newValue) => {
        console.log(newValue);
        setText('Спасибо за вашу оценку!');
        setOpen(true);
     }

    return (
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: '100%',
                },
            }}
        >
            <Paper variant="outlined">
                <Typography variant="h3" gutterBottom mt={2} align={'center'}>
                    {event?.description}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom align={'center'}>
                    Время проведения: <span className={cl.details}>{event?.start} - {event?.finish}</span>
                </Typography>
                <Typography variant="overline" display="block" gutterBottom align={'center'}>
                    Тип мероприятия: <span className={cl.details}>{event?.type}</span>
                </Typography>
                <Typography variant="overline" display="block" gutterBottom align={'center'}>
                    Организатор: <span className={cl.details}>{organizer.name}</span>
                </Typography>
                <Button variant="contained" className={cl.btn} onClick={onBook}>Записаться</Button>
                <div className={cl.footer}>
                    <Typography variant="overline" display="block" gutterBottom align={'center'}>
                        Оцените мероприятие
                    </Typography>
                    <Rating name="half-rating" defaultValue={event.rate} precision={0.5} onChange={onEstimate}/>
                </div>
                <Link to='/' className={cl.link}>
                    <Button variant="clear" startIcon={<ArrowBackIcon />}>Назад</Button>
                </Link>
                <TransitionsModal open={open} handleClose={handleClose}>
                    <div className={cl.text}>{text}</div>
                </TransitionsModal>
            </Paper>
        </Box>
    )
}

export default EventPage;
