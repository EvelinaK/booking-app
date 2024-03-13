import Error from "@/app/error";
import RoomDetails from "@/components/room/RoomDetails";

interface Props {
  params: { id: string };
}

const getRoom = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`, {
    cache: "no-cache",
  });
  return res.json();
};

export default async function RoomDetailsPage({ params }: Props) {
  const data = await getRoom(params?.id);

  const coordinates = data?.room?.location?.coordinates;

  const [latitude, longitude] = coordinates || [];

  // const { room } = data;

  // const locationAppartmentInfo = {
  //   lat: room?.location?.coordinates?.[1],
  //   lng: room?.location?.coordinates?.[0],
  //   country: room?.location?.country,
  // };

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  console.log(data);

  return <RoomDetails data={data} />;
}

export async function generateMetadata({ params }: Props) {
  const data = await getRoom(params?.id);

  return {
    title: data?.room?.name,
  };
}
