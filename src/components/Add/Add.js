import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

function AddFir() {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState([])
  const [inputData, setInputData] = useState({
    firnum: "",
    name: "",
    address: "",
    date: "",
    time: "",
    description: "",
    status: "",
    criminalname: "",
    policeStation:
    {
      stationid: "",
      stationname: "",
      location: "",
      mobilenum: "",
      inspectorname: "",
      adminname: "",
    }

  });
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get("http://localhost:8005/policestation/getPoliceStationid")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };


  const naviget = useNavigate();

  let handleChange = (e) => {
    if (e.target.name === "stationid") {
      console.log(e.target.value);
      const selectedRecordId = e.target.value;
      axios
        .get(`http://localhost:8005/policestation/` + selectedRecordId)
        .then((response) => {
          setInputData((inputData) => ({
            ...inputData, policeStation: response.data
          }));

        })
    };
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    // let result = validateValues(inputData);
    // setSubmitting(true);



    // if (result === true) {
      axios
        .post("http://localhost:8005/fir", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/View");
          console.log(res.data);
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
  //   if (inputData.empname.length === 0) {
  //     alert("Please enter Employee Name !!! ");
  //     return false;
  //   } else if (inputData.department.length === 0) {
  //     alert("Please enter department Name !!! ");
  //     return false;
  //   } else if (inputData.city.length === 0) {
  //     alert("Please enter City Name !!!");
  //     return false;
  //   } else if (inputData.roll.length === 0) {
  //     alert("Please Enter the Valid roll!!!");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  return (
    <div class="body4">      
        <div class="cards">
        <form onSubmit={handleSubmit} >
          <h2 id="align">Add New FIR Data</h2>
          <div>
            <lable htmlFor="firnum">Name</lable>
            <input
              type="number"
              name="firnum"
              className="form-control"
              placeholder="Fir Number" required
              onChange={(e) =>
                setInputData({ ...inputData, firnum: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="name">name :</lable>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"required
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>


          <div>
            <lable htmlFor="address">address :</lable>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter address"required
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="date">date :</lable>
            <input
              type="text"
              name="date"
              className="form-control"
              placeholder="Enter date"required
              onChange={(e) =>
                setInputData({ ...inputData, date: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="time">time :</lable>
            <input
              type="text"
              name="time"
              className="form-control"
              placeholder="Enter time"required
              onChange={(e) =>
                setInputData({ ...inputData, time: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="description">description :</lable>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Enter description"required
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="status">status :</lable>
            <input
              type="text"
              name="status"
              className="form-control"
              placeholder="Enter status"required
              onChange={(e) =>
                setInputData({ ...inputData, status: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="criminalname">criminalname :</lable>
            <input
              type="text"
              name="criminalname"
              className="form-control"
              placeholder="Enter criminalname"required
              onChange={(e) =>
                setInputData({ ...inputData, criminalname: e.target.value })
              }
            />
          </div>


          <br />
          <div>
            <label htmlFor="stationid">Station Id :</label>

            <select
              class="form-select select"
              required="required"
              name="stationid"
              title="Select Station ID "
              onChange={handleChange}
            >
              <option name="stationid" selected="selected">
                Select One
              </option>
              {records.map((items) => (
                <option value={items} key={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <br />
          <center><button className="btn btn-primary">Submit</button></center>
        </form>
      </div>
    </div>
  );
}

export default AddFir;