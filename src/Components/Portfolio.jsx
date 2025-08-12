// Portfolio.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example portfolio data
const portfolioItems = [
    {
        img: "/assets/Images/portfolio-01.jpg",
        title: "ShopEasy Mobile",
        subtitle: "React Native E-commerce App",
    },
    {
        img: "/assets/Images/portfolio-02.jpg",
        title: "MediCare Pro",
        subtitle: "Hospital Management Software",
    },
    {
        img: "/assets/Images/portfolio-04.jpg",
        title: "EnterpriseOne ERP",
        subtitle: "Custom Business Management System",
    },
    {
        img: "/assets/Images/portfolio-03.jpg",
        title: "SecureBank Mobile",
        subtitle: "Flutter Banking Application",
    },
    {
        img: "/assets/Images/portfolio-04.jpg",
        title: "EnterpriseOne ERP",
        subtitle: "Custom Business Management System",
    },
];

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,   
        slidesToScroll: 1,
        responsive: [     
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <section id="portfolio" className="py-20 bg-gray-50 relative">
            {/* Decorative left image */}
            <img
                src="/assets/Images/portfolio-left-dec.png"
                alt=""
                className="absolute left-0 top-20 w-64 opacity-80 pointer-events-none"
            />

            <div className="container mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our <em className="text-blue-600 not-italic">Technology Solutions</em> &amp; Success{" "}
                        <span className="text-red-400">Stories</span>
                    </h2>
                    <span className="block text-red-400 mt-2">Our Work</span>
                </div>

                {/* Slider */}
                <Slider {...settings}>
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="px-4">
                            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-[600px] object-cover transform group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center text-white px-4">
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <span className="text-sm">{item.subtitle}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
};

export default Portfolio;
