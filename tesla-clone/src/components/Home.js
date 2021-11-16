import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                LftBtnTxt="Custom Order"
                RtBtnTxt="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                LftBtnTxt="Custom Order"
                RtBtnTxt="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                LftBtnTxt="Custom Order"
                RtBtnTxt="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                LftBtnTxt="Custom Order"
                RtBtnTxt="Existing Inventory"/>
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                LftBtnTxt="Order Now"
                RtBtnTxt="Learn More"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof
                "
                backgroundImg="solar-roof.jpg"
                LftBtnTxt="Order Now"
                RtBtnTxt="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                LftBtnTxt="Shop Now"
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
        height: 100vh;
`