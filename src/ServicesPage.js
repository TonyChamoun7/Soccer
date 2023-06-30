import React from "react";
import "./ServicesPage.css"; // Import CSS file for styling

function ServicesPage() {
  const services = [
    {
      name: "Shooting Practice",
      description: "Improve your shooting accuracy and technique",
      pricePerHour: "$50",
    },
    {
      name: "Dribbling Practice",
      description: "Enhance your ball control and dribbling skills",
      pricePerHour: "$40",
    },
    {
      name: "Passing Practice",
      description: "Master the art of precise passing and distribution",
      pricePerHour: "$40",
    },
    {
      name: "Set Piece Practice",
      description: "Learn effective strategies for set pieces (corners, free kicks)",
      pricePerHour: "$45",
    },
    {
      name: "Defending Practice",
      description: "Develop defensive skills, positioning, and tackling techniques",
      pricePerHour: "$40",
    },
    {
      name: "Goalie Practice",
      description: "Focus on goalkeeper-specific training and shot-stopping abilities",
      pricePerHour: "$45",
    },
  ];

  return (
    <div className="services-page-container">
      <h1>Training Sessions</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2 className="service-name">{service.name}</h2>
            <p className="service-description">{service.description}</p>
            <p className="service-price">Price per Hour: {service.pricePerHour}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
