import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  createNewContract,
  getContractById,
} from "@/store/actions/contracts.action";

const Contracts = () => {
  const dispatch = useDispatch();
  const { contractbyID, newContract }: any = useSelector<RootState>(
    (state: any) => state.contracts
  );

  const getContractByID = (id: string) => {
    return dispatch<any>(getContractById(id));
  };

  const createContract = (contract: any) => {
    return dispatch<any>(createNewContract(contract));
  };

  return {
    contractbyID,
    getContractByID,
    newContract,
    createContract,
  };
};

export default Contracts;
