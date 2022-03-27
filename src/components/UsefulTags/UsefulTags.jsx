import React from "react";

const UsefulTags = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pera");
  };
  return (
    <div className="useful-tags">
      <select>
        <option value="Pera">Pera</option>
        <option value="Mika">Mika</option>
        <option value="Zika">Zika</option>
        <option value="Nikola">Nikola</option>
        <option value="Mara">Mara</option>
      </select>

      <p>
        Ne kaze se <del>neznam</del> vec <ins>ne znam</ins>
      </p>

      <meter min="0" max="100" low="40" high="90" optimum="70" value="30"></meter>
      <progress max="100" value="80"></progress>
      <details>
        <summary>Click me</summary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe unde sequi
        excepturi, explicabo, cumque incidunt eum fugit praesentium perferendis officiis
        voluptatibus fugiat placeat minus hic possimus repellendus dolor velit!
      </details>

      <label for="input-car-make">Choose a car:</label>
      <input list="car-makes" id="input-car-make" placeholder="Select car make" />

      <datalist id="car-makes">
        <option value="BMW"></option>
        <option value="Audi"></option>
        <option value="Merceds"></option>
        <option value="Fiat"></option>
        <option value="Opel"></option>
      </datalist>

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="checkbox" className="m-3" />
        <input type="color" />
        <input type="date" />
        <input type="email" />
        <input type="password" />
        <input type="file" />
        <input type="range" />
        <input type="time" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UsefulTags;
