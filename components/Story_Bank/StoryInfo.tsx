import { Formik, Form } from "formik";
import * as Yup from "yup";
import StoryFields from "./StoryFields";

const StorySchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  subTitle: Yup.string().required("Sub title is required"),
  quote: Yup.string().required("Quote is required"),
  profileTitle: Yup.string().required("Profile title is required"),
  profileSubTitle: Yup.string().required("Profile sub title is required"),
  experienceTitle: Yup.string().required("Experience title is required"),
  experienceDescription: Yup.string().required(
    "Experience description is required"
  ),
  successStoryTitle: Yup.string().required("Success story title is required"),
  successStoryDescription: Yup.string().required(
    "Success story description is required"
  ),
});

export default function StoryInfo({
  setCreateStoryIdx,
  setInfoModule,
  setStoryInfo,
  setStoryImg,
  infoModule,
}: any) {
  return (
    <Formik
      validationSchema={StorySchema}
      initialValues={{
        title: "",
        subTitle: "",
        quote: "",
        profileTitle: "",
        profileSubTitle: "",
        experienceTitle: "",
        experienceDescription: "",
        successStoryTitle: "",
        successStoryDescription: "",
      }}
      onSubmit={(values) => {
        setStoryInfo(values);
        setCreateStoryIdx(1);
      }}
    >
      <Form>
        <StoryFields
          setStoryImg={setStoryImg}
          infoModule={infoModule}
          setInfoModule={setInfoModule}
        />
      </Form>
    </Formik>
  );
}
