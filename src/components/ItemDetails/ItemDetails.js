import React from 'react';
import styled from 'styled-components';

const ItemDetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:white;
`;
const ItemBox = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;
const ItemDetailsDescription = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const ItemImageContainer = styled.div`
`;
const ItemDetailsColumn = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
`;
const ItemSubTitle = styled.div`
    align-self:flex-start;
    margin-top:32px;
    font-size:14px;

`;
const ItemTitle = styled.div`
    align-self:flex-start;
    margin-top:16px;
    font-size:24px;

`;
const ItemPrice = styled.div`
    align-self:flex-start;
    margin-top:32px;
    font-size:46px;
`;
const DescriptionTitle = styled.div`
    margin: 0px 0px 32px 32px;
    font-size:28px;
`;
const DescriptionText = styled.div`
    margin-bottom: 32px;
    font-size:16px;
`;
const CustomButton = styled.button`
    background-color:#3483FA;
    color:white;
    border-radius:4px;
    margin-top: 32px;
    font-size:16px;
    height: 50px;
    width:100%;
    border:unset;
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
                            <img src={details.picture} alt='' width='600px' height='680px' />
                        </ItemImageContainer>
                        <ItemDetailsColumn>
                            <ItemSubTitle>Nuevo - 234 vendidos</ItemSubTitle>
                            <ItemTitle>{details.title}</ItemTitle>
                            <ItemPrice>
                            {`${details.price.currency} ${details.price.amount.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")} `}    
                            </ItemPrice>
                            <CustomButton>Comprar</CustomButton>
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