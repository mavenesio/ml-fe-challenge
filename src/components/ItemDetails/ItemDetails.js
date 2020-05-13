import React from 'react';
import styled from 'styled-components';
import Gallery from '../Gallery/Gallery';

const ItemDetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:white;
    border-radius:4px;
`;
const ItemBox = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:16px;
`;
const ItemDetailsDescription = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-top: 4rem;
    margin-bottom:16px;
`;

const ItemImageContainer = styled.div`
    width:1000px;
    height:500px;
`;
const ItemDetailsColumn = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding:1rem;
`;
const ItemSubTitle = styled.div`
    align-self:flex-start;
    margin-top:32px;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;

`;
const ItemTitle = styled.div`
    align-self:flex-start;
    margin-top:16px;
    font-size:24px;
    font-family: Arial, Helvetica, sans-serif;

`;
const ItemPrice = styled.div`
    align-self:flex-start;
    margin-top:32px;
    font-size:46px;
    font-family: Arial, Helvetica, sans-serif;
`;
const DescriptionTitle = styled.div`
    margin: 0px 0px 32px 32px;
    font-size:28px;
    font-family: Arial, Helvetica, sans-serif;
`;
const DescriptionText = styled.div`
    margin-bottom: 32px;
    padding: 16px;
    font-size:16px;
    font-family: Arial, Helvetica, sans-serif;
`;
const CustomButton = styled.button`
    background-color:#3483FA;
    color:white;
    border-radius:4px;
    margin-top: 32px;
    font-size:16px;
    height: 50px;
    width:100%;
    font-family: Arial, Helvetica, sans-serif;
    border:unset;
    cursor: pointer;
    &:focus {
        outline: unset;
    }
`;


const ItemDetails = ({details}) => {

    return (
        <div>
            {
                details && 
                <ItemDetailsContainer>
                    <ItemBox>
                        <ItemImageContainer>
                            <Gallery pictures={details.pictures}/>
                        </ItemImageContainer>
                        <ItemDetailsColumn>
                            <ItemSubTitle>{details.condition} - {`${details.sold_quantity} vendido${details.sold_quantity > 1 ? 's' : ''}`}</ItemSubTitle>
                            <ItemTitle>{details.title}</ItemTitle>
                            <ItemPrice>
                            {`${details.price.currency} ${details.price.amount.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")} `}    
                            </ItemPrice>
                            <CustomButton onClick={()=> alert("This is not more available!")}>Comprar</CustomButton>
                        </ItemDetailsColumn>
                    </ItemBox>
                    <ItemDetailsDescription>
                        <DescriptionTitle>Descripcion del producto</DescriptionTitle>
                        <DescriptionText>{details.description}</DescriptionText>
                    </ItemDetailsDescription>
                </ItemDetailsContainer>
            }
        </div>
    )
}

export default ItemDetails;