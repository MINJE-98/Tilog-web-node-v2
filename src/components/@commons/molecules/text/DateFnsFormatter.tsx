import { HTMLAttributes } from "react";

import Paragraph from "@Commons/atom/paragraph";
import changeDateToDateFnsFormat from "@DateFns/changeDateToDateFnsFormat";

interface PublishDateProps extends HTMLAttributes<HTMLParagraphElement> {
  date: string;
}

const DateFnsFormatter = ({ date }: PublishDateProps) => {
  const dateFnsFormat = changeDateToDateFnsFormat(date);
  return (
    <Paragraph color="gray" fontSize="small">
      {dateFnsFormat}
    </Paragraph>
  );
};

export default DateFnsFormatter;
