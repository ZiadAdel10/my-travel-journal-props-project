import { IoLocationSharp } from "react-icons/io5";
import React from "react";
export default function Journal({ item }) {
  return (
    <div className="journal">
      <div className="journal--card">
        <img
          src={`${item.imageUrl}`}
          className="journal--img"
          alt="Mount Fuji"
        />
        <div className="journal--info">
          <div className="journal--location">
            <IoLocationSharp className="journal--location-icon" />
            <span className="journal--country">{item.location}</span>
            <a href={item.googleMapsUrl} className="journal--location-link">
              View on Google Maps
            </a>
          </div>
          <h1 className="journal--title">{item.title}</h1>
          <div className="journal--dates">
            <span>{item.startDate}</span>
            <span>-</span>
            <span>{item.endDate}</span>
          </div>
          <p className="journal--location-description">{item.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
