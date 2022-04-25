import { RefObject } from "react";
import { EventObject, Sender, StateValue } from "xstate";

export interface WindowDimensions {
  width: number;
  height: number;
}

export interface Component {
  elementRef: RefObject<HTMLElement>;
}

export interface Navigtaion {
  send: Sender<EventObject>;
  currentState: StateValue;
}
