import toast from "react-hot-toast";

import OpacityOverlay from "@Commons/atom/OpacityOverlay";
import PostThumbnailImage from "@Commons/molecules/images/PostThumbnailImage";
import AddImageLabel from "@Commons/molecules/label/AddImageLabel";
import EditImageLabel from "@Commons/molecules/label/EditImageLabel";
import RemoveImageLabel from "@Commons/molecules/label/RemoveImageLabel";
import useFormTitleWatching from "@Models/writer/input/cover-image/hooks/useFormTitleWatching";
import useOnPointerEnter from "@Models/writer/input/cover-image/hooks/useOnPointerEnter";
import usePreview from "@Models/writer/input/cover-image/hooks/usePreview";

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
        <PostThumbnailImage
          fontSize="2xl"
          title={title}
          id="3729"
          thumbnailUrl={preview}
        />
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
      <PostThumbnailImage title={title} id="0" thumbnailUrl={preview} />
    </div>
  );
};
export default ImagePreView;
