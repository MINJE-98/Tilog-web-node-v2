const oauthProvider = {
  GITHUB: "GITHUB",
} as const;

type OauthProvider = typeof oauthProvider[keyof typeof oauthProvider];

export interface Users {
  id: number;
  userName: string;
  proFileImageURL: string;
  mailAddress: string;
  provider: OauthProvider;
  providerServiceId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
