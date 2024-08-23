import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

function EditFir() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8005/fir/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8005/fir", data).then((res) => {
      alert("FIR Updated Successfully");
      navigate("/View");
    });
  };

  return (
    <div class="body">
      <div class="cards">
        
          <form onSubmit={handleSubmit}>
            <h2 id="align">Update FIR Data</h2>
            <div>
              <lable htmlFor="firid">ID :</lable>
              <input
                type="number"
                disabled
                name="firid"
                className="form-control"required
                value={data.firid}
                //onChange={(e) => setData({ ...data, id: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="firnum">firnum :</lable>
              <input
                type="number"
                name="firnum"
                className="form-control"required
                value={data.firnum}
                onChange={(e) => setData({ ...data, firnum: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="name">name :</lable>
              <input
                type="text"
                name="name"
                className="form-control"required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="address">address :</lable>
              <input
                type="text"
                name="address"
                className="form-control"required
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="date">date :</lable>
              <input
                type="text"
                name="date"
                className="form-control"required
                value={data.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="time">time :</lable>
              <input
                type="text"
                name="time"
                className="form-control"required
                value={data.time}
                onChange={(e) => setData({ ...data, time: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="description">description :</lable>
              <input
                type="text"
                name="description"
                className="form-control"required
                value={data.description}
                onChange={(e) => setData({ ...data, description: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="status">status :</lable>
              <input
                type="text"
                name="status"
                className="form-control"required
                value={data.status}
                onChange={(e) => setData({ ...data, status: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="criminalname">criminalname :</lable>
              <input
                type="text"
                name="criminalname"
                className="form-control"required
                value={data.criminalname}
                onChange={(e) => setData({ ...data, criminalname: e.target.value })}
              />
            </div>
            <br/>
            <button id="value" className="btn btn-info ">Update</button>
          </form>
        </div>
    </div>
  );
}

export default EditFir;
