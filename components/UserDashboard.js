import React from "react";
import axios from "axios";
import File from "./File";
import InputFile from "./InputFile";

export default function UserDashboard({ state }) {
  const initialState = {
    files: [],
  };
  const [data, setData] = React.useState(initialState);

  function getData() {
    axios({
      method: "get",
      url: "http://localhost:5000/api/files",
      params: {
        ownerId: state.user._id,
      },
    })
      .then((res) => {
        setData({
          ...data,
          files: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logger() {
    console.log("onFileDelete");
  }

  React.useEffect(() => {
    console.log("_id: " + state.user._id);
    getData();
  }, []);

  return (
    <div className="grid md:grid-cols-6 grid-cols-2 gap-8 p-12">
      {data.files.map((file) => (
        <File key={file._id} file={file} onFileDelete={logger()} />
      ))}
      <InputFile />
    </div>
  );
}
