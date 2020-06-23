import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.buttonPrimary};
    font-size: 1.15rem;
    line-height: 1.15rem;
    font-weight: normal;
`
const Description = styled.p`
    &:last-child {
        margin-bottom: 0;
    }
`
const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    padding: 1rem;
    margin-bottom: 1rem;
`

const Project = ({ work }) => <Card>
    <Title>{work.title}</Title>
    <Description>{work.description}</Description>
</Card>

export default Project