import React from "react";
import axios from "axios";
import File from "./File";

export default function UserDashboard({ state }) {
  const initialState = {
    files: [],
  };
  const [data, setData] = React.useState(initialState);

  React.useEffect(async () => {
    await axios
      .get("http://localhost:5000/api/files", { ownerId: "mihael" })
      .then((res) => {
        setData({
          ...data,
          files: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="grid md:grid-cols-6 grid-cols-2 gap-8 p-12">
      {data.files.map((file) => (
        <File key={file._id} file={file} />
      ))}
    </div>
  );
}
