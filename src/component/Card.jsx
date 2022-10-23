import React from "react"

export default function Card() {


    return (
        <div className=" w-full lg:max-w-full lg:flex mt-7">
            <div className=" mx-auto border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="flex items-top" >
                    <img className="w-20 h-20 rounded-full mr-4 " src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png" alt=" Avatar of Writer" />
                    <div className="text-sm" >
                        <h2 className="text-gray-900" id="header">Masukkan NIM Mahasiswa</h2>
                        <p className="text-gray-900" id="nama_lengkap"></p>
                        <p className="text-gray-900" id="nama_panggilan"></p>
                        <p className="text-gray-900" id="nim"></p>
                        <p className="text-gray-900" id="no_telepon"></p>
                        <p className="text-gray-900" id="id_line"></p>
                        <p className="text-gray-900" id="email"></p>
                        <p className="text-gray-900" id="hobi"></p>
                        <p className="text-gray-900" id="tgl_lahir"></p>

                    </div >
                </div >
            </div >
        </div >
    )


}
