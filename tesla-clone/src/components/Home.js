import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section />
        </Container>
    )
}

export default Home


const Container = styled.div`
        height: 100vh;
        font-size: 2.5vh;
        color: (255,0,0);
`