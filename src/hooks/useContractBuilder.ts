import { ContractBuilderContext } from "@/contexts/ContractBuilderContext";
import { useContext } from "react";

export default function useContractBuilder() {
  const contractBuilderContext = useContext(ContractBuilderContext);

  if (!contractBuilderContext) {
    throw new Error("useContractBuilder should be used in ContractBuilderContextProvider");
  }

  return contractBuilderContext;
}
