import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const HERO_IMAGES = [
    {
        src: "/images/carousel-images/holiday.png",
        alt: "Holiday Theme",
        headline: "BUON NATALE",
        subheadline: "La Prima's Holiday Blend returns",
        primaryCta: "Add to your Christmas List",
    },
    {
        src: "/images/carousel-images/beans.png",
        alt: "Beans pouring",
        headline: "La Prima Espresso Co",
        subheadline: "Coffee roaster, Caffès, commerical equipment sales",
        primaryCta: "Shop Now",
    },
    {

        src: "/images/carousel-images/coffee.png",
        alt: "Coffee cup",
        headlineLeft: "Visit our Caffès",
        locations: [
            { name: "The Strip", address: "205 21st Street" },
            { name: "Downtown", address: "1100 Smallman Street" },
            { name: "CMU", address: "Wean Hall & Gates Hall" },
            { name: "Oakland", address: "3400 Fifth Ave" },
        ],
        primaryButtonLeft: "Locations & Hours",

    },
]

export default function HeroCarousel() {
    return (
        <section className="relative w-full">
            <Carousel className="w-full">
                <CarouselContent>
                    {HERO_IMAGES.map((slide, index) => (
                        <CarouselItem key={index} className="w-full">
                            <Card className="border-0 rounded-none shadow-none py-0">
                                <CardContent className="relative flex h-screen w-full items-center justify-center">
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            fill
                                            priority={index === 0}
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Text + Buttons Overlay */}
                                    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-white">
                                        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-3" style={{ color: "#0076bf" }}>
                                            {slide.headline}
                                        </h2>
                                        <h2 className="text-3xl md:text-5xl font-bold uppercase flex w-full flex-col self-start text-left pl-25" style={{ color: "#0076bf" }}>
                                            {slide.headlineLeft}
                                        </h2>
                                        <p className="max-w-xl text-base md:text-lg lg:text-xl drop-shadow-md mb-6">
                                            {slide.subheadline}
                                        </p>
                                        {slide.locations && (
                                            <div className="flex w-full flex-col self-start text-left pl-25 space-y-2">
                                                {slide.locations.map((loc, i) => (
                                                    <div key={i}>
                                                        <p className="font-semibold text-lg uppercase" style={{ color: "#0076bf" }}>{loc.name}</p>
                                                        <p className="text-lg uppercase">{loc.address}</p>
                                                    </div>
                                                ))}
                                                {slide.primaryButtonLeft && (
                                                    <button className="inline-flex items-center p-3 text-sm font-medium self-start text-left"
                                                        style={{ backgroundColor: "#0076bf", color: "white", borderRadius: "4px" }}>
                                                        {slide.primaryButtonLeft}
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                        <div>
                                            {slide.primaryCta && (
                                                <button
                                                    className="inline-flex items-center p-5 text-sm font-medium"
                                                    style={{ backgroundColor: "#0076bf", color: "white", borderRadius: "4px" }}
                                                >
                                                    {slide.primaryCta}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 border-none bg-black/40 text-white hover:bg-black/60" />
                <CarouselNext className="right-4 top-1/2 -translate-y-1/2 border-none bg-black/40 text-white hover:bg-black/60" />
            </Carousel>
        </section>
    )
}
