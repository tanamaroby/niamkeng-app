import { FC, PropsWithChildren } from "react";

const ChantTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center text-center px-4 py-6 gap-3">
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-foreground">
        {children}
      </h1>
      <div className="h-1 w-14 bg-primary rounded-full" />
    </div>
  );
};

export default ChantTitle;
