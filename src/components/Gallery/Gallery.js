import React, {useCallback, useState, useEffect} from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
    display: flex;
    width: 100%;
    height:100%;
`;
const GalleryFirstColumn = styled.div`
    width: 120px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    overflow-y:scroll;
    @media (max-width: 667px) {
        width:100px;
    }
`;
const GallerySecondColumn = styled.div`
    flex: 1;
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    & > img{
        align-self:center;
    }
    @media (max-width: 667px) {
        justify-content:center;
        & > img{
            align-self:flex-start;
        }
    }
`;
const ThumbnailContainer = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    margin:16px;
    cursor: pointer;
    &:hover {
        border: 2px solid #3483FA;
    }
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

const PrimaryGalleryImage = styled.img`
    object-fit: contain;
    width:450px;
    height:450px;
    @media (max-width: 1050px) {
        width:350px;
        height:350px;
    }
    @media (max-width: 900px) {
        width:250px;
        height:250px;
    }
    @media (max-width: 500px) {
        width:150px;
        height:150px;
    }
`;
const SecondaryGalleryImage = styled.img`
    height:auto;
    width:50px;
    @media (max-width: 667px) {
        width:30px;
    }
`;

const Gallery = ({pictures}) => {
    const [SelectedPicture, setSelectedPicture] = useState(null);
    useEffect( () => {if(pictures && pictures.length > 1) setSelectedPicture(pictures[0].id)}, [pictures]) 

    const renderThumbnailPictures = useCallback( (pictures) => {
        return pictures.map(picture => (
        <ThumbnailContainer key={picture.id} onClick={() => setSelectedPicture(picture.id)}>
            <SecondaryGalleryImage alt='' src={picture.url}/>
        </ThumbnailContainer>))
    }, []);
    
    return (
    <GalleryContainer>
        <GalleryFirstColumn>
            {renderThumbnailPictures(pictures)}
        </GalleryFirstColumn>
        <GallerySecondColumn>
            <PrimaryGalleryImage alt='' src={SelectedPicture ? pictures.find(pic => pic.id === SelectedPicture).url : ''}/>
        </GallerySecondColumn>
    </GalleryContainer>
    )
};

export default Gallery;