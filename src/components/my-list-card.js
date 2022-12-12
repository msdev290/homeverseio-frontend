import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { PUBLIC_PREFIX, UPLOAD_PREFIX } from 'configs/app-config';
import { Row } from './layout';
import { SharedImage } from 'constants/image-constant';
import Image from './image-wrapper';

const { VideoList } = SharedImage;

export default function MyListCard() {

    const history = useHistory();

    return (
        <Wrapper>
            <Heading>Go Live on Homeverse.io</Heading>
            <Row>
                <Text>
                    Keep uploading to make consistent income.
                    Start with a free account to get rolling.
                </Text>
            </Row>
            <Row className='button-wrapper'>
                <BrowseButton onClick={() => history.push({
                    pathname: PUBLIC_PREFIX + UPLOAD_PREFIX
                })} >
                    Get Started
                </BrowseButton>
                <a href='https://homeverseio.gitbook.io/homeverseio/homeverse-guide/home' target="_blank">
                    Check Detail
                </a>
            </Row>
            <ImageWrapper>
                <Image src={VideoList} />
            </ImageWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    color: white;
    background-color: rgba(0,0,0,.3);
    padding: 20px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    font-family: Montserrat-Regular;
    .button-wrapper{
        gap: 20px;
        a{
            color: white;
            text-decoration: none;
            border: none;
    background-color: #141414;
    color: white;
    padding: 15px 20px;
    border-radius: 50px;
    font-family: Montserrat-SemiBold;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    &:hover{
        background-color: #323232;
    }
        }
    }
    @media screen and (max-width:670px){
        display: none;
    }
`
const Heading = styled.h1`
    margin-top: 0px;
    font-family: Montserrat-Bold;
`
const Text = styled.div`
    max-width: 350px;
    line-height: 24px;
    padding-bottom: 50px;
`
const BrowseButton = styled.button`
    border: none;
    background-color: #141414;
    color: white;
    padding: 15px 20px;
    border-radius: 50px;
    font-family: Montserrat-SemiBold;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color: #323232;
    }
`
const ImageWrapper = styled.div`
    max-width: 600px;
    position: absolute;
    right: 0px;
    top: 0px;
    transform: rotateZ(-30deg) translateX(180px) translateY(-140px);
    @media screen and (max-width:1720px) {
        max-width: 500px;
    }

    @media screen and (max-width:1020px){
        display: none;
    }
`
