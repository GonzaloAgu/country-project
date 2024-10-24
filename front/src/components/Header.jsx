import React from "react"

export default function Header({title}){
    return (
        <div className="mb-5 p-3 d-flex justify-content-center flex-column">
            <h1>{title}</h1>
            <h3 className="text-secondary">Click on any country to know more about it!</h3>
        </div>
    )
}

