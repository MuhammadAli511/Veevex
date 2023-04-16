import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { logo } from "../assets";

const LandingPage = () => {
    const testimonials = [
        {
            id: 1,
            text: "I love Veevex! The customer service is amazing and their products are top-notch.",
            name: "John Doe",
            location: "Los Angeles, CA",
        },
        {
            id: 2,
            text: "I have been a loyal customer of Veevex for years. Their products never disappoint!",
            name: "Jane Smith",
            location: "New York, NY",
        },
        {
            id: 3,
            text: "I recently purchased a product from Veevex and I couldn't be happier with my experience. Highly recommend!",
            name: "Mike Johnson",
            location: "Chicago, IL",
        },
        {
            id: 4,
            text: "I love Veevex! The customer service is amazing and their products are top-notch.",
            name: "John Doe",
            location: "Los Angeles, CA",
        },
        {
            id: 5,
            text: "I have been a loyal customer of Veevex for years. Their products never disappoint!",
            name: "Jane Smith",
            location: "New York, NY",
        },
        {
            id: 6,
            text: "I recently purchased a product from Veevex and I couldn't be happier with my experience. Highly recommend!",
            name: "Mike Johnson",
            location: "Chicago, IL",
        },
    ];
    return (
        <div>
            <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-8 w-28 mr-2"
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/login" className="flex items-center text-sm font-semibold py-2 px-3 rounded border border-gray-900 text-gray-900">
                        Login
                    </Link>
                </div>
            </nav>
            <div className="mt-44 flex justify-center items-center flex-col overflow-y-hidden">
                <h1 className="text-4xl font-bold mb-8">Welcome to Veevex</h1>
                <p className="text-lg mb-8">
                    We offer a wide range of products to suit all your needs. From electronics to fashion, we've got it all.
                </p>
                <Link to="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Browse Products
                </Link>
                <div className="mt-8" style={{ overflow: "hidden" }}>
                    <h2 className="text-2xl font-bold my-5 text-center">What Our Customers Are Saying</h2>
                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={3}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={3000}
                        pauseOnHover={true}
                        className="grid grid-cols-1"
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white shadow-md p-4 rounded border border-gray-300">
                                <p className="text-lg mb-4">{testimonial.text}</p>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm">{testimonial.location}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
