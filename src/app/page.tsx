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

  return <HomeClient profileData={res} />;
}
