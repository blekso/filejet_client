import React from "react";
import Modal from "react-modal";

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
export default function Auth({ file }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function RenderFileObject() {
    if (file) {
      Object.keys(file).map((obj, i) => {
        return <div>{file[obj].name}</div>;
      });
    }
    return null;
  }

  return (
    <div>
      <div
        onClick={openModal}
        className="flex flex-col justify-center items-center hover:bg-gray-100 p-4 cursor-pointer"
      >
        <img src="/file.svg" alt={file.name} className="w-20 h-20" />
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
          <RenderFileObject />
          <div className="mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r mr-4">
              Download
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r">
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
