export interface Transitions {
  hover: string;
  fadeAll: string;
  transform: string;
}

export const createTransitions = (): Transitions => ({
  hover: "0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s",
  fadeAll: "0.35s cubic-bezier(0.445,0.05,0.55,0.95) 0.35s",
  transform: "transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s"
});
