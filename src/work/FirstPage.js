import React, { useRef, useEffect } from 'react'
import { gsap, tweenMax, TimelineLite } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Typewriter from 'typewriter-effect';
import { Link, animateScroll as scroll} from 'react-scroll'

gsap.registerPlugin(ScrollTrigger)

function FirstPage() {

    //ref ref 
    const slidingOut1 = useRef(null);
    const slidingOut2 = useRef(null);
    const slidingOut3 = useRef(null);

    const bubbleTransition1 = useRef(null);

    const bubbleTransition2 = useRef(null);

    const bubbleTransition3 = useRef(null);


    const t2 = new TimelineLite({ delay: 0.8, repeat: -1 })

    //scroll trigger 
    const mercuryTitle = useRef(null);
    const mercuryText = useRef(null);

    const venusTitle = useRef(null);
    const venusText = useRef(null);

    const saturnTitle = useRef(null);
    const saturnText = useRef(null);
    const saturnImage = useRef(null);

    const jupiterTitle = useRef(null);
    const jupiterText = useRef(null);

    const marsTitle = useRef(null);
    const marsText = useRef(null);
    //scroll trigger 
  
    //ref ref 



    useEffect(() => {

        t2
            //in 
            .to(bubbleTransition1.current, 0.3, {
                y: 0, 
                opacity: 1,
            }, 1)

            //out 
            .to(bubbleTransition1.current, 0.3, {
                y: 50, 
                opacity: 0, 
            }, 5.5)
            
            .to(slidingOut1.current, 1.2, {
                x: -1000, 
                autoAlpha: 0, 
                backgroundColor: 'rgb(150, 150, 150)',
            }, 6)

            //in 
            .to(bubbleTransition2.current, 0.3, {
                y: 0, 
                opacity: 1,
            }, 6.1)

            //out 
            .to(bubbleTransition2.current, 0.3, {
                y: 50, 
                opacity: 0, 
            }, 11.5)

            .to(slidingOut2.current, 1.2, {
                x: -1000, 
                autoAlpha: 0, 
                backgroundColor: 'rgb(150, 150, 150)',
            }, 12)

            //in 
            .to(bubbleTransition3.current, 0.3, {
                y: 0, 
                opacity: 1, 
            }, 12.1)
            //out 
            .to(bubbleTransition3.current, 0.3, {
                y: 50, 
                opacity: 0, 
            }, 15.5)

            .to(slidingOut3.current, 0.5, {x: 0, autoAlpha: 1,}, 16)

            .to(slidingOut2.current, 0.75, {
                x: 0, 
                autoAlpha: 1,  
                backgroundColor: 'black',}, 16.1)

            .to(slidingOut1.current, 0.75, {
                x: 0, 
                autoAlpha: 1, 
                backgroundColor: 'black',}, 16.2);

            gsap.fromTo(mercuryTitle.current, 
                {
                    autoAlpha: 0}, {
                        duration: 1,
                        autoAlpha: 1, 
                        y: 30,
                        ease: 'none', 
                        scrollTrigger: { 
                            id: 'MercuryTitleID', 
                            trigger: mercuryTitle.current, 
                            start: 'top 75%', 
                            toggleActions: 'play none none reverse',   
                        } 
                    });
            
            gsap.fromTo(mercuryText.current, 
                {
                    autoAlpha: 0}, {
                        duration: 0.8,
                        autoAlpha: 1, 
                        x: -20, 
                        ease: 'none', 
                        scrollTrigger: { 
                            id: 'MercuryTextID', 
                            trigger: mercuryText.current, 
                            start: 'top 75%', 
                            toggleActions: 'play none none reverse',   
                        } 
                    });
            
            gsap.fromTo(venusTitle.current, 
                {
                    autoAlpha: 0}, {
                        duration: 1, 
                        autoAlpha: 1, 
                        y: 30, 
                        ease: 'none', 
                        scrollTrigger: {
                            id: 'VenusTitle',
                            trigger: venusTitle.current, 
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        }
                    });
            
            gsap.fromTo(venusText.current, 
                {
                    autoAlpha: 0}, {
                        duration: 0.8,
                        autoAlpha: 1, 
                        x: -20, 
                        ease: 'none',  
                        scrollTrigger: {
                            id: 'VenusText', 
                            trigger: venusText.current, 
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        }
                })

            gsap.fromTo(saturnTitle.current, 
                {
                    autoAlpha: 0}, {
                        duration: 1, 
                        autoAlpha: 1, 
                        y: 30, 
                        ease: 'none',
                        scrollTrigger: {
                            id: 'SaturnTitle', 
                            trigger: saturnTitle.current, 
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        }
                    })
            
            gsap.fromTo(saturnText.current, 
                {
                    autoAlpha: 0}, {
                        duration: 0.8,
                        autoAlpha: 1, 
                        x: -20, 
                        ease: 'none', 
                        scrollTrigger: {
                            id: 'SaturnText', 
                            trigger: saturnText.current, 
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        }
                    })

            gsap.fromTo(saturnImage.current, 
                {
                    autoAlpha: 0}, {
                        duration: 1, 
                        autoAlpha: 1, 
                        ease: 'none',
                        scrollTrigger: {
                            id: 'SaturnImage', 
                            trigger: saturnImage.current, 
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        }
                    })

            gsap.fromTo(jupiterTitle.current, 
                {
                    autoAlpha: 0}, {
                        duration: 1, 
                        autoAlpha: 1, 
                        y: 30,
                         ease: 'none',
                        scrollTrigger: {
                            id: 'JupiterTitle', 
                            trigger: jupiterTitle.current, 
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        }
                    })
    
            gsap.fromTo(jupiterText.current, 
                {
                    autoAlpha: 0}, {
                        duration: 0.8,
                        autoAlpha: 1, 
                        x: -20, 
                        ease: 'none', 
                        scrollTrigger: {
                            id: 'JupiterText', 
                            trigger: jupiterText.current, 
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        }
                    })

            gsap.fromTo(marsTitle.current, 
                {
                    autoAlpha: 0}, {
                        duration: 1, 
                        autoAlpha: 1, 
                        y: 30,
                         ease: 'none',
                        scrollTrigger: {
                            id: 'MarsTitleID', 
                            trigger: marsTitle.current, 
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        }
                    })
            
            gsap.fromTo(marsText.current, 
                {
                    autoAlpha: 0}, {
                        duration: 0.8,
                        autoAlpha: 1, 
                        x: -20, 
                        ease: 'none', 
                        scrollTrigger: {
                            id: 'MarsTextID', 
                            trigger: marsText.current, 
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        }
                    })
    }, [])        

    return (
        <div className="App">

            {/*<nav>
                nav
            </nav>*/}

            <div className="title-container">
                <div className="black-background"></div>
                <div className="inside-title-container">
                    
                    <div className="inside-title">
                            <Typewriter
                            onInit={(typewriter) => {
                                var count = 0;
                                while (count <= 50) {
                                    typewriter.typeString('The Solar System')
                                    .pauseFor(1300)
                                    .deleteAll()

                                    typewriter.typeString('Astronomy')
                                    .pauseFor(1300)
                                    .deleteAll()

                                    typewriter.typeString('Astrology')
                                    .pauseFor(1300)
                                    .deleteAll()

                                    typewriter.typeString('Cosmology')
                                    .pauseFor(1300)
                                    .deleteAll('')

                                    typewriter.typeString('Nebula')
                                    .pauseFor(1300)
                                    .deleteAll('')

                                    .start();
                                    count ++;
                                }
                                
                            }}
                          />
                    </div>
                </div>
            </div>
            
            <div className="sliding-big-boi">
                
                    
                    <div className="sliding-container1" ref={slidingOut1}>
                    
                        <div className="sliding-top-content-container"  >
                        
                            <div className="left-sliding-content" >

                                <div className="para">
                                    Mars is the fourth planet from the Sun and the second-smallest 
                                    planet in the Solar System, being larger than only Mercury. In 
                                    English, Mars carries the name of the Roman god of war and is 
                                    often referred to as the "Red Planet".
                                </div>

                                <Link activeClass="active" 
                                    to={'marsID'}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={900} >
                                        <button className="explore-button">Explore Mars</button>
                                    </Link>

                            </div>
                            <div className="right-sliding-content">
                                <img alt="" src="https://cdn.pixabay.com/photo/2011/12/13/14/30/mars-11012__340.jpg"/>
                            </div>
                        </div>

                        <div className="sliding-bottom-content-container">
                            <div className="sliding-bottom-content" ref={bubbleTransition1} style={{y: 50, opacity: 0}}>
                                <div className="bubble-button" style={{backgroundColor: 'rgb(20, 147, 231)'}}></div>
                                <div className="bubble-button"></div>
                                <div className="bubble-button"></div>
                            </div>
                        </div>
                    </div>
                    
                    

                    <div className="sliding-container2" ref={slidingOut2}>
                    
                        <div className="sliding-top-content-container" >
                            
                            <div className="left-sliding-content">

                                <div className="para">
                                    Jupiter is the fifth planet from the Sun and the largest in the Solar
                                    System. It is a gas giant with a mass one-thousandth that of the Sun,
                                    but two-and-a-half times that of all the other planets in the Solar
                                    System combined. 
                                </div>

                                <Link activeClass="active"
                                    to={'jupiterID'}
                                    spy={true}
                                    smooth={true}
                                    offest={0}
                                    duration={900}>
                                        <button className="explore-button">Explore Jupiter</button>
                                </Link>

                            </div>
                            <div className="right-sliding-content">
                                <img className="jupiter-img" alt="" src="data:image/jpeg;base64,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"/>
                            </div>
                        </div>

                        <div className="sliding-bottom-content-container">
                            <div className="sliding-bottom-content" ref={bubbleTransition2} style={{y: 50, opacity: 0}}>
                                <div className="bubble-button"></div>
                                <div className="bubble-button" style={{backgroundColor: 'rgb(20, 147, 231)'}}></div>
                                <div className="bubble-button"></div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="sliding-container3" ref={slidingOut3}>

                        <div className="sliding-top-content-container" >
                            
                            <div className="left-sliding-content">

                                <div className="para">
                                    Venus is the second planet from the Sun. It is named after the Roman goddess
                                    of love and beauty. As the second-brightest natural object in the night sky
                                    after the Moon, Venus can cast shadows and can be, on rare occasion, visible
                                    to the naked eye in broad daylight.
                                </div>

                                <Link activeClass="active"
                                    to={'venusID'}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={900}>
                                        <button className="explore-button">Explore Venus</button>
                                </Link>

                            </div>
                            <div className="right-sliding-content">
                                <img className="venus-img" alt="" src="data:image/jpeg;base64,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"/>
                            </div>
                        </div>

                        <div className="sliding-bottom-content-container">
                            <div className="sliding-bottom-content" ref={bubbleTransition3} style={{y: 50, opacity: 0}}>
                                <div className="bubble-button"></div>
                                <div className="bubble-button"></div>
                                <div className="bubble-button" style={{backgroundColor: 'rgb(20, 147, 231)'}}></div>
                            </div>
                        </div>  
                    </div>

                    
                
                
            </div>

            <div className="paragraph-container">

                <div className="top-border"></div>

                <div className="inside-text-container">
                    <div className="text-title" ref={mercuryTitle} id="MercuryTitleID">Mercury</div>
                    <div className="act-text" ref={mercuryText} id="MercuryTextID">
                        The first planet closest to the Sun is Mercury. Mercury is the smallest 
                        planet in the Solor System now that Pluto is gone. It is named after the 
                        Greek god Hermes, translated into Latin Mercurius Mercury, god of commerce, 
                        messenger of the gods, mediator between gods and mortals. Mercury appears to 
                        have a solid silicate crust and mantle overlying a solid, iron sulfide outer
                        core layer, a deeper liquid core layer, and a solid inner core. Mercury is 
                        one of four terrestrial planets in the Solar System, and is a rocky body 
                        like Earth. It is the smallest planet in the Solar System, with an equatorial
                        radius of 2,439.7 kilometres (1,516.0 mi). Mercury's density can be used to 
                        infer details of its inner structure. Although Earth's high density results
                        appreciably from gravitational compression, particularly at the core, Mercury
                        is much smaller and its inner regions are not as compressed.
                    </div>
                </div>

                <div className="inside-text-container" id="venusID">
                    <div className="text-title" ref={venusTitle} id="VenusTitleID">Venus</div>
                    <div className="act-text" ref={venusText} id="VenusTextID">
                        Venus is the second planet from the Sun. It is named after the Roman goddess of love 
                        and beauty. As the second-brightest natural object in the night sky after the Moon, 
                        Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad 
                        daylight. Venus lies within Earth's orbit, and so never appears to venture far
                        from the Sun, either setting in the west just after dusk or rising in the east a bit 
                        before dawn. Venus orbits the Sun every 224.7 Earth days. Venus is one of the four terrestrial planets in the Solar System, meaning that it is a rocky body like Earth.
                        It is similar to Earth in size and mass, and is often described as Earth's "sister"
                        or "twin". The diameter of Venus is 12,103.6 km (7,520.8 mi)—only 638.4 km 
                        less than Earth's—and its mass is 81.5% of Earth's. Conditions on the Venusian 
                        surface differ radically from those on Earth because its dense atmosphere is 
                        96.5% carbon dioxide, with most of the remaining 3.5% being nitrogen. 
                    </div>
                </div>

                <div className="inside-text-container">
                    <div className="text-title" ref={saturnTitle} id="SaturnTitleID">Saturn</div>
                        <div className="text-image-container" >
                            <div className="text-in-text" ref={saturnText} id="SaturnTextID">
                                Saturn is the sixth planet from the Sun and the second-largest in the Solar System,
                                after Jupiter. It is a gas giant with an average radius of about nine times that of
                                Earth. It only has one-eighth the average density of Earth; however, with its larger
                                volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of
                                wealth and agriculture; its astronomical symbol represents the god's sickle. Saturn 
                                is a gas giant because it is predominantly composed of hydrogen and helium. It lacks 
                                a definite surface, though it may have a solid core. Saturn's rotation causes it 
                                to have the shape of an oblate spheroid; that is, it is flattened at the poles and 
                                bulges at its equator. Its equatorial and polar radii differ by almost 10%: 60,268 km 
                                versus 54,364 km. Jupiter, Uranus, and Neptune, the other giant planets in the Solar
                                System, are also oblate but to a lesser extent.
                            </div>
                        <div className="image-in-image">
                            <img ref={saturnImage} id="SaturnImageID" className="text-image" alt="" src="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                        </div>
                    </div>
                    
                </div>

                <div className="inside-text-container" id="jupiterID">
                    <div className="text-title" ref={jupiterTitle} id="JupiterTitleID">Jupiter</div>
                    <div className="act-text" ref={jupiterText} id="JupiterTextID">
                        Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
                        It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-
                        half times that of all the other planets in the Solar System combined. Jupiter
                        is one of the brightest objects visible to the naked eye in the night sky, 
                        and has been known to ancient civilizations since before recorded history. 
                        It is named after the Roman god Jupiter. Jupiter is primarily composed of 
                        hydrogen with a quarter of its mass being helium, though helium comprises 
                        only about a tenth of the number of molecules. It may also have a rocky core
                        of heavier elements, but like the other giant planets, Jupiter lacks a 
                        well-defined solid surface. Because of its rapid rotation, the planet's shape
                        is that of an oblate spheroid (it has a slight but noticeable bulge around 
                        the equator). The outer atmosphere is visibly segregated into several bands
                        at different latitudes, resulting in turbulence and storms along their 
                        interacting boundaries.
                    </div>
                </div>

                <div className="inside-text-container" id="marsID">
                    <div className="text-title" ref={marsTitle} id="MarsTitleID">Mars</div>
                    <div className="act-text" ref={marsText} id="MarsTextID">
                        Mars is the fourth planet from the Sun and the second-smallest planet in the 
                        Solar System, being larger than only Mercury. In English, Mars carries the name
                        of the Roman god of war and is often referred to as the "Red Planet". The latter
                        refers to the effect of the iron oxide prevalent on Mars's surface, which gives
                        it a reddish appearance distinctive among the astronomical bodies visible to 
                        the naked eye. Mars is a terrestrial planet with a thin atmosphere, with 
                        surface features reminiscent of the impact craters of the Moon and the valleys,
                        deserts and polar ice caps of Earth.The days and seasons are comparable to 
                        those of Earth, because the rotational period as well as the tilt of the 
                        rotational axis relative to the ecliptic plane are similar. Mars is the site of 
                        Olympus Mons, the largest volcano and highest known mountain on any planet in the 
                        Solar System, and of Valles Marineris, one of the largest canyons in the Solar System.
                        The smooth Borealis basin in the northern hemisphere covers 40% of the planet and 
                        may be a giant impact feature. In English, the planet is named for the Roman god 
                        of war, an association made because of its red color, which suggests blood.
                    </div>
                </div>

                <div className="bottom-border"></div>

                <div className="bottom-nav-container"></div>

            </div>

        </div>
    )
}

export default FirstPage
