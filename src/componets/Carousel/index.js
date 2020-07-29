import React from 'react';
import { ExtraLink, Header, Title, Wrapper } from './styles';
import Slider, { SliderItem } from '../../componets/Slider';
import VideoCard from '../../componets/VideoCard';

const Carousel = ({category}) => {
    const { title, color, extraLink, videos } = category;
    return (
        <Wrapper>
            {title && (
                <Header>
                    <Title color={color}>{title}</Title>
                    {extraLink && (
                        <ExtraLink href={extraLink.url} target="_blank">{extraLink.text}</ExtraLink>
                    )}
                </Header>
            )}
            <Slider>
                {videos.map(video => (
                    <SliderItem key={video.title}>
                        <VideoCard 
                            title={video.title}
                            url={video.url}
                            color={color}
                        />
                    </SliderItem>
                ))}
            </Slider>
        </Wrapper>
    );
}

export default Carousel;