import React from "react"
import { PageHeader } from "../PageHeader"
import { ParticlesBanner } from "../ParticlesBanner"

const PageBanner = () => (
    <div className="w-screen h-[60vh] bg-black relative">
        <div
            className="h-full grid grid-rows-[auto_1fr]"
            style={{ background: 'url(/images/header-background.svg)' }}
        >
            <PageHeader hideLogo />
            <main className="h-full grid place-items-center">
                <div className="mb-[5%]">
                    <h4 className="text-7xl lg:text-8xl text-white">ProBoard</h4>
                    <span className="text-white opacity-70 text-xl border-l-2 pl-2 w-80 block">
                        Your project board collection
                    </span>
                </div>
            </main>
        </div>
        <ParticlesBanner />
    </div>
)

export default PageBanner