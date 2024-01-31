import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  getUserContracts,
  getUserFriends,
  getUserTracks,
} from "@/store/actions/users.action";

const Users = () => {
  const dispatch = useDispatch();
  const { userFriends, userContracts, userTracks, loading }: any =
    useSelector<RootState>((state: any) => state.users);

  const getFriends = () => {
    return dispatch<any>(getUserFriends());
  };

  const getContracts = () => {
    return dispatch<any>(getUserContracts());
  };

  const getTracks = () => {
    return dispatch<any>(getUserTracks());
  };

  return {
    userFriends,
    userContracts,
    userTracks,
    loading,
    getFriends,
    getContracts,
    getTracks,
  };
};

export default Users;
