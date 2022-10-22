import Button from "@Commons/atom/button";
import { SAVE } from "@Constants/button";

const SettingsSubmit = () => {
  return (
    <Button
      size="small"
      color="primary"
      type="submit"
      className="dark:bg-neutral-900 w-full max-w-[150px]"
    >
      {SAVE}
    </Button>
  );
};

export default SettingsSubmit;
