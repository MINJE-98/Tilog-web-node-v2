import {
  SetLikedRequestDto,
  UnsetLikedRequestDto,
} from "@til-log.lab/tilog-api";

type LikedRequestDto = SetLikedRequestDto | UnsetLikedRequestDto;

export default LikedRequestDto;
