import { type ProfileDataModel } from "@/domain/models/profile-data-model";
import HomeClient from "@/presentation/pages/home";
import { type Metadata } from "next";

async function getData(): Promise<ProfileDataModel> {
  const fbUrl = process.env.FIREBASE_DB_URL;

  if (!fbUrl) {
    throw new Error("Firebase URL not defined");
  }

  const data = await fetch(`${fbUrl}/profileData.json`, { cache: "no-store" });

  return data.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const userData = await getData();

  const thumbnailUrl = userData.profileBannerData.avatarUrl;
  const title = `${userData.profileBannerData.name} - ${userData.profileBannerData.job}`;
  const description = userData.profileBannerData.message;

  return {
    title,
    description,
    keywords: [
      ...userData.profileBannerData.name.split(" "),
      ...userData.profileBannerData.job.split(" "),
      "developer",
      "software",
      "engineer",
      "web",
      "mobile",
      "fullstack",
      "frontend",
      "backend",
      "react",
      "cypress",
      "jest",
      "typescript",
      "javascript",
      "node",
      "next",
      "storybook",
    ],
    alternates: {
      canonical: "https://henriquesouza.vercel.app/",
    },
    authors: [
      {
        name: userData.profileBannerData.name,
        url: userData.socialMediaData[0].url,
      },
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: thumbnailUrl,
          alt: "Profile image",
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}

export default async function Home() {
  const res = await getData();
  const fbAnalyticsCfg = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL ?? "",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  };

  const hasAnyEmpty = Object.values(fbAnalyticsCfg).some((v) => v.length === 0);

  if (hasAnyEmpty) {
    throw new Error("Firebase config is not complete");
  }

  return <HomeClient profileData={res} fbAnalyticsCfg={fbAnalyticsCfg} />;
}
