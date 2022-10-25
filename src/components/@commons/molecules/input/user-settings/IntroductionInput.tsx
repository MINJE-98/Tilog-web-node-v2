import { useFormContext } from "react-hook-form";

import Heading from "@Commons/atom/heading";
import TextInput from "@Commons/atom/input";
import Paragraph from "@Commons/atom/paragraph";
import { SETTINGS_INPUT_TYPE, INTRO_MSG_RULES } from "@Constants/input";
import { INTRO_MSG_LABEL } from "@Constants/text";

const IntroductionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Heading level={1}>{INTRO_MSG_LABEL.TITLE}</Heading>
      <Paragraph color="gray" fontSize="small">
        {INTRO_MSG_LABEL.DESC}
      </Paragraph>
      <div tw="my-5">
        <TextInput
          fontSize="medium"
          type="underline"
          formObject={{
            inputType: SETTINGS_INPUT_TYPE.INTRO_MSG,
            register,
            rules: INTRO_MSG_RULES,
            errors,
          }}
        />
      </div>
    </div>
  );
};
export default IntroductionInput;
