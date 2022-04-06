import React, { useState } from "react";
import Button from "./Button";
import GraphicBox from "./GraphicBox";
import "./style.css";
import axios from "axios";
function Graphics() {
  const [period, setPeriod] = useState("Period");
  const [dataLight, setdataLight] = useState({});
  const [dataTemp, setdataTemp] = useState({});
  var dataNapon = [
    { id: 1, napon: 10.3 },
    { id: 2, napon: 12.8 },
    { id: 3, napon: 15.2 },
    { id: 4, napon: 14.2 },
    { id: 5, napon: 16.2 },
    { id: 6, napon: 13.6 },
  ];
  var dataStruja = [
    { id: 1, struja: 1.2 },
    { id: 2, struja: 1.4 },
    { id: 3, struja: 1.2 },
    { id: 4, struja: 0.8 },
    { id: 5, struja: 1.6 },
    {
      id: 6,

      struja: 1.2,
    },
  ];
  function onSel(selValue) {
    setPeriod(selValue);
    axios
      .get(`https://api.thingspeak.com/channels/1671196/feeds.json`)
      .then((res) => {
        var current = new Date(Date.now());
        var respondLight = res.data.feeds.map((s) => ({
          svjetlost: s.field1,
          dateTime: new Date(s.created_at),
          id: s.entry_id,
        }));
        var respondTemp = res.data.feeds.map((s) => ({
          temperatura: s.field2,
          dateTime: new Date(s.created_at),
          id: s.entry_id,
        }));

        switch (selValue) {
          case "Dan":
            respondTemp = respondTemp.filter(
              (a) => a.dateTime.setHours(a.dateTime.getHours() + 24) > current
            );
            respondLight = respondLight.filter(
              (a) => a.dateTime.setHours(a.dateTime.getHours() + 24) > current
            );

            break;
          case "Sedmica":
            respondTemp = respondTemp.filter(
              (a) => a.dateTime.setHours(a.dateTime.getHours() + 168) > current
            );
            respondLight = respondLight.filter(
              (a) => a.dateTime.setHours(a.dateTime.getHours() + 168) > current
            );
            break;
          case "Mjesec":
            respondTemp = respondTemp.filter(
              (a) => a.dateTime.setHours(a.dateTime.getHours() + 720) > current
            );
            respondLight = respondLight.filter(
              (a) => a.dateTime.setHours(a.dateTime.getHours() + 720) > current
            );
            break;
          case "Period":
            respondTemp = {};
            respondLight = {};
            break;
          default:
            break;
        }
        setdataLight(respondLight);
        setdataTemp(respondTemp);
      });
  }

  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div>
      <div style={{ display: "flex", marginTop: "95px" }}>
        <GraphicBox
          dimension={width / 4}
          data={dataLight}
          XAxis={"dateTime"}
          YAxis={"svjetlost"}
          min={0}
          max={200}
        />
        <GraphicBox
          dimension={width / 4}
          data={dataTemp}
          XAxis={"dateTime"}
          YAxis={"temperatura"}
        />
        <GraphicBox
          dimension={width / 4}
          data={dataNapon}
          XAxis={"id"}
          YAxis={"napon"}
        />
        <GraphicBox
          dimension={width / 4}
          data={dataStruja}
          XAxis={"id"}
          YAxis={"struja"}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <label style={{ marginRight: "5px" }}>Odaberite interval</label>
        <select
          style={{ marginLeft: "5px" }}
          onChange={(event) => onSel(event.target.value)}
        >
          <option>Period</option>
          <option>Dan</option>
          <option>Sedmica</option>
          <option>Mjesec</option>
          <option>Sve</option>
        </select>
      </div>
    </div>
  );
}
export default Graphics;
