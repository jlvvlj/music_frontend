import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getContractById } from "@/store/actions/contracts.action";

const Contracts = () => {
  const dispatch = useDispatch();
  const { contractbyID }: any = useSelector<RootState>(
    (state: any) => state.contracts
  );

  const getContractByID = (id: string) => {
    return dispatch<any>(getContractById(id));
  };

  return {
    contractbyID,
    getContractByID,
  };
};

export default Contracts;
