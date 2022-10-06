import dynamic from "next/dynamic";

import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";

import PrivateSubmit from "@Commons/molecules/buttons/writer/PrivateSubmit";
import PublicSubmit from "@Commons/molecules/buttons/writer/PublicSubmit";
import SubTitleInput from "@Commons/molecules/input/writer/SubTitleInput";
import TitleInput from "@Commons/molecules/input/writer/TitleInput";
import SearchCategory from "@Models/writer/input/category-search";
import CoverImage from "@Models/writer/input/cover-image";

import WriterFormTypes from "@Api/post/interface/writerFormTypes";

const TiptapEditor = dynamic(
  () => import("@Commons/molecules/text-area/TiptapEditor"),
  {
    ssr: false,
  }
);

interface WriterFormProps {
  method: UseFormReturn<WriterFormTypes>;
  onSubmit: SubmitHandler<WriterFormTypes>;
}

const WriteFormProvider = ({ method, onSubmit }: WriterFormProps) => {
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>
        <CoverImage />
        <TitleInput />
        <SubTitleInput />
        <SearchCategory />
        <TiptapEditor />

        <div className="flex w-[300px] mt-3 space-x-5 ml-auto">
          <PrivateSubmit setValue={method.setValue} />
          <PublicSubmit setValue={method.setValue} />
        </div>
      </form>
    </FormProvider>
  );
};

export default WriteFormProvider;
