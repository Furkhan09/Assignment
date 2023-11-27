//import "../";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { PlusCircle, Edit, Trash2 } from "react-feather";
import { Modal } from "react-responsive-modal";
function FormA() {
  const blankuser = {
    name: "",
    email: "",
    number: "",
  };

  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("Add");
  const [userdata, setUserdata] = useState([]);
  const [user, setUser] = useState(blankuser);
  const [editIndex, setEditIndex] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setAction("Add");
  };

  const addUser = () => {
    setUserdata([...userdata, user]);
    setUser(blankuser);
    onCloseModal();
  };

  const editUser = (index) => {
    console.log("index", index);
    setAction("Edit");
    const selectedUser = userdata.find((x, i) => i == index);
    setUser(selectedUser);
    setEditIndex(index);
    onOpenModal();
  };

  const updateUser = () => {
    const newusers = userdata.map((x, i) => {
      if (i === editIndex) {
        x = user;
      }
      return x;
    });
    setUserdata(newusers);
    setUser(blankuser);
    setEditIndex(null);
    onCloseModal();
  };

  const deleteUser = (index) => {
    const newusers = userdata.filter((x, i) => {
      return i !== index;
    });
    setUserdata(newusers);
  };

  return (
    <div className="font-inter text-base justify-center">
      <div className="bg-slate-300 rounded-xl p-10 md:w-auto">
        <div className="flex justify-center items-center ">
          <h1>CRUD APP</h1>
        </div>
        <div className="flex justify-end">
          <button
            className="border border-gray-300 hover:bg-neutral-500 px-2 py-2 mb-2 rounded text-base cursor-pointer text-blue-700 inline-flex items-center justify-center "
            onClick={onOpenModal}
          >
            <PlusCircle size={16}></PlusCircle>
            <span>Add</span>
          </button>
        </div>
        <hr />
        {/* <p>{JSON.stringify(userdata)}</p> */}
        <table className="border-collapse w-full table-auto s:table-fixed">
          <thead>
            <tr className="hover:bg-gray-300 bg-neutral-500">
              <th className="border px-4 py-2 px-4 py-3 text-left bg-gray-700 text-gray-300 uppercase text-xs">
                Name
              </th>
              <th className="border px-4 py-2 px-4 py-3 text-left bg-gray-700 text-gray-300 uppercase text-xs">
                Email
              </th>
              <th className="border px-4 py-2 px-4 py-3 text-left bg-gray-700 text-gray-300 uppercase text-xs">
                Contact Number
              </th>
              <th className="border px-4 py-2 px-4 py-3 text-left bg-gray-700 text-gray-300 uppercase text-xs">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userdata.length > 0 &&
              userdata.map((user, index) => {
                return (
                  <tr className="hover:bg-gray-300" key={user}>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.number}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="border border-gray-300 hover:bg-neutral-500 px-2 py-1 rounded text-base cursor-pointer text-blue-700 inline-flex items-center justify-center ml-2"
                        onClick={() => editUser(index)}
                      >
                        <Edit size={16}></Edit>
                        <span className="border border-gray-300 px-2 py-1 rounded text-base cursor-pointer text-blue-700 inline-flex items-center justify-center">
                          Edit
                        </span>
                      </button>
                      <button
                        className="border border-gray-300  hover:bg-neutral-500 px-2 py-1 rounded text-base cursor-pointer text-blue-700 inline-flex items-center justify-center ml-2"
                        onClick={() => deleteUser(index)}
                      >
                        <Trash2 size={16}></Trash2>
                        <span className="border border-gray-300 px-2 py-1 rounded text-base cursor-pointer text-blue-700 inline-flex items-center justify-center ml-1">
                          Delete
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <Modal open={open} onClose={onCloseModal} center>
          <h2>{action} User</h2>
          <div className="form">
            <label className="w-full mb-4" htmlFor="name">
              Name
            </label>
            <input
              className="w-full mb-4 mt-2 h-10 px-4 border rounded-md"
              id="name"
              type="name"
              name="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
            <label className="w-full mb-4" htmlFor="email">
              Email
            </label>
            <input
              className="w-full mb-4 mt-2 h-10 px-4 border rounded-md"
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
            <label className="w-full mb-4" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              className="w-full mb-4 mt-2 h-10 px-4 border rounded-md"
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={user.number}
              onChange={(e) => setUser({ ...user, number: e.target.value })}
            />
            {action == "Add" && (
              <button
                className="border border-gray-300 px-2 py-1 rounded text-base cursor-pointer text-blue-700 inline-flex items-center justify-center hover:bg-gray-800 hover:bg-neutral-500"
                onClick={() => addUser()}
              >
                Submit
              </button>
            )}
            {action == "Edit" && (
              <button
                className="border border-gray-300 hover:bg-neutral-500  px-2 py-1 rounded text-base cursor-pointer text-blue-700 inline-flex items-center justify-center"
                onClick={() => updateUser()}
              >
                Update
              </button>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default FormA;
