'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@core-ui';

const purpose = ['Developer', 'Student', 'Recruiter', 'Employer'];

const WelcomePrompt = () => {
    const [showChild, setShowChild] = useState(false);
    const [selectedValue, setSelected] = useState('');

    // Wait until after client-side hydration to show
    useEffect(() => {

        const getCookie = (cname: string) => {
            const name = cname + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        if (!getCookie("visited")) {
            setShowChild(true);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (!showChild) {
        return null;
    }

    const handleChange = (option: any) => {
        setSelected(option.target.value);
    };

    const handleClick = () => {
        setShowChild(false)
        document.body.style.overflow = 'auto';
        document.cookie = "visited=true";
        document.cookie = `visitor_type=${selectedValue}`;
    }

    return (
        <dialog
            open={false}
            className="fixed top-0 h-full w-full z-50 bg-[rgba(21,21,21,0.5)] backdrop-blur-sm grid place-items-center"
        >
            <div className="bg-white w-[90%] md:w-[40%] md:max-w-[40%] pb-8 rounded-sm pt-20 p-4 shadow-md">
                <div className="grid justify-center text-center w-full px-4 mb-14">
                    <span className="text-2xl">Welcome to Proboard</span>
                    <span className="text-xl">We are glad you are here!</span>
                </div>
                <div>
                    <span className="my-2 text-sm block">
                        Unlock a better experience: Kindly specify your role. Your input
                        enhances our Proboard app for you!{' '}
                    </span>
                    <select
                        className="border-2 border-black h-12 w-full px-2 outline-none appearance-none"
                        value={selectedValue}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Select what describes you
                        </option>
                        {purpose.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-4 grid place-content-end">
                    <Button
                        className="bg-secondary !px-10 h-[44px] text-lg disabled:bg-white disabled:border disabled:hover:shadow-none disabled:text-gray-600"
                        disabled={Boolean(selectedValue === "")}
                        onClick={handleClick}
                    >
                        Okay
                    </Button>
                </div>
            </div>
        </dialog>
    );
};

export default WelcomePrompt;
