
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://github.com/shahmayanmiah/pictures/blob/main/wsu.jpg?raw=true);
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
                    This webite is built by the students of Wayne State University in the department of computer science for academic purpose. Our team members are Mahbub Khan, Shah Mayan Miah, Aniruddah Pal, Prangon Talukdar, Dhena Begum.
                </Typography>
                <Typography variant="h5">
                    Want to know more about us! You can send us an Email here  
                    <Link href="mailto:hg1791@wayne.edu,hj7195@wayne.edu,hm3808@wayne.edu,hq0895@wayne.edu,gq4629@wayne.edu?Subject=This%20is%20a%20subject" target="_blank" color="inherit">
    <Email />
</Link>.
                </Typography>
            </Wrapper>
        </Box>
    )
}

export default About;