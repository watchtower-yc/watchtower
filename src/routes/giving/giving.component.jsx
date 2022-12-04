import { useState } from "react";
import AppButton from "../../components/app-button/app-button.component";
import CopyText from "../../components/copy-text/copy-text.components";
import Footer from "../../components/footer/footer.component";
import FormInput from "../../components/form-input/form-input.component";
import Alert from "@mui/material/Alert";
import { Fade } from "react-reveal";
import axios from "axios";

const defaultForm = {
  fullname: "",
  phone: "",
  amount: "",
  narration: "",
};

const Giving = () => {
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
      errorMessage: "Your fullname is required, Use a single name without space",
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
      pattern: "^[+]?[(]?[0-9]{3,20}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]",
      required: true,
    },
    {
      id: 3,
      name: "amount",
      type: "text",
      placeholder: "Enter amount paid",
      errorMessage: "Must be a valid number",
      label: "Amount",
      pattern: "^[+]?[(]?[0-9]{3,20}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]",
      required: true,
    },
    {
      id: 4,
      name: "narration",
      type: "text",
      placeholder: "Tithe, Offering, Project, etc.",
      errorMessage: "This field is required",
      label: "Narration",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ];
  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const saveData = async () => {
    try {
      await axios.post(
        "https://api.apispreadsheets.com/data/wQ7bAaaHnQGEuq1g/",
        inputValue
      );
    } catch (err) {
      console.log(err);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    await saveData();
    showSuccess();
    return;
  };

  return (
    <div>
      <section className="max-w-2xl mx-auto py-20 mb-20">
        <p className="text-center italic font-thin">
          “Bring the full tithe into the storehouse, that there may be food in
          my house. And thereby put me to the test, says the Lord of hosts, if I
          will not open the windows of heaven for you and pour down for you a
          blessing until there is no more need.”
        </p>
        <p className="text-center italic font-thin mt-8">Malachi 3:10</p>
      </section>
      <section className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-bold italic mb-8">
              Kindly Submit this form if you will be making an online payment
            </p>
            <form action="" onSubmit={submitForm}>
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
              <div>
                <AppButton
                  children="Submit"
                  buttonType="primary"
                  type="submit"
                />
              </div>
            </form>
          </div>
          <div>
            <div className="mb-10">
              <p className="font-bold">Via USSD</p>
              <p className="italic text-sm mb-4">Use the following codes</p>
              <p className="text-sm itallic mb-2">
                <span className="font-bold">GTBank: </span> *737*32*Amount*1702#
              </p>
              <p className="text-sm itallic mb-2">
                <span className="font-bold">UBA: </span> *919*4*account
                number*amount#
              </p>
              <p className="text-sm itallic mb-2">
                <span className="font-bold">Polaris: </span> *833*Amount*Account
                Number#
              </p>
              <p className="text-sm itallic mb-2">
                <span className="font-bold">Zenith: </span> *966*Amount*Account
                Number#
              </p>
              <p className="text-sm itallic mb-2">
                <span className="font-bold">Firstbank: </span>{" "}
                *894*Amount*Account number#
              </p>
            </div>
            <div>
              <p className="font-bold mb-4">Copy account number:</p>
              <div className="mb-8">
                <p className="text-sm font-medium">Tithe and Offering</p>
                <CopyText number="1015638967" />
              </div>
              <div>
                <p className="text-sm font-medium">Project Offering</p>
                <CopyText number="1016041043" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Giving;
