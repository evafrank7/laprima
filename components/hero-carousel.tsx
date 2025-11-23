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

// TODO: Replace these with your actual hero images in /public/images
const HERO_IMAGES = [
    {
        src: "/images/hero-1.jpg",
        alt: "Freshly brewed espresso being poured into a cup",
        headline: "Small-Batch Roasted in Pittsburgh",
        subheadline: "Serving the city since 1988 with bold, carefully crafted coffee.",
    },
    {
        src: "/images/hero-2.jpg",
        alt: "Barista steaming milk behind the counter",
        headline: "Crafted by Baristas, Loved by Locals",
        subheadline: "Stop by for your daily ritual or linger with a perfectly pulled shot.",
    },
    {
        src: "/images/hero-3.jpg",
        alt: "Cozy cafe interior with people enjoying coffee",
        headline: "Your Neighborhood Coffee Institution",
        subheadline: "A warm space for good coffee, good work, and good conversation.",
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
                                <CardContent className="relative flex h-screen w-full items-center justify-center p-0">
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            fill
                                            priority={index === 0}
                                            className="object-cover"
                                        />
                                        {/* Dark overlay to make text readable */}
                                        <div className="absolute inset-0 bg-black/40" />
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
