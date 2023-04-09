import { type Score } from "@/domain/models/profile-data-model";

const MAX_BLOCKS = 5;

const Block = (): JSX.Element => {
  return (
    <div
      role="rank-block"
      className="w-8 h-6 mobile:w-10 mobile:h-8 sm:w-16 sm:h-12 lg:w-20 lg:h-14 ml-1 lg:ml-4 my-1 bg-main-100 rounded-md"
    />
  );
};

const BlockNone = (): JSX.Element => {
  return (
    <div
      role="rank-block-none"
      className="w-8 h-6 mobile:w-10 mobile:h-8 sm:w-16 sm:h-12 lg:w-20 lg:h-14 ml-1 lg:ml-4 my-1 bg-gray-50 rounded-md"
    />
  );
};

interface IProps {
  label: string;
  score: Score;
}

const SkillLevel = (props: IProps): JSX.Element => {
  const blocks: JSX.Element[] = [];

  for (let i = 1; i <= MAX_BLOCKS; i++) {
    if (i <= props.score) {
      blocks.push(<Block key={i} />);
    } else {
      blocks.push(<BlockNone key={i} />);
    }
  }

  return (
    <div className="flex justify-between items-center gap-2 md:py-1 lg:py-2">
      <h2 className="text-sm mobile:text-lg sm:text-2xl lg:text-4xl lg:mr-16">
        {props.label}
      </h2>
      <div className="flex">{blocks}</div>
    </div>
  );
};

export default SkillLevel;
