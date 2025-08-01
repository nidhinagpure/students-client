import deleteimg from "./../assets/delete.png";
import editimg from "./../assets/edit.png";
import axios from "axios";
import {Link} from "react-router"
import toast, {Toaster}from 'react-hot-toast';


function Studentcard({ name, city, id,loadStudents }) {
    
    const deleteStudents = async()=>{
        const response = await axios.delete(`https://students-server-ut73.onrender.com//students/${id}`);
        if(response.data.success){
            toast.success(response.data.message);
             loadStudents();
        }else{
            toast.error(response.data.message);
        }
    } 
    return (
        <div>
        <div className='border-2 border-gray-400 p-4 m-4 mt-4 rounder-md shadow-md relative'>
            <div>
                <h1 className='text-xl font-bold'> {`id:${id}) ${name}`}</h1>
                <p>{city}</p> 
                <img
                 className='w-8 h-8  top-1 right-5 cursor-pointer absolute' 
                 src={deleteimg} alt=''
                onClick={deleteStudents}/>

                <Link to={`/edit/${id}`}>
                <img className='w-6 h-6 top-14 right-5 cursor-pointer absolute' 
                src={editimg} 
                alt=''/> 
                </Link>
               
            </div>
            
        </div>
        <Toaster/>
         </div>
    )
}

export default Studentcard
