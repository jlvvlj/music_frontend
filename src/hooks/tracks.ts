import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  getAllTrackTotalRevenue,
  getTrackTotalStreams,
} from "@/store/actions/tracks.action";

const Tracks = () => {
  const dispatch = useDispatch();
  const { trackTotalStreams, allTrackTotalRevenue }: any =
    useSelector<RootState>((state: any) => state.tracks);

  const getTrackStreams = () => {
    return dispatch<any>(getTrackTotalStreams());
  };

  const getAllTrackRevenue = () => {
    return dispatch<any>(getAllTrackTotalRevenue());
  };

  return {
    trackTotalStreams,
    allTrackTotalRevenue,
    getTrackStreams,
    getAllTrackRevenue,
  };
};

export default Tracks;
