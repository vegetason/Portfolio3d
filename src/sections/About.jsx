import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState, useEffect, useRef } from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const [globeReady, setGlobeReady] = useState(false);
    const globeRef = useRef();
    const handleCopy = () => {
        navigator.clipboard.writeText("irakozepaulin12@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setGlobeReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (globeRef.current && globeReady) {
            const globe = globeRef.current;

            const setupAutoRotation = () => {
                try {
                    globe.pointOfView({ altitude: 2.5 });

                    const controls = globe.controls();
                    if (controls) {
                        controls.autoRotate = true;
                        controls.autoRotateSpeed = 1.0;
                    }
                } catch (error) {
                    console.log("Auto-rotation setup error:", error);
                    setTimeout(setupAutoRotation, 500);
                }
            };

            const timer = setTimeout(setupAutoRotation, 200);
            return () => clearTimeout(timer);
        }
    }, [globeReady]);
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid1.png"
                            alt="grid-1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Hi I'm Paulin</p>
                            <p className="grid-subtext">
                                Full-stack developer skilled in React, Node.js, SQL, 
                                and Next.js, delivering clean UIs and dependable backends.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid2.png"
                            alt="grid-2"
                            className="w-full sm:w-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in javascript/typescript with a focus on react and
                                next.js ecosystems
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            {globeReady && (
                                <Globe
                                    ref={globeRef}
                                    key={`globe-${Date.now()}`}
                                    height={326}
                                    width={326}
                                    backgroundColor="rgba(0,0,0,0)"
                                    backgroundImageOpacity={0.5}
                                    showAtmosphere
                                    showGraticules
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    atmosphereColor="lightblue"
                                    atmosphereAltitude={0.1}
                                    onGlobeReady={() => {
                                        console.log("Globe is ready");
                                    }}
                                    animateIn={false}
                                />
                            )}
                            {!globeReady && (
                                <div className="w-[326px] h-[326px] flex items-center justify-center text-white/50">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white/50"></div>
                                </div>
                            )}
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely across most timezones.
                            </p>
                            <p className="grid-subtext">
                                I am based in Rwanda, with remote work available.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid3.png"
                            alt="grid-3"
                            className="w-full sm:[266px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Coding
                                isn't just my profession - it is my pasion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                                    alt="copy"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    irakozepaulin12@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
