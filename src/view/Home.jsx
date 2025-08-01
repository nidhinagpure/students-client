import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router";
import Studentcard from '../components/Studentcard';
import adduser from "./../assets/add-user.png";



function Home() {
    const [students, setStudents] = useState([
        {
            name: "Nidhi",
            city: "Pune",
            id: 2,
        },

        {
            name: "Arpit",
            city: "Nagpure",
            id: 3
        },

    ]);
    const loadStudents = async () => {
        const response = await axios.get("https://students-server-ut73.onrender.com/students");
        setStudents(response.data.data);
    };

    useEffect(() => {
        loadStudents();
    }, []);

    return (
        <div>
            <div>
                <h1 className='font-bold text-4xl text-center pt-8 mb-8'>All STUDENTS</h1>
                {students.map((stud, i) => {
                    const { name, city, id, image } = stud;
                    return <Studentcard key={i} name={name} city={city} id={id} image={image} loadStudents={loadStudents}/>
                    
                })}
            </div>
           <Link to="/add">
           <img className='h-20 w-20 fixed bottom-10 right-8'  src={adduser} alt='Add user'/>
           </Link> 
        </div>
    )
}

export default Home
