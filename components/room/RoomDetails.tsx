"use client";

import { IRoom } from "@/backend/models/room";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import RoomImageSlider from "./RoomImageSlider";
import RoomFeatures from "./RoomFeatures";
import BookingDatePicker from "./BookingDatePicker";
import MapModal from "../MapModal";
import ListReviews from "../review/ListReviews";
import NewReview from "../review/NewReview";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useStyles from "./styles";
interface Props {
  data: {
    room: IRoom;
  };
}

const RoomDetails = ({ data }: Props) => {
  const { room } = data;
  const classes = useStyles() as Record<string, string>;
  const [openMapModal, setOpenMapModal] = useState();

  const handleClose = () => {
    setOpenMapModal("");
  };
  const locationAppartmentInfo = {
    lat: room?.location?.coordinates?.[1],
    lng: room?.location?.coordinates?.[0],
    country: room?.location?.country,
  };

  return (
    <div className="container container-fluid">
      <h2 className="mt-5">{room.name}</h2>
      <p>{room.address}</p>

      <div className="ratings mt-auto mb-3">
        <StarRatings
          rating={room?.ratings}
          starRatedColor="#e61e4d"
          numberOfStars={5}
          starDimension="22px"
          starSpacing="1px"
          name="rating"
        />
        <span className="no-of-reviews">({room?.numOfReviews} Reviews)</span>
      </div>
      <RoomImageSlider images={room?.images} />

      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>{room?.description}</p>

          <RoomFeatures room={room} />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <BookingDatePicker room={room} />
          // Room Map - TODO
        </div>
        <div className="link-item">
          <Link href="#" onClick={() => setOpenMapModal(true)}>
            Location
          </Link>
          <LocationOnIcon />
        </div>
        <Dialog
          // fullScreen={fullScreen}
          maxWidth={"lg"}
          open={openMapModal}
          onClose={() => setOpenMapModal("")}
          classes={{ paper: classes.paper }}
        >
          <IconButton className={classes.closeBtn} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <DialogContent className={classes.contentWrap}>
            <MapModal
              onClose={() => setOpenMapModal("")}
              center={locationAppartmentInfo}
            />
          </DialogContent>
        </Dialog>
      </div>

      <NewReview />
      <ListReviews />
    </div>
  );
};

export default RoomDetails;
