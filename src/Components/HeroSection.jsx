import React from "react";
import Slider from "react-slick";
import "../CSS/HeroBanner.css"; // Import the before/after styles

const slides = [
    {
        title: "Welcome to TechMintLab",
        heading: <>Build <em>your digital presence</em> with <span>cutting-edge</span> solutions</>,
        text: "TechMintLab is a premier IT company specializing in mobile apps, website development, and desktop software solutions using modern technologies.",
        btnText: "Get Free Consultation",
        btnLink: "#",
        phone: "+91-7027944324"
    },
    {
        title: "Mobile App Development",
        heading: <>Create <em>stellar mobile apps</em> for <span>iOS & Android</span></>,
        text: "Our expert team builds high-performance mobile applications using Flutter, React Native, and native technologies to help you reach your customers anywhere.",
        btnText: "View Our Portfolio",
        btnLink: "#portfolio",
        phone: "+91-7027944324"
    },
    {
        title: "Web Development",
        heading: <>Build <em>high-converting</em> websites with <span>SEO optimization</span></>,
        text: "We design and develop responsive, user-friendly websites that rank higher on search engines and convert visitors into customers.",
        btnText: "Request a Quote",
        btnLink: "#contact",
        phone: "+91-9876543213"
    },
    {
        title: "Custom Software Development",
        heading: <>Transform <em>your ideas</em> into <span>powerful software</span></>,
        text: "We develop premium, scalable software solutions tailored to your business needs using React, Angular, Node.js, Python, and other modern frameworks.",
        btnText: "Explore Our Services",
        btnLink: "#services",
        phone: "+91-7027944324"
    }
];

export default function HeroBanner() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id="top" className="main-banner relative overflow-visible py-10 sm:py-16 md:py-20 xl:py-52">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 md:px-10 lg:px-20">

                {/* Slider + Text */}
                <div className="relative z-10 w-full">
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index} className="px-2 sm:px-4">
                                <div className="text-center md:text-left max-w-full">
                                    <h6 className="text-red-400 text-base sm:text-lg md:text-xl font-semibold">{slide.title}</h6>
                                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4">
                                        {slide.heading}
                                    </h2>
                                    <p className="text-gray-600 mb-6 text-sm sm:text-base">{slide.text}</p>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                                        <a
                                            href={slide.btnLink}
                                            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-4xl hover:bg-red-400 transition text-sm sm:text-base"
                                        >
                                            {slide.btnText}
                                        </a>
                                        <a
                                            href={`tel:${slide.phone}`}
                                            className="flex items-center gap-2 text-red-400 font-semibold text-sm sm:text-base"
                                        >
                                            📞 {slide.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Right Decorative Space (desktop only) */}
                <div className="hidden xl:block"></div>
            </div>
        </section>


    );
}
