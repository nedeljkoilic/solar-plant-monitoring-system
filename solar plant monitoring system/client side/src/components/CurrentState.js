import React, { useState, useEffect } from "react";
import MeasureBox from "./MeasureBox";
import axios from "axios";
import "./style.css";
function CurentState() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://api.thingspeak.com/channels/1671196/feeds.json?results=10`)
      .then((response) => {
        setData(response.data.feeds);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div>
      <div style={{ display: "flex", marginTop: "95px" }}>
        <MeasureBox
          unit="°C"
          valueOfMeasurment={data[9].field2}
          colors={["blue", "red"]}
          percent={(data[9].field2 + 40) / 100}
          levels={30}
          desc="Temperatura vazduha"
        />
        <MeasureBox
          unit="Lux"
          valueOfMeasurment={data[9].field1}
          colors={["black", "white"]}
          percent={0.7}
          levels={30}
          desc="Jacina svjetlosti"
        />
        <MeasureBox
          unit="A"
          valueOfMeasurment="0.6"
          colors={["red", "green", "red"]}
          percent={0.6}
          levels={3}
          desc="Jacina struje"
        />
        <MeasureBox
          unit="V"
          valueOfMeasurment="13.2"
          colors={["red", "green", "red"]}
          percent={13.2 / 25}
          levels={3}
          desc="Napon"
        />
      </div>
      <div className="content">
        <div className="left">
          <p className="naslov">Poslednja mjerenja</p>
          <table className="tabela_mjerenja">
            <tr>
              <th>Rb.</th>
              <th>Osvjetljenost (lux)</th>
              <th>Temperatura (°C)</th>
              <th>Vrijeme mjerenja</th>
            </tr>
            {data.map((s, index) => (
              <tr key={index}>
                <td>{index + 1}.</td> <td>{s.field1}</td>
                <td>{s.field2}</td>
                <td>
                  {new Date(s.created_at).getDate()}.
                  {new Date(s.created_at).getMonth()}.
                  {new Date(s.created_at).getFullYear()}{" "}
                  {new Date(s.created_at).getHours()}:
                  {new Date(s.created_at).getMinutes()}:
                  {new Date(s.created_at).getSeconds()}
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="right">
          <p className="naslov">Statistika</p>
          <table style={{ textAlign: "left", margin: "auto" }}>
            <tr>
              <td>Broj suncanih sati:</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Prosjecna snaga:</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Prosjecna temperatura:</td>
              <td>0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CurentState;
