import {
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";
import { IoLocationOutline, FaHospital, FaSyringe, GrClock, BiRupee } from 'react-icons/all';
import { format } from "date-fns";
import React, { useState } from "react";
import Header from "../../Containers/Header";
import "./style.css";

/**
 * @author
 * @function VaccinePage
 **/

export const VaccinePage = (props) => {
  const [pincode, setPincode] = useState();
  // const [date, setDate] = useState();
  const [dateMBY, setDateMBY] = useState();
  const [vaccinationInfo, setVaccinationInfo] = useState([]);

  const getVaccinationData = () => {
    const dateFormatted = format(new Date(dateMBY), "dd-MM-yyyy");
    console.log("date formatted >>>>>>", dateFormatted);
    console.log("pincode >>>>>>>>", pincode);
    fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${dateFormatted}`
    )
      .then((response) => response.json())
      .then((data) => {
        const centerData = data.centers.map((center) => ({
          name: center.name,
          state: center.state_name,
          address: center.address,
          sessions: center.sessions,
          fees: center.fee_type,
          district_name: center.district_name,
          to: center.to,
          block_name: center.block_name,
          vaccine_fees: center.fee_type === "Paid" ? center.vaccine_fees : "Free"
        }));
        setVaccinationInfo(centerData);
        console.log(">>>>>>>>>>>>>", data);
        console.log("info cvaccination>>>>>>>>>>>>>", vaccinationInfo);
      });
  };

  return (
    <>
      <Header />
      {
        <div className="vaccine__app">
          <div className="vaccine__app__top">
            <div>
              <TextField
                value={pincode}
                onChange={(e) => {
                  e.preventDefault();
                  setPincode(e.target.value);
                }}
                label="Enter PinCode"
                variant="outlined"
                className="pincode__textfield"
                required
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                label="Select Date"
                type="date"
                onChange={(e) => {
                  e.preventDefault();
                  setDateMBY(e.target.value);
                }}
                defaultValue="2021-09-08"
                className="pincode__textfield"
                required
              />
            </div>
            <Button
              variant="contained"
              className="submit__button"
              onClick={(e) => {
                e.preventDefault();
                getVaccinationData();
              }}
            >
              Submit
            </Button>
          </div>
          <div className="vaccine__app__bottom">
            {vaccinationInfo ? (
              <>
                {vaccinationInfo.map((ptr) => (
                  <Card className="vaccine__card">
                    <CardContent className="cardContent">
                      <div className="card__haader">
                        <div className="center__name">
                        <h1><FaHospital/>&nbsp;&nbsp;{ptr.name}</h1>
                        </div>
                        <div className="center__state">
                          <h3>{ptr.state}</h3>
                        </div>
                      </div>
                      <div className="center__address">
                        <h2><IoLocationOutline/>&nbsp;&nbsp;{ptr.address}</h2>
                      </div>
                      <center>
                      {
                        ptr.fees === "Paid" ? <p style={{
                          display:'flex',
                          justifyContent: 'space-evenly',
                          marginTop:'25px'
                        }}>
                          { ptr.vaccine_fees.map((item)=>(
                          <h3>{item.vaccine}:<BiRupee/>{item.fee}</h3>
                        ))}</p> : <h3>Fees: {ptr.vaccine_fees}</h3>
                      }
                      </center>
                      <div className="center__sessions">
                        {ptr.sessions.map((ptr2) => (
                          <div className="sessions__data">
                            <div className="session__data__top">
                            <p><FaSyringe/>&nbsp;<b>{ptr2.vaccine}</b></p>
                              <p>
                                CAPACITY: {ptr2.available_capacity}
                              </p>
                              <p> MINIMUM AGE: {ptr2.min_age_limit}</p>
                              
                            </div>
                            <div className="session__data__bottom">
                              <p><h4><GrClock/>&nbsp;TIME SLOTS</h4></p>
                              {ptr2.slots.map((ptr3) => (
                                <div className="Slots__data">
                                  <p><u> {ptr3} </u></p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="card__footer">
                        <span>District: {ptr.district_name}</span>
                        <span>Open Till: {ptr.to}</span>
                        <span>Taluka: {ptr.block_name}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </>
            ) : (
              "abcsdcsac"
            )}
          </div>
        </div>
      }
    </>
  );
};
