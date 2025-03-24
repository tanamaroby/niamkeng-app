import { FC, PropsWithChildren } from "react";

const ChantTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center text-center px-4 py-6">
      <p className="text-3xl font-bold tracking-widest text-secondary uppercase">
        {children}
      </p>
      <div className="mt-2 h-1 w-12 bg-secondary/50 rounded-full" />
    </div>
  );
};

export default ChantTitle;
