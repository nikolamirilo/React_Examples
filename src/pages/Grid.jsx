import React from "react";
import { Grid1, Grid2, Structure } from "../components";

const Grid = () => {
  return (
    <div className="grid">
      <div
        className="d-flex justify-content-center align-items-center bg-primary"
        style={{ height: "92vh" }}
      >
        <Grid1 />
      </div>
      <div
        className="d-flex justify-content-center align-items-center bg-danger"
        style={{ height: "100vh" }}
      >
        <Grid2 />
      </div>
      {/* <div className="z-index">
        <h1>Lorem ipsum tamo vamo</h1>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
          alt="logo"
          width="auto"
          height="140"
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>
      </div> */}
      <Structure />
    </div>
  );
};

export default Grid;
