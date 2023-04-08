import Button from "../button";
import Image from "next/image";

export interface ProfileBannerProps {
  name: string;
  job: string;
  message: string;
  avatarUrl: string;
  handleContactClick: () => void;
}

const ProfileBanner = (props: ProfileBannerProps): JSX.Element => {
  return (
    <div
      className="
    container
    max-w-full
    mx-auto
    flex
    flex-col"
    >
      <div
        className="
      flex
      flex-col-reverse
      justify-center
      mb-4
      sm:mb-8
      md:flex-row
      md:justify-between
      md:items-end"
      >
        <div
          className="
          text-center
          text-main-100
          font-bold
          text-3xl"
        >
          <h2
            className="
          sm:flex sm:justify-center sm:text-5xl
          md:justify-start"
          >
            {props.name}
          </h2>
          <h3
            className="
            text-main-100
            mobile:text-2xl
            sm:text-5xl
            md:text-start"
          >
            {props.job}
          </h3>
        </div>
        <div className="flex justify-center mb-4 sm:mb-8 md:mb-0 md:ml-8">
          <Image
            className="sticky mobile:max-w-sm"
            src={props.avatarUrl}
            width={512}
            height={512}
            alt="Profile Picture"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-xl mb-4 sm:mb-8 sm:text-2xl">{props.message}</p>
        <div className="max-w-none sm:max-w-sm">
          <Button
            size="medium"
            label="Contact Me"
            handleClick={props.handleContactClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
