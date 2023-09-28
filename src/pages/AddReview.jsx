import { useContext, useState } from "react";
import { ReviewContext } from "../ReviewContext";

export default function AddReview() {

    const context = useContext(ReviewContext);

    return <>
     <h1>Add new review</h1>
    </>
}