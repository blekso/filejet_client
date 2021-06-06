import React from "react";

export default function InputFile() {
  const [selectedFile, setSelectedFile] = React.useState([]);

  return (
    <label
      htmlFor="fileInput"
      className="flex flex-col justify-center items-center hover:bg-gray-100 p-4 cursor-pointer"
    >
      <img src="/svg/plus.svg" alt="file" className="w-20 h-20" />
      <input
        className="hidden"
        id="fileInput"
        type="file"
        value={selectedFile}
        onChange={(e) => setSelectedFile([...selectedFile, e.target.files[0]])}
      />
    </label>
  );
}
