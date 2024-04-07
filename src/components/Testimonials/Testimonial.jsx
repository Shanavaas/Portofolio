import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
<<<<<<< HEAD
        " As an administrator, I can seamlessly manage publications, customers, and holidays, and effortlessly generate monthly and weekly bills based on publication prices. The holiday feature ensures efficient scheduling for customers, while the rounds functionality streamlines delivery logistics. On the customer side, the interface is user-friendly, allowing customers to log in using the provided credentials. They can easily add publications, request holidays, and generate and pay bills. The email bill sending feature simplifies communication and billing processes."
=======
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
    },
    {
      img: profilePic2,
      review:
<<<<<<< HEAD
        "It's a comprehensive solution with features tailored for administrators, suppliers, and customers. As an administrator, I have full control over the inventory. I can easily add products and categories, such as fans, lights, or iron boxes, and manage their details like buying price, selling price, and stock quantity. The intuitive interface allows me to efficiently add products to the inventory and send them to client locations using generated challan slips.",
=======
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
    },
    {
      img: profilePic3,
      review:
<<<<<<< HEAD
        "On the customer side, the system offers a user-friendly interface for flight booking and management. Users can easily sign up and log in using their email credentials. They can search for available flights from Chennai to their desired destination, view flight details, and book tickets for either economy or business class. The seamless payment integration allows users to pay securely using credit or debit cards, with the system generating a unique PNR number for each booking.",
=======
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
>>>>>>> 54ba56411f326d2820ee1a56cff02587bab29297
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
