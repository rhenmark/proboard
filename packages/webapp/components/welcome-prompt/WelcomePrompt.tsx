'use client'

import React, { useEffect, useState } from "react"
import { Button } from "@proboard/ui";

const purpose = ["Developer", "Student", "Recruiter", "Employer"]

const WelcomePrompt = () => {
    const [showChild, setShowChild] = useState(false);
    const [selectedValue, setSelected] = useState("")

    // Wait until after client-side hydration to show
    useEffect(() => {
        setShowChild(true);
        // document.body.style.overflow = "hidden"
    }, []);

    if (!showChild) {
        // You can show some kind of placeholder UI here
        return null;
    }

    const handleChange = (option) => {
        setSelected(option.value)
    }

    return (
        <dialog open={false} className="fixed top-0 h-full w-full z-50 bg-[rgba(21,21,21,0.5)] grid place-items-center">
            <div className="bg-white w-[40%] max-w-[40%] min-h-[40%] rounded-sm p-4 shadow-md">
                <div className="grid justify-center text-center w-full px-4 mb-14">
                    <span className="text-2xl">Welcome to Proboard</span>
                    <span className="text-xl">We are glad you are here!</span>
                </div>
                <div>
                    <span className="my-2 text-sm block">Unlock a better experience: Kindly specify your role. Your input enhances our Proboard app for you! </span>
                    <select className="border-2 border-black h-12 w-full px-2 outline-none" value={selectedValue} onChange={handleChange}>
                        <option value="" disabled>Select what describes you</option>
                        {
                            purpose.map((item) => (
                                <option value={item} key={item} selected={selectedValue === item}>{item}</option>
                            ))
                        }

                    </select>
                </div>
                <div className="my-4 grid place-content-end">
                    <Button className="bg-primary !px-10 h-[44px] text-lg disabled:bg-white disabled:border disabled:hover:shadow-none disabled:text-gray-600" disabled={Boolean(selectedValue)} onClick={() => setShowChild(false)}>
                        Okay
                    </Button>
                </div>
            </div>
        </dialog>
    )
}

export default WelcomePrompt;