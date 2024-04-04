import axios from "axios";
import { propertyAction } from "./property-slice";
//action creator to fetch properties
export const getAllProperties = () => async (dispatch, getState) => {
  try {
    dispatch(propertyAction.getRequest());
    //for searching
    const { searchParams } = getState().properties;
    const response = await axios.get(`/api/v1/rent/listing`, {
      params: { ...searchParams },
    });
    if (!response) {
      throw new Error("Could not fetch any Properties");
    }
    const { data } = response;
    console.log(data);
    dispatch(propertyAction.getProperties(data));
  } catch (error) {
    dispatch(propertyAction.getErrors(error.message));
  }
};
