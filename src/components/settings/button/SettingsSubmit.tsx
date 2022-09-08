import PrimaryButton from "@Commons/atom/buttons/PrimaryButton";
import { SAVE } from "@Constants/button";

const SettingsSubmit = () => {
  return (
    <PrimaryButton
      isSubmit
      className="dark:bg-neutral-900 w-full max-w-[150px]"
    >
      {SAVE}
    </PrimaryButton>
  );
};

export default SettingsSubmit;
