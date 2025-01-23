import React from "react";
import "./common.css";
import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Tooltip from "@mui/material/Tooltip";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
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
import { ToastContainer, toast } from "react-toastify";
import {
  Adddtmfinput,
  Editdtmfinput,
  Deletedtmfinput,
  Addmusiconinput,
  Editmusiconinput,
  Deletemusiconinput,
  Addqueueinput,
  Editqueueinput,
  Deletequeueinput,
  AddQmemberinput,
  Editqmemberinput,
  Deleteqmemberinput,
  LoadrestaurantInput,
  Loadmusiconhold,
  Loadqueues,
  Loadqueuemember,
  Loadagent,
  Agentdetails,
} from "../../store/action/index";
import { connect } from "react-redux";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
/* Dialog*/
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Search } from "../common/search/search";
import { SearchIconWrapper } from "../common/search/searchiconwrapper";
import { StyledInputBase } from "../common/search/styledinputbase";
import { debounce } from "throttle-debounce";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Restaurantsetup = ({
  openpopup,
  onClose,
  adddtmfinput,
  editdtmfinput,
  deletedtmfinput,
  addmusiconinput,
  editmusiconinput,
  deletemusiconinput,
  addqueueinput,
  editqueueinput,
  deletequeueinput,
  addqmemberinput,
  editqmemberinput,
  deleteqmemberinput,
  loadrestaurantInput,
  loadmusiconhold,
  loadqueues,
  loadqueuemember,
  loadagent,
  agentdetails,
}) => {
  const [searchData, setSearchData] = useState("");
  const [restaurantinfo, setRestaurantinfo] = useState([]);
  const [musicholdinfo, setMusicholdinfo] = useState([]);
  const [queuesinfo, setQueuesinfo] = useState([]);
  const [queuemember, setQueuemember] = useState([]);
  const [agentinfo, setAgentInfo] = useState([]);
  const [restrow, setRestrow] = useState(0);
  const [musicrow, setMusicrow] = useState(0);
  const [queuerow, setQueuerow] = useState(0);
  const [queueMerow, setQueueMerow] = useState(0);
  const [agentrow, setAgentrow] = useState(0);
  const [openinputpopup, setOpeninputpopup] = useState(false);
  const [openmusiconpopup, setOpenmusiconpopup] = useState(false);
  const [openqueuepopup, setOpenqueuepopup] = useState(false);
  const [queuememberpopup, setQueuememberpopup] = useState(false);
  const [agentpopup, setAgentpopup] = useState(false);
  const [did, setDID] = useState("");
  const [dtmf, setDTMF] = useState("");
  const [dtmfdestination, setDTMFDestination] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [mode, setMode] = useState("");
  const [directory, setDirectory] = useState("");
  const [queuename, setQueueName] = useState("");
  const [qname, setQName] = useState("");
  const [qmusichold, setQMusichold] = useState("");
  const [qmembername, setQMemberName] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [inputtitle, setInputTitle] = useState(false);
  const [deleteinfo, setDeleteInfo] = useState([]);
  const [rejectdtmf, setRejectDTMF] = useState(false);
  const [rejectmusichold, setRejectMusichold] = useState(false);
  const [rejectqueue, setRejectQueue] = useState(false);
  const [rejectmqueue, setRejectMQueue] = useState(false);

  const debounceFunc = debounce(
    1000,
    (value) => {
      setSearchData(value);
    },
    { atBegin: false }
  );

  useEffect(() => {
    handlelistInput();
    handlelistmusichold();
    handlelistqueues();
    handlelistqueuemember();
    handlelistagent();
  }, [searchData]);

  const handlelistInput = () => {
    let params = {
      search: "",
      pageno: 1,
    };
    loadrestaurantInput(params)
      .then((response) => {
        setRestaurantinfo(response.data.resultset);
        setRestrow(response.data.resultset.length);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const handlelistmusichold = () => {
    let params = {
      search: "",
      pageno: 1,
    };
    loadmusiconhold(params)
      .then((response) => {
        setMusicholdinfo(response.data.resultset);
        setMusicrow(response.data.resultset.length);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const handlelistqueues = () => {
    let params = {
      search: "",
      pageno: 1,
    };
    loadqueues(params)
      .then((response) => {
        setQueuesinfo(response.data.resultset);
        setQueuerow(response.data.resultset.length);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const handlelistqueuemember = () => {
    let params = {
      search: "",
      pageno: 1,
    };
    loadqueuemember(params)
      .then((response) => {
        setQueuemember(response.data.resultset);
        setQueueMerow(response.data.resultset.length);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const handlelistagent = () => {
    let params = {
      search: "",
      pageno: 1,
    };
    loadagent(params)
      .then((response) => {
        setAgentInfo(response.data.resultset);
        setAgentrow(response.data.resultset.length);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  // ADD AND EDIT RESTAURANT INPUT
  const addnewInput = (params) => {
    setOpeninputpopup(true);
    setDID(params.did);
    setDTMF(params.dtmf);
    setDTMFDestination(params.dtmfdestination);
    setStatus(params.status);
  };
  // ADD AND EDIT MUSIC ON HOLD
  const addMusichold = (params) => {
    setOpenmusiconpopup(true);
    setName(params.name);
    setMode(params.mode);
    setDirectory(params.url);
  };
  // ADD AND EDIT QUEUES
  const addQueues = (params) => {
    setOpenqueuepopup(true);
    setQName(params.name);
    setQueueName(params.queuename);
    setQMusichold(params.musichold);
  };
  // ADD AND EDIT QUEUES MEMBER
  const addQueueMember = (params) => {
    setQueuememberpopup(true);
    setQMemberName(params.queuename);
    let text = params.interface;
    let result = text.split("+").pop().split("@")[0];
    setMobileno(result);
  };
  // ADD AND EDIT QUEUES MEMBER
  const addAgent = (params) => {
    setAgentpopup(true);
    setID(params.id);
    setPassword(params.password);
  };

  // SAVE DTMF INPUT
  const saveDTMFinput = () => {
    if (did !== "" && dtmf !== "" && dtmfdestination !== "" && status !== "") {
      if (inputtitle === false) {
        let param = {
          did: did,
          dtmf: dtmf,
          dtmfdestination: dtmfdestination,
          status: status,
        };
        adddtmfinput(param)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              setClearInput();
              setOpeninputpopup(false);
              handlelistInput();
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
        let param = {
          did: did,
          dtmf: dtmf,
          dtmfdestination: dtmfdestination,
          status: status,
        };
        editdtmfinput(param)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              setClearInput();
              setOpeninputpopup(false);
              handlelistInput();
            } else if (response.data.status === -1) {
              toast.warning(response.data.message, {
                autoClose: 1000,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      toast.warning("All fields are required", {
        autoClose: 1000,
      });
    }
  };
  // SAVE MUSICON HOLD
  const saveMusiconinput = () => {
    if (name !== "" && mode !== "") {
      if (inputtitle === false) {
        let param = {
          name: name,
          mode: mode,
          url: directory,
        };
        addmusiconinput(param)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              setClearInput();
              setOpenmusiconpopup(false);
              handlelistmusichold();
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
        let params = {
          name: name,
          mode: mode,
          url: directory,
        };
        editmusiconinput(params)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              setClearInput();
              setOpenmusiconpopup(false);
              handlelistmusichold();
            } else if (response.data.status === -1) {
              toast.warning(response.data.message, {
                autoClose: 1000,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      toast.warning("Please enter name and mode", {
        autoClose: 1000,
      });
    }
  };
  // SAVE QUEUE INPUT
  const saveQueuesinput = () => {
    if (queuename !== "" && qmusichold !== "") {
      if (inputtitle === false) {
        let param = {
          queuename: queuename,
          musichold: qmusichold,
        };
        addqueueinput(param)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              setClearInput();
              setOpenqueuepopup(false);
              handlelistqueues();
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
        let param = {
          name: qname,
          queuename: queuename,
          musichold: qmusichold,
        };
        editqueueinput(param)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              setClearInput();
              setOpenqueuepopup(false);
              handlelistqueues();
            } else if (response.data.status === -1) {
              toast.warning(response.data.message, {
                autoClose: 1000,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      toast.warning("All fields are required", {
        autoClose: 1000,
      });
    }
  };
  // SAVE QUEUE MEMBER INPUT
  const saveQMemberinput = () => {
    if (mobileno !== "") {
      if (inputtitle === false) {
        let param = {
          mobileno: mobileno,
        };
        addqmemberinput(param)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              setClearInput();
              setQueuememberpopup(false);
              handlelistqueuemember();
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
        let param = {
          queuename: qmembername,
          mobileno: mobileno,
        };
        editqmemberinput(param)
          .then((response) => {
            if (response.data.status === 1) {
              toast.success(response.data.message, {
                autoClose: 1000,
              });
              setClearInput();
              setQueuememberpopup(false);
              handlelistqueuemember();
            } else if (response.data.status === -1) {
              toast.warning(response.data.message, {
                autoClose: 1000,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      toast.warning("Please enter mobileno", {
        autoClose: 1000,
      });
    }
  };
  // SAVE QUEUE MEMBER INPUT
  const saveAgentDetails = () => {
    if (password !== "") {
      let param = {
        type: id !== "" ? 2 : 1,
        id: id !== "" ? id : "",
        password: password,
      };
      agentdetails(param)
        .then((response) => {
          if (response.data.status === 1) {
            toast.success(response.data.message, {
              autoClose: 1000,
            });
            setClearInput();
            setAgentpopup(false);
            handlelistagent();
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
      toast.warning("Please enter password", {
        autoClose: 1000,
      });
    }
  };

  // START DELETE DIALOG
  const onOpenDeleteModal = (row) => {
    setRejectDTMF(true);
    setDeleteInfo(row);
  };

  const onOpenDeleteMHold = (row) => {
    setRejectMusichold(true);
    setDeleteInfo(row);
  };
  const onOpenDeleteQueue = (row) => {
    setRejectQueue(true);
    setDeleteInfo(row);
  };
  const onOpenDeleteMQueue = (row) => {
    setRejectMQueue(true);
    setDeleteInfo(row);
  };
  // END DELETE DIALOG

  // DELETE DTMF INPUT
  const handleDTMFinput = () => {
    let param = {
      did: deleteinfo.did,
    };
    deletedtmfinput(param)
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            autoClose: 1000,
          });
          setClearInput();
          setOpeninputpopup(false);
          handlelistInput();
          setRejectDTMF(false);
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
  // DELETE MUSICON HOLD
  const handleDeleteMusicon = () => {
    let param = {
      name: deleteinfo.name,
    };
    deletemusiconinput(param)
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            autoClose: 1000,
          });
          setClearInput();
          setOpenmusiconpopup(false);
          handlelistmusichold();
          setRejectMusichold(false);
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
  // DELETE QUEUES
  const handleDeleteQueues = () => {
    let param = {
      name: deleteinfo.name,
    };
    deletequeueinput(param)
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            autoClose: 1000,
          });
          setClearInput();
          setOpenqueuepopup(false);
          handlelistqueues();
          setRejectQueue(false);
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
  // DELETE QUEUE MEMBER
  const handleDeleteQMember = () => {
    let param = {
      queuename: deleteinfo.queuename,
    };
    deleteqmemberinput(param)
      .then((response) => {
        if (response.data.status === 1) {
          toast.success(response.data.message, {
            autoClose: 1000,
          });
          setClearInput();
          setQueuememberpopup(false);
          handlelistqueuemember();
          setRejectMQueue(false);
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

  const setClearInput = () => {
    setDID("");
    setDTMF("");
    setDTMFDestination("");
    setStatus("");
    setName("");
    setMode("");
    setDirectory("");
    setQueueName("");
    setQName("");
    setQMusichold("");
    setQMemberName("");
    setMobileno("");
    setDeleteInfo([]);
    setPassword("");
    setID("");
  };

  return (
    <div>
      <Dialog
        maxWidth="lg"
        open={openpopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ borderBottom: "1px solid #ced4da" }}
        >
          Setup restaurant
        </DialogTitle>
        <DialogContent sx={{ width: "100%", height: "100vh" }}>
          <Tabs defaultActiveKey="dtmfinput" id="tabs-list" className="mb-0">
            <Tab eventKey="dtmfinput" title="DTMF Input">
              <Box sx={{ width: "180vh" }}>
                <div className="dashboard-items">
                  {/* <Search>
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
                  </Search> */}
                  <Button
                    sx={{ mt: 1, mb: 1, mr: 2, ml: 2 }}
                    className="add-bttn"
                    variant="outlined"
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    onClick={() => {
                      setInputTitle(false);
                      addnewInput();
                    }}
                  >
                    Add
                  </Button>
                </div>
              </Box>
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 320px)",
                }}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" className="headerstyle">
                        SNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        DID
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        DTMF
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        DTMFDestination
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Status
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {restaurantinfo.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell
                          className="headerstyle"
                          component="th"
                          scope="row"
                          align="right"
                        >
                          {i + 1}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.did}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.dtmf}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.dtmfdestination}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.status}
                        </TableCell>
                        <TableCell align="center" className="headerstyle">
                          <div style={{ display: "flex" }}>
                            <Tooltip title="Edit" arrow>
                              <AppRegistrationOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="warning"
                                onClick={() => {
                                  setInputTitle(true);
                                  addnewInput(row);
                                }}
                              />
                            </Tooltip>
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
                        </TableCell>
                      </TableRow>
                    ))}
                    {restrow === 0
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
            </Tab>
            <Tab eventKey="music on hold" title="Music on hold">
              <Box
                sx={{
                  width: "180vh",
                }}
              >
                <div className="dashboard-items">
                  {/* <Search>
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
                  </Search> */}
                  <Button
                    sx={{ mt: 1, mb: 1, mr: 2, ml: 2 }}
                    className="add-bttn"
                    variant="outlined"
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    onClick={() => {
                      setInputTitle(false);
                      addMusichold();
                    }}
                  >
                    Add
                  </Button>
                </div>
              </Box>
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 315px)",
                }}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" className="headerstyle">
                        SNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Name
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Mode
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Directory
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {musicholdinfo.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell
                          className="headerstyle"
                          component="th"
                          scope="row"
                          align="right"
                        >
                          {i + 1}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.name}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.mode}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.url}
                        </TableCell>
                        <TableCell align="center" className="headerstyle">
                          <div style={{ display: "flex" }}>
                            <Tooltip title="Edit" arrow>
                              <AppRegistrationOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="warning"
                                onClick={() => {
                                  setInputTitle(true);
                                  addMusichold(row);
                                }}
                              />
                            </Tooltip>
                            <Tooltip title="Delete" arrow>
                              <DeleteOutlineOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="error"
                                onClick={() => {
                                  // handleDeleteMusicon(row);
                                  onOpenDeleteMHold(row);
                                }}
                              />
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {musicrow === 0
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
            </Tab>
            <Tab eventKey="queues" title="Queues">
              <Box
                sx={{
                  width: "190vh",
                }}
              >
                <div className="dashboard-items">
                  {/* <Search>
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
                  </Search> */}
                  <Button
                    sx={{ mt: 1, mb: 1, mr: 2, ml: 2 }}
                    className="add-bttn"
                    variant="outlined"
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    onClick={() => {
                      setInputTitle(false);
                      addQueues();
                    }}
                  >
                    Add
                  </Button>
                </div>
              </Box>
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 335px)",
                }}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" className="headerstyle">
                        SNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Name
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Queue name
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Musicon hold
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {queuesinfo.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell
                          className="headerstyle"
                          component="th"
                          scope="row"
                          align="right"
                        >
                          {i + 1}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.name}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.queuename}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.musichold}
                        </TableCell>
                        <TableCell align="center" className="headerstyle">
                          <div style={{ display: "flex" }}>
                            <Tooltip title="Edit" arrow>
                              <AppRegistrationOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="warning"
                                onClick={() => {
                                  setInputTitle(true);
                                  addQueues(row);
                                }}
                              />
                            </Tooltip>
                            <Tooltip title="Delete" arrow>
                              <DeleteOutlineOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="error"
                                onClick={() => {
                                  // handleDeleteQueues(row);
                                  onOpenDeleteQueue(row);
                                }}
                              />
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {queuerow === 0
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
            </Tab>
            <Tab eventKey="queuemember" title="Queue member">
              <Box
                sx={{
                  width: "180vh",
                }}
              >
                <div className="dashboard-items">
                  {/* <Search>
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
              </Search> */}
                  <Button
                    sx={{ mt: 1, mb: 1, mr: 2, ml: 2 }}
                    className="add-bttn"
                    variant="outlined"
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    onClick={() => {
                      setInputTitle(false);
                      addQueueMember();
                    }}
                  >
                    Add
                  </Button>
                </div>
              </Box>
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 335px)",
                }}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" className="headerstyle">
                        SNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Queue name
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Interface
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {queuemember.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell
                          className="headerstyle"
                          component="th"
                          scope="row"
                          align="right"
                        >
                          {i + 1}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.queuename}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.interface}
                        </TableCell>
                        <TableCell align="center" className="headerstyle">
                          <div style={{ display: "flex" }}>
                            <Tooltip title="Edit" arrow>
                              <AppRegistrationOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="warning"
                                onClick={() => {
                                  setInputTitle(true);
                                  addQueueMember(row);
                                }}
                              />
                            </Tooltip>
                            <Tooltip title="Delete" arrow>
                              <DeleteOutlineOutlinedIcon
                                sx={{ cursor: "pointer" }}
                                color="error"
                                onClick={() => {
                                  // handleDeleteQMember(row);
                                  onOpenDeleteMQueue(row);
                                }}
                              />
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {queueMerow === 0
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
            </Tab>
            <Tab eventKey="agent" title="Agent">
              <Box
                sx={{
                  width: "180vh",
                }}
              >
                <div className="dashboard-items">
                  {/* <Search>
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
              </Search> */}
                  <Button
                    sx={{ mt: 1, mb: 1, mr: 2, ml: 2 }}
                    className="add-bttn"
                    variant="outlined"
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    onClick={() => {
                      setInputTitle(false);
                      addAgent();
                    }}
                  >
                    Add
                  </Button>
                </div>
              </Box>
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 335px)",
                }}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" className="headerstyle">
                        SNo.
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        ID
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Password
                      </TableCell>
                      <TableCell align="left" className="headerstyle">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {agentinfo.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell
                          className="headerstyle"
                          component="th"
                          scope="row"
                          align="right"
                        >
                          {i + 1}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.id}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          {row.password}
                        </TableCell>
                        <TableCell align="left" className="headerstyle">
                          <Tooltip title="Edit" arrow>
                            <AppRegistrationOutlinedIcon
                              sx={{ cursor: "pointer" }}
                              color="warning"
                              onClick={() => {
                                setInputTitle(true);
                                addAgent(row);
                              }}
                            />
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                    {agentrow === 0
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
            </Tab>
          </Tabs>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              onClose(false);
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
        maxWidth="sm"
        open={openinputpopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ borderBottom: "1px solid #ced4da" }}
        >
          {inputtitle === true ? "Edit DTMF Input" : "Add DTMF Input"}
        </DialogTitle>
        <DialogContent sx={{ width: "100%", height: "100vh" }}>
          <Box sx={{ width: "70vh" }}>
            <Stack spacing={3} sx={{ mt: 2, ml: 2 }}>
              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                label="DID"
                variant="outlined"
                helperText="Please enter DID"
                autoComplete="off"
                onChange={(event) => {
                  setDID(event.target.value);
                }}
                value={did}
              />
              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                select
                label="DTMF"
                variant="outlined"
                helperText="Please select DTMF"
                autoComplete="off"
                onChange={(event) => {
                  setDTMF(event.target.value);
                  setDTMFDestination(event.target.value);
                }}
                value={dtmf}
              >
                <MenuItem value="">--select--</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
              </TextField>
              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                select
                disabled
                label="DTMF Destination"
                variant="outlined"
                helperText="Please select DTMF Destination"
                autoComplete="off"
                onChange={(event) => {
                  setDTMFDestination(event.target.value);
                }}
                value={
                  dtmfdestination === "1"
                    ? "AI"
                    : dtmfdestination === "2"
                    ? "SMS"
                    : dtmfdestination === "3"
                    ? "STORE"
                    : dtmfdestination === "4"
                    ? "AGENT"
                    : dtmfdestination
                }
              >
                <MenuItem value="">--select--</MenuItem>
                <MenuItem value="AI">AI</MenuItem>
                <MenuItem value="SMS">SMS</MenuItem>
                <MenuItem value="STORE">STORE</MenuItem>
                <MenuItem value="AGENT">AGENT</MenuItem>
              </TextField>

              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                label="Status"
                select
                variant="outlined"
                helperText="Please select status"
                autoComplete="off"
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
                value={status}
              >
                <MenuItem value="">--select--</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </TextField>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpeninputpopup(false);
              setClearInput();
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
              saveDTMFinput(event);
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        maxWidth="sm"
        open={openmusiconpopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ borderBottom: "1px solid #ced4da" }}
        >
          {inputtitle === true ? "Edit musicon hold" : "Add musicon hold"}
        </DialogTitle>
        <DialogContent sx={{ width: "100%", height: "100vh" }}>
          <Box sx={{ width: "70vh" }}>
            <Stack spacing={3} sx={{ mt: 2, ml: 2 }}>
              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                label="Name"
                disabled={inputtitle === false ? false : true}
                variant="outlined"
                helperText="Please enter name"
                autoComplete="off"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />

              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                select
                label="Mode"
                variant="outlined"
                helperText="Please select mode"
                autoComplete="off"
                onChange={(event) => {
                  setMode(event.target.value);
                }}
                value={mode}
              >
                <MenuItem value="">--select--</MenuItem>
                <MenuItem value="custom">Custom</MenuItem>
                <MenuItem value="files">Files</MenuItem>
                <MenuItem value="mp3nb">Mp3nb</MenuItem>
                <MenuItem value="quietmp3nb">Quietmp3nb</MenuItem>
                <MenuItem value="quietmp3">Quietmp3</MenuItem>
                <MenuItem value="playlist">Playlist</MenuItem>
              </TextField>

              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                label="Directory"
                variant="outlined"
                helperText="Please enter directory"
                autoComplete="off"
                onChange={(event) => {
                  setDirectory(event.target.value);
                }}
                value={directory}
              ></TextField>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenmusiconpopup(false);
              setClearInput();
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
              saveMusiconinput(event);
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        maxWidth="sm"
        open={openqueuepopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ borderBottom: "1px solid #ced4da" }}
        >
          {inputtitle === true ? "Edit queue" : "Add queue"}
        </DialogTitle>
        <DialogContent sx={{ width: "100%", height: "100vh" }}>
          <Box sx={{ width: "70vh" }}>
            <Stack spacing={3} sx={{ mt: 2, ml: 2 }}>
              {qname !== "" ? (
                <TextField
                  sx={{ maxWidth: 300 }}
                  size="small"
                  label="Name"
                  disabled={qname === "" ? false : true}
                  variant="outlined"
                  helperText="Please enter name"
                  autoComplete="off"
                  onChange={(event) => {
                    setQName(event.target.value);
                  }}
                  value={qname}
                />
              ) : (
                ""
              )}
              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                label="Queuename"
                variant="outlined"
                helperText="Please enter queuename"
                autoComplete="off"
                onChange={(event) => {
                  setQueueName(event.target.value);
                }}
                value={queuename}
              ></TextField>
              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                label="Musiconhold"
                variant="outlined"
                helperText="Please enter musiconhold"
                autoComplete="off"
                onChange={(event) => {
                  setQMusichold(event.target.value);
                }}
                value={qmusichold}
              ></TextField>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenqueuepopup(false);
              setClearInput();
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
              saveQueuesinput(event);
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        maxWidth="sm"
        open={queuememberpopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ borderBottom: "1px solid #ced4da" }}
        >
          {inputtitle === true ? "Edit queue member" : "Add queue member"}
        </DialogTitle>
        <DialogContent sx={{ width: "100%", height: "100vh" }}>
          <Box sx={{ width: "70vh" }}>
            <Stack spacing={3} sx={{ mt: 2, ml: 2 }}>
              {qmembername !== "" ? (
                <TextField
                  sx={{ maxWidth: 300 }}
                  size="small"
                  label="Queue name"
                  disabled={qmembername === "" ? false : true}
                  variant="outlined"
                  helperText="Please enter queuename"
                  autoComplete="off"
                  onChange={(event) => {
                    setQMemberName(event.target.value);
                  }}
                  value={qmembername}
                />
              ) : (
                ""
              )}
              <PhoneInput
                country={"us"}
                onlyCountries={["us", "in"]}
                onChange={setMobileno}
                value={mobileno}
              />
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setQueuememberpopup(false);
              setClearInput();
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
              saveQMemberinput(event);
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        maxWidth="sm"
        open={agentpopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ borderBottom: "1px solid #ced4da" }}
        >
          {inputtitle === true ? "Edit agent" : "Add agent"}
        </DialogTitle>
        <DialogContent sx={{ width: "100%", height: "100vh" }}>
          <Box sx={{ width: "70vh" }}>
            <Stack spacing={3} sx={{ mt: 2, ml: 2 }}>
              {id !== "" ? (
                <TextField
                  sx={{ maxWidth: 300 }}
                  size="small"
                  label="ID"
                  disabled={id === "" ? false : true}
                  variant="outlined"
                  helperText="Please enter id"
                  autoComplete="off"
                  onChange={(event) => {
                    setID(event.target.value);
                  }}
                  value={id}
                />
              ) : (
                ""
              )}
              <TextField
                sx={{ maxWidth: 300 }}
                size="small"
                label="Password"
                variant="outlined"
                helperText="Please enter password"
                autoComplete="off"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setAgentpopup(false);
              setClearInput();
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
              saveAgentDetails(event);
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={rejectdtmf}
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
              setDeleteInfo([]);
              setRejectDTMF(false);
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
              handleDTMFinput();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={rejectmusichold}
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
              setDeleteInfo([]);
              setRejectMusichold(false);
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
              handleDeleteMusicon();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={rejectqueue}
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
              setDeleteInfo([]);
              setRejectQueue(false);
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
              handleDeleteQueues();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={rejectmqueue}
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
              setDeleteInfo([]);
              setRejectMQueue(false);
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
              handleDeleteQMember();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer theme="colored" />
    </div>
  );
};
const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  adddtmfinput: (data) => dispatch(Adddtmfinput(data)),
  editdtmfinput: (data) => dispatch(Editdtmfinput(data)),
  deletedtmfinput: (data) => dispatch(Deletedtmfinput(data)),
  addmusiconinput: (data) => dispatch(Addmusiconinput(data)),
  editmusiconinput: (data) => dispatch(Editmusiconinput(data)),
  deletemusiconinput: (data) => dispatch(Deletemusiconinput(data)),
  addqueueinput: (data) => dispatch(Addqueueinput(data)),
  editqueueinput: (data) => dispatch(Editqueueinput(data)),
  deletequeueinput: (data) => dispatch(Deletequeueinput(data)),
  addqmemberinput: (data) => dispatch(AddQmemberinput(data)),
  editqmemberinput: (data) => dispatch(Editqmemberinput(data)),
  deleteqmemberinput: (data) => dispatch(Deleteqmemberinput(data)),
  loadrestaurantInput: (data) => dispatch(LoadrestaurantInput(data)),
  loadmusiconhold: (data) => dispatch(Loadmusiconhold(data)),
  loadqueues: (data) => dispatch(Loadqueues(data)),
  loadqueuemember: (data) => dispatch(Loadqueuemember(data)),
  loadagent: (data) => dispatch(Loadagent(data)),
  agentdetails: (data) => dispatch(Agentdetails(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Restaurantsetup);
