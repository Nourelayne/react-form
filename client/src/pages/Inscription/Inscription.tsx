import { TRegisterCmpt } from "./types";

const Inscription = ({ isEmailFieldOnError, isNameFieldOnError, isPasswordFieldOnError, handleSubmit, onSubmit, register }: TRegisterCmpt) => (
  <div className="form-container sign-up-container">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create Account</h1>
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
      <span>or use your email for registration</span>
      <input
        type="text"
        placeholder="Name"
        defaultValue="" 
        {...register("name")}
        className={isNameFieldOnError ? "error" : ""}
      />
      {isNameFieldOnError && <span className="error">This field is required {isNameFieldOnError}</span>}
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
      <button>Sign Up</button>
    </form>
  </div>
);

export default Inscription;
