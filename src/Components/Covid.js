import React, { useEffect, useState } from "react";
import "./Covid.css";
const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="main-container">
        <div className="heading">
          <h1 className="heading__title">LIVE TRACKER</h1>
          <p className="heading__credits">Covid-19 Updates</p>
        </div>
        <div className="cards">
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">OUR COUNTRY</h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                Pakistan<i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-2">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">TOTAL RECOVERD</h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                {data.recovered} <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-3">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">TOTAL CONFIRMED</h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                {data.confirmed} <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-4">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">TOTAL DEATHS</h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                {data.deaths} <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-5">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">TOTAL ACTIVES</h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                {data.active} <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">LAST UPDATE</h2>
            <p className="card__apply">
              <a className="card__link" href="#">
                {data.lastupdatedtime} <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid;
