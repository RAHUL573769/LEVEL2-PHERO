import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

export function DefaultStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        placeholder={""}
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step
          placeholder={""}
          onClick={() => setActiveStep(0)}
          className="px-8 w-fit"
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
      </Stepper>
      <div className="mt-16 flex justify-between">
        <Button placeholder={""} onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button placeholder={""} onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}
