import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

function AddPoliceStation() {
  const [inputData, setInputData] = useState({
    stationname: "",
    location: "",
    mobilenum: "",
    inspectorname: "",
    adminname: ""
  });


  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    // let result = validateValues(inputData);
    // setSubmitting(true);



    // if (result === true) {
      axios
        .post("http://localhost:8005/policestation", inputData)
        .then((response) => {
          alert("Data added Successfully");
          naviget("/viewpayroll");
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    // } else {
    //   alert("Please Enter the Valid Inputs!!!");
    // }
  };


  // validation Part for add user for student management system
  // const [errors, setErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);

  // const validateValues = (inputData) => {
  //   if (inputData.basic.length === 0) {
  //     alert("Please enter Basic pay !!! ");
  //     return false;
  //   } else if (inputData.hra.length === 0) {
  //     alert("Please enter HRA !!! ");
  //     return false;
  //   } else if (inputData.da.length === 0) {
  //     alert("Please enter DA !!!");
  //     return false;
  //   } else if (inputData.pf.length === 0) {
  //     alert("Please Enter the PF!!!");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };


  return (

    <div class="body4">
      <div class="cards">
        <form onSubmit={handleSubmit}>
          <h2 id="align">Add New Police Station Data</h2>

          <div>
            <lable htmlFor="stationname">stationname :</lable>
            <input
              id="a"
              type="text"
              name="stationname"
              className="form-control"
              placeholder="Enter stationname"required
              // onkeyup="sum();
              onChange={(e) =>
                setInputData({ ...inputData, stationname: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="location">location :</lable>
            <input
              id="b"
              type="text"
              name="location"
              className="form-control"
              placeholder="Enter location"required
              onChange={(e) =>
                setInputData({ ...inputData, location: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="mobilenum">mobilenum :</lable>
            <input
              id="c"
              type="text"
              name="mobilenum"
              className="form-control"
              placeholder="Enter mobilenum"required
              onChange={(e) =>
                setInputData({ ...inputData, mobilenum: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="inspectorname">inspectorname :</lable>
            <input
              id="d"
              type="text"
              name="inspectorname"
              className="form-control"
              placeholder="Enter inspectorname"required
              onChange={(e) =>
                setInputData({ ...inputData, inspectorname: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="adminname">adminname :</lable>
            <input
              id="e"
              type="text"
              name="adminname"
              className="form-control"
              placeholder="Enter adminname"required
              onChange={(e) =>
                setInputData({ ...inputData, adminname: e.target.value })
              }
            />
          </div>

        


          <br />
          <center><button className="btn btn-primary">Submit</button></center>
        </form>


      </div>
    </div>
  );
}

export default AddPoliceStation;
