import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

function EditPoliceStation() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8005/policestation/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8005/policestation", data).then((res) => {
      alert("police station data Updated Successfully");
      navigate("/viewpayroll");
    });
  };

  return (
    <div class="body">
      <div class="cards">
       
          <form onSubmit={handleSubmit}>
            <h2 id="align">Update Police Station's Data</h2>
            <div>
              <lable htmlFor="stationid">ID :</lable>
              <input
                type="number"
                disabled
                name="stationid"
                className="form-control"required
                value={data.stationid}
                //onChange={(e) => setData({ ...data, id: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="stationname">stationname :</lable>
              <input
                type="text"
                name="stationname"
                className="form-control"required
                value={data.stationname}
                onChange={(e) => setData({ ...data, stationname: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="location">location :</lable>
              <input
                type="text"
                name="location"
                className="form-control"required
                value={data.location}
                onChange={(e) => setData({ ...data, location: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="mobilenum">mobilenum :</lable>
              <input
                type="text"
                name="mobilenum"
                className="form-control"required
                value={data.mobilenum}
                onChange={(e) => setData({ ...data, mobilenum: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="inspectorname">inspectorname :</lable>
              <input
                type="text"
                name="inspectorname"
                className="form-control"required
                value={data.inspectorname}
                onChange={(e) => setData({ ...data, inspectorname: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="adminname">adminname :</lable>
              <input
                type="text"
                name="adminname"
                className="form-control"required
                value={data.adminname}
                onChange={(e) => setData({ ...data, adminname: e.target.value })}
              />
            </div>
            <br />
            <button id="value" className="btn btn-info ">Update</button>
          </form>
        </div>
    </div>
  );
}

export default EditPoliceStation;
