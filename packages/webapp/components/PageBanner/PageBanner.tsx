import React from "react"
import dynamic from "next/dynamic"

const PageHeader = dynamic(() => import("../PageHeader/PageHeader"), { ssr: false })
const ParticlesBanner = dynamic(() => import("../ParticlesBanner/ParticlesBanner"), { ssr: false })

const PageBanner = () => (
    <div className="w-screen min-h-[60vh] h-[60vh] bg-black relative">
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

export const PageBannerLoader = () => (
    <div className="min-h-[60vh] h-[60vh] animate-pulse bg-black" />
)

export default PageBanner