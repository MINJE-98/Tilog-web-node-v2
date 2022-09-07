import { Dispatch, SetStateAction } from "react";

import GetMeResponseTransFormSettingsDto from "@Api/users/interface/getMeResponseTransFormSettingsDto";

type SetUserInfoType = Dispatch<
  SetStateAction<GetMeResponseTransFormSettingsDto | null>
>;

export default SetUserInfoType;
