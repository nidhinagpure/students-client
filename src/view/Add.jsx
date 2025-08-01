import { useState } from 'react'
import studentImage from "./../assets/Students.png";
import axios from 'axios';
import toast, {Toaster} from "react-hot-toast";
import { Link } from 'react-router';

function Add() {
    
    const [students, setStudents] = useState({
        id: "",
        name: "",
        city: "",
    });

    const addStudents = async () => {
        try {
        const response = await axios.post("http://localhost:502/students", {
            id:students.id,
            name:students.name,
            city:students.city,
        });
        
        if(response.data.success){
            setStudents({
                id:"",
                name:"",
                city:""
         });
            toast.success(response.data.message);
        } else{
            toast.error(response.data.message);
        };
    }catch(e){
        toast.error(e.response.data.message);
    }
};

 return (
        <div >
            <div className='flex flex-row justify-evenly pt-20'>
                <div>
                    <img className='w-[500px] h-[500px] ' src={studentImage} />
                </div>
                <div className='bg-white shadow-md rounded-lg w-1/4 pt-14  mx-10'>
                    <h1 className='text-center font-bold text-2xl  pb-6'>Add Students</h1>

                    <input type='text'
                        placeholder='Enter id'
                        value={students.id}
                        onChange={(e) => setStudents({ ...students, id: e.target.value })}
                        className='block mx-auto w-80 p-2 outline-none border-2 border-gray-300 text-black m-2'
                    />

                    <input type='text'
                        placeholder='Enter name'
                        value={students.name}
                        onChange={(e) => setStudents({ ...students, name: e.target.value })}
                        className='block mx-auto w-80 p-2 outline-none border-2 border-gray-300 mt-10'
                    />

                    <input type='text'
                        placeholder='Enter city'
                        value={students.city}
                        onChange={(e) => setStudents({ ...students, city: e.target.value })}
                        className='block mx-auto w-80 p-2 outline-none border-2 border-gray-300 mt-10' />

                   <Link to="/">
                    <button className='bg-blue-300 mt-10 py-2 px-10 block rounded-sm m-auto cursor-pointer'
                    onClick={addStudents}
                    >Add Students</button>
                   </Link>
                </div>
            </div>
         <Toaster/>
        </div>
    )
}

export default Add
