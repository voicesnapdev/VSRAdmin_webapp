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
  MenuItem,
  FormControl,
  Paper,
  Checkbox,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Grid } from "./grid";
import { ToastContainer, toast } from "react-toastify";
import { AddCompany } from "../../store/action/index";
import { connect } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Addcompany = ({
  addCompany,
  handleClose,
  companydetail,
  refreshcompany,
  pageno,
  state,
}) => {
  const [companyname, setCompanyName] = useState(
    companydetail.companyname === undefined ? "" : companydetail.companyname
  );
  const [customername, setCustomerName] = useState(
    companydetail.customername === undefined
      ? ""
      : companydetail.customername.split("¶")[0]
  );
  const [email, setEmail] = useState(
    companydetail.customername === undefined
      ? ""
      : companydetail.customername.split("¶")[1]
  );
  const [username, setUsername] = useState(
    companydetail.customername === undefined
      ? ""
      : companydetail.customername.split("¶")[2]
  );
  const [firstname, setFirstName] = useState(
    companydetail.customername === undefined
      ? ""
      : companydetail.customername.split("¶")[3]
  );
  const [lastname, setLastName] = useState(
    companydetail.customername === undefined
      ? ""
      : companydetail.customername.split("¶")[4]
  );
  const [regno, setRegNo] = useState(
    companydetail.regnumber === undefined ? "" : companydetail.regnumber
  );
  const [address1, setAddress1] = useState(
    companydetail.address1 === undefined ? "" : companydetail.address1
  );
  const [address2, setAddress2] = useState(
    companydetail.address2 === undefined ? "" : companydetail.address2
  );
  const [address3, setAddress3] = useState(
    companydetail.address3 === undefined ? "" : companydetail.address3
  );
  const [country, setCountry] = useState(
    companydetail.country === undefined ? "" : companydetail.country
  );
  const [zipcode, setZipCode] = useState(
    companydetail.zipcode === undefined ? "" : companydetail.zipcode
  );
  const [contactno, setContactNo] = useState(
    companydetail.contactnumber === undefined ? "" : companydetail.contactnumber
  );
  const [contactperson, setContactPerson] = useState(
    companydetail.contactperson === undefined ? "" : companydetail.contactperson
  );
  const [contactpersonno, setContactPersonNo] = useState(
    companydetail.contactpernum === undefined ? "" : companydetail.contactpernum
  );
  const [didno, setDidNo] = useState(
    companydetail.did === undefined ? "" : companydetail.did
  );
  const [onlineurl, setOnlineUrl] = useState(
    companydetail.onlineurl === undefined ? "" : companydetail.onlineurl
  );
  const [deliverytype, setDeliveryType] = useState(
    companydetail.delivertype === undefined ? "" : companydetail.delivertype
  );
  const [ordercommission, setOrderCommission] = useState(
    companydetail.ordercomission === undefined
      ? ""
      : companydetail.ordercomission
  );
  const [restauranttype, setRestaurantType] = useState(
    companydetail.customername === undefined
      ? ""
      : companydetail.customername.split("¶")[5]
  );

  const [timeinhour, setTimeInHour] = useState(
    companydetail.hours === undefined ? "" : companydetail.hours
  );
  const [timeinmin, setTimeInMin] = useState(
    companydetail.minutes === undefined ? "" : companydetail.minutes
  );
  const [queuename, setQueuename] = useState(
    companydetail.queuename === undefined ? "" : companydetail.queuename
  );
  const [whatsappurl, setWhatsappURl] = useState(
    companydetail.whatsappurl === undefined ? "" : companydetail.whatsappurl
  );
  // const [winstructions, setWInstructions] = useState(
  //   companydetail.whatsappinstructions === undefined
  //     ? ""
  //     : companydetail.whatsappinstructions
  // );
  const [winstructionFile, setWInstructionFile] = useState(null);

  const [isadmin, setIsAdmin] = useState(
    companydetail.isadmin ? companydetail.isadmin : 0
  );
  const [tax, setTax] = useState(companydetail.tax ? companydetail.tax : 0);
  const [taxname, setTaxName] = useState(
    companydetail.taxname ? companydetail.taxname : ""
  );
  const [selectedFile, setSelectedFile] = useState(null);

  const [validcompanyname, setValidCompanyName] = useState(true);
  const [validcustomername, setValidCustomerName] = useState(true);
  const [validemail, setValidEmail] = useState(true);
  const [validusername, setValidUsername] = useState(true);
  const [validfirstname, setValidFirstName] = useState(true);
  const [validlastname, setValidLastName] = useState(true);
  const [validregno, setValidRegno] = useState(true);
  const [validaddress1, setValidAddress1] = useState(true);
  const [validaddress2, setValidAddress2] = useState(true);
  const [validaddress3, setValidAddress3] = useState(true);
  const [validcountry, setValidCountry] = useState(true);
  const [validzipcode, setValidZipCode] = useState(true);
  const [validcontactno, setValidContactNo] = useState(true);
  const [validcontactperson, setValidContactPerson] = useState(true);
  const [validcontactpersonno, setValidContactPersonNo] = useState(true);
  const [validdidno, setValidDidNo] = useState(true);
  const [validonlineurl, setValidOnlineUrl] = useState(true);
  const [validdeliverytype, setValidDeliveryType] = useState(true);
  const [validordercommission, setValidOrderCommission] = useState(true);
  const [validrestauranttype, setValidRestaurantType] = useState(true);
  const [validtimeinhour, setValidTimeInHour] = useState(true);
  const [validtimeinmin, setValidTimeInMin] = useState(true);
  const [validqueuename, setValidQueuename] = useState(true);
  const [validwhatsappurl, setValidWhatsappURL] = useState(true);
  const [validWInstructions, setValidWInstructions] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [validtax, setValidTax] = useState(true);
  const [message, setMessage] = useState("");

  // Email validation
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const emailvalidation = (event) => {
    setEmail(event.target.value);
    if (event.target.value != "") {
      setValidEmail(true);
    }
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("Valid email!");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };

  // Form submit
  const handlesavecompany = (event) => {
    event.preventDefault();
    if (
      companyname != "" &&
      customername != "" &&
      email != "" &&
      username != "" &&
      address1 != "" &&
      address2 != "" &&
      address3 != "" &&
      country != "" &&
      zipcode != "" &&
      contactno != "" &&
      contactperson != "" &&
      contactpersonno != "" &&
      didno != "" &&
      deliverytype != 0 &&
      restauranttype != 0 &&
      timeinhour != "" &&
      timeinmin != "" &&
      queuename != ""
    ) {
      if (isadmin == true ? tax != 0 : tax == 0) {
        let params = {
          type: companydetail.customerid === undefined ? 1 : 2,
          companyName: companyname,
          companyId:
            companydetail.customerid === undefined
              ? 0
              : companydetail.customerid,
          customerName: customername,
          email: email,
          username: username,
          firstName: firstname,
          lastName: lastname,
          regNumber: regno,
          address1: address1,
          address2: address2,
          address3: address3,
          country: country,
          zipcode: zipcode,
          contactNumber: contactno,
          contactPerson: contactperson,
          contactPersonNumber: contactpersonno,
          did: didno,
          onlineURL: onlineurl,
          deliveryType: parseInt(deliverytype),
          restauranttype: parseInt(restauranttype),
          orderComission: parseFloat(ordercommission),
          hours: timeinhour,
          minutes: timeinmin,
          queuename: queuename,
          whatsappurl: whatsappurl,
          //whatsappinstructions: winstructions,
          whatsappinstructions:
            winstructionFile === null ? "" : winstructionFile.name,
          imagepath: selectedFile === null ? "" : selectedFile.name,
          isadmin: isadmin ? 1 : 0,
          tax: parseFloat(tax),
          taxname: taxname,
          createdby: state.loginreducer.logininfo.data.data[0].userid,
        };
        let fd = new FormData();
        fd.append("customerdata", JSON.stringify(params));
        selectedFile && fd.append("filename", selectedFile, selectedFile.name);
        winstructionFile &&
          fd.append(
            "winstructionFile",
            winstructionFile,
            winstructionFile.name
          );
        addCompany(fd)
          .then((response) => {
            if (response.data.resultSet[0].status === 1) {
              toast.success(response.data.resultSet[0].message, {
                autoClose: 1000,
              });
              setTimeout(() => {
                temphandleClose();
              }, 1000);
              pageno();
              refreshcompany();
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
        toast.warning("Please enter tax and taxname", { autoClose: 1000 });
      }
    } else {
      formvalidate();
    }
  };
  // FILE UPLOAD
  const fileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  // FILE UPLOAD
  const winstructionUpload = (event) => {
    setWInstructionFile(event.target.files[0]);
  };
  // Form input clear
  const temphandleClear = () => {
    setCompanyName("");
    setCustomerName("");
    setEmail("");
    setUsername("");
    setFirstName("");
    setLastName("");
    setRegNo("");
    setAddress1("");
    setAddress2("");
    setAddress3("");
    setCountry("");
    setZipCode("");
    setContactNo("");
    setContactPerson("");
    setContactPersonNo("");
    setDidNo("");
    setOnlineUrl("");
    setDeliveryType(0);
    setOrderCommission("");
    setRestaurantType(0);
    setQueuename("");
    setWhatsappURl("");
    setWInstructionFile(null);
    setSelectedFile(null);
    setIsAdmin(0);
    setTax(0);
    setTaxName("");
  };
  // Close form
  const temphandleClose = () => {
    handleClose();
  };
  // Tostify
  const formvalidate = () => {
    {
      if (companyname == "") {
        setValidCompanyName(false);
      }
      if (customername == "") {
        setValidCustomerName(false);
      }
      if (email == "") {
        setValidEmail(false);
      }
      if (username == "") {
        setValidUsername(false);
      }
      if (address1 == "") {
        setValidAddress1(false);
      }
      if (address2 == "") {
        setValidAddress2(false);
      }
      if (address3 == "") {
        setValidAddress3(false);
      }
      if (country == "") {
        setValidCountry(false);
      }
      if (zipcode == "") {
        setValidZipCode(false);
      }
      if (contactno == "") {
        setValidContactNo(false);
      }
      if (contactperson == "") {
        setValidContactPerson(false);
      }
      if (contactpersonno == "") {
        setValidContactPersonNo(false);
      }
      if (didno == "") {
        setValidDidNo(false);
      }
      if (deliverytype == 0) {
        setValidDeliveryType(false);
      }
      if (restauranttype == 0) {
        setValidRestaurantType(false);
      }
      if (timeinhour == 0) {
        setValidTimeInHour(false);
      }
      if (timeinmin == 0) {
        setValidTimeInMin(false);
      }
      if (queuename == "") {
        setValidQueuename(false);
      }
      if (tax == 0) {
        setValidTax(false);
      }
      // if (whatsappurl == "") {
      //   setValidWhatsappURL(false);
      // }
    }
    toast.warning("All fields are required!", { autoClose: 1000 });
  };

  return (
    <div style={{ overflow: "scroll" }}>
      <AppBar
        sx={{
          position: "fixed",
          top: "auto",
          bottom: 0,
          backgroundColor: "#fff",
        }}
      >
        <Toolbar>
          {/* <Box sx={{ flexGrow: 1 }}></Box> */}
          <Stack direction="row" spacing={2} sx={{ ml: 130 }}>
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
                onClick={handlesavecompany}
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
          // color: "#333333",
        }}
      >
        <Toolbar>
          <Typography
            sx={{ ml: 2, flex: 1, fontSize: "1.25rem", fontWeight: "500" }}
          >
            Add Restaurant
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
          "& > :not(style)": {
            m: 7,
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Grid container>
          <Grid item xs>
            <Paper elevation={0}>
              <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 2 }}>
                <TextField
                  sx={{
                    minWidth: 300,
                  }}
                  size="small"
                  label="Restaurant name"
                  helperText="Please enter company name"
                  autoComplete="off"
                  error={!validcompanyname}
                  onChange={(event) => {
                    setCompanyName(event.target.value);
                    if (event.target.value != "") {
                      setValidCompanyName(true);
                    }
                  }}
                  value={companyname}
                ></TextField>
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Customer name"
                  variant="outlined"
                  helperText="Please enter customer name"
                  autoComplete="off"
                  error={!validcustomername}
                  onChange={(event) => {
                    setCustomerName(event.target.value);
                    if (event.target.value != "") {
                      setValidCustomerName(true);
                    }
                  }}
                  value={customername}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Email"
                  variant="outlined"
                  // disabled={companydetail.customerid > 0}
                  autoComplete="off"
                  helperText={
                    email == ""
                      ? "Please enter email"
                      : [
                          <div
                            className={`message ${
                              isValid ? "success" : "error"
                            }`}
                          >
                            {message}
                          </div>,
                        ]
                  }
                  error={!validemail}
                  onChange={emailvalidation}
                  value={email}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Username"
                  // disabled={companydetail.customerid > 0}
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
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 2 }}>
                {/* <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Firstname"
                  variant="outlined"
                  helperText="Please enter firstname"
                  autoComplete="off"
                  error={!validfirstname}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    if (event.target.value != "") {
                      setValidFirstName(true);
                    }
                  }}
                  value={firstname}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Lastname"
                  variant="outlined"
                  helperText="Please enter lastname"
                  autoComplete="off"
                  error={!validlastname}
                  onChange={(event) => {
                    setLastName(event.target.value);
                    if (event.target.value != "") {
                      setValidLastName(true);
                    }
                  }}
                  value={lastname}
                /> */}
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Register number"
                  variant="outlined"
                  helperText="Please enter registerno"
                  autoComplete="off"
                  error={!validregno}
                  onChange={(event) => {
                    setRegNo(event.target.value);
                    if (event.target.value != "") {
                      setValidRegno(true);
                    }
                  }}
                  value={regno}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Address-1"
                  variant="outlined"
                  helperText="Please enter address-1"
                  autoComplete="off"
                  error={!validaddress1}
                  onChange={(event) => {
                    setAddress1(event.target.value);
                    if (event.target.value != "") {
                      setValidAddress1(true);
                    }
                  }}
                  value={address1}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Address-2"
                  helperText="Please enter address-2"
                  autoComplete="off"
                  error={!validaddress2}
                  onChange={(event) => {
                    setAddress2(event.target.value);
                    if (event.target.value != "") {
                      setValidAddress2(true);
                    }
                  }}
                  value={address2}
                ></TextField>
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Address-3"
                  helperText="Please enter address-3"
                  autoComplete="off"
                  error={!validaddress3}
                  onChange={(event) => {
                    setAddress3(event.target.value);
                    if (event.target.value != "") {
                      setValidAddress3(true);
                    }
                  }}
                  value={address3}
                ></TextField>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 2 }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="ZIP code"
                  variant="outlined"
                  helperText="Please enter ZIP code"
                  autoComplete="off"
                  error={!validzipcode}
                  onChange={(event) => {
                    setZipCode(event.target.value);
                    if (event.target.value != "") {
                      setValidZipCode(true);
                    }
                  }}
                  value={zipcode}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Country"
                  variant="outlined"
                  helperText="Please enter country"
                  autoComplete="off"
                  error={!validcountry}
                  onChange={(event) => {
                    setCountry(event.target.value);
                    if (event.target.value != "") {
                      setValidCountry(true);
                    }
                  }}
                  value={country}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Contact number"
                  variant="outlined"
                  helperText="Please enter contactno"
                  autoComplete="off"
                  error={!validcontactno}
                  onChange={(event) => {
                    setContactNo(event.target.value);
                    if (event.target.value != "") {
                      setValidContactNo(true);
                    }
                  }}
                  value={contactno}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Contact person"
                  variant="outlined"
                  helperText="Please enter contact person"
                  autoComplete="off"
                  error={!validcontactperson}
                  onChange={(event) => {
                    setContactPerson(event.target.value);
                    if (event.target.value != "") {
                      setValidContactPerson(true);
                    }
                  }}
                  value={contactperson}
                />
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 2 }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Contact person number"
                  variant="outlined"
                  helperText="Please enter contact person no"
                  autoComplete="off"
                  error={!validcontactpersonno}
                  onChange={(event) => {
                    setContactPersonNo(event.target.value);
                    if (event.target.value != "") {
                      setValidContactPersonNo(true);
                    }
                  }}
                  value={contactpersonno}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Did number"
                  variant="outlined"
                  helperText="Please enter did no"
                  autoComplete="off"
                  error={!validdidno}
                  // InputProps={{
                  //   inputProps: {
                  //     min: 0,
                  //     type: "number",
                  //   },
                  // }}
                  onChange={(event) => {
                    setDidNo(event.target.value);
                    if (event.target.value != "") {
                      setValidDidNo(true);
                    }
                  }}
                  value={didno}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Online Url"
                  variant="outlined"
                  helperText="Please enter online url"
                  autoComplete="off"
                  error={!validonlineurl}
                  onChange={(event) => {
                    setOnlineUrl(event.target.value);
                    if (event.target.value != "") {
                      setValidOnlineUrl(true);
                    }
                  }}
                  value={onlineurl}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  select
                  label="Delivery type"
                  variant="outlined"
                  helperText="Please select delivery type"
                  autoComplete="off"
                  error={!validdeliverytype}
                  onChange={(event) => {
                    setDeliveryType(event.target.value);
                    if (event.target.value != 0) {
                      setValidDeliveryType(true);
                    }
                  }}
                  value={deliverytype}
                >
                  <MenuItem value="0">--select--</MenuItem>
                  <MenuItem value="1">All</MenuItem>
                  <MenuItem value="2">Delivery</MenuItem>
                  <MenuItem value="3">Take away</MenuItem>
                </TextField>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 2 }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Order commission"
                  type="number"
                  variant="outlined"
                  helperText="Please enter order commission"
                  autoComplete="off"
                  error={!validordercommission}
                  onChange={(event) => {
                    setOrderCommission(event.target.value);
                    if (event.target.value != "") {
                      setValidOrderCommission(true);
                    }
                  }}
                  value={ordercommission}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Restaurant type"
                  select
                  variant="outlined"
                  helperText="Please select restaurant type"
                  autoComplete="off"
                  error={!validrestauranttype}
                  onChange={(event) => {
                    setRestaurantType(event.target.value);
                    if (event.target.value != "") {
                      setValidRestaurantType(true);
                    }
                  }}
                  value={restauranttype}
                >
                  <MenuItem value="0">--select--</MenuItem>
                  <MenuItem value="1">Restaurant</MenuItem>
                  <MenuItem value="2">Pizza shop</MenuItem>
                </TextField>
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Hours"
                  select
                  variant="outlined"
                  helperText="Please select hour"
                  autoComplete="off"
                  error={!validtimeinhour}
                  onChange={(event) => {
                    setTimeInHour(event.target.value);
                    if (event.target.value != "") {
                      setValidTimeInHour(true);
                    }
                  }}
                  value={timeinhour}
                >
                  <MenuItem value="0">--select--</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="9">9</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                  <MenuItem value="11">11</MenuItem>
                  <MenuItem value="12">12</MenuItem>
                  <MenuItem value="-1">-1</MenuItem>
                  <MenuItem value="-2">-2</MenuItem>
                  <MenuItem value="-3">-3</MenuItem>
                  <MenuItem value="-4">-4</MenuItem>
                  <MenuItem value="-5">-5</MenuItem>
                  <MenuItem value="-6">-6</MenuItem>
                  <MenuItem value="-7">-7</MenuItem>
                  <MenuItem value="-8">-8</MenuItem>
                  <MenuItem value="-9">-9</MenuItem>
                  <MenuItem value="-10">-10</MenuItem>
                  <MenuItem value="-11">-11</MenuItem>
                  <MenuItem value="-12">-12</MenuItem>
                </TextField>
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Minutes"
                  select
                  variant="outlined"
                  helperText="Please select minutes"
                  autoComplete="off"
                  error={!validtimeinmin}
                  onChange={(event) => {
                    setTimeInMin(event.target.value);
                    if (event.target.value != "") {
                      setValidTimeInMin(true);
                    }
                  }}
                  value={timeinmin}
                >
                  <MenuItem value="0">--select--</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                  <MenuItem value="15">15</MenuItem>
                  <MenuItem value="20">20</MenuItem>
                  <MenuItem value="25">25</MenuItem>
                  <MenuItem value="30">30</MenuItem>
                  <MenuItem value="35">35</MenuItem>
                  <MenuItem value="40">40</MenuItem>
                  <MenuItem value="45">45</MenuItem>
                  <MenuItem value="50">50</MenuItem>
                  <MenuItem value="55">55</MenuItem>
                  <MenuItem value="-5">-5</MenuItem>
                  <MenuItem value="-10">-10</MenuItem>
                  <MenuItem value="-15">-15</MenuItem>
                  <MenuItem value="-20">-20</MenuItem>
                  <MenuItem value="-25">-25</MenuItem>
                  <MenuItem value="-30">-30</MenuItem>
                  <MenuItem value="-35">-35</MenuItem>
                  <MenuItem value="-40">-40</MenuItem>
                  <MenuItem value="-45">-45</MenuItem>
                  <MenuItem value="-50">-50</MenuItem>
                  <MenuItem value="-55">-55</MenuItem>
                </TextField>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 2 }}>
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Queuename"
                  variant="outlined"
                  helperText="Please enter queue name"
                  autoComplete="off"
                  error={!validqueuename}
                  onChange={(event) => {
                    setQueuename(event.target.value);
                    if (event.target.value != "") {
                      setValidQueuename(true);
                    }
                  }}
                  value={queuename}
                />
                <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  label="Whatsapp template url"
                  variant="outlined"
                  helperText="Whatsapp template url"
                  autoComplete="off"
                  error={!validwhatsappurl}
                  onChange={(event) => {
                    setWhatsappURl(event.target.value);
                    if (event.target.value != "") {
                      setValidWhatsappURL(true);
                    }
                  }}
                  value={whatsappurl}
                />
                {/* <TextField
                  sx={{ minWidth: 300 }}
                  size="small"
                  multiline
                  maxRows={4}
                  label="Whatsapp instructions"
                  variant="outlined"
                  helperText="Whatsapp instructions"
                  autoComplete="off"
                  error={!validWInstructions}
                  onChange={(event) => {
                    setWInstructions(event.target.value);
                    if (event.target.value != "") {
                      setValidWInstructions(true);
                    }
                  }}
                  value={winstructions}
                /> */}
                <div className="form-group col-md-3">
                  <input
                    type="file"
                    className="form-control"
                    name="winstructionFile"
                    onChange={winstructionUpload}
                  />
                  <label
                    style={{
                      fontWeight: "400",
                      fontSize: "0.75rem",
                      marginLeft: "1rem",
                    }}
                  >
                    Please select winstructions
                  </label>
                </div>

                <div className="form-group col-md-3">
                  <input
                    type="file"
                    className="form-control"
                    name="fileUpload"
                    onChange={fileUpload}
                  />
                  <label
                    style={{
                      fontWeight: "400",
                      fontSize: "0.75rem",
                      marginLeft: "1rem",
                    }}
                  >
                    Please select restaurant logo
                  </label>
                </div>
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mt: 4, ml: 2 }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={(event) => {
                          setIsAdmin(event.target.checked);
                          setTax(0);
                          setTaxName("");
                        }}
                        checked={isadmin}
                      />
                    }
                    label="Enable tax"
                  />
                </FormGroup>
                {isadmin == true
                  ? [
                      <TextField
                        sx={{
                          minWidth: 200,
                        }}
                        size="small"
                        type="number"
                        step="0.01"
                        label="Tax percentage"
                        helperText="Please enter tax percentage"
                        autoComplete="off"
                        error={!validtax}
                        onChange={(event) => {
                          setTax(event.target.value);
                          if (event.target.value != "") {
                            setValidTax(true);
                          }
                        }}
                        value={tax}
                      />,
                      <TextField
                        sx={{
                          minWidth: 200,
                        }}
                        size="small"
                        label="Tax Name"
                        helperText="Please enter tax name"
                        autoComplete="off"
                        onChange={(event) => {
                          setTaxName(event.target.value);
                        }}
                        value={taxname}
                      />,
                    ]
                  : [""]}
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
  addCompany: (data) => dispatch(AddCompany(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Addcompany);
