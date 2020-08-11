import React, { useEffect, useState } from "react";
import "./Home.css";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const data = [
  ["Year", "Visitations", { role: "style" }],
  ["2010", 10, "color: gray"],
  ["2020", 14, "color: #76A7FA"],
  ["2030", 16, "color: blue"],
  ["2040", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  [
    "2050",
    28,
    "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2",
  ],
];

const pieOptions = {
  title: "",
  pieHole: 0.6,
  slices: [
    {
      color: "#2BB673",
    },
    {
      color: "#d91e48",
    },
    {
      color: "#007fad",
    },
    {
      color: "#e9a227",
    },
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%",
  },
  fontName: "Roboto",
};

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      style: "menu active",
      menuStatus: "open",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    switch (this.state.menuStatus) {
      case "open":
        this.setState({
          menuStatus: "close",
          style: "menu active",
        });
        break;
      case "close":
        this.setState({
          menuStatus: "open",
          style: "menu",
        });
        break;
    }
  }

  render() {
    return (
      <div className="App-headers">
        {/* <button className="buttons" onClick={this.handleClick}>
          menu
        </button> */}
        <div className={this.state.style}>
          <span className="title-header">
            <img
              className="title-image"
              src="/logo512.png"
              alt="logo"
              width="50px"
              height="50px"
            />
            {"Creative Beast"}
          </span>
          <div className="divider"></div>

          <ul style={{ marginLeft: -30, marginTop: 30 }}>
            <div className="menu-row">
              <img
                className="image-menu"
                src="/ic_dashboard.png"
                alt="Home"
                width="30"
                height="30"
              />
              <div className="menu-text">{"DashBoard"}</div>
            </div>

            <div className="menu-row">
              <img
                className="image-menu"
                src="/ic_user.png"
                alt="User"
                width="30"
                height="30"
              />
              <div className="menu-text">{"User"}</div>
            </div>

            <div className="menu-row">
              <img
                className="image-menu"
                src="/ic_order.png"
                alt="Order"
                width="30"
                height="30"
              />
              <div className="menu-text">{"Order"}</div>
            </div>

            <div className="menu-row">
              <img
                className="image-menu"
                src="/ic_product.png"
                alt="Product"
                width="30"
                height="30"
              />
              <div className="menu-text">{"Product"}</div>
            </div>

            <div className="menu-row">
              <img
                className="image-menu"
                src="/ic_summary.png"
                alt="Report"
                width="30"
                height="30"
              />
 <div className="menu-text">
              {"Report"}</div>
            </div>
          </ul>
        </div>

        <div className="header-style">
          <span className="logout-text">
            <img
              className="mail-image"
              src="/ic_mail.png"
              alt="mail"
              width="30"
              height="30"
            />
            <img
              className="title-image"
              src="/ic_notification.png"
              alt="notification"
              width="30"
              height="30"
            />
          </span>
          <img
            className="profile-image"
            src="/logo512.png"
            alt="profile"
            width="31"
            height="31"
          />
          <span className="profile-text">{"My Profile"}</span>
        </div>

        <div className="tab-test">
          <div className="tab">
            <div className="inner-tab1">
              <div className="tab-value">{"25000"}</div>
              <div className="tab-text">
                <img
                  className="image-menu"
                  src="/ic_user.png"
                  alt="User"
                  width="50"
                  height="50"
                />
                {"User"}
              </div>
            </div>

            <div className="inner-tab2">
              <div className="tab-value">{"10000"}</div>
              <div className="tab-text">
                <img
                  className="image-menu"
                  src="/ic_order.png"
                  alt="Order"
                  width="50"
                  height="50"
                />
                {"Order"}
              </div>
            </div>

            <div className="inner-tab3">
              <div className="tab-value">{"50000"}</div>
              <div className="tab-text">
                <img
                  className="image-menu"
                  src="/ic_product.png"
                  alt="Product"
                  width="50"
                  height="50"
                />
                {"Product"}
              </div>
            </div>

            <div className="inner-tab4">
              <div className="tab-value">{"0"}</div>
              <div className="tab-text">
                <img
                  className="image-menu"
                  src="/ic_summary.png"
                  alt="Report"
                  width="50"
                  height="50"
                />
                {"Report"}
              </div>
            </div>
          </div>
          <div className="chart-tab">
            <Chart
              width={"45vw"}
              height={"50vh"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 2],
                ["Commute", 2],
                ["Watch TV", 2],
                ["Sleep", 7],
              ]}
              options={{
                title: "My Daily Activities",
                // Just add this option
                is3D: true,
              }}
              rootProps={{ "data-testid": "2" }}
            />
            <Chart
              style={{ marginTop: 25 }}
              chartType="Bar"
              width={"40vw"}
              height={"50vh"}
              data={data}
            />
          </div>

          <div className="chart-tab">
            <Chart
              width={"45vw"}
              height={"50vh"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 2],
                ["Commute", 2],
                ["Watch TV", 2],
                ["Sleep", 7],
              ]}
              options={{
                title: "My Daily Activities",
                // Just add this option
                is3D: true,
              }}
              rootProps={{ "data-testid": "2" }}
            />
            <Chart
              style={{ marginTop: 25 }}
              chartType="Bar"
              width={"40vw"}
              height={"50vh"}
              data={data}
            />
          </div>

          <div className="chart-tab">
            <Chart
              width={"45vw"}
              height={"50vh"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 2],
                ["Commute", 2],
                ["Watch TV", 2],
                ["Sleep", 7],
              ]}
              options={{
                title: "My Daily Activities",
                // Just add this option
                is3D: true,
              }}
              rootProps={{ "data-testid": "2" }}
            />
            <Chart
              style={{ marginTop: 25 }}
              chartType="Bar"
              width={"40vw"}
              height={"50vh"}
              data={data}
            />
          </div>
        </div>
      </div>
    );
  }
}