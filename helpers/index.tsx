import axios from "../services/axios";

type Errors = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirm_password: string;
};

const validate = (values) => {
  const errors = {} as Errors;
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Required";
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = "Passwords do not match";
  }

  return errors;
};

//Sign up helper function
const signup = async (userDetails: any, refId: string = "") => {
  try {
    const data: any = await axios.post("/users/signup", userDetails, {
      params: {
        refId,
      },
    });
    return data;
  } catch (error) {
    return error.response?.data?.data;
  }
};

const checkEmail = async (email: string) => {
  try {
    const data: any = await axios.post("/users/check-email", { email });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};

const resendEmail = async (email: string) => {
  try {
    const data: any = await axios.post("/users/resend-email", { email });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};

const confirmEmail = async (email: any, code: any) => {
  try {
    const data = await useGETFetch(
      "GET",
      `/users/confirm-email?code=${code}&email=${email}`
    );
    return data;
  } catch (error) {
    return error.response?.data;
  }
};

const authenticate = async (token: string): Promise<any> => {
  try {
    const data = await axios.get("/users/verify-token", { params: { token } });
    return data;
  } catch (error) {
    return error.response?.data;
  }
};

const getUserProfile = async (config: any) => {
  const access_token = localStorage.getItem("client_token");
  try {
    const data = await axios.get(config);
    return data.data;
  } catch (error) {
    return error;
  }
};

const getUserProfileSSR = async (config: any) => {
  try {
    const data = await axios.get(config[0], {
      headers: { Authorization: config[1] },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

const loginUser = async (values: any) => {
  try {
    const data = await axios.post("/users/signin", { values });
    return data.data;
  } catch (error) {
    return error.response;
  }
};

const logoutUser = async (token) => {
  const access_token = localStorage.getItem("client_token");
  try {
    const data = await axios.post("/users/logout");
    return data;
  } catch (error) {
    return error;
  }
};

const jwtDecode = (token: string) => jwt(token);

const getRecoveryMail = async (email: string) => {
  try {
    const response = await axios.post("/users/forgot-password", { email });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

const resetPassword = async (data: any) => {
  try {
    const response = await axios.patch("/users/reset-password", data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

const updateRecords = async <T>(data: T) => {
  const access_token = localStorage.getItem("client_token");
  try {
    const response = await axios.patch("/users/update-record", data, {
      // headers: {
      //   // Authorization: access_token,
      // },
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

const updateDetails = async (data) => {
  const access_token = localStorage.getItem("client_token");
  try {
    const response = await fetch("/users/update-details", {
      method: "POST",
      mode: "cors",
      headers: {
        //   // "Content-Type":"multipart/form-data",
        Authorization: `Bearer ${access_token}`,
      },
      body: data,
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const getAllIssues = async () => {
  try {
    const response = await axios.get("/users/get-personal-issues");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const chooseIssue = async (issue: any) => {
  try {
    const response = await axios.post("/users/add-personal-issue", { issue });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const registerForModule = async (moduleData: {
  moduleName: string;
  id: string;
  userDetails: { [indentifier: string]: string };
}) => {
  try {
    const response = await axios.post("/users/register-module", { moduleData });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserModules = async (moduleId: string) => {
  try {
    const response = await axios.get(`/users/get-user-module/${moduleId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getModule = async (moduleId) => {
  try {
    if (moduleId) {
        const response = await axios.get(`/module/${moduleId}`);
        return response.data;
    }
    else {
        const response = await axios.get(`/module`);
        return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const sendScores = async (results) => {
  try {
    const response = await axios.post("/users/add-scores", { results });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const checkIfQuestionWasAnswered = async (data) => {
  try {
    const response = await axios.post("/users/question-verify", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getCurrentScore = async () => {
  try {
    const response = await axios.get("/users/question-points");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const hasRegisteredForModule = async (id) => {
  try {
    const response = await axios.get(`/users/registered-for-module/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addProjectIdea = async (idea) => {
  try {
    const response = await axios.post("/users/add-project-idea", idea);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getProjectIdeas = async () => {
  try {
    const response = await axios.get("/users/get-project-ideas");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updateProjectIdea = async (data) => {
  try {
    const response = await axios.put("/users/update-project-idea", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addProjectPictures = async (data) => {
  try {
    const response = await axios.post("/users/add-project-pictures", data, {
      headers: {},
    });
  } catch (error) {
    console.log(error);
  }
};

const addProjectReport = async (data) => {
  try {
    const response = await axios.post("/users/add-project-report", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getProjectReports = async () => {
  try {
    const response = await axios.get("/users/get-project-reports");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserAllModules = async () => {
  try {
    const response = await axios.get("/users/get-all-user-modules");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserAllSubModules = async (id) => {
  try {
    const response = await axios.get(`/users/get-all-user-submodules/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getCerts = async (moduleId) => {
  try {
    const response = await axios.get(`/certificate/module/${moduleId}`);
    console.log(response.data.data[0].image);
    return response.data;
  } catch (error) {
    const response = await axios.get(`/certificate/module/${moduleId}`);
    if (response.data.data.length === 0) {
      return response.data;
    }
    console.log(error);
  }
};

const getModuleCerts = async (id) => {
  try {
    const response = await axios.get(`/users/certificates/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getModules = async () => {
  try {
    const response = await axios.get("/users/modules");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addShowcaseItem = async (item) => {
  try {
    const response = await axios.post("/users/showcase", item);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getShowcaseItems = async () => {
  try {
    const response = await axios.get("/users/showcase");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addStory = async (data) => {
  try {
    const response = await axios.post("/users/fam-story", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getStories = async () => {
  try {
    const response = await axios.get("/users/fam-story");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addComment = async (comment) => {
  try {
    const response = await axios.patch("/users/fam-story", comment);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getCommentById = async (id) => {
  try {
    const response = await axios.get(`/users/fam-story-comments/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserTrueScore = async (userId, moduleId) => {
  try {
    const response = await axios.get(`users/user-true-score/${userId}/${moduleId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getSubModuleDetails = async (moduleId) => {
  try {
    const response = await axios.get(`module/submodule/${moduleId}/module/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserRegisteredModules = async () => {
  try {
    const response = await axios.get(`/users/get-registered-modules/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getModuleCurrentScore = async (moduleId) => {
  try {
    const response = await axios.get(`/users/get-module-score/${moduleId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserReferralInfo = async () => {
  try {
    const response = await axios.get(`/users/get-referral-info/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllDailyContents = async () => {
  try {
    const response = await axios.get(`/daily-content/get-all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export type { Errors };

export {
  validate,
  addStory,
  addComment,
  sendScores,
  getCommentById,
  getStories,
  addShowcaseItem,
  getModules,
  getShowcaseItems,
  addProjectReport,
  getUserAllModules,
  getUserAllSubModules,
  getCerts,
  getModuleCerts,
  getProjectReports,
  addProjectIdea,
  getProjectIdeas,
  addProjectPictures,
  updateProjectIdea,
  getCurrentScore,
  signup,
  hasRegisteredForModule,
  updateRecords,
  checkEmail,
  checkIfQuestionWasAnswered,
  resendEmail,
  registerForModule,
  getUserModules,
  getUserProfile,
  confirmEmail,
  jwtDecode,
  authenticate,
  getUserProfileSSR,
  logoutUser,
  loginUser,
  getRecoveryMail,
  resetPassword,
  updateDetails,
  getAllIssues,
  chooseIssue,
  getModule,
  getUserTrueScore,
  getSubModuleDetails,
  getUserRegisteredModules,
  getModuleCurrentScore,
  getUserReferralInfo,
  getAllDailyContents
};
