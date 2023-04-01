import { type ProfileDataModel } from "@/domain/models/profile-data-model";
import HomeClient from "@/presentation/pages/home";

async function getData(): Promise<ProfileDataModel> {
  const fbUrl = process.env.FIREBASE_DB_URL;

  if (!fbUrl) {
    throw new Error("Firebase URL not defined");
  }

  const data = await fetch(`${fbUrl}/profileData.json`, { cache: "no-store" });

  return data.json();
}

export default async function Home() {
  const res = await getData();

  return <HomeClient profileData={res} />;
}
