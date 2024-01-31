import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  getAllTrackTotalRevenue,
  getOneTrack,
  getTrackTotalStreams,
} from "@/store/actions/tracks.action";

const Tracks = () => {
  const dispatch = useDispatch();
  const { trackTotalStreams, allTrackTotalRevenue, oneTrack }: any =
    useSelector<RootState>((state: any) => state.tracks);

  const getTrackStreams = () => {
    return dispatch<any>(getTrackTotalStreams());
  };

  const getAllTrackRevenue = () => {
    return dispatch<any>(getAllTrackTotalRevenue());
  };

  const getOneTrackData = () => {
    return dispatch<any>(getOneTrack());
  };

  return {
    trackTotalStreams,
    allTrackTotalRevenue,
    oneTrack,
    getTrackStreams,
    getAllTrackRevenue,
    getOneTrackData,
  };
};

export default Tracks;
