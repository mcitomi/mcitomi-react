import { Container } from "react-bootstrap";

const barStyle = {
    backgroundImage: "url('/assets/chillguy.jpg')",
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image
    height: "60vh", // Example: Full viewport height
    width: "100vw", // Example: Full viewport width
}

export default () => {
    return <>
        <Container fluid style={barStyle} className="d-flex justify-content-center align-items-center">
            <h1 className="text-center text-white">Meow!</h1>
        </Container>
    </>
}