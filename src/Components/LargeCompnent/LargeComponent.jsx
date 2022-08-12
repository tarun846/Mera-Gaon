/* eslint-disable jsx-a11y/iframe-has-title */

import React from "react";
import "./LargeComponent.css";
import project1 from "../../Assets/image/pablo1-min.jpg";
import project2 from "../../Assets/image/pablo2-min.jpg";
import project3 from "../../Assets/image/pablo3-min.jpg";
import project4 from "../../Assets/image/pablo4-min.jpg";
import quote from "../../Assets/image/quote.png";
import Line from "../Line/Line";
function LargeComponent() {
  console.log(project1);
  return (
    <div className="container">
      <div className="largeContainer">
        <div className="containerone">
          <h2>Lorem ipsum dolor sit.</h2>
          <p className="largetext">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            facilis accusantium nisi adipisci asperiores, dignissimos aut
            debitis, ab perferendis excepturi aliquid dicta soluta pariatur,
            doloribus quisquam cum eum. Laboriosam id iusto saepe. Explicabo
            quam sit nobis
          </p>
          <p className="smalltext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            cumque ab! Sapiente tempora temporibus numquam natus in quas veniam
            eveniet sed. Est laudantium ducimus praesentium, vero repellendus
            placeat eum magnam? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae, cumque ab! Sapiente tempora temporibus
            numquam natus in quas veniam eveniet sed. Est laudantium ducimus
            praesentium, vero repellendus placeat eum magnam?
          </p>

          <div className="Container_details">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              perspiciatis similique molestiae odio veritatis, optio repudiandae
              libero. Suscipit, dolores atque. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sunt perspiciatis similique
              molestiae odio veritatis, optio repudiandae libero. Suscipit,
              dolores atque.
            </p>
            <div className="quote_details">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                  perspiciatis similique molestiae odio veritatis, optio
                  repudiandae libero. Suscipit, dolores atque. Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Sunt perspiciatis
                  similique molestiae odio veritatis, optio repudiandae libero.
                  Suscipit, dolores atque. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Sunt perspiciatis similique
                  molestiae odio veritatis, optio repudiandae libero. Suscipit,
                  dolores atque. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Sunt perspiciatis similique molestiae odio
                  veritatis, optio repudiandae libero. Suscipit, dolores atque.
                </p>
              </div>
              <div className="quote">
                <img src={quote} alt="" />
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              perspiciatis similique molestiae odio veritatis, optio repudiandae
              libero. Suscipit, dolores atque. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sunt perspiciatis similique
              molestiae odio veritatis, optio repudiandae libero. Suscipit,
              dolores atque. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Sunt perspiciatis similique molestiae odio veritatis, optio
              repudiandae libero. Suscipit, dolores atque. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Sunt perspiciatis similique
              molestiae odio veritatis, optio repudiandae libero. Suscipit,
              dolores atque.
            </p>

            <div className="twoboxcontainer" >
              <Line text="More in this series" />

              <div className="detail">
                <div className="detailsimg">
                  <img src={project1} alt="" />
                </div>

                <div className="details_text">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi rem, in maxime voluptas voluptatem libero consequuntur
                    beatae molestias odio porro, nemo, nam quasi soluta non
                    quas? Magnam, veritatis?
                  </h5>
                </div>
              </div>

              <div className="detail">
                <div className="detailsimg">
                  <img src={project1} alt="" />
                </div>

                <div className="details_text">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <h5>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi rem, in maxime voluptas voluptatem libero consequuntur
                    beatae molestias odio porro, nemo, nam quasi soluta non
                    quas? Magnam, veritatis?
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="containertwo">
          <div className="Left-smallbox_container">
            <h3 className="center_text">submenu</h3>

            <div className="links">
              <li>Home</li>
              <li>Examples</li>
              <li>Contact</li>
              <li>About</li>
            </div>
          </div>

          <div
            className="Left-smallbox_container  two"
            style={{ marginTop: "1rem" }}
          >
            <div className="contact_box">
              <div
                className="bg-holder"
                style={{ backgroundImage: `url(${project2})` }}
              />
              <div className="details">
                <div className="name flex">
                  <h3> Name </h3>
                  <h4> lorem Ispum</h4>
                </div>
                <div className="phone flex  ">
                  <h3>Email</h3>
                  <h4> lorem@gmail.com</h4>
                </div>
                <div className="phone flex">
                  <h3> Phone </h3>
                  <h4> 9040511516</h4>
                </div>
              </div>
            </div>

            <div className="form">
              <h3 className="center_text"> Send me a message </h3>

              <form>
                <label htmlFor="fname">Subject</label>
                <br />
                <input type="text" id="fname" name="fname" />
                <br />
                <label htmlFor="w3review">Message</label>
                <br />
                <textarea id="w3review" name="w3review"  width="100%" />
                <br />
                <br />
                <button> Send </button>
              </form>
            </div>

            <div className="map">
              <h3 className="center_text"> Or meet me at the office </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.491788259623!2d114.10574142248285!3d22.37281050791818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8e5653f6687%3A0xf70b5dcd0169eab1!2sOne%20Midtown!5e0!3m2!1sen!2sin!4v1660190010106!5m2!1sen!2sin"
                height="200"
              />

              <div className="text">
                <h4>ONE MIDTOWN</h4>
                <h4>11 Hoi Shing Rd</h4>
                <h4>Tsuen Wan</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xyz">
        <Line text="Related Articles" />
        <div className="box_Container">
          <Smallbox />
        </div>
      </div>
    </div>
  );
}

function Smallbox() {
  const Projectscontent = [
    {
      id: 1,
      img: project1,
      title: "Lorem ispum",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ex. Ut facere velit unde nam? Laboriosam temporibus iusto ducimus, suscipit esse unde illum ea in mollitia? Id excepturi sequi a.",
    },
    {
      id: 2,
      img: project2,
      title: "Lorem ispum",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ex. Ut facere velit unde nam? Laboriosam temporibus iusto ducimus, suscipit esse unde illum ea in mollitia? Id excepturi sequi a.",
    },
    {
      id: 3,
      img: project3,
      title: "Lorem ispum",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ex. Ut facere velit unde nam? Laboriosam temporibus iusto ducimus, suscipit esse unde illum ea in mollitia? Id excepturi sequi a.",
    },
    {
      id: 4,
      img: project4,
      title: "Lorem ispum",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ex. Ut facere velit unde nam? Laboriosam temporibus iusto ducimus, suscipit esse unde illum ea in mollitia? Id excepturi sequi a.",
    },
    {
      id: 5,
      img: project1,
      title: "Lorem ispum",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ex. Ut facere velit unde nam? Laboriosam temporibus iusto ducimus, suscipit esse unde illum ea in mollitia? Id excepturi sequi a.",
    },
  ];

  const data = Projectscontent.map((e) => {
    return (
      <div className="smallbox_container" key={e.id}>
        <div className="img_container">
          <img src={e.img} alt="" />
        </div>
        <div className="text_Container">
          <h2>{e.title}</h2>
          <p> {e.text} </p>
        </div>
      </div>
    );
  });
  return <>{data}</>;
}

export default LargeComponent;
