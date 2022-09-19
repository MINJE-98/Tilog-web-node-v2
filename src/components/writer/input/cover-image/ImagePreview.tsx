import toast from "react-hot-toast";

import OpacityOverlay from "@Commons/atom/OpacityOverlay";
import PostThumbnail from "@Commons/molecules/images/PostThumbnail";
import useFormTitleWatching from "@Components/writer/input/cover-image/hooks/useFormTitleWatching";
import useOnPointerEnter from "@Components/writer/input/cover-image/hooks/useOnPointerEnter";
import usePreview from "@Components/writer/input/cover-image/hooks/usePreview";
import AddImageLabel from "@Components/writer/label/AddImageLabel";
import EditImageLabel from "@Components/writer/label/EditImageLabel";
import RemoveImageLabel from "@Components/writer/label/RemoveImageLabel";

const ImagePreView = () => {
  const { preview, resetPreview } = usePreview();
  const title = useFormTitleWatching();
  const { isPointerEnter, pointerEnter, pointerLeave } = useOnPointerEnter();
  if (!preview) {
    return (
      <div
        className="relative"
        onPointerEnter={pointerEnter}
        onPointerLeave={pointerLeave}
      >
        {isPointerEnter && (
          <>
            <OpacityOverlay />
            <div className="absolute z-30 flex items-center justify-center w-full h-full">
              <button
                type="button"
                onClick={() =>
                  toast.error(
                    "죄송해요.. \n 이미지 업로드 기능은 현재 열심히 개발중입니다!"
                  )
                }
              >
                <AddImageLabel htmlFor="image" />
              </button>
            </div>
          </>
        )}
        <PostThumbnail title={title} id="3729" thumbnailUrl={preview} />
      </div>
    );
  }
  return (
    <div
      className="relative"
      onPointerEnter={pointerEnter}
      onPointerLeave={pointerLeave}
    >
      {isPointerEnter && (
        <>
          <OpacityOverlay />
          <div className="absolute z-20 flex items-center justify-center w-full h-full gap-x-3">
            <EditImageLabel htmlFor="image" />
            <RemoveImageLabel onClick={resetPreview} />
          </div>
        </>
      )}
      <PostThumbnail title={title} id="0" thumbnailUrl={preview} />
    </div>
  );
};
export default ImagePreView;
