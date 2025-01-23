import axios from "axios";
import { LOAD_COMPANY, LOG_IN } from "../types";

let jsonconfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
let jsonformdata = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};



const loginUrl = "https://localhost:44330/api/";
const adminUrl = "https://localhost:44330/api/";
//const adminUrl = "https://localhost:44378/api/VSRAdmin/";
//const agentUrl = "https://localhost:44378/api/AgentmonitorWebAPI/";
//const callStatusUrl = "https://localhost:44378/api/callstatus/";


//const loginUrl = "https://phoneorder.co/callcenter/api/VSR/";
//const adminUrl = "https://phoneorder.co/callcenter/api/VSRAdmin/";
const agentUrl = "https://phoneorder.co/callcenter/api/AgentmonitorWebAPI/";
const callStatusUrl = "https://phoneorder.co/callcenter/api/callstatus/";
const ordersUrl = "https://phoneorder.co/callcenter/api/order/";

const RestaurantAIURL = "https://phoneorder.co/mariadb/api/VSRAdmin/";

// const loginUrl = "https://ap.voicehuddle.com/callcenter/api/VSR/";
// const adminUrl = "https://ap.voicehuddle.com/callcenter/api/VSRAdmin/";
// const agentUrl =
//   "https://ap.voicehuddle.com/callcenter/api/AgentmonitorWebAPI/";
// const callStatusUrl = "https://ap.voicehuddle.com/callcenter/api/callstatus/";
//const ordersUrl = "https://ap.voicehuddle.com/callcenter/api/order/";

export const Validatelogin = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      loginUrl + "ValidateLogin",
      JSON.stringify(ipval),
      jsonconfig
    );
    dispatch({
      type: LOG_IN,
      payload: response.data,
    });
    return response.data;
  } catch (ex) {}
};
export const AddCompany = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "Restaurant",
      ipval,
      jsonformdata
    );
    return response.data;
  } catch (ex) {}
};
// export const LoadCompany = (ipval) => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       adminUrl + "Restaurant",
//       JSON.stringify(ipval),
//       jsonconfig
//     );
//     dispatch({
//       type: LOAD_COMPANY,
//       payload: response.data,
//     });
//     return response.data;
//   } catch (ex) {}
// };
export const LoadCompany = (ipval) => async (dispatch) => {
  try {
    const response = await axios.get(adminUrl + 'Restaurant', {
      params: {
        search: ipval.search,
        pageno: ipval.pageno
      }
    });
    dispatch({
      type: LOAD_COMPANY,
      payload: response.data,
    });
    return response.data;
  } catch (ex) {
    console.error(ex);
  }
};

export const AddAgent = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "AddAgent",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const loadagentDDL = (ipval) => async (dispatch) => {
  try {
    const response = await axios.get(
      agentUrl + "Loadagentddl",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const loadlanguageDDL = (ipval) => async (dispatch) => {
  try {
    const response = await axios.get(
      agentUrl + "Loadagentlanguage",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const LoadAgent = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "LoadAgents",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const AddCustomerinfo = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "AddCustomerinfo",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Loadcompanyddl = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      callStatusUrl + "loadcompanyddl",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const LoadUploadedaudio = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      callStatusUrl + "loadallmenuaudio",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

// export const Uploadaudio = (ipval) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       callStatusUrl + "uploadmenuaudio",
//       ipval,
//       jsonformdata
//     );
//     return response.data;
//   } catch (ex) {}
// };

export const Deleteuploadaudio = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      callStatusUrl + "deletemenuaudio",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const Welcomeaudio = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "Welcomeaudio",
      ipval,
      jsonformdata
    );
    return response.data;
  } catch (ex) {}
};

export const ListWelcomeaudio = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "Loadwelcomeaudio",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const Deleteaudio = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "Deletewelcomeaudio",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const UpdateOrderStatus = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      ordersUrl + "bulkupdateorderstatus",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const LoadErroraudio = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      callStatusUrl + "listerroraudio",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const Erroraudiotext = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      callStatusUrl + "erroraudiotext",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const Loadorderlist = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      callStatusUrl + "listwhatsappitems",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const LoadrestaurantInput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "LoadrestaurantInput",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Loadmusiconhold = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Loadmusiconhold",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Loadqueues = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Loadqueues",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Loadqueuemember = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Loadqueuemember",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Loadagent = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Loadagentdetails",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Adddtmfinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "AddrestaurantInput",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Editdtmfinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "UpdaterestaurantInput",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Deletedtmfinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "DeleterestaurantInput",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const Addqueueinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Addqueues",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Editqueueinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Updatequeues",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Deletequeueinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Deletequeues",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Addmusiconinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Addmusiconhold",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Editmusiconinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Updatemusiconhold",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Deletemusiconinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Deletemusiconhold",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const AddQmemberinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Addqueuemember",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Editqmemberinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Updatequeuemember",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Deleteqmemberinput = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Deletequeuemember",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const Agentdetails = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      RestaurantAIURL + "Agentdetails",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const addGpt = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "gptdetails",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
export const ListGptdetails = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "loadgptdetails",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const Deletegpt = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      adminUrl + "Deletegpt",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const Uploadaudio = (ipval) => async (dispatch) => {
  try {
    const response = await axios.post(
      callStatusUrl + "uploadmenuaudiobyname",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};

export const Downloadallmenu = (ipval) => async (dispatch) => {
  try {
    const response = await axios.get(
      adminUrl + "Downloadallmenu?Customerid=0",
      JSON.stringify(ipval),
      jsonconfig
    );
    return response.data;
  } catch (ex) {}
};
