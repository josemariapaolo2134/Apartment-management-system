import React, { useState, useRef } from "react";
import axios from "axios";

function CreatingTenant() {
  const tenantEl = useRef(null);
  const nameEl = useRef(null);
  const ageEl = useRef(null);
  const dobEl = useRef(null);
  const roomEl = useRef(null);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [roomno, setRoomno] = useState("");
  const [tenantno, setTenantno] = useState("");

  const submitHandler = function (e) {
    e.preventDefault();
    axios
      .post("http://10.1.204.225:5000/createtenant", {
        name: name,
        age: age,
        roomno: roomno,
        tenantno: tenantno,
        dob: dob,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto w-full max-w-[550px]">
      <form onSubmit={submitHandler} action="" method="POST">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            ref={nameEl}
            name="name"
            id="name"
            value={name}
            placeholder="Full Name"
            onChange={() => {
              setName(nameEl.current.value);
            }}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="tenant-no"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Tenant No.
          </label>
          <input
            type="text"
            ref={tenantEl}
            name="tenant-no"
            id="tenant-no"
            value={tenantno}
            placeholder="Tenant No."
            onChange={() => {
              setTenantno(tenantEl.current.value);
            }}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="room-no"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Room no
          </label>
          <input
            type="text"
            ref={roomEl}
            name="room-no"
            id="room-no"
            value={roomno}
            placeholder="Room no"
            onChange={() => {
              setRoomno(roomEl.current.value);
            }}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="age"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Age
          </label>
          <input
            type="age"
            name="age"
            ref={ageEl}
            id="age"
            value={age}
            onChange={() => {
              setAge(ageEl.current.value);
            }}
            placeholder="Age"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="dob"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            DOB
          </label>
          <input
            type="text"
            name="dob"
            ref={dobEl}
            value={dob}
            onChange={() => {
              setDob(dobEl.current.value);
            }}
            id="dob"
            placeholder="Enter your dob"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="flex w-full">
          <button className=" mx-auto hover:shadow-form  py-3 px-8 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatingTenant;
