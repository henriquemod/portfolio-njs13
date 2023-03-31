import Button from "../button";
import Styles from "./styles.module.scss";
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
    <div className={Styles.container}>
      <div className={Styles.top}>
        <div className={Styles.title}>
          <h2 className={Styles.main}>
            <span>{`Hi i'm `}</span>
            {props.name}
          </h2>
          <h3 className={Styles.main}>{props.job}</h3>
        </div>
        <div className={Styles.profilePic}>
          <div className={Styles.profileBlock} />
          <Image src={props.avatarUrl} alt="Profile Picture" />
        </div>
      </div>
      <div className={Styles.bottom}>
        <p>{props.message}</p>
        <Button
          size="medium"
          label="Contact Me"
          handleClick={props.handleContactClick}
        />
      </div>
    </div>
  );
};

export default ProfileBanner;
