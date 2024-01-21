import { useState } from "react";
import "./CheckoutForm.css";
import { useForm } from "react-hook-form";

const CheckoutForm = ({ onConfirm }) => {
  const {
    getValues,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleConfirm} className="form">
        <h1 style={{ margin: "0px", color: "darkgray" }}>Checkout</h1>
        <div className="inputForm">
          <label htmlFor="name" className="labelForm">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Write your name"
            maxLength={20}
            {...register("workspace", {
              required: true,
              minLength: 4,
              maxLength: 20,
              pattern: /^[a-zA-Z\s]+$/,
            })}
            onBlur={({ target }) => setName(target.value)}
          />
          {errors.workspace && errors.workspace.type === "required" && (
            <span className="error">This field is required</span>
          )}
          {errors.workspace && errors.workspace.type === "minLength" && (
            <span className="error">Minimum: 4 characters</span>
          )}
          {errors.workspace && errors.workspace.type === "maxLength" && (
            <span className="error">Maximum: 20 characters</span>
          )}
          {errors.workspace && errors.workspace.type === "pattern" && (
            <span className="error">
              Use only lowercase letters, numbers and white spaces
            </span>
          )}
        </div>
        <div className="inputForm">
          <label htmlFor="phone" className="labelForm">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Escribe tu teléfono"
            {...register("phone", {
              required: true,
              minLength: 7,
              pattern: /^\d{7,}$/,
            })}
            onBlur={({ target }) => setPhone(target.value)}
          />
          {errors.phone && errors.phone.type === "required" && (
            <span className="error">This field is required</span>
          )}
          {errors.phone && errors.phone.type === "minLength" && (
            <span className="error">Minimum: 7 characters</span>
          )}
          {errors.phone && errors.phone.type === "pattern" && (
            <span className="error">You must enter numbers</span>
          )}
        </div>
        <div className="inputForm">
          <label htmlFor="correo" className="labelForm">
            Email
          </label>
          <input
            type="correo"
            id="correo"
            placeholder="Write your email"
            {...register("correo", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            onBlur={({ target }) => setEmail(target.value)}
          />
          {errors.correo && errors.correo.type === "required" && (
            <span className="error">This field is required</span>
          )}
          {errors.correo && errors.correo.type === "pattern" && (
            <span className="error">You must enter a valid email address</span>
          )}
        </div>
        <div className="inputForm">
          <label htmlFor="email2" className="labelForm">
            Repeat Email
          </label>
          <input
            type="email2"
            id="email2"
            placeholder="Repeat your email"
            {...register("email2", {
              validate: (value) => value === getValues("correo"),
            })}
          />
          {errors.email2 && errors.email2.type === "validate" && (
            <span className="error">You must enter the same email</span>
          )}
        </div>
        <button
          type="submit"
          className={!isValid ? "buttonFormDisabled" : "buttonForm"}
          disabled={!isValid}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
