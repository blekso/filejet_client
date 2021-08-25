import React from "react";
import axios from "axios";
import Modal from "react-modal";
import Router from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    width: "26rem",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#app");
export default function File({ file, onFileDelete, state }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function RenderFileObject() {
    const objectToRender = Object.assign({}, file);
    objectToRender.file_data = "...";
    return <pre>{JSON.stringify(objectToRender, null, 2)}</pre>;
  }

  function downloadFile() {
    Router.push({
      pathname: "http://localhost:5000/api/files/download",
      query: {
        _id: "?_id=61224c89a4108d243838b26a",
        ownerId: "609eb51d2c72ab2a74c699df",
      },
    });

    /*axios({
      method: "GET",
      url: "http://localhost:5000/api/files/download",
      params: {
        _id: file._id,
        ownerId: state.user._id,
      },
    })
      .then((res) => toast.success("Success"))
      .catch((err) => toast.error("Error"));*/
  }

  function deleteFile() {
    axios({
      method: "delete",
      url: "http://localhost:5000/api/files",
      data: {
        _id: file._id,
      },
    })
      .then(
        (res) => toast.success("File deleted"),
        closeModal(),
        onFileDelete()
      )
      .catch((err) => toast.error("Error"));
  }
  return (
    <div>
      <div
        onClick={openModal}
        className="flex flex-col justify-center items-center hover:bg-gray-100 p-4 cursor-pointer"
      >
        <img src="/svg/file.svg" alt={file.name} className="w-20 h-20" />
        <p>{file.name}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="flex justify-between">
            <p>{file.name}</p>
            <p onClick={closeModal} className="cursor-pointer">
              X
            </p>
          </div>
          <div className="p-2 bg-gray-100 mt-4 overflow-scroll">
            <RenderFileObject />
          </div>
          <div className="mt-4">
            <a
              target="_blank"
              href={`http://localhost:5000/api/files/download?_id=${file._id}&ownerId=${state.user._id}`}
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r mr-4">
                Download
              </button>
            </a>

            <button
              className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
              onClick={deleteFile}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
