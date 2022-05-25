import React from 'react';
import { answerReason } from 'store/users/selectors';
import Confetti from 'react-confetti';
import { Container, FlexWrapper, Typography } from 'components';
import { Logo, UniversalImages } from 'assets/icons';
import { mobile, useQuery } from 'styles/theme';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';



export const SuccessSection:React.FC = () => {
const{isMobile }=useQuery()
const userAnswerReason = useSelector(answerReason);
console.log(userAnswerReason)
  return (
    <SuccessSectionsStyles>
        <Container>
            <FlexWrapper alignItems='center' flexDirection='column'>
                <Typography color='white' fontSize="fs40" fontWeight="fw700" paddingY={{_:'s48',desktop:'s48'}}  textAlign='center'>Thank you for your order</Typography>
                {isMobile? '':  <UniversalImages tag='complete'/>}
            </FlexWrapper>
                <Confetti numberOfPieces={30} width={isMobile? 480:2000} />
        </Container>
    </SuccessSectionsStyles>
  )
}

const SuccessSectionsStyles=styled(FlexWrapper)`
  width:100%;
  
  background: linear-gradient(128deg, #000f33 58%, #0747da 35%);
  
  @media ${mobile} {
    background: linear-gradient(128deg, #000f33 68.5%, #0747da 35%);  
  }
`

