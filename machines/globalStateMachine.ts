import globalStateModel from "./globalStateModel";
import { ActorRefFrom } from "xstate";

const globalStateMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QFsCGBLAdgYigewBU8AJMVCMAJ0VAAc9Z0AXdPTGkAD0QFoA2AEwAGAHQBOAOwC+EmQBYBEoWIAcAGhABPXhJUi5QiQoCsQgMwTjZvnwC+tjWiy5CeAIIAjPAFcmAWTAOekYWNg5uBB5rYxFlMxUVIQBGMzE5OQkxYw1tBCSRPiSBBLlTYzl4xQt7RwwcfCIAZQBrdAAbNvgkEGDmVnZuiJ4BJL4RFT45Gwni42MZMxzeIr0+SXm5IrMzJIlrGpAnetcABTxKJgAzPDbWIIY+sMHlmNG+FTlJCT2xcxUBJZ5AorD5lCr-PYSA5HFxEADCbCYqAAxkx7iF+uFEEkhDEhHwhOZZHwzPMkklATxyaIzAIBDsJuU5roVPYHCBMHgKF0UHURAALMgUajdXqhAagIaCfJJCYqIz-YyKXaA97A+JKpIKARiMQ2aF82CtDo8noPcVYyJJSQiUYqWVCFTGLX0j6q1YpJ0jbW6tYGrAiVBeXwBdGPCVcXjWCQiWlCCqZYoWDJ8d3qr0unV6sT+zAiegXa63PBhi3PSLbfSSBICYwqMTxQwSNOFDXeum+uzso4iZGIlFo0XmzHlnFmWNScrSGSFCaprSINWtjM+7O50sjyW8SavOUK2vK5sLyIjcdrSyfKTxiy7Nm2IA */
  globalStateModel.createMachine({
    context: globalStateModel.initialContext,
    tsTypes: {} as import("./globalStateMachine.typegen").Typegen0,
    on: {
      goToHeader: {
        target: ".header",
      },
      goToAboutMe: {
        target: ".aboutMe",
      },
      goToSkills: {
        target: ".skills",
      },
      goToPortfolio: {
        target: ".portfolio",
      },
      goToContact: {
        target: ".contact",
      },
    },
    initial: "header",
    states: {
      header: {},
      skills: {},
      aboutMe: {},
      portfolio: {},
      contact: {},
    },
    id: "main",
  });
export default globalStateMachine;
export type GlobalStateService = ActorRefFrom<typeof globalStateMachine>;
