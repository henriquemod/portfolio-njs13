import type * as React from "react";

interface IProps {
  children: React.ReactNode;
}

const Row = (props: IProps) => {
  return (
    <div className="pb-2 mobile:pb-3 sm:pb-4 md:pb-5 lg:pb-6">
      {props.children}
    </div>
  );
};

export default Row;
