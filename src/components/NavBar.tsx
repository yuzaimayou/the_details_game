'use client'
import { useState } from "react"
import { clsx } from 'clsx'
import { twMerge } from "tailwind-merge"
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const navButtons = [
        { name: "Top Game", href: "#" },
        { name: "Category", href: "#" }
    ]
    return (
        <div className="flex justify-between sticky top-0 w-full h-15 z-50 items-center border-b md:overflow-hidden pl-4 md:px-4 box-border">
            <div>The Details</div>
            <div className={twMerge(clsx(
                `${isOpen ? "flex" : "hidden"}`,
                `md:flex  bg-black fixed inset-0 top-15 md:static`
            ))}>
                <div className={twMerge(clsx(
                    "justify-center m-5",
                    "flex-col h-fit items-start gap-2",
                    "md:flex md:flex-row md:bg-transparent md:text-white md:items-center md:gap-5"
                ))}>
                    {navButtons.map((item) => {
                        return (
                            <div key={item.name}>{item.name}</div>
                        )
                    })}
                </div>

            </div>
            <div className="flex h-10 items-center w-fit gap-2 justify-around ">
                <div className="flex items-center justify-center bg-white text-black w-30 h-full ">About me</div>
                <button
                    className="flex md:hidden w-10 items-center justify-center h-full cursor-pointer text-3xl"
                    onClick={() => setIsOpen(prev => !prev)}>
                    {isOpen ? "X" : "="}
                </button>
            </div>

        </div>
    )
}