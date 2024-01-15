import { TContainerProps } from "@/Types/tcontainerprops";

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto bg-red-900">
      {children}
    </div>
  );
};

export default Container;
