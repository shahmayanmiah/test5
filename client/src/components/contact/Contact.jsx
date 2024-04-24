
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://cdn.pixabay.com/photo/2015/12/09/10/39/contact-us-1084524_1280.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
        <Banner />
        <Wrapper>
            <Typography variant="h3">Reaching out to us is easy!</Typography>    
            <Typography variant="h5">
                Any questions or issue with our website you can email us at:
                <Link href="mailto:hg1791@wayne.edu,hj7195@wayne.edu,hm3808@wayne.edu,hq0895@wayne.edu,gq4629@wayne.edu?Subject=This%20is%20a%20subject" target="_blank" color="inherit">
    <Email />
</Link>.
            </Typography>
        </Wrapper>
    </Box>
    );
}

export default Contact;