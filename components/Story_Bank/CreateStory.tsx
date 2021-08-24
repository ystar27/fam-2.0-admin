import StoryFinish from './StoryFinish';
import StoryInfo from './StoryInfo';
import StoryQuestion from './StoryQuestion';

export default function CreateStory() {
  return (
    <div className={"p-5 px-8"}>
      <div
        className={
          "w-full mb-5 uppercase text-sm text-gray-600 grid grid-cols-3"
        }
      >
          <h5>Fill out Story Information</h5>
          <div className={'flex justify-center items-center'}>
          <h5>Fill out Story Questions</h5>
          </div>
          <div className={'flex justify-end items-center'}>
          <h5>Finished</h5>
          </div>
        </div>
      <div
        className={
          "flex w-full px-5 items-center justify-between text-sm text-gray-600"
        }
      >
        <div className="flex flex-1 items-center">
          <div className={"flex flex-col items-center justify-center"}>
            <h5
              className={"p-1 px-2 rounded-full bg-gray-200 text-xs text-white"}
            >
              1
            </h5>
          </div>
          <div className="h-0.5 flex-1 bg-gray-300"></div>
        </div>
        <div className={"flex flex-col items-center justify-center"}>
          <h5
            className={"p-1 px-2 rounded-full bg-gray-200 text-xs text-white"}
          >
            2
          </h5>
        </div>
        <div className="flex flex-1 items-center">
          <div className="h-0.5 flex-1 bg-gray-300"></div>
          <div className={"flex flex-col items-center justify-center"}>
            <h5
              className={"p-1 px-2 rounded-full bg-gray-200 text-xs text-white"}
            >
              3
            </h5>
          </div>
        </div>
      </div>
      <div>
        {/* <StoryInfo /> */}
        {/* <StoryQuestion /> */}
        <StoryFinish />
        </div>
    </div>
  );
}
