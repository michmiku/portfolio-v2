import { createContext } from "react";
import { GlobalStateService } from "./globalStateMachine";

interface StateContextType {
  globalStateService: GlobalStateService;
}

export const GlobalStateContext = createContext({} as StateContextType);
