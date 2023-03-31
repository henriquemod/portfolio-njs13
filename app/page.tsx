import type { ProfileDataModel } from "@/domain/models/profile-data-model";
import HomeClient from "@/presentation/pages/home";

export async function getData(): Promise<{
  res: ProfileDataModel;
}> {
  const res = await fetch(
    `${process.env.ENDPOINT ?? "http://localhost:3000"}/profile-data`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return <HomeClient profileData={data.res} />;
}
