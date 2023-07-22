import { Contact as ContactInterface } from '../interfaces';
import Avatar from '@mui/joy/Avatar';
import { useState } from 'react';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import CardContent from '@mui/joy/CardContent';
import CardActions from "@mui/joy/CardActions";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Link } from 'react-router-dom';
import Contact from './Contact';

type ContactCardProps = {
    contact: ContactInterface,
    avatarSrc: string
}

const ContactCard = (props: ContactCardProps): JSX.Element => {
    const [isFavorite, setFavorite] = useState(false);

    const avatarInfo = {
        alt: `${props.contact.name}'s photo`,
        src: props.avatarSrc,
    }

    const handleFavorite = () => {
        setFavorite(!isFavorite);
    }

    const { name, company, website } = props.contact;

    return (
        <Card variant="outlined" className='contact-card-container'>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    variant="soft"
                    size="lg"
                    className="avatar"
                    alt={avatarInfo.alt}
                    src={avatarInfo.src}
                />
            </Box>

            <CardContent>
                <h3 className='contact-name'>{name}</h3>
                <h4>{company.name}</h4>
                <a href={website}>{website}</a>
            </CardContent>

            <CardActions buttonFlex="0 1 120px">
                <IconButton
                    variant="outlined"
                    color="neutral"
                    sx={{ mr: "auto" }}
                    className={isFavorite ? "favorite-button active" : "favorite-button"}
                    onClick={handleFavorite}
                >
                    <FavoriteBorder/>
                </IconButton>
                <Button component={Link} to={`/contact/${props.contact.id}`} variant="solid" className='contact-more-button'>More</Button>
            </CardActions>
        </Card>
    );

}

export default ContactCard;