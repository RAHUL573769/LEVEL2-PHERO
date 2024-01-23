/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

export function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        placeholder={""}
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step
          className="px-8 w-fit"
          placeholder={""}
          onClick={() => setActiveStep(0)}
        >
          Quiz List
        </Step>
        <Step
          className="px-8 w-fit"
          placeholder={""}
          onClick={() => setActiveStep(1)}
        >
          Add Quiz
        </Step>
        <Step placeholder={""} onClick={() => setActiveStep(2)}>
          3
        </Step>
      </Stepper>
    </div>
  );
}
