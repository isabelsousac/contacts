import Skeleton from '@mui/joy/Skeleton';

const Loading = () => {
    return (
        <div className='contact-card-container'>
            <div className='contact-card-content'>
                <Skeleton
                    animation="wave"
                    variant="circular"
                    width={48}
                    height={48}
                />
                <Skeleton animation="wave" variant="text" level="h3" width={{ xs: 200, md: 200 }}></Skeleton>
                <Skeleton animation="wave" variant="text" level="h4" width={{ xs: 200, md: 200 }}/>
                <Skeleton animation="wave" variant="text" width={{ xs: 200, md: 200 }}/>
                <div className="contact-button-container">
                    <Skeleton animation="wave" width={{ xs: 300, md: 300 }} height={{ xs: 40, md: 48 }}/>
                    <Skeleton animation="wave" width={{ xs: 90, md: 90 }} height={{ xs: 40, md: 48 }}/>
                </div>
            </div>
        </div>
    );
};

export default Loading;