// "use client";
// import React from "react";
// import "./styles.scss";
// import { FaQuoteLeft, FaStar } from "react-icons/fa";
// import LayoutContainer from "../LayoutContainer";

// const reviews = [
//   {
//     name: "John Doe",
//     role: "Homeowner",
//     avatar: "https://i.pravatar.cc/100?img=1",
//     review:
//       "The solar panel installation was quick and professional. My electricity bill has dropped significantly!",
//     rating: 5
//   },
//   {
//     name: "Sarah Khan",
//     role: "Business Owner",
//     avatar: "https://i.pravatar.cc/100?img=2",
//     review:
//       "They offered great consultation and helped us pick the best solution for our factory. Highly recommended!",
//     rating: 4
//   },
//   {
//     name: "Amit Sharma",
//     role: "Engineer",
//     avatar: "https://i.pravatar.cc/100?img=3",
//     review:
//       "Very happy with the maintenance services. The team is responsive and efficient.",
//     rating: 4
//   },
//   {
//     name: "Priya Verma",
//     role: "Entrepreneur",
//     avatar: "https://i.pravatar.cc/100?img=4",
//     review:
//       "Great service and very knowledgeable team. I appreciate their attention to detail.",
//     rating: 5
//   },
//   {
//     name: "Ravi Malhotra",
//     role: "Architect",
//     avatar: "https://i.pravatar.cc/100?img=5",
//     review:
//       "Impressed by their professionalism and quality of work. The team guided me through every step of the process.",
//     rating: 5
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Eco Blogger",
//     avatar: "https://i.pravatar.cc/100?img=6",
//     review:
//       "Loved their eco-friendly approach and detailed explanation. A fantastic experience from start to finish.",
//     rating: 4
//   }
// ];

// const renderStars = (count) =>
//   Array.from({ length: 5 }).map((_, i) => (
//     <FaStar key={i} className={`star ${i < count ? "filled" : ""}`} />
//   ));

// export default function CustomerReviews() {
//   return (
//     <LayoutContainer>
//       <div className="review-section">
//         <h2 className="review-title">What Our Customers Say</h2>
//         <div className="review-grid">
//           {reviews.map((r, i) => (
//             <div className="review-card" key={i}>
//               <div className="review-header">
//                 <div
//                   style={{ display: "flex", gap: "12px", alignItems: "center" }}
//                 >
//                   <img src={r.avatar} alt={r.name} className="avatar" />
//                   <div className="details">
//                     <div className="name">{r.name}</div>
//                     <div className="role">{r.role}</div>
//                   </div>
//                 </div>
//                 <div className="review-stars">{renderStars(r.rating)}</div>
//               </div>
//               {/* <FaQuoteLeft className="quote-icon" /> */}
//               <p className="review-text">"{r.review}"</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </LayoutContainer>
//   );
// }
"use client";
import React from "react";
import "./styles.scss";
import { FaStar } from "react-icons/fa";
import LayoutContainer from "../LayoutContainer";
import { IoPersonCircleSharp } from "react-icons/io5";

const achievements = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/100?img=1",
    testimonial:
      "I got these solar panels last year. Installation was easy and my electricity bill has gone down a lot. Totally worth it!",
    rating: 5
  },
  {
    name: "Rahul Mehta",
    role: "Environment Lover",
    avatar: "https://i.pravatar.cc/100?img=2",
    testimonial:
      "These solar panels help save money and are good for the planet too. I’m very happy with the choice.",
    rating: 5
  },
  {
    name: "Anjali Verma",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/100?img=3",
    testimonial:
      "Wasn't sure at first, but after using solar panels for a few months, I can see a big drop in my power bill. Very happy!",
    rating: 4
  },
  {
    name: "Karan Singh",
    role: "Working Professional",
    avatar: "https://i.pravatar.cc/100?img=4",
    testimonial:
      "Solar panels are working great. They are a bit costly, but you get that money back through savings on electricity.",
    rating: 4
  },
  {
    name: "Neha Iyer",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/100?img=5",
    testimonial:
      "We installed an FPC solar water heater recently. It heats water fast and works well even on cloudy days.",
    rating: 5
  },
  {
    name: "Sneha Joshi",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/100?img=6",
    testimonial:
      "We bought a geyser and a chimney together. The geyser gives hot water quickly and the chimney looks stylish in our kitchen.",
    rating: 4
  },
  {
    name: "Vikram Nair",
    role: "Apartment Resident",
    avatar: "https://i.pravatar.cc/100?img=7",
    testimonial:
      "Installed an ETC solar water heater in my flat. No issues so far and I get hot water every morning without fail.",
    rating: 4
  },
  {
    name: "Amit Reddy",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/100?img=8",
    testimonial:
      "The chimney we bought works really well. It removes all the cooking smoke quickly. Easy to clean too.",
    rating: 5
  }
];

const renderStars = (count) =>
  Array.from({ length: 5 }).map((_, i) => (
    <FaStar key={i} className={`star ${i < count ? "filled" : ""}`} />
  ));

export default function WhereCodersShine() {
  const rows = [achievements.slice(0, 4), achievements.slice(4, 8)];

  return (
    <LayoutContainer>
      <div className="coders-shine-section">
        <div className="sub-title">Testimonials</div>
        <div className="desc">
          Hear from our satisfied customers about their experience with our
          solar solutions.
        </div>
        <div className="rows-wrapper">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`card-row ${
                rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"
              }`}
            >
              <div className="marquee-track">
                {[...row, ...row].map((item, i) => (
                  <div className="card" key={i}>
                    <div className="card-header">
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          alignItems: "start"
                        }}
                      >
                        {/* <img
                          src={item.avatar}
                          alt={item.name}
                          className="avatar"
                        /> */}
                        <IoPersonCircleSharp
                          style={{ fontSize: "40px", color: "lightgray" }}
                        />
                        <div className="details">
                          <div className="name">{item.name}</div>
                          <div className="stars">
                            {renderStars(item.rating)}
                          </div>
                          {/* <div className="role">{item.role}</div> */}
                        </div>
                      </div>
                    </div>
                    <p className="testimonial">"{item.testimonial}"</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutContainer>
  );
}
