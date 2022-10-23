import Card from "./component/Card";
import Input from "./component/Input"
import React from "react";
export default function App() {

    let data = []
    function search_data() {
       

    }




    return (
        <div className=' w-full mt-3 flex flex-col'>
            <h1 className=' text-center text-3xl' >Data Mahasiswa Teknik Komputer Universitas Diponegoro</h1>
            <h2 className=' text-center text-2xl font-bold mt-3'>Kelompok 5 Praktikum RPLBK</h2>
            <Input id="input_text" />
            <button onClick={search_data} >Check</button>
            <Card />


        </div >
    )

}

