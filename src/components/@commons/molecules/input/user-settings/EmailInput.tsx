import { useFormContext } from "react-hook-form";

import Heading from "@Commons/atom/heading";
import TextInput from "@Commons/atom/input";
import Paragraph from "@Commons/atom/paragraph";
import { SETTINGS_INPUT_TYPE, EMAIL_RULES } from "@Constants/input";
import { EMAIL_LABEL } from "@Constants/text";

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Heading level={1}>{EMAIL_LABEL.TITLE}</Heading>
      <Paragraph color="gray" fontSize="small">
        {EMAIL_LABEL.DESC}
      </Paragraph>
      <div tw="my-5">
        <TextInput
          fontSize="medium"
          type="underline"
          formObject={{
            inputType: SETTINGS_INPUT_TYPE.EMAIL,
            register,
            rules: EMAIL_RULES,
            errors,
          }}
        />
      </div>
    </div>
  );
};
export default EmailInput;
