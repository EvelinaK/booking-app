"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SalesStats from "./SalesStats";

// import { TopPerformingChart } from "../charts/TopPerformingChart";
import PieChartComponent from "../charts/DoughnutChart";
import LinesChart from "../charts/LineChart";

import { useLazyGetSalesStatsQuery } from "@/redux/api/bookingApi";
import { toast } from "react-hot-toast";
import Loading from "@/app/admin/loading";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [getSalesStats, { error, data, isLoading }] =
    useLazyGetSalesStatsQuery();

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (startDate && endDate && !data) {
      getSalesStats({
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      });
    }
  }, [error]);

  const submitHandler = () => {
    getSalesStats({
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    });
  };

  if (!data) return <Loading />;

  console.log(data, "data?.sixMonthSalesData");
  const stats = [
    {
      label: "comfortable hygiene products",
      name: "comfortable hygiene products",
      value: 20,
    },
    {
      label: "no menstrual pain",
      name: "no menstrual pain",
      value: 15,
    },
    {
      label: "stress-free",
      name: "stress-free",
      value: 20,
    },
    {
      label: "gynecological health",
      name: "gynecological health",
      value: 20,
    },
    {
      label: "women's health screening",
      name: "women's health screening",
      value: 20,
    },
    {
      label: "comfortable state of health",
      name: "comfortable state of health",
      value: 15,
    },
  ];

  const data1: any = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  console.log();
  return (
    <div className="ps-4 my-5">
      <div className="d-flex justify-content-start align-items-center">
        <div className="mb-3 me-4">
          <label className="form-label d-block">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label d-block">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date: any) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="form-control"
          />
        </div>

        <button className="btn form-btn ms-4 mt-3 px-5" onClick={submitHandler}>
          Fetch
        </button>
      </div>
      <SalesStats data={data} />

      <div className="row">
        <div className="col-12 col-lg-6">
          <h4 className="my-5 text-center">Sales History</h4>
          <span>"Last 6 Months Performance"</span>
          <LinesChart
            data={data.sixMonthSalesData}
            legends={Object.keys(data.sixMonthSalesData[0])}
          />
        </div>
        <></>
        <div className="col-12 col-lg-6 text-center">
          <h4 className="my-5">Top Performing Rooms</h4>
          {data?.topRooms?.length > 0 ? (
            <div>
              <PieChartComponent
                data={data?.topRooms}
                visibleEffect={true}
                //salesData={data?.sixMonthSalesData}
              />
            </div>
          ) : (
            // <TopPerformingChart rooms={data?.topRooms} />
            <p className="mt-5">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
