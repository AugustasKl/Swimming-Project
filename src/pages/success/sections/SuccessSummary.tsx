import React from 'react'
import { answerReason } from 'store/users/selectors';
import { Container, PlanSwitcher, SectionWrapper, Typography } from 'components'
import { useSelector } from 'react-redux';

export const SuccessSummary:React.FC = () => {
    const userAnswerReason = useSelector(answerReason);
  return (
    <SectionWrapper>
        <Container>
            <Typography fontSize='fs20' fontWeight='fw600' pb='s40' textAlign='left'>Order summary</Typography>
        <PlanSwitcher answer={userAnswerReason}/>
        </Container>
    </SectionWrapper>
  )
}
