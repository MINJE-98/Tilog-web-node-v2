import { useFormContext } from "react-hook-form";

import Heading from "@Commons/atom/heading";
import TextInput from "@Commons/atom/input";
import Paragraph from "@Commons/atom/paragraph";
import { SETTINGS_INPUT_TYPE, DISPLAY_NAME_RULES } from "@Constants/input";
import { DISPLAY_NAME_LABEL } from "@Constants/text";

const DisplayNameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label>
      <Heading level={1}>{DISPLAY_NAME_LABEL.TITLE}</Heading>
      <Paragraph color="gray" fontSize="small">
        {DISPLAY_NAME_LABEL.DESC}
      </Paragraph>
      <div tw="my-5">
        <TextInput
          fontSize="medium"
          type="underline"
          formObject={{
            inputType: SETTINGS_INPUT_TYPE.DISPLAY_NAME,
            register,
            rules: DISPLAY_NAME_RULES,
            errors,
          }}
        />
      </div>
    </label>
  );
};
export default DisplayNameInput;
