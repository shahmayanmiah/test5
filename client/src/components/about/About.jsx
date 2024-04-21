
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
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

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">About Us</Typography>
                <Typography variant="h5">
                    We are the students of Wayne State University in the department of computer science. Our team members are Mahbub Khan, Shah Mayan Miah, Aniruddah Pal, Prangon Talukdar, Dhena Begum.
                </Typography>
                <Typography variant="h5">
                    Need something built or simply want to have chat? You can send us an Email 
                    <Link href="mailto:shahmayanmiah@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Typography>
            </Wrapper>
        </Box>
    )
}

export default About;