import { Box, Divider, Typography } from "@mui/joy"

const Footer = () => {
    return (
        <div className="footer-container">

            <Typography
                level="body2"
                startDecorator={<Typography textColor="text.tertiary">
                    Contacts by
                </Typography>}
            >
                Isabel
            </Typography>

            <Typography level="body3" sx={{ ml: 'auto' }}>
                Copyright 2023
            </Typography>
        </div >
    );
}

export default Footer;