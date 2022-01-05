import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "../actions/loginAction";
import "../styles/loginstyles.css";
import poke from "../img/poke.png";
import swal from 'sweetalert';

const Login = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const redirectMain = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password1: "",
    },
    // validationSchema: schema,

    onSubmit: (data, { resetForm }) => {
      console.log(data);
      resetForm();
      // dispatch(loginEmailPassword(data.email,data.password1))
    },
  });

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };
  return (
    <>
      <div className="divlistarlogin">
        <div className="d-flex flex-row justify-content-center ">
          <div className="row">
            <div className="col-md">
              {/* <img className="img_1" src={logoamazon} alt="Amazon Logo" /> */}
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-center">
          <div className="row">
            <div className="col-md">
              <form className="formlogin" onSubmit={formik.handleSubmit}>
              <img src={poke} className="img" />
                <div className="sign-in1">Iniciar Sesión</div>
                <hr />
                <div className="form-group">
                  <label id="words_1" for="exampleInputEmail1">
                    Correo electrónico(telefono para cuentas móviles)
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ingresa correo electrónico"
                    onChange={formik.handleChange}
                  />
                  <small id="emailHelp" className="form-text text-warning">
                    {formik.errors.email}
                  </small>
                </div>
                <div className="form-group">
                  <label id="words_2" for="exampleInputPassword1">
                    Contraseña{" "}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password1"
                    placeholder="Contraseña"
                    onChange={formik.handleChange}
                  />
                  <small id="emailHelp" className="form-text text-warning">
                    {formik.errors.password1}
                  </small>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-warning btnsignin"
                      id="sign-in"
                    >
                      Iniciar Sesión
                    </button>

                    <br />

                    <button
                      type="button"
                      className="btn btn-info btnsignin"
                      id="sign-in1"
                      onClick={() => handleLoginGoogle()}
                    >
                      <img
                        className="imgoo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png"
                      />
                    </button>
                  </div>
                </div>
                <div className="form-check"></div>
                <button
                  type="button"
                  className="btn btn-warning btncreateaccount"
                  id="grey-button"
                  onClick={() => redirectMain("/main")}
                >
                  Ir a la App
                </button>

                <small id="emailHelp" className="form-text text-warning">
                    {isLoggedIn ? "" : alert('Para ingresar a pokedex, debes loguarte')}
                  </small>
              </form>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Login;
