import React, { useEffect, useState } from "react";
import axios from "axios";


import Header from "../components/Header";

import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
    const { studentId } = useParams()
    const navigate = useNavigate()

    const [willEditStudent, SetWillEditStudent] = useState(null)
    const [studentNo, setStudentNo] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [studentClass, setStudentClass] = useState("")
    const [schoolName, setSchoolName] = useState("")


    useEffect(() => {
        axios.get(`http://localhost:3004/students/${studentId}`)
            .then((res) => {
                console.log(res.data)
                SetWillEditStudent(res.data)
                setStudentNo(res.data.studentNo)
                setName(res.data.name)
                setSurname(res.data.surname)
                setStudentClass(res.data.studentClass)
                setSchoolName(res.data.schoolName)
            })
            .catch((err) => {
                console.log(err)
                alert("İlgili öğrenci bilgilerini çekerken hata olustu")
                navigate("/")
            })
    }, [])

    const handleEdit = (event) => {
        event.preventDefault();

        //validation
        if (studentNo === "" || name === "" || surname === "" || studentClass === "" || schoolName === "") {
            alert("Bütün Alanları Doldurmak Zorunludur.")
            return
        }
        const updatedStudent = {
            id: willEditStudent.id,
            name: name,
            surname: surname,
            studentNo: studentNo,
            studentClass: studentClass,
            schoolName: schoolName
        }
        axios.put(`http://localhost:3004/students/${willEditStudent.id}`, updatedStudent)
        .then((res)=> {
            alert("Başarılı bir şekilde güncellendi.")
           navigate("/")
        })
        .catch((err) =>{
           console.log(err);
           alert("Güncelleme işleminde bir sorun oluştu.")
        })

    }

    if (willEditStudent === null) {
        return (null)
    }
    return (
        <div>
            <Header />
            <div className="container my-5">
                <form onSubmit={handleEdit}>
                    <div className="mb-3">
                        <label htmlFor="studentNo" className="form-label">
                            Öğrenci Numarası
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentNo"
                            placeholder="Ör: 100"
                            value={studentNo}
                            onChange={(event) => setStudentNo(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Öğrenci Adı
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Ör: İrem"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="surname" className="form-label">
                            Öğrenci Soyadı
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="surname"
                            placeholder="Ör: Yilmaz"
                            value={surname}
                            onChange={(event) => setSurname(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="studentClass" className="form-label">
                            Öğrenci Sınıfı
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentClass"
                            placeholder="Ör: 8/C"
                            value={studentClass}
                            onChange={(event) => setStudentClass(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="schoolName" className="form-label">
                            Okul Adı
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="schoolName"
                            placeholder="Ör: Ali Kuşçu Ortaokulu"
                            value={schoolName}
                            onChange={(event) => setSchoolName(event.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <button className="btn btn-success w-50">Güncelle</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default EditStudent;