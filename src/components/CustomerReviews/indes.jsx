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

const achievements = [
  {
    name: "Sarah Miller",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/100?img=1",
    testimonial:
      "I installed these solar panels last year, and the savings on my electricity bills have been incredible. The installation was smooth, and the panels are performing better than expected. Highly recommend for anyone looking to go green!",
    rating: 5
  },
  {
    name: "David Lee",
    role: "Environmental Enthusiast",
    avatar: "https://i.pravatar.cc/100?img=2",
    testimonial:
      "These solar panels have not only helped me reduce my carbon footprint but also significantly lowered my energy costs. The customer service was exceptional, and installation was seamless. A great investment for the future!",
    rating: 5
  },
  {
    name: "Emily Roberts",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/100?img=3",
    testimonial:
      "I was hesitant at first, but the energy savings and the ease of use of the solar panels have convinced me. The panels are durable, and I’ve noticed a drastic reduction in my utility bills. Worth every penny!",
    rating: 4
  },
  {
    name: "Michael Brown",
    role: "Tech Enthusiast",
    avatar: "https://i.pravatar.cc/100?img=4",
    testimonial:
      "After doing extensive research, I decided to go with these solar panels, and I haven’t been disappointed. They’re very efficient, and I’ve noticed a drop in my energy bills since installation. The only downside is that they’re a bit pricey initially.",
    rating: 4
  },
  {
    name: "Anna Thompson",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/100?img=5",
    testimonial:
      "We recently installed this chimney in our new house, and it has been fantastic. It works efficiently, looks great, and adds warmth to our living room. The installation was quick and hassle-free. Definitely a must-have for any home!",
    rating: 5
  },
  {
    name: "John Green",
    role: "Renovation Specialist",
    avatar: "https://i.pravatar.cc/100?img=6",
    testimonial:
      "I’ve installed several chimneys, but this one stands out. It’s powerful, easy to clean, and adds a beautiful touch to the living space. Our clients love it, and I highly recommend it for anyone upgrading their home heating system.",
    rating: 5
  },
  {
    name: "Sophia Carter",
    role: "Homeowner",
    avatar: "https://i.pravatar.cc/100?img=7",
    testimonial:
      "This chimney has been a game-changer for us. The heat it provides during the winter months is fantastic, and the installation process was pretty straightforward. The only issue was that it took a little longer to arrive than expected.",
    rating: 4
  },
  {
    name: "James Wilson",
    role: "Contractor",
    avatar: "https://i.pravatar.cc/100?img=8",
    testimonial:
      "I’ve recommended this chimney to many of my clients. It works efficiently and looks stylish. It’s also easy to maintain, which is a big plus for homeowners. A solid product overall!",
    rating: 4
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
                          // justifyContent: "start"
                        }}
                      >
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="avatar"
                        />
                        <div className="details">
                          <div className="name">{item.name}</div>
                          <div className="role">{item.role}</div>
                        </div>
                      </div>
                      <div className="stars">{renderStars(item.rating)}</div>
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
