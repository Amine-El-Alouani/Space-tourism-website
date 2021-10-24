import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            Home
        </Container>
    )
}

export default Home

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: url("/home/background-home-desktop.jpg");
   background-repeat: no-repeat;
   background-size: cover;
`