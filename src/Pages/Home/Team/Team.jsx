import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./Team.css";
import TeamBox from "../../../Components/TeamBox/TeamBox";
import img1 from "../../../Assets/team/team1.png";
import img2 from "../../../Assets/team/team2.png";
import img3 from "../../../Assets/team/team3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faFilter } from "@fortawesome/free-solid-svg-icons";
function Team() {
  const data = [
    {
      name: "Heimdall",
      title: "Co-Founder/Developer/CEO",
      filter: ["Founders", "Executive", "Development", "Moderators"],
      img: img1,
      bio: "",
    },
    {
      name: "Preacher",
      title: "Co-Founder/Lead Developer",
      filter: ["Founders", "Development", "Moderators"],
      img: img2,
      bio: "",
    },
    {
      name: "0xDegenSigma",
      title: "COO/Engineering Manager",
      filter: ["Executive", "Development", "Moderators"],
      img: img3,
      bio: "Blockchain enthusiast with a passion for decentralization. HR specialist, tech driven & a below average gamer. ",
    },
    { name: "Sif", title: "", filter: ["Development"], img: img1, bio: "" },
    { name: "Forseti", title: "", filter: ["Development"], img: img1, bio: "" },
    { name: "Hodr", title: "", filter: ["Development"], img: img1, bio: "" },
    { name: "Vali", title: "", filter: ["Development"], img: img1, bio: "" },
    {
      name: "Mirmir",
      title: "Dev Ops",
      filter: ["Development"],
      img: img1,
      bio: "",
    },
    {
      name: "Padrino",
      title: "Technical PM",
      filter: ["Development"],
      img: img1,
      bio: "",
    },
    {
      name: "Seaclone",
      title: "Tester",
      filter: ["Development"],
      img: img1,
      bio: "",
    },
    {
      name: "OblivionJT",
      title: "Creative Director",
      filter: ["Design", "Moderators"],
      img: img1,
      bio: "20+ years in design & marketing for tech b2c/b2b. ???Leverage! :P???",
    },
    {
      name: "Wolf CVB",
      title: "",
      filter: ["Design"],
      img: img1,
      bio: `Film school graduate. 10 years experience in the film industry. Award winning film writer/director & art director signed to A-list production companies internationally. UK music video award nominee. Films streaming on Shorts TV (Prime). Latest script comminised by Academy Award winning studio. Shot with top brands inc: Nike, Adidas, AliBaba, Enterprise, UEFA, Randolph Sunglasses and more.
      ???Knowing is not enough. We must apply. Willing is not enough. We must do.??? - Bruce Lee`,
    },
    { name: "Dark Rabbit", title: "", filter: ["Design"], img: img1, bio: "" },
    {
      name: "Don P",
      title: "Business Developer/Product Manager",
      filter: ["Business", "Moderators"],
      img: img1,
      bio: `"If the Truth shall kill them, let them die." - Immanuel Kant`,
    },
    {
      name: "Kasparov",
      title: "",
      filter: ["Business"],
      img: img1,
      bio: "",
    },
    {
      name: "LOKI",
      title: "",
      filter: ["Community"],
      img: img1,
      bio: "proponent of transparency and ethics within the defi industry. Responsible for communication with community from the core team. There are no zero sum games.",
    },
    {
      name: "Yusuf",
      title: "",
      filter: ["Community"],
      img: img1,
      bio: "",
    },
    {
      name: "Xcalibur",
      title: "Discord & Mod Manager",
      filter: ["Community", "Moderators"],
      img: img1,
      bio: "Gaming/community leader since 1998.  Started my crypto journey in 2019 and went full time in 2020.",
    },
  ];
  const [filter, setFilter] = useState("All"); // filter prop
  const [filteredArray, setFilteredArray] = useState(data); //filtered array
  const [groupedArray, setGroupedArray] = useState(); // regrouped array
  const [openFilter, setOpenFilter] = useState(false); // open side filter mobile
  useEffect(() => {
    if (filter !== "All") {
      const filtered = data.filter((el) => el.filter.includes(filter)); // filtering data
      setFilteredArray(filtered);
    } else {
      setFilteredArray(data);
    }
  }, [filter]);

  useEffect(() => {
    //regrouping array into groups of multiple arrays in a single array (group of 6)
    let temp = [];
    let newArr = [];
    filteredArray.forEach((elem, idx) => {
      temp.push(elem);
      if (temp.length === 6 && idx !== 0) {
        newArr.push(temp);
        temp = [];
      }
    });
    if (temp.length > 0 && temp.length <= 6) {
      newArr.push(temp);
    }
    setGroupedArray(newArr);
  }, [filteredArray]);

  const filterHandler = (e) => {
    //filter prop handler
    const active = document.querySelector(".active-filter");
    const filterVar = e.target.dataset.filter;
    active.classList.remove("active-filter");
    e.target.classList.add("active-filter");
    setFilter(filterVar);
    setOpenFilter(false);
  };
  return (
    <div id="team" className="team">
      <div className="team-shadow-bottom"></div>
      <div className="team-shadow-center"></div>
      <h1 className="heading trajan">Team</h1>
      <div className="team-grid">
        <FontAwesomeIcon
          onClick={() => setOpenFilter(true)}
          className="mobile-filter filter-icon"
          icon={faFilter}
        />
        <div className={`left-filter ${openFilter ? "open-left-filter" : ""}`}>
          <FontAwesomeIcon
            onClick={() => setOpenFilter(false)}
            icon={faXmark}
            className={"mobile-filter"}
          />
          <p
            onClick={filterHandler}
            data-filter={"All"}
            className="kanit active-filter"
          >
            All
          </p>
          <p onClick={filterHandler} data-filter={"Founders"} className="kanit">
            Founders
          </p>
          <p
            onClick={filterHandler}
            data-filter={"Executive"}
            className="kanit"
          >
            Executive
          </p>
          <p
            onClick={filterHandler}
            data-filter={"Development"}
            className="kanit"
          >
            Development
          </p>
          <p onClick={filterHandler} data-filter={"Design"} className="kanit">
            Design
          </p>
          <p onClick={filterHandler} data-filter={"Business"} className="kanit">
            Business
          </p>
          <p
            onClick={filterHandler}
            data-filter={"Community"}
            className="kanit"
          >
            Community
          </p>
          <p
            onClick={filterHandler}
            data-filter={"Moderators"}
            className="kanit"
          >
            Moderators
          </p>
        </div>
        <div className="right-grid">
          <Splide
            options={{
              rewind: true,
              pagination: true,
              arrows: false,
              perPage: 1,
              perMove: 1,
              direction: "ltr",
              width: "100%",
              breakpoints: {
                722: {
                  direction: "ltr",
                },
              },
            }}
            aria-label="React Splide Example"
          >
            {groupedArray &&
              groupedArray.map((elem, idx) => {
                return (
                  <SplideSlide key={"slide-item" + idx}>
                    <div className="slide-grid">
                      {elem.map((el, idx2) => {
                        return (
                          <TeamBox
                            key={"grid" + idx + idx2}
                            name={el.name}
                            title={el.title}
                            img={el.img}
                            bio={el.bio}
                          />
                        );
                      })}
                    </div>
                  </SplideSlide>
                );
              })}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Team;
