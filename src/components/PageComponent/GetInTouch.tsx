// import InstagramEmbed from "../../utils/InstaEmbbed";

// function GetInTouch() {
//   return (
//     <div className="h-screen mt-10">
//       <div className="flex flex-col text-text-primary">
//         <div className="heading bg-text-secondary text-white py-2">
//           <h2 className="text-white text-center text-3xl leading-10">
//             Get In Touch
//           </h2>
//         </div>
//         <div className="events flex justify-around mt-10 mx-10"></div>
//       </div>
//     </div>
//   );
// }

// export default GetInTouch;

import React, { useState } from "react";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send email, show confirmation, etc.)
    console.log(formData);
    alert("Thank you for contacting us!");
  };

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: "url(src/assets/team-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="bg-text-secondary text-white py-2 text-center">
        <h2 className=" text-white text-center text-3xl leading-10">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-400">
          <i>
            We'd love to hear from you. Feel free to contact us for any
            inquiries!
          </i>
        </p>
      </div>

      <div className="md:flex justify-between">
        <div className="w-full md:w-1/2">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="shadow-md shadow-text-secondary p-8 rounded-lg space-y-6 flex flex-col justify-center"
          >
            <div>
              <label className="block text-lg font-semibold text-gray-800">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full  py-2 border-text-primary outline-none underline-text-primary"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-800">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-800">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows={4}
                placeholder="Write your message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary bg-text-secondary text-white rounded-lg font-semibold hover:bg-primary-dark"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className=" flex items-center justify-center mt-12 md:mt-0 md:w-1/3">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-semibold text-gray-800">
                Contact Information
              </h3>
              <p className="text-lg text-gray-600">
                Email:{" "}
                <a
                  href="mailto:info.iotrobotic@nepathyacollege.edu.np"
                  className="text-blue-600"
                >
                  info.iotrobotic@nepathyacollege.edu.np
                </a>
              </p>
              <p className="text-lg text-gray-600">
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/nepathyaroboticsclub"
                  className="text-blue-600"
                >
                  Nepathya IOT and Robotics Union
                </a>
              </p>
              <p className="text-lg text-gray-600">
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/nepathyaiotrobotics/
"
                  className="text-blue-600"
                >
                  Nepathya IOT and Robotics Union
                </a>
              </p>
              <p className="text-lg text-gray-600">
                Phone:{" "}
                <a href="tel:9867712849" className="text-blue-600">
                  9867712849
                </a>
              </p>
              <p className="text-lg text-gray-600">
                Phone:{" "}
                <a href="tel:9857043464" className="text-blue-600">
                  9857043464
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Location
              </h3>
              <p className="text-lg text-gray-600">
                Tilottama -05, Manigram, Butwal, Nepal
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-600"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-600"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-600"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-600"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
