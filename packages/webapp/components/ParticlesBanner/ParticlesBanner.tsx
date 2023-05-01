import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBanner = () => {
    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);



    return (
        <Particles
            id="tsparticles"
            url="/particles/bg-1.json"
            init={particlesInit}
            loaded={undefined}
            height={"80vh"}
            width={"100%"}
            className="!w-screen !h-screen"
            canvasClassName="!w-screen !h-screen"
        />
    );
};

export default ParticlesBanner