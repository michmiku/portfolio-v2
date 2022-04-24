import globalStateModel from "./globalStateModel";
import { ActorRefFrom } from "xstate";

const globalStateMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QFsCGBLAdgOgBZlQjACcBiKAewBUKBlAa3QBsn4kQAHC2dAF3QqZEoAB6IAtAGYArACZsMgGwBOZQAYALLIAca6QHYANCACeE2fuXZZsudLXLtijfv3SAvu+Nos2WIxZYcmoKAAkCImJhTm4+ASF2MQRxG2xtSW0ddI1JSzV9XOMzZIztbABGJWlHbX1K2UlPbwwcf2ZWYJoAQQAjCgBXXgBZMGiuHn5BaKSUqxzHaUU9cpdFQtMJTOtq5Vt9Bxdy-UUmkB8cVD7Bkc66ANYx2MmE0QlJGWwNDTVJRWrFVwZcpFTbyWyqNTaZSLSRqNRHU7nbCXAbDMC3AAKFGIvAAZhQmAJHhN4tMJNUNGkNFDtEdaa5NCCEFsXLJqcp9DlZIpsoiWsirmjbuFCCRiXEpolycpythFq57DzSjKmVJtGVKotqtJYTzyso+b4uDj8YSKLdeqiRuLnmTkrI5pJHIpudDyotlO9VeUytodoolpZ7Lp9IacMa8QSBLcAMKCXioADGvBtpKl9ukstqBnKAKhalsPyZlX0cscsnh+v2uTD2AjpujlBoIsiqclrwQ9WwHMz9kq7o0uyMGxKkllPrHOaW5QOjS8Z35ifjSd4mOxkbNbZeICSE8+Nh5Ll0Dh+siZ3NluwDcOdTosofnSKXmATyeFETF7HGEu3M0zpa0Csxz9WQVh9VUHUUbBLABb41i+XRtE8edMAoIg2BQfl8FFKIvyeNMOykF1uwDXJ9QaGV9G0VUnUpNZFmcB1ajURRylrNpAi3O1xC7L4VkkB1YU5HUIL9aDbDZfZQI0P4ZNrFFrlGPCSXbHcJCWNQFGhWoxzHGTlEUVV1WgnZQM5L5qlcWt6yjCguPTH1NIaTNdm0DRpEyZymTcbt9DZT19kyXR3lrZ9XxTZSf24yQtDSBojh+SxVADYdilsaR92vQdM2+Fww3swiXUpJ0PIKft9MMkdxBk0t6OvAzfnKB1kPcIA */
  globalStateModel.createMachine({
    context: globalStateModel.initialContext,
    tsTypes: {} as import("./globalStateMachine.typegen").Typegen0,
    initial: "header",
    states: {
      header: {
        on: {
          goToSkills: {
            target: "skills",
          },
        },
      },
      skills: {
        on: {
          goToHeader: {
            target: "header",
          },
          goToAboutMe: {
            target: "aboutMe",
          },
        },
      },
      aboutMe: {
        on: {
          goToSkills: {
            target: "skills",
          },
          goToPortfolio: {
            target: "portfolio",
          },
          goToHeader: {
            target: "header",
          },
        },
      },
      portfolio: {
        on: {
          goToAboutMe: {
            target: "aboutMe",
          },
          goToContact: {
            target: "contact",
          },
          goToHeader: {
            target: "header",
          },
        },
      },
      contact: {
        on: {
          goToPortfolio: {
            target: "portfolio",
          },
          goToHeader: {
            target: "header",
          },
        },
      },
    },
    id: "main",
  });
export default globalStateMachine;
export type GlobalStateService = ActorRefFrom<typeof globalStateMachine>;
