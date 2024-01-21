import { TContainerProps } from "@/types/AllTypes";

const Container = ({ children }: TContainerProps) => {
  return <div className=" h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
