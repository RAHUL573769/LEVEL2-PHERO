import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: TContainerProps) => {
  return (
    <div className="bg-red-500 h-screen w-full max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
