import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

import { JUST_NOW, ONE_MINUTE, ONE_YEAR } from "@Constants/date-fns";

export default function changeDateToDateFnsFormat(date: string): string {
  const postingDate = new Date(date).getTime();
  const currentDate = Date.now();
  const diff = (currentDate - postingDate) / 1000;

  if (diff < ONE_MINUTE) {
    return JUST_NOW;
  }

  if (diff < ONE_YEAR) {
    return formatDistanceToNow(postingDate, {
      addSuffix: true,
      locale: ko,
    });
  }

  return format(postingDate, "PPP", { locale: ko });
}
