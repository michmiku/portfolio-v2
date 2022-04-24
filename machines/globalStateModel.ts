import { createModel } from "xstate/lib/model";

const globalStateModel = createModel({
  //initial context value
  past: [],
  future: [],
});

export default globalStateModel;
