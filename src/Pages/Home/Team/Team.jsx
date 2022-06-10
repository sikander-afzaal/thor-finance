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
    },
    {
      name: "Preacher",
      title: "Co-Founder/Lead Developer",
      filter: ["Founders", "Development", "Moderators"],
      img: img2,
    },
    {
      name: "0xDegenSigma",
      title: "COO/Engineering Manager",
      filter: ["Executive", "Development", "Moderators"],
      img: img3,
    },
    { name: "Sif", title: "", filter: ["Development"], img: img1 },
    { name: "Forseti", title: "", filter: ["Development"], img: img1 },
    { name: "Hodr", title: "", filter: ["Development"], img: img1 },
    { name: "Vali", title: "", filter: ["Development"], img: img1 },
    {
      name: "Mirmir (Dev Ops)",
      title: "",
      filter: ["Development"],
      img: img1,
    },
    {
      name: "Padrino (Technical PM)",
      title: "",
      filter: ["Development"],
      img: img1,
    },
    {
      name: "Seaclone (Tester)",
      title: "",
      filter: ["Development"],
      img: img1,
    },
    {
      name: "OblivionJT",
      title: "Creative Director",
      filter: ["Design", "Moderators"],
      img: img1,
    },
    { name: "Wolf CVB", title: "", filter: ["Design"], img: img1 },
    { name: "Dark Rabbit", title: "", filter: ["Design"], img: img1 },
    {
      name: "Don P",
      title: "Business Developer/Product Manager",
      filter: ["Business", "Moderators"],
      img: img1,
    },
    {
      name: "Kasparov",
      title: "",
      filter: ["Business"],
      img: img1,
    },
    {
      name: "Niloc",
      title: "",
      filter: ["Community"],
      img: img1,
    },
    {
      name: "Yusuf",
      title: "",
      filter: ["Community"],
      img: img1,
    },
    {
      name: "Xcalibur",
      title: "Discord & Mod Manager",
      filter: ["Community", "Moderators"],
      img: img1,
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
