import React from "react";
import "./common.css";
import { useEffect, forwardRef, useState, useRef } from "react";
import Tab from "react-bootstrap/Tab";
import ReactAudioPlayer from "react-audio-player";
import Tabs from "react-bootstrap/Tabs";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { stringAvatar } from "./avatar";
import { Overlay, Popover } from "react-bootstrap";
import istudiologo from "../../images/vslogo.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Box,
  FormControl,
  Button,
  TextField,
  MenuItem,
  Slide,
  Stack,
  Dialog,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Addcompany from "./addcompany";
import Restaurantsetup from "./restaurantsetup";
import Addagent from "./addagent";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import {
  LoadCompany,
  AddCompany,
  AddAgent,
  LoadAgent,
  AddCustomerinfo,
  Loadcompanyddl,
  LoadUploadedaudio,
  Uploadaudio,
  Deleteaudio,
  Deleteuploadaudio,
  Welcomeaudio,
  ListWelcomeaudio,
  UpdateOrderStatus,
  LoadErroraudio,
  Erroraudiotext,
  Loadorderlist,
  ListGptdetails,
  addGpt,
  Deletegpt,
  Downloadallmenu,
} from "../../store/action/index";
import { connect } from "react-redux";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
/* Dialog*/
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { Search } from "../common/search/search";
import { SearchIconWrapper } from "../common/search/searchiconwrapper";
import { StyledInputBase } from "../common/search/styledinputbase";
import { debounce } from "throttle-debounce";
import Loader from "../common/loader";
import DatePicker from "react-multi-date-picker";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const Home = ({
  loadCompany,
  addCompany,
  addAgent,
  loadAgent,
  addCustomerinfo,
  loadcompanyddl,
  loadUploadedaudio,
  uploadaudio,
  deleteaudio,
  deleteuploadaudio,
  welcomeaudio,
  listwelcomeaudio,
  updateOrderStatus,
  loadErroraudio,
  erroraudiotext,
  loadorderlist,
  listgptdetails,
  addgpt,
  deletegpt,
  downloadallmenu,
  state,
}) => {
  /* Declarations */
  let navigate = useNavigate();
  const menuId = "primary-search-account-menu";
  // const [values, setValues] = useState([
  //   new DateObject().subtract(7, "days"),
  //   new DateObject().add(0, "days"),
  // ]);
  const input = useRef(null);
  const [addcompany, setaddcompany] = useState(false);
  const [addagent, setaddagent] = useState(false);
  const [companyinfo, setCompanyinfo] = useState([]);
  const [agentinfo, setAgentinfo] = useState([]);
  const [totalrow, setTotalrow] = useState(0);
  const [totalagent, setTotalagent] = useState(0);
  const [totalcount, setTotalcount] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [pagenumber, setPageNumber] = useState(1);
  const [companydetail, setCompanydetail] = useState([]);
  const [agentdetail, setAgentdetail] = useState([]);
  const [modaltype, setModaltype] = useState("");
  const [rejectconfirm, setRejectconfirm] = useState(false);
  const [rejectaudio, setRejectaudio] = useState(false);
  const [rejectgpt, setRejectgpt] = useState(false);
  const [rejectuploadaudio, setRejectuploadaudio] = useState(false);
  const [audiodetail, setAudiodetail] = useState([]);
  const [gptdetails, setGptdetails] = useState([]);
  const [deletereason, setDeleteReason] = useState("");
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [openloading, setOpenloading] = useState(false);
  const [openapipopup, setOpenApipopup] = useState(false);
  const [merchantid, setMerchantid] = useState("");
  const [clientid, setClientid] = useState("");
  const [secretkey, setSecretkey] = useState("");
  const [secretcode, setSecretcode] = useState("");
  const [authtoken, setAuthtoken] = useState("");
  const [pos, setPOS] = useState("");
  const [customerid, setCustomerid] = useState(0);
  const [validmerchantid, setValidMerchantid] = useState(true);
  const [validclientid, setValidClientid] = useState(true);
  const [validsecretkey, setValidSecretkey] = useState(true);
  const [validsecretcode, setValidSecretcode] = useState(true);
  const [validauthtoken, setValidAuthtoken] = useState(true);
  const [validpos, setValidPOS] = useState(true);
  const [role, setRole] = useState("");
  const [roledesc, setRoleDesc] = useState("");

  const debounceFunc = debounce(
    1000,
    (value) => {
      setSearchData(value);
    },
    { atBegin: false }
  );
  //Upload audio and Error list
  const [audioinfo, setAudioinfo] = useState([]);
  const [companydll, setCompanydll] = useState([]);
  const [restaurantid, setRestaurantID] = useState("");
  const [gptcustid, setGPTCustID] = useState("");
  const [type, setType] = useState("");

  const [totalaudio, setTotalaudio] = useState(0);
  const [audiocount, setAudiocount] = useState(0);
  const [openAudio, setopenAudio] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [uploadAudio, setUploadAudio] = useState(null);
  const [welcomefile, setWelcomefile] = useState(false);
  const [openGptpopup, setOpenGptpopup] = useState(false);
  const [listWelcomefile, setListWelcomefile] = useState([]);
  const [updatestatus, setUpdatestatus] = useState("");
  const [DDldate, setDDldate] = useState(new Date());
  const [itemname, setItemname] = useState("");
  const [errorlist, setErrorlist] = useState([]);
  const [orderlist, setOrderlist] = useState([]);
  const [gptlist, setGptlist] = useState([]);

  const [totalerror, setTotalerror] = useState(0);
  const [errorcount, setErrorcount] = useState(0);
  const [totalitems, setTotalitems] = useState(0);
  const [ordercount, setOrdercount] = useState(0);
  const [correctedtext, setCorrectedtext] = useState("");
  const [selectedindex, setSelectedIndex] = useState(-1);
  const [audioPageno, setAudioPageno] = useState(0);
  const [pageno, setPageno] = useState(0);
  const [orderpageno, setOrderPageno] = useState(0);
  const [opensetupopup, setOpenSetupopup] = useState(false);

  useEffect(() => {
    handlelistcompany();
    handlelistagent();
    listUploadedaudio();
    listErroraudio();
    listOrderitems();
    loadcompanyddl()
      .then((response) => {
        setCompanydll(response.data.resultset);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchData, pagenumber, audioPageno, pageno, orderpageno]);

  /* START LISTING */
  const handlelistcompany = () => {
    // debugger;
    setOpenloading(true);
    let params = {
      search: searchData,
      pageno: pagenumber,
    };
    loadCompany(params)
      .then((response) => {
        setCompanyinfo(response.data.resultset);
        setTotalrow(response.data.resultset.length);
        setTotalcount(Math.ceil(response.data.totalrow / 10));
        setTimeout(() => {
          setOpenloading(false);
        }, 500);
      })
      .catch((error) => {
        console.log("error: ", error);
        setTimeout(() => {
          setOpenloading(false);
        }, 500);
      });
  };
  const handlelistagent = () => {
    setOpenloading(true);
    let param = {
      userid: state.loginreducer.logininfo.data.data[0].userid,
    };
    loadAgent(param)
      .then((response) => {
        setAgentinfo(response.data.resultset);
        setTotalagent(response.data.resultset.length);
        setTimeout(() => {
          setOpenloading(false);
        }, 500);
      })
      .catch((error) => {
        console.log("error: ", error);
        setTimeout(() => {
          setOpenloading(false);
        }, 500);
      });
  };
  const listUploadedaudio = () => {
    let params = {
      search: searchData,
      pageno: audioPageno,
    };
    loadUploadedaudio(params)
      .then((response) => {
        setAudioinfo(response.data.resultset);
        setTotalaudio(response.data.resultset.length);
        setAudiocount(Math.ceil(response.data.totalrow / 10));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const listErroraudio = () => {
    let params = {
      search: searchData,
      pageno: pageno,
    };
    loadErroraudio(params)
      .then((response) => {
        setErrorlist(response.data.resultset);
        setTotalerror(response.data.resultset.length);
        setErrorcount(Math.ceil(response.data.totalrow / 10));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const listOrderitems = () => {
    let params = {
      search: searchData,
      pageno: orderpageno,
    };
    loadorderlist(params)
      .then((response) => {
        setOrderlist(response.data.resultset);
        setTotalitems(response.data.resultset.length);
        setOrdercount(Math.ceil(response.data.totalrow / 10));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* END LISTING */

  // ADD AND EDIT COMPANY
  const addnewclick = (params) => {
    setaddcompany(true);
    setCompanydetail(params);
  };

  const handleCloseaddcompany = () => {
    setaddcompany(false);
  };

  const handleCloseSetup = () => {
    setOpenSetupopup(false);
  };

  // ADD AGENT
  const addnewagent = (params) => {
    setaddagent(true);
    setAgentdetail(params);
  };

  const handleCloseaddagent = () => {
    setaddagent(false);
  };

  // OPEN DELETE DIALOG
  const handleopenreject = (params, type) => {
    if (type === "C") {
      setRejectconfirm(true);
      setCompanydetail(params);
      setModaltype(type);
    } else if (type === "A") {
      setRejectconfirm(true);
      setAgentdetail(params);
      setModaltype(type);
    }
  };

  // DELETE MODAL
  const onDeleteClick = () => {
    if (modaltype === "C") {
      if (deletereason !== "") {
        let params = {
          type: 3,
          companyName: deletereason,
          companyId: companydetail.customerid,
          customerName: "",
          email: "",
          username: "",
          firstName: "",
          lastName: "",
          regNumber: "",
          address1: "",
          address2: "",
          address3: "",
          country: "",
          zipcode: "",
          contactNumber: "",
          contactPerson: "",
          contactPersonNumber: "",
          did: "",
          onlineURL: "",
          deliveryType: 0,
          restauranttype: 0,
          orderComission: 0,
          hours: "",
          minutes: "",
          queuename: "",
          whatsappurl: "",
          whatsappinstructions: "",
          imagepath: "",
          createdby: state.loginreducer.logininfo.data.data[0].userid,
        };
        let fd = new FormData();
        fd.append("customerdata", JSON.stringify(params));
        fd.append("filename", "");
        addCompany(fd)
          .then((response) => {
            if (response.data.resultSet[0].status === 1) {
              toast.success(response.data.resultSet[0].message, {
                autoClose: 1000,
              });
              setRejectconfirm(false);
              handlepageno();
              handlelistcompany();
              setDeleteReason("");
            } else if (response.data.resultSet[0].status === 2) {
              toast.warning(response.data.resultSet[0].message, {
                autoClose: 1000,
              });
            } else {
              toast.error(response.data.resultSet[0].message, {
                autoClose: 1000,
              });
            }
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      } else {
        input.current.focus();
      }
    } else if (modaltype === "A") {
      if (deletereason !== "") {
        let params = {
          type: 3,
          agentid: agentdetail.agentid,
          agentname: deletereason,
          agentcity: "",
          username: "",
          userpassword: "",
          usermobile: "",
          extension: "",
          extensionpwd: "",
          isadmin: 0,
          languagelist: [],
          rmid: 0,
          queuename: "",
          createdby: state.loginreducer.logininfo.data.data[0].userid,
        };
        addAgent(params)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              setRejectconfirm(false);
              handlepageno();
              handlelistagent();
              setDeleteReason("");
            } else if (response.data.status === 2) {
              toast.warning(response.data.message, {
                autoClose: 1000,
              });
            } else {
              toast.error(response.data.message, {
                autoClose: 1000,
              });
            }
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      } else {
        input.current.focus();
      }
    }
  };

  // OPEN API POPUP
  const handleapimodal = (params) => {
    setCustomerid(params.customerid);
    setOpenApipopup(true);
  };

  // OPEN SETUP MODAL
  const onSetupOpen = () => {
    setOpenSetupopup(true);
  };

  const handlesaveinfo = () => {
    // if (
    //   merchantid !== "" &&
    //   clientid !== "" &&
    //   secretkey !== "" &&
    //   secretcode !== "" &&
    //   authtoken !== "" &&
    //   pos !== ""
    // ) {
    let params = {
      companyid: customerid,
      merchantid: merchantid,
      clientid: clientid,
      secretkey: secretkey,
      secretcode: secretcode,
      authtoken: authtoken,
      pos: pos,
    };
    addCustomerinfo(params)
      .then((response) => {
        if (response.data.resultset[0].status === 1) {
          toast.success(response.data.resultset[0].message, {
            autoClose: 1000,
          });
          setTimeout(() => {
            setOpenApipopup(false);
          }, 1000);
          handleClear();
          handlelistcompany();
        } else if (response.data.resultset[0].status === 2) {
          toast.warning(response.data.resultset[0].message, {
            autoClose: 1000,
          });
        } else {
          toast.error(response.data.resultset[0].message, {
            autoClose: 1000,
          });
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
    // } else {
    //   formvalidate();
    // }
  };

  const handleAudio = (event) => {
    setSelectedAudio(event.target.files[0]);
  };

  const handleUploadAudio = (event) => {
    setUploadAudio(event.target.files[0]);
  };

  // UPLOAD AUDIOFILE
  // const saveUploadaudio = (event) => {
  //   event.preventDefault();
  //   if (itemname != "") {
  //     let param = {
  //       itemname: itemname.toLowerCase(),
  //       userid: state.loginreducer.logininfo.data.data[0].userid,
  //     };
  //     const formData = new FormData();
  //     formData.append("itemdata", JSON.stringify(param));
  //     uploadAudio &&
  //       formData.append("audiofile", uploadAudio, uploadAudio.name);
  //     uploadaudio(formData)
  //       .then((response) => {
  //         if (response.data.data[0].status === 1) {
  //           toast.success(response.data.data[0].message, {
  //             autoClose: 1000,
  //           });
  //           setopenAudio(false);
  //           handlepageno();
  //           listUploadedaudio();
  //           setItemname("");
  //         } else if (response.data.data[0].status === 0) {
  //           toast.warning(response.data.data[0].message, {
  //             autoClose: 1000,
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     toast.warning("Please enter itemname", {
  //       autoClose: 1000,
  //     });
  //   }
  // };

  // UPLOAD AUDIOFILE
  const saveUploadaudio = (event) => {
    event.preventDefault();
    if (itemname != "") {
      let param = {
        itemname: itemname.toLowerCase(),
        userid: state.loginreducer.logininfo.data.data[0].userid,
      };
      uploadaudio(param)
        .then((response) => {
          if (response.data.status === 1) {
            toast.success(response.data.message, {
              autoClose: 1000,
            });
            setopenAudio(false);
            handlepageno();
            listUploadedaudio();
            setItemname("");
          } else if (response.data.status === 0) {
            toast.warning(response.data.message, {
              autoClose: 1000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.warning("Please enter itemname", {
        autoClose: 1000,
      });
    }
  };

  // UPLOAD WELCOME FILE
  const saveWelcomeaudio = (event) => {
    event.preventDefault();
    let param = {
      customerid: parseInt(restaurantid),
      userid: state.loginreducer.logininfo.data.data[0].userid,
    };
    const formData = new FormData();
    formData.append("itemdata", JSON.stringify(param));
    selectedAudio &&
      formData.append("audiofile", selectedAudio, selectedAudio.name);
    if (selectedAudio != null) {
      setOpenloading(true);
      welcomeaudio(formData)
        .then((response) => {
          if (response.data.status === 1) {
            toast.success(response.data.message, {
              autoClose: 1000,
            });
            setOpenloading(false);
            setWelcomefile(false);
            handlepageno();
            handlelistcompany();
            setRestaurantID("");
            setSelectedAudio(null);
          } else if (response.data.status === -1) {
            toast.warning(response.data.message, {
              autoClose: 1000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.warning("Please choose audio", {
        autoClose: 1000,
      });
    }
  };

  // Load WELCOME FILE
  const loadWelcomeaudio = (row, restaurantid) => {
    setWelcomefile(true);
    setRestaurantID(row ? row.customerid : restaurantid);
    let param = {
      customerid: parseInt(row ? row.customerid : restaurantid),
      userid: state.loginreducer.logininfo.data.data[0].userid,
    };
    listwelcomeaudio(param)
      .then((response) => {
        if (response.data.status === 1) {
          setListWelcomefile(response.data.resultset);
        } else if (response.data.status === 0) {
          toast.warning(response.data.message, {
            autoClose: 1000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Load GPT DETAILS
  const loadgptdetails = (data, custid) => {
    debugger;
    setOpenGptpopup(true);
    setGPTCustID(data.customerid ? data.customerid : custid);
    let params = {
      customerid: data.customerid ? data.customerid : custid,
    };
    listgptdetails(params)
      .then((response) => {
        setGptlist(response.data.resultset);
      })
      .catch((error) => {
        console.log(error);
      });
    setGPTCustID(data.customerid ? data.customerid : custid);
  };

  // Load WELCOME FILE
  const saveGPTdetails = (data) => {
    debugger;
    setOpenGptpopup(true);
    if (role !== "" && roledesc !== "") {
      let param = {
        type: type === "A" ? 1 : 2,
        customerid: gptcustid,
        role: role,
        roledesc: roledesc,
        userid: state.loginreducer.logininfo.data.data[0].userid,
      };
      addgpt(param)
        .then((response) => {
          if (response.data.resultSet[0].status === 1) {
            toast.success(response.data.resultSet[0].message, {
              autoClose: 1000,
            });
            loadgptdetails("", gptcustid);
            handleGptclear();
          } else if (response.data.resultSet[0].status === 0) {
            toast.warning(response.data.resultSet[0].message, {
              autoClose: 1000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.warning("Please enter role and roledesc", {
        autoClose: 1000,
      });
    }
  };

  const editGPTdetails = (data) => {
    debugger;
    setType("E");
    setGPTCustID(data.customerid);
    setRole(data.role);
    setRoleDesc(data.roledesc);
  };

  // SUBMIT ERROR AUDIOTEXT
  const onSubmitAudiotext = (row, i) => {
    if (correctedtext != "") {
      if (i == selectedindex) {
        let param = {
          id: row.transid,
          correctedtext: correctedtext,
          userid: state.loginreducer.logininfo.data.data[0].userid,
        };
        erroraudiotext(param)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              handlepageno();
              listErroraudio();
              setCorrectedtext("");
            } else if (response.data.status === 0) {
              toast.warning(response.data.message, {
                autoClose: 1000,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        toast.warning("please enter corrected text", {
          autoClose: 1000,
        });
      }
    } else {
      toast.warning("please enter corrected text", {
        autoClose: 1000,
      });
    }
  };

  // OPEN DELETE WELCOMEFILE DIALOG
  const onOpenDeleteModal = (row) => {
    setRejectaudio(true);
    setAudiodetail(row.audio);
  };

  // OPEN DELETE GPT DIALOG
  const onGPTDeleteModal = (row) => {
    setRejectgpt(true);
    setGptdetails(row);
  };

  // OPEN DELETE DIALOG
  const handleOpenDelete = (params) => {
    setRejectuploadaudio(true);
    setAudiodetail(params);
  };

  // DELETE WELCOME AUDIO
  const handleDeleteaudio = (event) => {
    setOpenloading(true);
    event.preventDefault();
    let param = {
      customerid: restaurantid,
      audio: audiodetail,
    };
    deleteaudio(param)
      .then((response) => {
        if (response.data.status === 1) {
          setOpenloading(false);
          toast.success(response.data.message, {
            autoClose: 1000,
          });
          setRejectaudio(false);
          loadWelcomeaudio("", restaurantid);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DELETE WELCOME AUDIO
  const handleDeleteGPT = (event) => {
    let param = {
      transid: gptdetails.transid,
    };
    deletegpt(param)
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            autoClose: 1000,
          });
          setRejectgpt(false);
          loadgptdetails("", gptcustid);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DELETE UPLOADED AUDIO
  const handleDeleteuploadaudio = (event) => {
    event.preventDefault();
    let param = {
      transid: audiodetail.transid,
      itemname: audiodetail.itemname,
      userid: state.loginreducer.logininfo.data.data[0].userid,
    };
    deleteuploadaudio(param)
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            autoClose: 1000,
          });
          setRejectuploadaudio(false);
          handlepageno();
          listUploadedaudio();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DOWNLOAD MENU ITEMS
  const onDownload = () => {
    downloadallmenu()
      .then((response) => {
        if (response.data.status === 1) {
          if (response.data.message.split("¶").length > 0) {
            window.open(response.data.message, "_self");
          }
        } else {
          toast.error(response.data.message, {
            autoClose: 1000,
          });
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  // BULK UPDATE ORDER STATUS
  const handleUpdatestatus = () => {
    let param = {
      customerid: restaurantid === "" ? 0 : parseInt(restaurantid),
      orderdate: DDldate.toString(),
      orderstatus: updatestatus,
      userid: state.loginreducer.logininfo.data.data[0].userid,
    };
    updateOrderStatus(param)
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            autoClose: 1000,
          });
          setRestaurantID("");
          setUpdatestatus("");
        } else if (response.data.status === -1) {
          toast.warning(response.data.message, {
            autoClose: 1000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // SERVERSIDE PAGINATION FOR COMPANY
  function handlePageClick(event) {
    setPageNumber(event.selected + 1);
  }

  // SERVERSIDE PAGINATION FOR AUDIO
  const handleAudioClick = ({ selected }) => {
    setAudioPageno(selected + 1);
  };

  function handleErrorAudioClick(event) {
    setPageno(event.selected + 1);
  }

  // SERVERSIDE PAGINATION FOR WHATSAPP ORDERS
  const handleItemsorderClick = ({ selected }) => {
    setOrderPageno(selected + 1);
  };

  const handleClear = () => {
    setMerchantid("");
    setClientid("");
    setSecretkey("");
    setSecretcode("");
    setAuthtoken("");
    setPOS("");
  };

  const handlePOSClear = (event) => {
    if (event.target.value === "Tryotter") {
      setSecretcode("");
      setAuthtoken("");
    }
  };

  const handleClose = () => {
    handleClear();
    setOpenApipopup(false);
  };

  const handlepageno = () => {
    setPageNumber(1);
    setTotalcount();
    setPageno(1);
    setAudioPageno(1);
    setTotalaudio();
    setTotalerror();
    setOrderPageno(1);
  };

  const handleGptclear = () => {
    setGPTCustID("");
    setRole("");
    setRoleDesc("");
    setType("");
  };

  // CLIENT SIDE PAGINATION FOR AGENT
  const [pageItems, setPageItems] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageItems * usersPerPage;
  const pageCount = Math.ceil(agentinfo.length / usersPerPage);
  const changePageHandler = ({ selected }) => {
    setPageItems(selected);
  };

  // PROFILE MENU
  const handleProfileMenuOpen = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const signouthandler = () => {
    navigate("/");
  };

  // Tostify
  const formvalidate = () => {
    {
      if (merchantid === "") {
        setValidMerchantid(false);
      }
      if (clientid === "") {
        setValidClientid(false);
      }
      if (secretkey === "") {
        setValidSecretkey(false);
      }
      if (secretcode === "") {
        setValidSecretcode(false);
      }
      if (authtoken === "") {
        setValidAuthtoken(false);
      }
      if (pos === "") {
        setValidPOS(false);
      }
    }
    toast.warning("All fields are required!", { autoClose: 2000 });
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <img
          alt="logo"
          src={istudiologo}
          style={{ marginLeft: "20px", height: "50px" }}
        />
        <div className="col-6">
          <IconButton
            sx={{ float: "right", p: 2 }}
            size="large"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <Avatar
              {...stringAvatar(state.loginreducer.logininfo.data.data[0].name)}
            ></Avatar>
          </IconButton>
        </div>
      </div>
      <div className="dashboard-container">
        <Tabs defaultActiveKey="restaurant" id="tabs-list" className="mb-0">
          <Tab eventKey="restaurant" title="Restaurants">
            <div className="dashboard-items">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#6e7488" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    letterSpacing: "1px",
                    fontSize: "1rem",
                  }}
                  onChange={(event) => {
                    debounceFunc(event.target.value);
                  }}
                  defaultValue={searchData}
                />
              </Search>
              <Button
                size="small"
                className="upload-bttn"
                variant="outlined"
                onClick={() => {
                  onSetupOpen();
                }}
              >
                Setup
              </Button>
              <Button
                sx={{ mt: 1, mb: 1, mr: 2, ml: 2 }}
                className="add-bttn"
                variant="outlined"
                startIcon={<AddCircleOutlineOutlinedIcon />}
                onClick={addnewclick}
              >
                Add
              </Button>
            </div>
            <Box
              sx={{
                height: "calc(100vh - 230px)",
              }}
            >
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 230px)",
                }}
              >
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  // sx={{ minWidth: "200%" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" className="headerstyle">
                        SNo.
                      </TableCell>
                      <TableCell align="right" className="headerstyle">
                        WelcomeFile
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        CustomerId
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        CustomerName
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        RestaurantName
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Email
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Username
                      </TableCell>
                      {/* <TableCell align="left" className="headerstyle">
                        Firstname
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Lastname
                      </TableCell> */}
                      <TableCell align="left" className="headerstyle">
                        RegisterNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Address1
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Address2
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Address3
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Country
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Zipcode
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Contactnumber
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Contactperson
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        ContactpersonNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        DidNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        OnlineUrl
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Deliverytype
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Ordercommission
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        ImageFile
                      </TableCell>
                      {/* <TableCell align="center" className="headerstyle">
                        AudioFile
                      </TableCell> */}
                      <TableCell align="center" className="headerstyle">
                        Action
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Apiresponse
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {companyinfo.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell
                          className="headerstyle"
                          component="th"
                          scope="row"
                          align="right"
                        >
                          {row.sno}
                        </TableCell>

                        <TableCell align="center" className="headerstyle">
                          <Tooltip title="Upload audio" arrow>
                            <DriveFolderUploadIcon
                              sx={{ cursor: "pointer" }}
                              fontSize="medium"
                              color="warning"
                              onClick={() => {
                                loadWelcomeaudio(row);
                              }}
                            ></DriveFolderUploadIcon>
                          </Tooltip>
                          &nbsp;&nbsp;
                          <Tooltip title="Gpt" arrow>
                            <AddCircleOutlineIcon
                              sx={{ cursor: "pointer" }}
                              fontSize="medium"
                              color="warning"
                              onClick={() => {
                                loadgptdetails(row);
                              }}
                            ></AddCircleOutlineIcon>
                          </Tooltip>
                        </TableCell>

                        <TableCell align="left" className="headerstyle">
                          {row.customerid}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.customername.split("¶")[0]}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.companyname}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.customername.split("¶")[1]}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.customername.split("¶")[2]}
                        </TableCell>
                        {/* <TableCell align="left" className="headerstyle">
                          {row.customername.split("¶")[3]}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.customername.split("¶")[4]}
                        </TableCell> */}
                        <TableCell align="left" className="headerstyle">
                          {row.regnumber}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.address1}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.address2}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.address3}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.country}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.zipcode}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.contactnumber}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.contactperson}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.contactpernum}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.did}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.onlineurl}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.delivertype === 1
                            ? "All"
                            : row.delivertype === 2
                            ? "Delivery"
                            : row.delivertype === 3
                            ? "Take away"
                            : ""}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.ordercomission}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.imagepath === "" ? "None" : row.imagepath}
                        </TableCell>
                        <TableCell align="center" className="headerstyle">
                          <div style={{ display: "flex" }}>
                            <Tooltip title="Edit" arrow>
                              <AppRegistrationOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="warning"
                                onClick={() => {
                                  addnewclick(row);
                                }}
                              />
                            </Tooltip>
                            <Tooltip title="Delete" arrow>
                              <DeleteOutlineOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="error"
                                onClick={() => {
                                  handleopenreject(row, "C");
                                }}
                              />
                            </Tooltip>
                          </div>
                        </TableCell>
                        <TableCell align="center" className="headerstyle">
                          <ViewAgendaOutlinedIcon
                            sx={{ cursor: "pointer" }}
                            color="success"
                            onClick={() => {
                              handleapimodal(row);
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                    {totalrow === 0
                      ? [
                          <TableRow>
                            <TableCell
                              className="headerstyle"
                              align="center"
                              colSpan={12}
                            >
                              No Records Found
                            </TableCell>
                          </TableRow>,
                        ]
                      : [""]}
                  </TableBody>
                </Table>
              </TableContainer>
              {totalcount > 1
                ? [
                    <Box
                      sx={{
                        paddingRight: 2,
                        paddingTop: 2,
                        paddingBottom: 0.5,
                        bottom: 0,
                        right: 0,
                        position: "fixed",
                      }}
                    >
                      <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={totalcount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        id="pagination"
                        activeLinkClassName={"active-button"}
                      />
                    </Box>,
                  ]
                : []}
            </Box>
          </Tab>
          <Tab eventKey="agents" title="Agents">
            <div className="dashboard-items">
              <Button
                sx={{ mt: 1, mb: 1, mr: 2 }}
                className="add-bttn"
                variant="outlined"
                startIcon={<AddCircleOutlineOutlinedIcon />}
                onClick={addnewagent}
              >
                Add
              </Button>
            </div>
            <Box
              sx={{
                height: "calc(100vh - 230px)",
              }}
            >
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 230px)",
                }}
              >
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ minWidth: "100%" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="right"
                        className="headerstyle"
                        sx={{ width: "5%" }}
                      >
                        SNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Agentname
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Agentcity
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Username
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Usermobile
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        User
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Extension
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Extension password
                      </TableCell>
                      <TableCell align="center" className="headerstyle">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {agentinfo
                      .slice(pagesVisited, pagesVisited + usersPerPage)
                      .map((data, i) => (
                        <TableRow key={i}>
                          <TableCell
                            className="headerstyle"
                            component="th"
                            scope="row"
                            align="right"
                          >
                            {pageItems * usersPerPage + (i + 1)}
                          </TableCell>
                          <TableCell align="left" className="headerstyle">
                            {data.agentname}
                          </TableCell>
                          <TableCell align="left" className="headerstyle">
                            {data.agentcity}
                          </TableCell>
                          <TableCell align="left" className="headerstyle">
                            {data.username}
                          </TableCell>
                          <TableCell align="left" className="headerstyle">
                            {data.usermobile}
                          </TableCell>
                          <TableCell align="left" className="headerstyle">
                            {data.user}
                          </TableCell>
                          <TableCell align="left" className="headerstyle">
                            {data.extension}
                          </TableCell>
                          <TableCell align="left" className="headerstyle">
                            {data.extensionpwd}
                          </TableCell>
                          <TableCell align="center" className="headerstyle">
                            {/* <div style={{ display: "flex" }}> */}
                            <Tooltip title="Edit" arrow>
                              <AppRegistrationOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="warning"
                                onClick={() => {
                                  addnewagent(data);
                                }}
                              />
                            </Tooltip>
                            <Tooltip title="Delete" arrow>
                              <DeleteOutlineOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="error"
                                onClick={() => {
                                  handleopenreject(data, "A");
                                }}
                              />
                            </Tooltip>
                            {/* </div> */}
                          </TableCell>
                        </TableRow>
                      ))}
                    {totalagent === 0
                      ? [
                          <TableRow>
                            <TableCell
                              className="headerstyle"
                              align="center"
                              colSpan={10}
                            >
                              No Records Found
                            </TableCell>
                          </TableRow>,
                        ]
                      : [""]}
                  </TableBody>
                </Table>
              </TableContainer>
              {pageCount > 1
                ? [
                    <Box
                      sx={{
                        paddingRight: 2,
                        paddingTop: 2,
                        paddingBottom: 0.5,
                        bottom: 0,
                        right: 0,
                        position: "fixed",
                      }}
                    >
                      <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        pageRangeDisplayed={5}
                        onPageChange={changePageHandler}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        id="pagination"
                        activeLinkClassName={"active-button"}
                      />
                    </Box>,
                  ]
                : []}
            </Box>
          </Tab>
          <Tab eventKey="order status" title="Order status">
            <div className="orderstatus-items">
              <TextField
                sx={{ width: "auto", minWidth: 300 }}
                size="small"
                label="Restaurant"
                select
                variant="outlined"
                autoComplete="off"
                onChange={(event) => {
                  setRestaurantID(event.target.value);
                }}
                value={restaurantid}
              >
                <MenuItem value="0">--select--</MenuItem>
                {companydll.map((list, i) => (
                  <MenuItem value={list.restaurantid} key={i}>
                    {list.restaurantname}
                  </MenuItem>
                ))}
              </TextField>
              <DatePicker
                placeholder="Select Date"
                format="YYYY-MM-DD"
                zIndex={10000}
                calendarPosition="bottom"
                style={{
                  marginLeft: "20px",
                  paddingLeft: "0.8rem",
                  width: "12rem",
                  height: "40px",
                }}
                value={DDldate}
                onChange={setDDldate}
              />

              <select
                className="form-control"
                style={{ maxWidth: "200px", marginLeft: "20px" }}
                onChange={(e) => {
                  setUpdatestatus(e.target.value);
                }}
                value={updatestatus}
              >
                (<option value="">--Select--</option>
                <option value="1">New</option>
                <option value="2">Processing</option>
                <option value="3">Completed</option>
                {/* <option value="-1">Cancel</option>*/})
              </select>
              <Button
                sx={{ textTransform: "none", marginLeft: "50px" }}
                variant="outlined"
                onClick={handleUpdatestatus}
              >
                Update
              </Button>
            </div>
          </Tab>
          <Tab eventKey="audio upload" title="Upload audio">
            <div className="dashboard-items">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#6e7488" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search Item..."
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    letterSpacing: "1px",
                    fontSize: "1rem",
                  }}
                  onChange={(event) => {
                    debounceFunc(event.target.value);
                  }}
                  defaultValue={searchData}
                />
              </Search>
              <Button
                sx={{ mr: 2 }}
                className="upload-bttn"
                variant="outlined"
                startIcon={<PlayCircleOutlineIcon />}
                onClick={() => {
                  setopenAudio(true);
                  setUploadAudio(null);
                }}
              >
                Add audio
              </Button>
              <Button
                sx={{ textTransform: "none", mr: 2 }}
                variant="outlined"
                onClick={onDownload}
              >
                Download
              </Button>
            </div>
            <Box
              sx={{
                height: "calc(100vh - 230px)",
              }}
            >
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 230px)",
                }}
              >
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ minWidth: "100%" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" className="headerstyle">
                        SNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        ItemName
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Createdby
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Createdon
                      </TableCell>
                      {/* <TableCell align="center" className="headerstyle">
                        Audio
                      </TableCell> */}
                      <TableCell align="center" className="headerstyle">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {audioinfo.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell
                          className="headerstyle"
                          component="th"
                          scope="row"
                          align="right"
                        >
                          {row.sno}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.itemname}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.createdby}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.createdon}
                        </TableCell>
                        {/* <TableCell align="center" className="headerstyle">
                          <ReactAudioPlayer src={row.audiopath} controls />
                        </TableCell> */}
                        <TableCell align="center" className="headerstyle">
                          <Tooltip title="Delete" arrow>
                            <DeleteOutlineOutlinedIcon
                              sx={{ cursor: "pointer" }}
                              color="error"
                              onClick={() => {
                                handleOpenDelete(row);
                              }}
                            />
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                    {totalaudio === 0
                      ? [
                          <TableRow>
                            <TableCell
                              className="headerstyle"
                              align="center"
                              colSpan={12}
                            >
                              No Records Found
                            </TableCell>
                          </TableRow>,
                        ]
                      : [""]}
                  </TableBody>
                </Table>
              </TableContainer>
              {audiocount > 1
                ? [
                    <Box
                      sx={{
                        paddingRight: 2,
                        paddingTop: 2,
                        paddingBottom: 0.5,
                        bottom: 0,
                        right: 0,
                        position: "fixed",
                      }}
                    >
                      <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={audiocount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handleAudioClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        id="pagination"
                        activeLinkClassName={"active-button"}
                      />
                    </Box>,
                  ]
                : []}
            </Box>
          </Tab>
          <Tab eventKey="error audio" title="Error audio">
            <div className="dashboard-items">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#6e7488" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search audio..."
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    letterSpacing: "1px",
                    fontSize: "1rem",
                  }}
                  onChange={(event) => {
                    debounceFunc(event.target.value);
                  }}
                  defaultValue={searchData}
                />
              </Search>
            </div>
            <Box
              sx={{
                height: "calc(100vh - 230px)",
              }}
            >
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 230px)",
                }}
              >
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ minWidth: "100%" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" className="headerstyle">
                        SNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        DID
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Mobile
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Audiotext
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Createdon
                      </TableCell>
                      <TableCell align="center" className="headerstyle">
                        Audio
                      </TableCell>
                      <TableCell align="center" className="headerstyle">
                        Correctedtext
                      </TableCell>
                      <TableCell align="center" className="headerstyle">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {errorlist.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell
                          className="headerstyle"
                          component="th"
                          scope="row"
                          align="right"
                        >
                          {row.sno}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.did}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.mobile}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.audiotext}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.createdon}
                        </TableCell>
                        <TableCell align="center" className="headerstyle">
                          <ReactAudioPlayer src={row.audiopath} controls />
                        </TableCell>
                        <TableCell align="center" className="headerstyle">
                          {selectedindex == i ? (
                            <input
                              style={{ fontWeight: "lighter" }}
                              type="text"
                              placeholder="text here..."
                              className="form-control"
                              onChange={(event) => {
                                setCorrectedtext(event.target.value);
                                setSelectedIndex(i);
                              }}
                              value={correctedtext}
                            />
                          ) : (
                            <input
                              style={{ fontWeight: "lighter" }}
                              type="text"
                              className="form-control"
                              placeholder="text here..."
                              onChange={(event) => {
                                setCorrectedtext(event.target.value);
                                setSelectedIndex(i);
                              }}
                              // value={correctedtext}
                            />
                          )}
                        </TableCell>
                        <TableCell align="center" className="headerstyle">
                          <Button
                            size="small"
                            className="upload-bttn"
                            variant="outlined"
                            onClick={() => {
                              onSubmitAudiotext(row, i);
                            }}
                          >
                            Submit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {totalerror === 0
                      ? [
                          <TableRow>
                            <TableCell
                              className="headerstyle"
                              align="center"
                              colSpan={12}
                            >
                              No Records Found
                            </TableCell>
                          </TableRow>,
                        ]
                      : [""]}
                  </TableBody>
                </Table>
              </TableContainer>
              {errorcount > 1
                ? [
                    <Box
                      sx={{
                        paddingRight: 2,
                        paddingTop: 2,
                        paddingBottom: 0.5,
                        bottom: 0,
                        right: 0,
                        position: "fixed",
                      }}
                    >
                      <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={errorcount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handleErrorAudioClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        id="pagination"
                        activeLinkClassName={"active-button"}
                      />
                    </Box>,
                  ]
                : []}
            </Box>
          </Tab>
          <Tab eventKey="whatsapp order items" title="Whatsapp order items">
            <div className="dashboard-items">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#6e7488" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search mobile no..."
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    letterSpacing: "1px",
                    fontSize: "1rem",
                  }}
                  onChange={(event) => {
                    debounceFunc(event.target.value);
                  }}
                  defaultValue={searchData}
                />
              </Search>
            </div>
            <Box
              sx={{
                height: "calc(100vh - 230px)",
              }}
            >
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 230px)",
                }}
              >
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ minWidth: "100%" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" className="headerstyle">
                        SNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        DID
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Mobile
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        GUID
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Itemtext
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Createdon
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orderlist.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell
                          className="headerstyle"
                          component="th"
                          scope="row"
                          align="right"
                        >
                          {row.sno}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.did}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.mobile}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.guid}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.itemtext}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.createdon}
                        </TableCell>
                      </TableRow>
                    ))}
                    {totalitems === 0
                      ? [
                          <TableRow>
                            <TableCell
                              className="headerstyle"
                              align="center"
                              colSpan={12}
                            >
                              No Records Found
                            </TableCell>
                          </TableRow>,
                        ]
                      : [""]}
                  </TableBody>
                </Table>
              </TableContainer>
              {ordercount > 1
                ? [
                    <Box
                      sx={{
                        paddingRight: 2,
                        paddingTop: 2,
                        paddingBottom: 0.5,
                        bottom: 0,
                        right: 0,
                        position: "fixed",
                      }}
                    >
                      <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={ordercount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handleItemsorderClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        id="pagination"
                        activeLinkClassName={"active-button"}
                      />
                    </Box>,
                  ]
                : []}
            </Box>
          </Tab>
        </Tabs>

        <Dialog
          fullScreen
          open={addcompany}
          //onClose={handleCloseaddcompany}
          TransitionComponent={Transition}
        >
          <Addcompany
            handleClose={handleCloseaddcompany}
            companydetail={companydetail}
            refreshcompany={handlelistcompany}
            pageno={handlepageno}
          />
        </Dialog>

        <Dialog
          open={rejectconfirm}
          // onClose={() => {
          //   setRejectconfirm(false);
          //   setDeleteReason("");
          // }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContentText sx={{ mt: 1, textAlign: "center" }}>
            <ErrorOutlineOutlinedIcon color="error" sx={{ fontSize: 40 }} />
          </DialogContentText>
          <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <TextareaAutosize
              className="form-control"
              aria-label="minimum height"
              minRows={2}
              maxRows={2}
              placeholder="Enter reason to delete"
              style={{
                width: 350,
                outline: "none",
                padding: "5px",
              }}
              onChange={(event) => {
                setDeleteReason(event.target.value);
              }}
              value={deletereason}
              ref={input}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setRejectconfirm(false);
                setDeleteReason("");
                setModaltype("");
              }}
              color="error"
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              autoFocus
              color="success"
              onClick={onDeleteClick}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          fullScreen
          sx={{ width: "45%", ml: "55%" }}
          open={addagent}
          //onClose={handleCloseaddagent}
        >
          <Addagent
            handleClose={handleCloseaddagent}
            agentdetail={agentdetail}
            refreshagent={handlelistagent}
            pageno={handlepageno}
          />
        </Dialog>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          containerPadding={10}
          rootClose
          onHide={() => setShow(false)}
        >
          <Popover className="profile-menu" id="popover-contained">
            <Popover.Body>
              {/* <Avatar
                className="profile-logo"
                {...stringAvatar(
                  state.loginreducer.logininfo.data.data[0].name
                )}
              /> */}
              <h5>{state.loginreducer.logininfo.data.data[0].name}</h5>
              <p className="email_name">
                {state.loginreducer.logininfo.data.data[0].emalid}
              </p>
              {/* <Button
                variant="outlined"
                style={{
                  fontSize: "15px",
                  textTransform: "none",
                }}
                // onClick={changepwdclick}
              >
                Change password
              </Button> */}
              {/* &nbsp; */}
              <Button
                variant="outlined"
                color="error"
                style={{
                  fontSize: "15px",
                  textTransform: "none",
                }}
                onClick={signouthandler}
              >
                Sign out
              </Button>
            </Popover.Body>
          </Popover>
        </Overlay>

        <Dialog fullScreen sx={{ width: "32%", ml: "68%" }} open={openapipopup}>
          <DialogTitle id="alert-dialog-title">Add details</DialogTitle>
          <DialogContent>
            <Stack sx={{ mt: 2, ml: 6 }}>
              <TextField
                sx={{
                  maxWidth: 300,
                }}
                size="small"
                label="Merchant Id"
                helperText="Please enter merchant id"
                autoComplete="off"
                error={!validmerchantid}
                onChange={(event) => {
                  setMerchantid(event.target.value);
                  if (event.target.value !== "") {
                    setValidMerchantid(true);
                  }
                }}
                value={merchantid}
              ></TextField>
              <TextField
                sx={{ maxWidth: 300, mt: 2 }}
                size="small"
                label="Client Id"
                variant="outlined"
                helperText="Please enter client id"
                autoComplete="off"
                error={!validclientid}
                onChange={(event) => {
                  setClientid(event.target.value);
                  if (event.target.value !== "") {
                    setValidClientid(true);
                  }
                }}
                value={clientid}
              />
              <TextField
                sx={{
                  maxWidth: 300,
                  mt: 2,
                }}
                size="small"
                label="Secretkey"
                helperText="Please enter secretkey"
                autoComplete="off"
                error={!validsecretkey}
                onChange={(event) => {
                  setSecretkey(event.target.value);
                  if (event.target.value !== "") {
                    setValidSecretkey(true);
                  }
                }}
                value={secretkey}
              ></TextField>
              <TextField
                sx={{
                  maxWidth: 300,
                  mt: 2,
                  display: pos === "Tryotter" ? "none" : "",
                }}
                size="small"
                label="Secretcode"
                variant="outlined"
                helperText="Please enter secretcode"
                autoComplete="off"
                error={!validsecretcode}
                onChange={(event) => {
                  setSecretcode(event.target.value);
                  if (event.target.value !== "") {
                    setValidSecretcode(true);
                  }
                }}
                value={secretcode}
              />
              <TextField
                sx={{
                  maxWidth: 300,
                  mt: 2,
                  display: pos === "Tryotter" ? "none" : "",
                }}
                size="small"
                label="Authtoken"
                helperText="Please enter authtoken"
                autoComplete="off"
                error={!validauthtoken}
                onChange={(event) => {
                  setAuthtoken(event.target.value);
                  if (event.target.value !== "") {
                    setValidAuthtoken(true);
                  }
                }}
                value={authtoken}
              ></TextField>
              <TextField
                sx={{
                  maxWidth: 300,
                  mt: 2,
                }}
                select
                size="small"
                label="POS"
                helperText="Please enter pos"
                autoComplete="off"
                error={!validpos}
                onChange={(event) => {
                  handlePOSClear(event);
                  setPOS(event.target.value);
                  if (event.target.value !== "") {
                    setValidPOS(true);
                  }
                }}
                value={pos}
              >
                <MenuItem value="Tryotter">Tryotter</MenuItem>
                <MenuItem value="Clover">Clover</MenuItem>
                <MenuItem value="Square up">Square up</MenuItem>
              </TextField>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={handleClose}
              color="error"
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: "none" }}
              autoFocus
              color="success"
              onClick={handlesaveinfo}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openAudio}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{ borderBottom: "1px solid #ced4da" }}
          >
            Upload file
          </DialogTitle>
          <DialogContent>
            <div
              className="d-flex flex-column justify-content-evenly"
              style={{ width: "400px", height: "100px" }}
            >
              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                label="Item name"
                variant="outlined"
                autoComplete="off"
                onChange={(event) => {
                  setItemname(event.target.value);
                }}
                value={itemname}
              ></TextField>

              {/* <div className="form-group">
                <label className="form-label">Upload audio file</label>
                <input
                  type="file"
                  className="form-control"
                  name="audiofile"
                  onChange={handleUploadAudio}
                ></input>
              </div> */}
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setopenAudio(false);
                setItemname("");
                setUploadAudio(null);
              }}
              color="error"
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              autoFocus
              color="success"
              onClick={(event) => {
                saveUploadaudio(event);
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={welcomefile}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{ borderBottom: "1px solid #ced4da" }}
          >
            Upload welcome file
          </DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
                width: "500px",
                minHeight: "200px",
                maxHeight: "70%",
              }}
            >
              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                label="Restaurant"
                select
                variant="outlined"
                disabled
                autoComplete="off"
                onChange={(event) => {
                  setRestaurantID(event.target.value);
                }}
                defaultValue={restaurantid}
                value={restaurantid}
              >
                <MenuItem value="0">--select--</MenuItem>
                {companydll.map((list, i) => (
                  <MenuItem value={list.restaurantid} key={i}>
                    {list.restaurantname}
                  </MenuItem>
                ))}
              </TextField>
              <div className="form-group mt-4 mb-4">
                <label className="form-label">Upload audio</label>
                <input
                  type="file"
                  className="form-control"
                  name="audiofile"
                  onChange={handleAudio}
                ></input>
              </div>
              {listWelcomefile.length > 0 && (
                <div>
                  {listWelcomefile.map((row, i) => (
                    <div key={i}>
                      <label>
                        {i + 1}.&nbsp;
                        {row.audio.includes(".wav")
                          ? row.audio.replace(".wav", "")
                          : row.audio.replace(".mp3", "")}
                      </label>
                      <div className="d-flex justify-content-around align-items-center">
                        <ReactAudioPlayer
                          style={{ width: "80%" }}
                          src={row.audiourl}
                          controls
                        />
                        <Tooltip title="Delete" arrow>
                          <DeleteOutlineOutlinedIcon
                            sx={{ cursor: "pointer" }}
                            color="error"
                            onClick={() => {
                              onOpenDeleteModal(row);
                            }}
                          />
                        </Tooltip>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
          <DialogActions className={listWelcomefile.length > 0 ? "mt-4" : ""}>
            <Button
              sx={{ textTransform: "none" }}
              color="error"
              size="small"
              variant="contained"
              onClick={() => {
                setWelcomefile(false);
                setRestaurantID("");
                setSelectedAudio(null);
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              autoFocus
              size="small"
              color="success"
              variant="contained"
              onClick={(event) => {
                saveWelcomeaudio(event);
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          maxWidth="md"
          open={openGptpopup}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{ borderBottom: "1px solid #ced4da" }}
          >
            GPT Details
          </DialogTitle>
          <DialogContent sx={{ width: "100%", height: "100vh" }}>
            <Box>
              <Stack direction="row" spacing={3} sx={{ mt: 2, ml: 2 }}>
                <TextField
                  sx={{ maxWidth: 300 }}
                  size="small"
                  label="Role"
                  variant="outlined"
                  helperText="Please enter role"
                  autoComplete="off"
                  onChange={(event) => {
                    setRole(event.target.value);
                  }}
                  value={role}
                />
                <TextField
                  sx={{ maxWidth: 300 }}
                  size="small"
                  label="Role Desc"
                  variant="outlined"
                  helperText="Please enter roledesc"
                  autoComplete="off"
                  onChange={(event) => {
                    setRoleDesc(event.target.value);
                  }}
                  value={roledesc}
                />
                {type === "E" ? (
                  <Button
                    size="sm"
                    onClick={(event) => {
                      setType("E");
                      saveGPTdetails(event);
                    }}
                    color="warning"
                    variant="outlined"
                    sx={{ textTransform: "none", height: "" }}
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={(event) => {
                      setType("A");
                      saveGPTdetails(event);
                    }}
                    color="success"
                    variant="outlined"
                    sx={{ textTransform: "none", height: "" }}
                  >
                    Add
                  </Button>
                )}
              </Stack>
            </Box>
            <TableContainer
              component={Paper}
              sx={{
                maxHeight: "calc(100vh - 320px)",
                mt: 2,
              }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right" className="headerstyle">
                      SNo.
                    </TableCell>
                    <TableCell align="left" className="headerstyle">
                      Role
                    </TableCell>
                    <TableCell align="left" className="headerstyle">
                      Description
                    </TableCell>
                    <TableCell align="left" className="headerstyle">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gptlist.map((row, i) => (
                    <TableRow>
                      <TableCell
                        className="headerstyle"
                        component="th"
                        scope="row"
                        align="right"
                      >
                        {i + 1}
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        {row.role}
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        {row.roledesc}
                      </TableCell>
                      <TableCell align="center" className="headerstyle">
                        <div style={{ display: "flex" }}>
                          <Tooltip title="Edit" arrow>
                            <AppRegistrationOutlinedIcon
                              sx={{ cursor: "pointer" }}
                              color="warning"
                              onClick={() => {
                                setOpenGptpopup(true);
                                editGPTdetails(row, "E");
                              }}
                            />
                          </Tooltip>
                          <Tooltip title="Delete" arrow>
                            <DeleteOutlineOutlinedIcon
                              sx={{ cursor: "pointer" }}
                              color="error"
                              onClick={() => {
                                onGPTDeleteModal(row);
                              }}
                            />
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenGptpopup(false);
                handleGptclear();
              }}
              color="error"
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={rejectaudio}
          onClose={() => {
            setRejectaudio(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContentText sx={{ mt: 1, textAlign: "center" }}>
            <ErrorOutlineOutlinedIcon color="error" sx={{ fontSize: 40 }} />
          </DialogContentText>
          <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                setRejectaudio(false);
              }}
              color="error"
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              autoFocus
              color="success"
              onClick={(event) => {
                handleDeleteaudio(event);
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={rejectuploadaudio}
          onClose={() => {
            setRejectuploadaudio(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContentText sx={{ mt: 1, textAlign: "center" }}>
            <ErrorOutlineOutlinedIcon color="error" sx={{ fontSize: 40 }} />
          </DialogContentText>
          <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                setRejectuploadaudio(false);
              }}
              color="error"
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              autoFocus
              color="success"
              onClick={(event) => {
                handleDeleteuploadaudio(event);
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={rejectgpt}
          onClose={() => {
            setRejectgpt(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContentText sx={{ mt: 1, textAlign: "center" }}>
            <ErrorOutlineOutlinedIcon color="error" sx={{ fontSize: 40 }} />
          </DialogContentText>
          <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                setRejectgpt(false);
                handleGptclear();
              }}
              color="error"
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              autoFocus
              color="success"
              onClick={(event) => {
                handleDeleteGPT(event);
                handleGptclear();
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Restaurantsetup openpopup={opensetupopup} onClose={handleCloseSetup} />
      </div>
      <ToastContainer theme="colored" />
      <Loader loading={openloading} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  addCompany: (data) => dispatch(AddCompany(data)),
  loadCompany: (data) => dispatch(LoadCompany(data)),
  addAgent: (data) => dispatch(AddAgent(data)),
  loadAgent: (data) => dispatch(LoadAgent(data)),
  addCustomerinfo: (data) => dispatch(AddCustomerinfo(data)),
  loadUploadedaudio: (data) => dispatch(LoadUploadedaudio(data)),
  loadcompanyddl: (data) => dispatch(Loadcompanyddl(data)),
  uploadaudio: (data) => dispatch(Uploadaudio(data)),
  deleteaudio: (data) => dispatch(Deleteaudio(data)),
  deleteuploadaudio: (data) => dispatch(Deleteuploadaudio(data)),
  welcomeaudio: (data) => dispatch(Welcomeaudio(data)),
  listwelcomeaudio: (data) => dispatch(ListWelcomeaudio(data)),
  updateOrderStatus: (data) => dispatch(UpdateOrderStatus(data)),
  loadErroraudio: (data) => dispatch(LoadErroraudio(data)),
  erroraudiotext: (data) => dispatch(Erroraudiotext(data)),
  loadorderlist: (data) => dispatch(Loadorderlist(data)),
  listgptdetails: (data) => dispatch(ListGptdetails(data)),
  addgpt: (data) => dispatch(addGpt(data)),
  deletegpt: (data) => dispatch(Deletegpt(data)),
  downloadallmenu: (data) => dispatch(Downloadallmenu(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
