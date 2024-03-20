"use client";

import { IBooking } from "@/backend/models/booking";
import Table from "./Table";
import Link from "next/link";
import { createRef, useEffect, useState, useMemo } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

interface Props {
  data: {
    bookings: IBooking[]; //booking array
  };
}

const MyBookings = ({ data }: Props) => {
  const bookings = data?.bookings;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const tableRef = createRef();

  const tableOptions = {
    selection: false,
  };

  const columns = [
    {
      label: "ID",
      field: "id",
      sort: "asc",
    },
    {
      label: "Check In",
      field: "checkin",
      sort: "asc",
    },
    {
      label: "Check Out",
      field: "checkout",
      sort: "asc",
    },
    {
      label: "Amount Paid",
      field: "amountpaid",
      sort: "asc",
    },
    {
      label: "Actions",
      field: "actions",
      sort: "asc",
    },
    // {
    //   sorting: false,
    //   width: 50,
    //   render: ({ tableData }) => (
    //     <span className="idx">{1 + tableData.id}</span>
    //   ),
    // },
    // {
    //   width: 50,
    //   cellStyle: {
    //     padding: 0,
    //   },
    //   sorting: false,
    //   render: ({ active, serviceUserId }) => (
    //     <SimpleSwitch
    //       className={classes.switchWrapper}
    //       disabled={isCqListLoading || user.read_only}
    //       checked={active}
    //       value={serviceUserId}
    //       onChange={handleSwitchActive}
    //     />
    //   ),
    // },
    // {
    //   title: t("shared:Name"),
    //   field: "name",
    //   width: "25%",
    //   render: ({ name, url }) => (
    //     <Link className="link" to={url}>
    //       {name}
    //     </Link>
    //   ),
    // },
    // {
    //   title: t("shared:Policy"),
    //   render: ({ policy }) => t(`dynamic:${policy}`),
    //   width: "25%",
    // },
    // {
    //   title: t("shared:Phone number"),
    //   field: "phoneNumber",
    //   width: "25%",
    // },
    // {
    //   title: t("shared:Extension"),
    //   field: "extension",
    //   width: "20%",
    // },
  ];

  const setBookings = () => {
    //data
    const data: { rows: any[]; actions: any[] } = {
      rows: [],
      actions: [],
    };

    //set data using mapping

    bookings?.forEach((booking) => {
      data?.rows?.push({
        id: booking._id,
        checkin: new Date(booking?.checkInDate).toLocaleString("en-US"),
        checkout: new Date(booking?.checkOutDate).toLocaleString("en-US"),
        amountpaid: `$${booking?.amountPaid}`,

        //booking details and invoice of booking using actions
      });
    });

    return data;
  };

  //   const mobileColumns = [
  //     {
  //       cellStyle: {
  //         padding: 0,
  //         height: "50px",
  //       },
  //       render: (data) => (
  //         <CallCenterTableCard
  //           info={data}
  //           handleDelete={deleteHandler}
  //           handleSwitch={handleSwitchActive}
  //         />
  //       ),
  //     },
  //   ];

  const deleteHandler = (data) => {
    // setSelectedCallQueues([data]);
    // handleOpenDeleteModal();
  };
  // const actions = [
  //   (rowData) => ({
  //     icon: () => (
  //       <>
  //         <span>
  //           <Link href={`/bookings/${rowData.id}`} className="btn btn-primary">
  //             <VisibilityOutlinedIcon />
  //           </Link>
  //         </span>

  //         <span>
  //           <Link
  //             href={`/bookings/invoice/${rowData.id}`}
  //             className="btn btn-success ms-2"
  //           >
  //             <ReceiptOutlinedIcon />
  //           </Link>
  //         </span>
  //       </>
  //     ),
  //     // tooltip: "Edit",
  //     //onClick: (event, rowData) => alert(rowData),
  //   }),
  // ];

  const actions = [
    // First action
    (rowData) => ({
      icon: () => (
        <>
          {" "}
          <span>
            <Link
              href={`/bookings/invoice/${rowData.id}`}
              className="btn btn-success ms-2"
            >
              <ReceiptOutlinedIcon />
            </Link>
          </span>
        </>
      ),
      ///tooltip: <Typography>ABC</Typography>,
      //onClick: (event, rowData) => handleFirstAction(event, rowData),
    }),
    // Second action
    (rowData) => ({
      icon: () => (
        <>
          <span>
            <Link href={`/bookings/${rowData.id}`} className="btn btn-primary">
              <VisibilityOutlinedIcon />
            </Link>
          </span>
        </>
      ),
      // tooltip: <Typography>DEF</Typography>,
      //onClick: (event, rowData) => handleSecondAction(event, rowData),
    }),
  ];

  const res = setBookings();
  // console.log(res?.rows, "res");
  const data1 = [
    {
      amountpaid: "₹840",
      checkin: "3/10/2024, 11:08:24 AM",
      checkout: "3/14/2024, 11:08:24 AM",
      id: "65e5abaf623fdf18cae7412d",
    },
    {
      amountpaid: "₹840",
      checkin: "3/10/2024, 11:08:24 AM",
      checkout: "3/14/2024, 11:08:24 AM",
      id: "165e5abaf623fdf18cae7412d",
    },
  ];
  console.log(bookings);
  return (
    <div>
      {" "}
      {
        <div className="container">
          <h1 className="my-5">My Bookings</h1>

          {/* //create table using mdbdata */}

          <Table
            //  className={classes.table}
            tableRef={tableRef}
            columns={columns}
            // columns={isMobile ? mobileColumns : columns}
            data={res?.rows}
            //  isLoading={isCqListLoading}
            options={tableOptions}
            // options={isMobile ? mobileTableOptions : tableOptions}
            actions={actions}
            // onSelectionChange={setSelectedCallQueues}
          />
        </div>
      }{" "}
    </div>
  );
};

export default MyBookings;
