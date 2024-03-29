import Error from "@/app/error";
import MyBookings from "@/components/booking/Mybooking";
import { getAuthHeader } from "@/helpers/authHeader";

import { NextResponse } from "next/server";
export const metadata = {
  title: "My Bookings",
};

const getBookings = async () => {
  const authHeader = getAuthHeader();
  console.log(authHeader, "authHeader");
  const res = await fetch(`${process.env.API_URL}/api/bookings/me`, authHeader);
  return res.json();
};

export default async function MyBookingsPage() {
  const data = await getBookings();
  console.log(data, "datadatadatadata");
  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return <MyBookings data={data} />;
}
