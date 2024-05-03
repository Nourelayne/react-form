import { TLogin } from "./types";

const Login = ({ isEmailFieldOnError, isPasswordFieldOnError, handleSubmit, onSubmit, register }: TLogin) =>
(
  <div className="form-container sign-in-container">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign in</h1>
      <div className="social-container">
        <a href="#" className="social">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="social">
          <i className="fab fa-google-plus-g" />
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      <span>or use your account</span>
      <input
        type="email"
        placeholder="Email"
        defaultValue="" 
        {...register("email", { required: true })}
        className={isEmailFieldOnError ? "error" : ""}
      />
      {isEmailFieldOnError && <span className="error">This field is required {isEmailFieldOnError}</span>}
      <input
        type="password"
        placeholder="Password"
        defaultValue="" 
        {...register("password", { required: true })}
        className={isPasswordFieldOnError ? "error" : ""}
      />
      {isPasswordFieldOnError && <span className="error">This field is required {isPasswordFieldOnError}</span>}
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>
);

export default Login;
