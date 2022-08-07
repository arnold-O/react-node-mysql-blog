import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://127.0.0.1:5000/post/v1";

export default function Home() {
  const [listpost, setListPost] = useState([]);

  const fetchData = async () => {
    await axios.get(url).then((res) => {
      // console.log(res.data.newPost)
      setListPost(res.data.newPost);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="main-container-wrapper">
      <main className="home-section-wrapper">
        <div className="home-section-image-wrapper">
          <img
            src="https://media.istockphoto.com/photos/digital-background-with-movement-of-glowing-particles-complex-of-big-picture-id1367512718?b=1&k=20&m=1367512718&s=170667a&w=0&h=18Cl2Q5pUOuzBwuPsTroPfaeEEh_jDujpvUkcwH55ow="
            alt=""
          />
        </div>

        <div className="main-section-sidebar">
          <h3>Recent Post</h3>
          <div className="sidebar-card-items">
            <div className="sidebar-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="sidebar-description">
              <p>Lorem ipsum dolor sit amet, consectetur amaxime architecto.</p>
              <div className="btn-wrapper">
                <button className="btn-sidebar">Read More</button>
              </div>
            </div>
          </div>
          <div className="sidebar-card-items">
            <div className="sidebar-image-wrapper">
              <img
                src="https://media.istockphoto.com/photos/supervisor-at-a-car-workshop-checking-tablet-while-mechanic-works-at-picture-id1349412663?b=1&k=20&m=1349412663&s=170667a&w=0&h=TD-7CdmxsBrmWf5dFI2cBxJkUUBkegFOyOrNhubTisg="
                alt=""
              />
            </div>
            <div className="sidebar-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing eliveniet
                placeat provident maxime architecto.
              </p>
              <div className="btn-wrapper">
                <button className="btn-sidebar">Read More</button>
              </div>
            </div>
          </div>
          <div className="sidebar-card-items">
            <div className="sidebar-image-wrapper">
              <img
                src="https://media.istockphoto.com/photos/supervisor-at-a-car-workshop-checking-tablet-while-mechanic-works-at-picture-id1349412663?b=1&k=20&m=1349412663&s=170667a&w=0&h=TD-7CdmxsBrmWf5dFI2cBxJkUUBkegFOyOrNhubTisg="
                alt=""
              />
            </div>
            <div className="sidebar-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing eliveniet
                placeat provident maxime architecto.
              </p>
              <div className="btn-wrapper">
                <button className="btn-sidebar">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
    