import React from "react";
import "./common.css";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  FormControl,
  Paper,
  TextField,
  Checkbox,
  MenuItem,
} from "@mui/material";
import { Multiselect } from "multiselect-react-dropdown";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { Grid } from "./grid";
import { ToastContainer, toast } from "react-toastify";
import {
  AddAgent,
  loadagentDDL,
  loadlanguageDDL,
} from "../../store/action/index";
import { connect } from "react-redux";

const Addagent = ({
  addAgent,
  handleClose,
  agentdetail,
  pageno,
  refreshagent,
  loadagentddL,
  loadlanguageddl,
  state,
}) => {
  const [agentname, setAgentName] = useState(
    agentdetail.agentname ? agentdetail.agentname : ""
  );
  const [agentcity, setAgentCity] = useState(
    agentdetail.agentcity ? agentdetail.agentcity : ""
  );
  const [username, setUsername] = useState(
    agentdetail.username ? agentdetail.username : ""
  );
  const [userpwd, setUserPwd] = useState(
    agentdetail.userpassword ? agentdetail.userpassword : ""
  );
  const [usermobile, setUserMobile] = useState(
    agentdetail.usermobile ? agentdetail.usermobile : ""
  );
  const [extension, setExtension] = useState(
    agentdetail.extension ? agentdetail.extension : ""
  );
  const [extensionpwd, setExtensionPwd] = useState(
    agentdetail.extensionpwd ? agentdetail.extensionpwd : ""
  );
  const [isadmin, setIsAdmin] = useState(
    agentdetail.isadmin ? agentdetail.isadmin : 0
  );
  const [agentdata, setAgentdata] = useState([]);
  const [languagedata, setLanguagedata] = useState([]);
  const [reportmanager, setReportManager] = useState(
    agentdetail.rmid ? agentdetail.rmid : 0
  );
  const [queuename, setQueuename] = useState(
    agentdetail.queuename ? agentdetail.queuename : ""
  );
  const [itemSizeSelected, setItemSizeSelected] = useState([]);
  const [validagentname, setValidAgentName] = useState(true);
  const [validagentcity, setValidAgentCity] = useState(true);
  const [validuserpwd, setValidUserPwd] = useState(true);
  const [validusername, setValidUsername] = useState(true);
  const [validusermobile, setValidUserMobile] = useState(true);
  const [validextension, setValidExtension] = useState(true);
  const [validextensionpwd, setValidExtensionPwd] = useState(true);
  const [validreportmanager, setValidReportManager] = useState(true);
  const [validqueuename, setValidQueuename] = useState(true);

  useEffect(() => {
    loadagentddL().then((response) => {
      setAgentdata(response.data.resultset);
    });
    loadlanguageddl().then((response) => {
      setLanguagedata(response.data.resultset);
    });
    setItemSizeSelected(
      agentdetail?.languagelist
        ? JSON.parse(agentdetail?.languagelist).map((i) => {
            return { languageid: i.languageid, languagename: i.languagename };
          })
        : []
    );
  }, [agentdetail]);

  const selectedValues = (selectedList, selectedItem) => {
    const list = selectedList.map((i) => {
      return { languageid: i.languageid, languagename: i.languagename };
    });
    setItemSizeSelected(list);
  };
  // Form submit
  const handlesaveagent = (event) => {
    event.preventDefault();
    let languagesize = itemSizeSelected.map((i) => {
      return { languageid: i.languageid };
    });
    if (
      agentname != "" &&
      agentcity != "" &&
      username != "" &&
      userpwd != "" &&
      usermobile != "" &&
      extension != "" &&
      extensionpwd != "" &&
      queuename != ""
    ) {
      if (languagesize != 0) {
        if (isadmin == false ? reportmanager != "" : reportmanager == "") {
          let params = {
            type: agentdetail.agentid === undefined ? 1 : 2,
            agentid:
              agentdetail.agentid === undefined ? 0 : agentdetail.agentid,
            agentname: agentname,
            agentcity: agentcity,
            username: username,
            userpassword: userpwd,
            usermobile: usermobile,
            extension: extension,
            extensionpwd: extensionpwd,
            isadmin: isadmin ? 1 : 0,
            languagelist: languagesize,
            rmid: reportmanager === "" ? 0 : parseInt(reportmanager),
            queuename: queuename,
            createdby: state.loginreducer.logininfo.data.data[0].userid,
          };
          addAgent(params)
            .then((response) => {
              if (response.data.status === 1) {
                toast.success(response.data.message, {
                  autoClose: 2000,
                });
                temphandleClose();
                pageno();
                refreshagent();
              } else if (response.data.status === 0) {
                toast.warning(response.data.message, {
                  autoClose: 2000,
                });
              } else {
                toast.error(response.data.message, {
                  autoClose: 2000,
                });
              }
            })
            .catch((error) => {
              console.log("error: ", error);
            });
        } else {
          toast.warning("Select reporting manager", { autoClose: 1000 });
        }
      } else {
        toast.warning("Please select language", { autoClose: 1000 });
      }
    } else {
      formvalidate();
    }
  };
  // Form input clear
  const temphandleClear = () => {
    setAgentName("");
    setAgentCity("");
    setUserPwd("");
    setUsername("");
    setUserMobile("");
    setExtension("");
    setExtensionPwd("");
    setIsAdmin(0);
    setReportManager("");
    setItemSizeSelected([]);
    setQueuename("");
  };
  // Close form
  const temphandleClose = () => {
    handleClose();
  };
  // Tostify
  const formvalidate = () => {
    {
      if (agentname == "") {
        setValidAgentName(false);
      }
      if (agentcity == "") {
        setValidAgentCity(false);
      }
      if (username == "") {
        setValidUsername(false);
      }
      if (userpwd == "") {
        setValidUserPwd(false);
      }
      if (usermobile == "") {
        setValidUserMobile(false);
      }
      if (extension == "") {
        setValidExtension(false);
      }
      if (extensionpwd == "") {
        setValidExtensionPwd(false);
      }
      if (reportmanager == "") {
        setValidReportManager(false);
      }
      if (queuename == "") {
        setValidQueuename(false);
      }
    }
    toast.warning("All fields are required!", { autoClose: 1000 });
  };
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <AppBar
        sx={{
          position: "fixed",
          top: "auto",
          bottom: 0,
          backgroundColor: "#fff",
          width: "45%",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Stack direction="row" spacing={2}>
            <FormControl
              sx={{
                minWidth: 120,
              }}
              size="small"
            >
              <Button
                variant="outlined"
                className="clear-bttn"
                onClick={temphandleClear}
              >
                Clear
              </Button>
            </FormControl>
            <FormControl
              sx={{
                minWidth: 120,
              }}
              size="small"
            >
              <Button
                color="success"
                variant="outlined"
                className="save-bttn"
                onClick={handlesaveagent}
              >
                Save
              </Button>
            </FormControl>
          </Stack>
        </Toolbar>
      </AppBar>
      <AppBar
        sx={{
          position: "fixed",
          top: 0,
          bottom: "auto",
          backgroundColor: "#01c0c8",
          width: "45%",
        }}
      >
        <Toolbar>
          <Typography
            sx={{ ml: 2, flex: 1, fontSize: "1.25rem", fontWeight: "500" }}
          >
            Add Agent
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton
            edge="start"
            color="inherit"
            onClick={temphandleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          overflow: "scroll",
          maxHeight: "100%",
          "& > :not(style)": {
            mt: 7,
            mb: 7,
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Grid container>
          <Grid item xs>
            <Paper elevation={0}>
              <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 4 }}>
                <TextField
                  sx={{
                    minWidth: 270,
                  }}
                  size="small"
                  label="Agent name"
                  helperText="Please enter agent name"
                  autoComplete="off"
                  error={!validagentname}
                  onChange={(event) => {
                    setAgentName(event.target.value);
                    if (event.target.value != "") {
                      setValidAgentName(true);
                    }
                  }}
                  value={agentname}
                ></TextField>
                <TextField
                  sx={{ minWidth: 270 }}
                  size="small"
                  label="Agent city"
                  variant="outlined"
                  helperText="Please enter agent city"
                  autoComplete="off"
                  error={!validagentcity}
                  onChange={(event) => {
                    setAgentCity(event.target.value);
                    if (event.target.value != "") {
                      setValidAgentCity(true);
                    }
                  }}
                  value={agentcity}
                />
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 3, ml: 4 }}>
                <TextField
                  sx={{ minWidth: 270 }}
                  size="small"
                  label="Username"
                  variant="outlined"
                  helperText="Please enter username"
                  autoComplete="off"
                  error={!validusername}
                  onChange={(event) => {
                    setUsername(event.target.value);
                    if (event.target.value != "") {
                      setValidUsername(true);
                    }
                  }}
                  value={username}
                />
                <TextField
                  sx={{
                    minWidth: 270,
                  }}
                  size="small"
                  label="User password"
                  helperText="Please enter user password"
                  autoComplete="off"
                  error={!validuserpwd}
                  onChange={(event) => {
                    setUserPwd(event.target.value);
                    if (event.target.value != "") {
                      setValidUserPwd(true);
                    }
                  }}
                  value={userpwd}
                ></TextField>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 3, ml: 4 }}>
                <TextField
                  sx={{
                    minWidth: 270,
                  }}
                  size="small"
                  type="number"
                  label="User mobile"
                  helperText="Please enter user mobile"
                  autoComplete="off"
                  error={!validusermobile}
                  onChange={(event) => {
                    setUserMobile(event.target.value);
                    if (event.target.value != "") {
                      setValidUserMobile(true);
                    }
                  }}
                  value={usermobile}
                ></TextField>
                <TextField
                  sx={{
                    minWidth: 270,
                  }}
                  size="small"
                  label="Extension"
                  helperText="Please enter extension"
                  autoComplete="off"
                  error={!validextension}
                  onChange={(event) => {
                    setExtension(event.target.value);
                    if (event.target.value != "") {
                      setValidExtension(true);
                    }
                  }}
                  value={extension}
                ></TextField>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 3, ml: 4 }}>
                <TextField
                  sx={{
                    minWidth: 270,
                    mt: 0.5,
                  }}
                  size="small"
                  label="Extension password"
                  helperText="Please enter extension pwd"
                  autoComplete="off"
                  error={!validextensionpwd}
                  onChange={(event) => {
                    setExtensionPwd(event.target.value);
                    if (event.target.value != "") {
                      setValidExtensionPwd(true);
                    }
                  }}
                  value={extensionpwd}
                ></TextField>
                <div
                  className="form-control"
                  style={{
                    border: "none",
                    minWidth: "290px",
                    marginLeft: "5px",
                  }}
                >
                  <Multiselect
                    placeholder="Language"
                    name="languagesize"
                    options={languagedata}
                    displayValue="languagename"
                    onSelect={selectedValues}
                    onRemove={selectedValues}
                    selectedValues={itemSizeSelected}
                  />

                  <label className={"helperText"}>Please select language</label>
                </div>
              </Stack>
              <Stack direction="row" sx={{ mt: 3, ml: 4 }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={(event) => {
                          setIsAdmin(event.target.checked);
                          setReportManager(0);
                        }}
                        checked={isadmin}
                      />
                    }
                    label="Admin"
                  />
                </FormGroup>
                {isadmin == false
                  ? [
                      <TextField
                        sx={{
                          minWidth: 200,
                        }}
                        size="small"
                        select
                        label="Reporting manager"
                        helperText="Select reporting manager"
                        autoComplete="off"
                        error={!validreportmanager}
                        onChange={(event) => {
                          setReportManager(event.target.value);
                          if (event.target.value != "") {
                            setValidReportManager(true);
                          }
                        }}
                        value={reportmanager}
                      >
                        {agentdata.map((data, i) => (
                          <MenuItem value={data.agentid} key={i}>
                            {data.agentname}
                          </MenuItem>
                        ))}
                      </TextField>,
                    ]
                  : []}
                <TextField
                  sx={{
                    minWidth: 200,
                    ml: 3,
                  }}
                  size="small"
                  label="Queuename"
                  helperText="Please enter queuename"
                  autoComplete="off"
                  error={!validqueuename}
                  onChange={(event) => {
                    setQueuename(event.target.value);
                    if (event.target.value != "") {
                      setValidQueuename(true);
                    }
                  }}
                  value={queuename}
                ></TextField>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer theme="colored" />
    </div>
  );
};
const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => ({
  addAgent: (data) => dispatch(AddAgent(data)),
  loadagentddL: (data) => dispatch(loadagentDDL(data)),
  loadlanguageddl: (data) => dispatch(loadlanguageDDL(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Addagent);
