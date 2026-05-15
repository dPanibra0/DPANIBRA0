import { initObservableAnimation } from "./observable";
import { initResilientAnimation } from "./resilient";
import { initScalabilityAnimation } from "./scalability";

export const initMicroservicesAnimations = () => {
  initScalabilityAnimation();
  initObservableAnimation();
  initResilientAnimation();
};
