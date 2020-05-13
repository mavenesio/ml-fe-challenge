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

const Breadcrumb = ({pictures}) => {
    const [SelectedPicture, setSelectedPicture] = useState(null);
    useEffect( () => {if(pictures && pictures.length > 1) setSelectedPicture(pictures[0].id)}, [pictures]) 

    const renderThumbnailPictures = useCallback( (pictures) => {
        return pictures.map(picture => (
        <ThumbnailContainer key={picture.id} onClick={() => setSelectedPicture(picture.id)}>
            <img width='50px' height='auto' alt='' src={picture.url}/>
        </ThumbnailContainer>))
    }, []);
    
    return (
    <GalleryContainer>
        <GalleryFirstColumn>
            {renderThumbnailPictures(pictures)}
        </GalleryFirstColumn>
        <GallerySecondColumn>
            <img width='auto' height='450px' alt='' src={SelectedPicture ? pictures.find(pic => pic.id === SelectedPicture).url : ''}/>
        </GallerySecondColumn>
    </GalleryContainer>
    )
};

export default Breadcrumb;