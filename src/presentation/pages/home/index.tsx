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
import Row from "@/presentation/components/row";

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
    <div className="hidden xl:block absolute -left-24 h-5/6">
      <Lateral
        content={profileData.socialMediaData.map((social, i) => (
          <IconButton
            openNewPage
            key={i}
            icon={social.icon}
            href={social.url}
            customClass="mb-4"
          />
        ))}
      />
    </div>
  );

  const LateralRight = () => (
    <div className="hidden xl:block absolute -right-24 h-5/6">
      <Lateral content={profileData.email} />
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
      <Board skills={profileData?.skillList ?? []} />
    </Chapter>
  );

  const MyPortfolio = () => (
    <Chapter
      title="My Portfolio"
      description="Some of my projects and works."
      id={3}
    >
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
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
    <>
      <div className="container m-0 p-0 w-full">
        <div className="sm:flex flex-row">
          <Header menuItens={options} />
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg mt-4 sm:mt-0">
        <div
          className="
            relative
            pb-2
            mobile:pb-3
            sm:pb-4
            md:pb-5
            lg:pb-6
            flex
            flex-row
            justify-center"
        >
          <LateralLeft />
          <ProfileBannerComponent />
          <LateralRight />
        </div>
        <Row>
          <AboutMe />
        </Row>
        <Row>
          <MySkills />
        </Row>
        <Row>
          <MyPortfolio />
        </Row>
        <Row>
          <MyWorkCareer />
        </Row>
      </div>
    </>
  );
};

export default Home;
