import { useEffect, useState } from 'react'
import studentImage from "./../assets/Students.png";
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { Link } from 'react-router';
import { useParams } from 'react-router';

function Edit() {

  const [students, setStudents] = useState({
    id: "",
    name: "",
    city: "",
  });

  const { userid } = useParams();

  const editStudents = async () => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/students/${userid}`, {
        id: students.id,
        name: students.name,
        city: students.city,
      });

      if (response.data.success) {
        setStudents({
          id: "",
          name: "",
          city: ""
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };
  const loadStudents = async () => {
    try {
      const response = await axios.get(`http://localhost:502/students/${userid}`);
      setStudents(response.data.data)
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  useEffect(() => {
    if (userid) {
      loadStudents();
    }
  }, [userid]);


  return (
    <div className="px-1 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 sm:pt-2">
        {/* Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center sm:mt-2">
          <img
            src={studentImage}
            alt="Student"
            className="w-full max-w-[500px] aspect-square object-cover rounded-md"
          />
        </div>

        {/* Form */}
        <div className="bg-white shadow-md rounded-lg w-full lg:w-1/3 p-8 mt-1 sm:mt-2">
          <h1 className="text-center font-bold text-2xl pb-6">
            Edit Student - {userid}
          </h1>

          <div className="flex flex-col space-y-6">
            <input
              type="text"
              placeholder="Enter id"
              value={students.id}
              onChange={(e) =>
                setStudents({ ...students, id: e.target.value })
              }
              className="w-full p-2 outline-none border-2 border-gray-300 rounded"
              disabled
            />

            <input
              type="text"
              placeholder="Enter name"
              value={students.name}
              onChange={(e) =>
                setStudents({ ...students, name: e.target.value })
              }
              className="w-full p-2 outline-none border-2 border-gray-300 rounded"
            />

            <input
              type="text"
              placeholder="Enter city"
              value={students.city}
              onChange={(e) =>
                setStudents({ ...students, city: e.target.value })
              }
              className="w-full p-2 outline-none border-2 border-gray-300 rounded"
            />

            <div className="text-center">
              <Link to="/">
                <button
                  className="bg-blue-300 mt-4 mb-2 py-2 px-6 rounded-sm cursor-pointer w-full sm:w-auto"
                  onClick={editStudents}
                >
                  Edit Student
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notifications */}
      <Toaster />
    </div>

  )
};

export default Edit
