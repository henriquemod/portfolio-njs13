"use client";
import { type ProfileDataModel } from "@/domain/models/profile-data-model";
import Board from "@/presentation/components/board";
import Card from "@/presentation/components/card";
import Chapter from "@/presentation/components/chapter";
import Header, { type IMenuItem } from "@/presentation/components/header";
import IconButton from "@/presentation/components/icon-button";
import JobSignature from "@/presentation/components/job-signature";
import Lateral from "@/presentation/components/lateral";
import ProfileBanner from "@/presentation/components/profile-banner";
import Styles from "./styles.module.scss";

const LEFT_LATERAL_STYLE: React.CSSProperties = {
  position: "absolute",
  left: "-550px",
  top: "-30px",
};

const RIGHT_LATERAL_STYLE: React.CSSProperties = {
  position: "absolute",
  right: "60px",
  top: "70px",
};

const options: IMenuItem[] = [
  {
    label: "About",
    url: "#bout-me-chapter",
  },
  {
    label: "Skills",
    url: "#my-skills-chapter",
  },
  {
    label: "Portfolio",
    url: "#my-portfolio-chapter",
  },
  {
    label: "Career",
    url: "#my-work-career-chapter",
  },
  {
    label: "Contact",
    url: "/",
  },
];

interface IProps {
  profileData: ProfileDataModel;
}

const Home = (props: IProps): JSX.Element => {
  const { profileData } = props;

  const ProfileBannerComponent = () => (
    <ProfileBanner
      avatarUrl={profileData.profileBannerData.avatarUrl}
      handleContactClick={() => {}}
      name={profileData.profileBannerData.name}
      job={profileData.profileBannerData.job}
      message={profileData.profileBannerData.message}
    />
  );

  const LateralLeft = () => (
    <div className={Styles.sideBlock}>
      <Lateral
        rotateIcons
        style={LEFT_LATERAL_STYLE}
        content={profileData.socialMediaData.map((social, i) => (
          <IconButton
            openNewPage
            key={i}
            icon={social.icon}
            href={social.url}
          />
        ))}
      />
    </div>
  );

  const LateralRight = () => (
    <div className={Styles.sideBlock}>
      <Lateral style={RIGHT_LATERAL_STYLE} content={profileData.email} />
    </div>
  );

  const AboutMe = () => (
    <Chapter title="About me" description={profileData?.aboutMe} id={1} />
  );

  const MySkills = () => (
    <Chapter
      id={2}
      title="My Skills"
      description="I little bit about my skills and what I can do for you."
    >
      <div className={Styles.row}>
        <Board skills={profileData?.skillList ?? []} />
      </div>
    </Chapter>
  );

  const MyPortfolio = () => (
    <Chapter
      title="My Portfolio"
      description="Some of my projects and works."
      id={3}
    >
      <div className={`${Styles.row} ${Styles.grid}`}>
        {profileData?.projects.map((portfolio, i) => (
          <Card
            key={i}
            title={portfolio.title}
            message={portfolio.message}
            tags={portfolio.tags}
            actions={portfolio.actions}
          />
        ))}
      </div>
    </Chapter>
  );

  const MyWorkCareer = () => (
    <Chapter id={4} title="My Work Career">
      {profileData?.jobSignatures.map((jobSignature) => (
        <JobSignature
          key={jobSignature.id}
          companyName={jobSignature.company}
          jobTitle={jobSignature.job}
          period={jobSignature.period}
        />
      ))}
    </Chapter>
  );

  return (
    <div className={Styles.container}>
      <div className={Styles.headerContainer}>
        <div className={`${Styles.lateralContainer}`}>
          <LateralLeft />
          <Header align="right" menuItens={options} />
          <LateralRight />
        </div>
      </div>
      <div className={Styles.row}>
        <ProfileBannerComponent />
      </div>
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <MyWorkCareer />
    </div>
  );
};

export default Home;
