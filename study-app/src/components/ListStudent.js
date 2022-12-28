import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ListStudents = (props) => {
    const { students,setStudents } = props;

    const handleDelete= (student) =>{
        axios.delete(`http://localhost:3004/students/${student.id}`)
        .then((res)=>{
            const filteredStudents=students.filter((item) => item.id !== student.id)
            setStudents(filteredStudents);
        })
        .catch((err)=>{
            console.log(err);
            alert("Silme işlemi esnasında hata olustu")
        })
    }

    return (
        <div className="container my-1">
            <table className="table  table-danger">
                <thead>
                    <tr>
                        <th scope="col">Sıra No</th>
                        <th scope="col">Öğrenci No</th>
                        <th scope="col">Ad</th>
                        <th scope="col">Soyad</th>
                        <th scope="col">Sınıf</th>
                        <th scope="col">Okulu</th>
                        <th>İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.length === 0 ? (
                           <tr>
                            <td className="text-center" colSpan={7}>Henüz Kayıtlı Bir Öğrenci Yok</td>
                           </tr>
                        ):(
                            <>
                            {
                                students.map((student, index) => (
                                    <tr key={student.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{student.studentNo}</td>
                                        <td>{student.name}</td>
                                        <td>{student.surname}</td>
                                        <td>{student.studentClass}</td>
                                        <td>{student.schoolName}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button onClick={()=> handleDelete(student)} type="button" className="btn btn-sm btn-danger">Sil</button>
                                                <Link to={`/edit-student/${student.id}`} type="button" className="btn btn-sm btn-success">Düzenle</Link>
                                            </div>
                                        </td>
                                    </tr>
        
                                ))}
                            </>
                        )
                    }

                </tbody>
            </table>
        </div>
    )

}

export default ListStudents;