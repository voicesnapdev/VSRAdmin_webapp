import React from "react";
import "./login.css";
import { useState } from "react";
import istudiologo from "../../images/vslogo_small.png";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Validatelogin } from "../../store/action/index";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

const Login = ({ validatelogin, state }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpwd, setShowpwd] = useState(false);
  let navigate = useNavigate();

  const signInHandler = (event) => {
    event.preventDefault();
    if (username !== undefined && username !== "") {
      if (password !== undefined && password !== "") {
        let params = {
          username: username,
          password: password,
        };
        validatelogin(params)
          .then((response) => {
            if (response.data.data[0].status === 1) {
              if (response.data.data[0].password === 0) {
                navigate("/home");
                toast.success(response.data.data[0].message, {
                  autoClose: 1000,
                });
              } else {
                navigate("/changepassword");
              }
            } else if (response.data.data[0].status === 2) {
              toast.warning(response.data.data[0].message, {
                autoClose: 2000,
              });
            } else
              toast.error(response.data.data[0].message, {
                autoClose: 2000,
              });
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      } else {
        toast.warning("Please enter password", {
          autoClose: 2000,
        });
      }
    } else {
      toast.warning("Please enter username", {
        autoClose: 2000,
      });
    }
  };
  const togglePasswordVisiblity = () => {
    setShowpwd(showpwd ? false : true);
  };
  return (
    <div className="login-form">
      <form className="container-fluid">
        <div className="row">
          <div className="col-6 login-page">
            <div className="form-title">
              <img alt="logo" src={istudiologo} height="160px" />
              <h1>Welcome to voicesnap</h1>
            </div>
          </div>
          <div className="col-6 form-info">
            <h6 className="form-heading">Sign Into Your Account</h6>
            <div className="form-input">
              <input
                id="emp-icon"
                className="employee"
                required
                type="text"
                placeholder="Username"
                autoComplete="off"
                tabIndex="1"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                value={username}
              />
              <div className="password-tag">
                <input
                  id="pass-icon"
                  type={showpwd ? "text" : "password"}
                  className="pass-wrap"
                  required
                  placeholder="Password"
                  tabIndex="2"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                />
                <i className="pwd-icon" onClick={togglePasswordVisiblity}>
                  {showpwd ? (
                    <BsEye size="22px" style={{ color: "#616161" }} />
                  ) : (
                    <BsEyeSlash size="22px" style={{ color: "#616161" }} />
                  )}
                </i>
              </div>
            </div>
            <button
              className="signin-btn"
              tabIndex="3"
              data-disable-with="Signing in..."
              onClick={signInHandler}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <ToastContainer theme="colored" />
    </div>
  );
};
const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = (dispatch) => {
  return {
    validatelogin: (data) => dispatch(Validatelogin(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
