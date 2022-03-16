import React from "react";
import { Card } from "../components";
import useFetch from "../hooks/useFetch";
import moment from "moment";

const Contact = () => {
  const { data = [], loading, error } = useFetch(process.env.REACT_APP_API);
  console.log(data);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className="contact container p-0 pt-5">
      <div className="row col-12">
        {data.data &&
          data.data.map((item) => {
            let date = moment(item.timestamp).subtract(6, "days").calendar();
            return (
              <Card
                image={item.media_url}
                name={item.username}
                description={item.caption}
                data={`Date: ${date}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Contact;
