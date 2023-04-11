import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// FIXME - This should have a proper infrastructure/domain/data layer but for now,
// I'm just going to put it here for test analytics, once validated, I'll move it to the proper place

export interface IFirebaseAnalyticsConfig {
  apiKey: string;
  projectId: string;
  appId: string;
  authDomain: string;
  databaseURL: string;
  storageBucket: string;
  messagingSenderId: string;
  measurementId: string;
}

export interface IFbAnalyticsClient {
  log: (eventName: string, eventParams?: Record<string, any>) => void;
}

class FbAnalyticsClient implements IFbAnalyticsClient {
  constructor(private readonly config: IFirebaseAnalyticsConfig) {}

  log(eventName: string, eventParams?: Record<string, any>) {
    const app = initializeApp(this.config);
    const analytics = getAnalytics(app);
    logEvent(analytics, eventName, eventParams);
  }
}

export default FbAnalyticsClient;
