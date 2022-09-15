import { Dispatch, SetStateAction } from "react";

import GetMeResponse from "@Api/users/interface/getMeResponse";

type SetUserInfoType = Dispatch<SetStateAction<GetMeResponse | null>>;

export default SetUserInfoType;
