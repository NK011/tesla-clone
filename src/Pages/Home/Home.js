import styled from "styled-components";
import Nav from "../../Components/Nav/Nav";
import Section from "../../Components/Section/Section";

function Home() {
    return (
        <Container>
            <Nav />
            <Section 
                backgorund='model-s.jpg'       title='Model S'
                des='Order Onlilne for Touchless Delivery'
                lbtn='Custom Order'
                rbtn='Existing Inventory'
                downArrow
             />
            <Section 
                backgorund='model-y.jpg' title='Model Y'
                des='Order Onlilne for Touchless Delivery'
                lbtn='Custom Order'
                rbtn='Existing Inventory'
            />
            <Section 
                backgorund='model-3.jpg' title='Model 3' 
                des='Order Onlilne for Touchless Delivery'    
                lbtn='Custom Order'
                rbtn='Existing Inventory'
            />
            <Section 
                backgorund='model-x.jpg' title='Model X'
                des='Order Onlilne for Touchless Delivery'
                lbtn='Custom Order'
                rbtn='Existing Inventory'
            />
            <Section 
                backgorund='solar-panel.jpg' title='Solar Panel'
                des='Lowest Cost Solar Panels in America'
                lbtn='Order Now'
                rbtn='Learn More'
            />
            <Section 
                backgorund='solar-roof.jpg' title='Solar Roof'
                des='Produce Clean Energy from Your Roof'
                lbtn='Order Now'
                rbtn='Learn More'
            />
            <Section 
                backgorund='accessories.jpg'
                title='Accessories'
                des=''
                lbtn='Shop Now'
            />
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;
