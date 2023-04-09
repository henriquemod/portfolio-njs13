"use client";

interface IProps {
  label: string;
}

const Tag = (props: IProps): JSX.Element => {
  return (
    <div className="flex my-1 bg-gray-50 py-2 px-4 rounded-md sm:mr-2">
      <span className="min-w-full" role="tag">
        {props.label}
      </span>
    </div>
  );
};

export default Tag;
