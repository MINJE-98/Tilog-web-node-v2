import { useFormContext } from "react-hook-form";

import Heading from "@Commons/atom/heading";
import TextInput from "@Commons/atom/input";
import Paragraph from "@Commons/atom/paragraph";
import { SETTINGS_INPUT_TYPE, POSITION_RULES } from "@Constants/input";
import { POSITION_LABEL } from "@Constants/text";

const PositionInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Heading level={1}>{POSITION_LABEL.TITLE}</Heading>
      <Paragraph color="gray" fontSize="small">
        {POSITION_LABEL.DESC}
      </Paragraph>
      <div tw="my-5">
        <TextInput
          fontSize="medium"
          type="underline"
          formObject={{
            inputType: SETTINGS_INPUT_TYPE.POSITION,
            register,
            rules: POSITION_RULES,
            errors,
          }}
        />
      </div>
    </div>
  );
};
export default PositionInput;
