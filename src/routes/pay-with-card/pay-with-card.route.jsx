import { useState } from "react";
import AppButton from "../../components/app-button/app-button.component";

import FormInput from "../../components/form-input/form-input.component";
import Alert from "@mui/material/Alert";
import { Fade } from "react-reveal";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const defaultForm = {
  fullname: "",
  phone: "",
  email: "",
  amount: "",
  address: "",
  reference: "",
};

const PayWithCard = () => {
  const [inputValue, setInputValue] = useState(defaultForm);
  const [success, setSuccess] = useState();

  const showSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Firstname Lastname",
      errorMessage:
        "Your fullname is required, Use a single name without space",
      label: "Fullname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "text",
      placeholder: "Enter Phone Number",
      errorMessage: "Must be a valid phone number",
      label: "Phone",
      pattern: "^[+]?[(]?[0-9]{3,20}",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      errorMessage: "Must be a valid email",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "amount",
      type: "text",
      placeholder: "Enter amount",
      errorMessage: "Must be a valid number",
      label: "Amount",
      pattern: "^[+]?[(]?[0-9]{3,20}",
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "Enter address",
      errorMessage: "Must be a minimum of 10 characters",
      label: "Address",
      //   pattern: "^[A-Za-z0-9]{10,100}$",
      required: true,
    },
  ];
  const paymentDetails = {
    public_key: inputValue.reference === "Tithe" || "Offering" ? "FLWPUBK_TEST-86212289d3c67e01d8656934857df9e8-X" : "vvv",
    tx_ref: Date.now(),
    amount: inputValue.amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: inputValue.email,
      name: inputValue.fullname,
      phonenumber: inputValue.phone,
    },
    customizations: {
      title: `RCCG ${inputValue.reference}`,
      logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(paymentDetails);

  const handlePayment = () => {
    handleFlutterPayment({
      callback: async(response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        showSuccess();
      },
    });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(process.env.REACT_APP_FLW_SECRET_KEY);
    await handlePayment();
    console.log(inputValue);
  };

  return (
    <div className="container mx-auto px-4">
      <form action="" onSubmit={submitForm} className="max-w-2xl mx-auto">
      <p className="text-sm font-bold italic mb-8">
        Kindly Submit this form if you will be making an online payment
      </p>
        {success && (
          <Fade>
            <div className="w-4/5 mb-4">
              <Alert severity="success">Success!</Alert>
            </div>
          </Fade>
        )}
        <div>
          {inputs.map((input) => (
            <FormInput
              label={input.label}
              errMsg={input.errorMessage}
              name={input.name}
              value={inputValue[input.name]}
              onChange={handleInput}
              placeholder={input.placeholder}
              required
              pattern={input.pattern}
              type={input.type}
            />
          ))}
        </div>
        <div className="mb-4">
          <label htmlFor="">
            Reference <span className="text-red-400">*</span>
          </label>
          <div className="mt-1 format">
            <select
              name="reference"
              value={inputValue.reference}
              onChange={handleInput}
              className="h-10 px-4 w-4/5 border border-gray-400 rounded-md"
              required
            >
              <option value="">--Select an option--</option>
              <option value="Tithe">Tithe</option>
              <option value="Offering">Offering</option>
              <option value="Projects">Projects</option>
            </select>
            <span className="text-red-400 text-xs">hjjkkk</span>
          </div>
        </div>
        <div>
          <AppButton
            children="Submit"
            buttonType="primary"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default PayWithCard;
