import React from "react";

interface TestimonialCardProps {
    name: string;
    role: string;
    avatarSeed: string;
    testimonial: string;
}

const TestimonialCard = ({
    name = "John Doe",
    role = "Home Chef",
    avatarSeed = "default",
    testimonial = "This app has changed my cooking experience!",
}: TestimonialCardProps) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">{name}</h4>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial}"</p>
        </div>
    );
};

export default TestimonialCard;
