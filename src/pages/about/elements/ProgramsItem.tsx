import React from "react";
import { ClassesProps } from "constants/swimmingClasses";
import { FlexWrapper, Image, Typography } from "components";
import styled from "styled-components/macro";
import { tablet, theme, useQuery } from "styles/theme";
import { TagElement } from "components/tag/TagElement";

export const ProgramsItem: React.FC<ClassesProps> = ({
  lessonCount,
  message,
  price,
  status,
  tag,
  title
}) => {
  const { isTablet } = useQuery();
  return (
    <ProgramStyles>
      <TagElement status={status} />

      <FlexWrapper flexDirection="column" gap="0.5rem">
        <Image src={tag} alt={tag} width="21rem" />
        <Typography fontSize="fs24" fontWeight="fw700" paddingTop="s32">
          {title}
        </Typography>
        <FlexWrapper alignItems="center" gap="0.25rem" justifyContent="center">
          <Typography color="blue" fontSize="fs24" fontWeight="fw900">
            ${price}
          </Typography>
          /Person
        </FlexWrapper>
      </FlexWrapper>

      <Typography paddingX="s16">{message}</Typography>

      <FlexWrapper
        alignItems="center"
        borderTop={`1px solid ${theme.colors.radioColor}`}
        gap="0.5rem"
        justifyContent="center"
        mt="s24"
        pt="s8"
      >
        {!isTablet && <Image src="practice" alt="practice" width="0.75rem" />}
        <Typography fontSize="fs20" fontWeight="fw500">
          {lessonCount} Practices
        </Typography>
      </FlexWrapper>
      
    </ProgramStyles>
  );
};

const ProgramStyles = styled.li`
  position: relative;

  max-height: 27.5rem;
  width: 21rem;

  padding: 3rem 0;

  background: ${theme.backgrounds.card};
  border-radius: ${theme.radii.r10};
  list-style: none;
  text-align: center;

  img {
    margin-top: -4.3rem;
  }

  @media ${tablet} {
    margin: 0 auto;
  }
`;
