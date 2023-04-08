import { type FirebaseGetDataClient } from "@/data/protocols/firebase";
import { type ProfileDataModel } from "@/domain/models/profile-data-model";

export class FirebaseGetDataSpy implements FirebaseGetDataClient {
  async get(path: string): Promise<ProfileDataModel> {
    return Promise.resolve({
      email: "any_email",
      profileBannerData: {
        name: "any_name",
        job: "any_job",
        avatarUrl: "any_avatar_url",
        message: "any_message",
      },
      aboutMe: "any_about_me",
      jobSignatures: [],
      skillList: [],
      socialMediaData: [],
      projects: [],
    });
  }
}
