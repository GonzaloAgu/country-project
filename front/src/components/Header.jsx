import React from "react"
import { Navbar, Container } from "react-bootstrap"

export default function Header({ title }) {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/" className="hoverable">Home</Navbar.Brand>
                </Container>
            </Navbar>
            {title? <div className="mb-5 p-3 d-flex justify-content-center flex-column">
                <h1>{title}</h1>
            </div> : <div className="p-2"></div>}
        </>
    )
}

