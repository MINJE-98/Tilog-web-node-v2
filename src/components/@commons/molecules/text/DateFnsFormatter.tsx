import { HTMLAttributes } from "react";

import changeDateToDateFnsFormat from "@DateFns/changeDateToDateFnsFormat";

interface PublishDateProps extends HTMLAttributes<HTMLParagraphElement> {
  date: string;
}

const DateFnsFormatter = ({ date, ...props }: PublishDateProps) => {
  const dateFnsFormat = changeDateToDateFnsFormat(date);
  return <p {...props}>{dateFnsFormat}</p>;
};

export default DateFnsFormatter;
