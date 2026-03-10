'use client'
import { useState } from "react"
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex justify-between sticky top-0 w-full h-10 items-center">
            <div>The Details</div>
            <div className="flex">
                <div>Contact me</div>
                <button className="flex w-5 justify-center" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "X" : "="}
                </button>
            </div>
        </div>
    )
}