import React, { useReducer, useState } from "react";
import Footer from "../footer/footer.component";
import "./team.css";

const iniialState = {
  fullname: "",
  dob: "",
  gender: "",
  hometown: "",
  stateoforigin: "",
  occupation: "",
  course: "",
  level: "",
  maritalstatus: "",
  phoneno1: "",
  emailaddress1: "",
  phoneno2: "",
  emailaddress2: "",
  postalcode: "",
  hosteladdress: "",
  homeaddress: "",
  facebookid: "",
  instagramid: "",
  linkedIn: "",
  othermedia: "",
  nextofkinname: "",
  nextofkindob: "",
  nextofkingender: "",
  nextofkinrelationship: "",
  nextofkinstateoforigin: "",
  nextofkinoccupation: "",
  nextofkinmaritalstatus: "",
  nextofkinphoneno: "",
  nextofkinemail: "",
  nextofkinaddress: "",
  nextofkinfacebook: "",
  nextofkininstagram: "",
  nextofkinlinkedIn: "",
  nextofkinothermedia: "",
};

const Ourteam = () => {
  const [formInput, setFormInput] = useState(iniialState);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formInput);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <div>
      <div className=" mt-24 team flex flex-col  w-full bg-white justify-center py-2 container mx-auto px-10 md:px-10 items-center">
        <form onSubmit={handleForm} action="">
          {/* Personal Details */}
          <section className=" flex gap-10 md:gap-5 lg:gap-20 md:flex-row flex-col ">
            <div className=" ">
              <h1 className="font-bold ">Personal Details*</h1>
              <h4 className=" text-sm text-slate-500">
                Provide your personal info
              </h4>
            </div>
            <div className=" grid gap-5 grid-cols-1">
              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Name</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    name="fullname"
                    placeholder="Surname/Other name/Middle name"
                    value={formInput.fullname}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Date of Birth*</h5>
                  <input
                    className=" px-3 py-2 rounded-sm bg-slate-200 outline-none"
                    name="dob"
                    type="date"
                    placeholder="Surname/Other name/Middle name"
                    value={formInput.dob}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <h5>Gender*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 rounded-sm outline-none "
                    name="gender"
                    value={formInput.gender}
                    onChange={handleInput}
                  >
                    <option>Pls Select..</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Hometown</h5>
                  <input
                    className=" px-7  py-2 bg-slate-200 outline-none rounded-sm w-[170px]"
                    type="text"
                    placeholder="Agbawu-owo"
                    value={formInput.hometown}
                    name="hometown"
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <h5>State of Origin*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 outline-none w-[200px] rounded-sm "
                    name="stateoforigin"
                    id="state"
                    value={formInput.stateoforigin}
                    onChange={handleInput}
                  >
                    <option value="ABIA">ABIA</option>
                    <option value="ADAMAWA">ADAMAWA</option>
                    <option value="AKWA IBOM">AKWA IBOM</option>
                    <option value="ANAMBRA">ANAMBRA</option>
                    <option value="BAUCHI">BAUCHI</option>
                    <option value="BAYELSA">BAYELSA</option>
                    <option value="BENUE">BENUE</option>
                    <option value="BORNA">BORNO</option>
                    <option value="CROSS RIVER">CROSS RIVER</option>
                    <option value="DELATA">DELTA</option>
                    <option value="EBONYI">EBONYI</option>
                    <option value="EDO">EDO</option>
                    <option value="EKITI">EKITI</option>
                    <option value="ENUGU">ENUGU</option>
                    <option value="GOMBE">GOMBE</option>
                    <option value="IMO">IMO</option>
                    <option value="JIGAWA">JIGAWA</option>
                    <option value="KADUNA">KADUNA</option>
                    <option value="KANO">KANO</option>
                    <option value="KATSINA">KATSINA</option>
                    <option value="KEBBI">KEBBI</option>
                    <option value="KOGI">KOGI</option>
                    <option value="KWARA">KWARA</option>
                    <option value="LAGOS">LAGOS</option>
                    <option value="NASSARAWA">NASSARAWA</option>
                    <option value="NIGER">NIGER</option>
                    <option value="OGUN">OGUN</option>
                    <option value="ONDO">ONDO</option>
                    <option value="OSUN">OSUN</option>
                    <option value="OYO">OYO</option>
                    <option value="PLATEAU">PLATEAU</option>
                    <option value="RIVERS">RIVERS</option>
                    <option value="SOKOTO">SOKOTO</option>
                    <option value="TARABA">TARABA</option>
                    <option value="YOBE">YOBE</option>
                    <option value="ZAMFARA">ZAMFARA</option>
                    <option value="ABUJA FCT">ABUJA FCT</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <h5>Occupation*</h5>
                  <input
                    className=" px-7  py-2 bg-slate-200 outline-none rounded-sm w-[190px]"
                    type="text"
                    name="occupation"
                    placeholder="Fashion Designer"
                    value={formInput.occupation}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Place of work / Course of Study*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    name="course"
                    placeholder="The Pitch Community / Anatomy"
                    value={formInput.course}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Position held at work / Level(Student)</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="Accountant/200"
                    name="level"
                    value={formInput.level}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Marital Status*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 outline-none w-[150px] rounded-sm "
                    name="maritalstatus"
                    value={formInput.maritalstatus}
                    onChange={handleInput}
                  >
                    <option>Pls Select..</option>
                    <option value="Single">Single</option>
                    <option value="Engaged">Engaged</option>
                    <option value="Married">Married</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <h5>Phone number 1*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[190px]"
                    type="tel"
                    name="phoneno1"
                    placeholder="+234 xxxxxxxxx"
                    value={formInput.phoneno1}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Email Adress*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[250px]"
                    type="email"
                    name="emailaddress1"
                    placeholder="youremail@gmail.com"
                    value={formInput.emailaddress1}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Phone number 2*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[190px]"
                    type="tel"
                    name="phoneno2"
                    placeholder="+234 xxxxxxxxx"
                    value={formInput.phoneno2}
                    onChange={handleInput}
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Email Address 2*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[250px]"
                    type="email"
                    placeholder="youremail@gmail.com"
                    name="emailaddress2"
                    value={formInput.emailaddress2}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Postal Code*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[150px]"
                    type="tel"
                    placeholder="000000"
                    name="postalcode"
                    value={formInput.postalcode}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Hostel Address*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    name="hosteladdress"
                    placeholder="Student address"
                    value={formInput.hosteladdress}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Home Address*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    name="homeaddress"
                    placeholder="Non-Hostel address"
                    value={formInput.homeaddress}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Facebook ID*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    name="facebookid"
                    placeholder="Facebook Handle"
                    value={formInput.facebookid}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Instagram ID*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="Instagram Handle"
                    name="instagramid"
                    value={formInput.instagramid}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>LinkedIn ID*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="LinkedIn Handle"
                    name="linkedIn"
                    value={formInput.linkedIn}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Others*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    name="othermedia"
                    placeholder="Any Other Social Media Handle"
                    value={formInput.othermedia}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Next of Kins */}

          <section className=" flex mt-24 gap-10 md:gap-5 lg:gap-20 md:flex-row flex-col ">
            <div className=" ">
              <h1 className="font-bold ">Next of Kins Details*</h1>
              <h4 className=" text-sm text-slate-500">
                Provide your personal info
              </h4>
            </div>

            <div className=" grid gap-5 grid-cols-1">
              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Name</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="Surname/Other name/Middle name"
                    name="nextofkinname"
                    value={formInput.nextofkinname}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Date of Birth*</h5>
                  <input
                    className=" px-3 py-2 rounded-sm bg-slate-200 outline-none"
                    type="date"
                    placeholder="Surname/Other name/Middle name"
                    name="nextofkindob"
                    value={formInput.nextofkindob}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <h5>Gender*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 rounded-sm outline-none "
                    name="nextofkingender"
                    value={formInput.nextofkingender}
                    onChange={handleInput}
                    required
                  >
                    <option>Pls Select...</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Relationship*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 outline-none w-[150px] rounded-sm "
                    name="nextofkinrelationship"
                    value={formInput.nextofkinrelationship}
                    onChange={handleInput}
                    required
                  >
                    <option>Pls Select...</option>
                    <option value="Sister">Sister</option>
                    <option value="Brother">Brother</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <h5>State of Origin*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 outline-none w-[150px] rounded-sm "
                    name="nextofkinstateoforigin"
                    id=""
                    value={formInput.nextofkinstateoforigin}
                    onChange={handleInput}
                  >
                    <option>Pls Select...</option>
                    <option value="ABIA">ABIA</option>
                    <option value="ADAMAWA">ADAMAWA</option>
                    <option value="AKWA IBOM">AKWA IBOM</option>
                    <option value="ANAMBRA">ANAMBRA</option>
                    <option value="BAUCHI">BAUCHI</option>
                    <option value="BAYELSA">BAYELSA</option>
                    <option value="BENUE">BENUE</option>
                    <option value="BORNA">BORNO</option>
                    <option value="CROSS RIVER">CROSS RIVER</option>
                    <option value="DELATA">DELTA</option>
                    <option value="EBONYI">EBONYI</option>
                    <option value="EDO">EDO</option>
                    <option value="EKITI">EKITI</option>
                    <option value="ENUGU">ENUGU</option>
                    <option value="GOMBE">GOMBE</option>
                    <option value="IMO">IMO</option>
                    <option value="JIGAWA">JIGAWA</option>
                    <option value="KADUNA">KADUNA</option>
                    <option value="KANO">KANO</option>
                    <option value="KATSINA">KATSINA</option>
                    <option value="KEBBI">KEBBI</option>
                    <option value="KOGI">KOGI</option>
                    <option value="KWARA">KWARA</option>
                    <option value="LAGOS">LAGOS</option>
                    <option value="NASSARAWA">NASSARAWA</option>
                    <option value="NIGER">NIGER</option>
                    <option value="OGUN">OGUN</option>
                    <option value="ONDO">ONDO</option>
                    <option value="OSUN">OSUN</option>
                    <option value="OYO">OYO</option>
                    <option value="PLATEAU">PLATEAU</option>
                    <option value="RIVERS">RIVERS</option>
                    <option value="SOKOTO">SOKOTO</option>
                    <option value="TARABA">TARABA</option>
                    <option value="YOBE">YOBE</option>
                    <option value="ZAMFARA">ZAMFARA</option>
                    <option value="ABUJA FCT">ABUJA FCT</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <h5>Occupation*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[280px]"
                    type="text"
                    placeholder="Fashion Designer"
                    value={formInput.nextofkinoccupation}
                    name="nextofkinoccupation"
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Marital Status*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 outline-none w-[150px] rounded-sm "
                    name="nextofkinmaritalstatus"
                    value={formInput.nextofkinmaritalstatus}
                    onChange={handleInput}
                    id=""
                  >
                    <option>Single</option>
                    <option>Engaged</option>
                    <option value="">Married</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <h5>Phone number *</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[190px]"
                    type="tel"
                    placeholder="+234 xxxxxxxxx"
                  />
                </div>

                <div className="flex flex-col">
                  <h5>Email Adress*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[250px]"
                    type="email"
                    placeholder="youremail@gmail.com"
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Address*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="Student address"
                  />
                </div>
                <div className="flex flex-col">
                  <h5>Facebook ID*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="Facebook Handle"
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Instagram ID*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="Instagram Handle"
                  />
                </div>

                <div className="flex flex-col">
                  <h5>LinkedIn ID*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="LinkedIn Handle"
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Others*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="Any Other Social Media Handle"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Spiritual data */}
          <section className=" flex mt-24 gap-10 md:gap-5 lg:gap-20 md:flex-row flex-col ">
            <div className=" ">
              <h1 className="font-bold ">Spiritual Data*</h1>
              <h4 className=" text-sm text-slate-500">
                Provide your spiritual data
              </h4>
            </div>

            <div className=" grid gap-5 grid-cols-1">
              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Are you Born Again*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 rounded-sm outline-none "
                    name=""
                    id=""
                  >
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <h5>Date of Spiritual Conversion*</h5>
                  <input
                    className=" px-3 py-2 rounded-sm bg-slate-200 outline-none"
                    type="date"
                    placeholder="DD/MM/YY"
                  />
                </div>
                <div className="flex flex-col">
                  <h5>Are you Baptized by Immmersion*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 rounded-sm outline-none "
                    name=""
                    id=""
                  >
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Location of Immersion*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[280px]"
                    type="text"
                    placeholder="Name of Parish"
                  />
                </div>
                <div className="flex flex-col">
                  <h5>Are you Baptized by Holy Spirit*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 outline-none w-[150px] rounded-sm "
                    name=""
                    id=""
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Date you joined RCCG THE WATCHTOWER*</h5>
                  <input
                    className=" px-3 py-2 rounded-sm bg-slate-200 outline-none"
                    type="date"
                    placeholder="DD/MM/YY"
                  />
                </div>
                <div className="flex flex-col">
                  <h5>Did you take FAITH COLLEGE*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 outline-none w-[150px] rounded-sm "
                    name=""
                    id=""
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Did you take SCHOOL OF DISCIPLESHIP*</h5>
                  <select
                    className=" px-3 py-2 bg-slate-200 outline-none w-[150px] rounded-sm "
                    name=""
                    id=""
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <h5>Your Spiritual Gifts*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="Speaking in tongues"
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Current Unit(s)/ Position(s)*</h5>
                  <input
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[300px]"
                    type="text"
                    placeholder="Drame/Dance/Choral.."
                  />
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>Why did you join the Workforce*</h5>
                  <textarea
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[100%]"
                    name=""
                    id=""
                    cols="80"
                    rows="8"
                    placeholder="Type in here"
                  ></textarea>
                </div>
              </div>
            </div>
          </section>

          {/* General Data */}
          <section className=" flex mt-24 gap-10 md:gap-5 lg:gap-20 md:flex-row flex-col ">
            <div className=" ">
              <h1 className="font-bold ">General Data*</h1>
              <h4 className=" text-sm text-slate-500">
                Provide your general data
              </h4>
            </div>

            <div className=" grid gap-5 grid-cols-1">
              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>
                    What are your weakness(es) and areas needing
                    improvement/areas of interest?*
                  </h5>
                  <textarea
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[100%]"
                    name=""
                    id=""
                    cols="80"
                    rows="8"
                    placeholder="Kindly write your weakness(es) and areas needing improvement/areas of interest..."
                  ></textarea>
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>
                    What are your skill(s), strength(s) and area of expertise?*
                  </h5>
                  <textarea
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[100%]"
                    name=""
                    id=""
                    cols="80"
                    rows="8"
                    placeholder="Kindly write your skill(s), strength(s) and area of expertise..."
                  ></textarea>
                </div>
              </div>

              <div className=" flex md:flex-row gap-7 flex-col ">
                <div className="flex flex-col">
                  <h5>List Six (6) adjectives to describe yourself*</h5>
                  <textarea
                    className=" px-7 rounded-sm  py-2 bg-slate-200 outline-none w-[100%]"
                    name=""
                    id=""
                    cols="80"
                    rows="8"
                    placeholder="Kindly write Six (6) adjectives to describe yourself..."
                  ></textarea>
                </div>
              </div>
            </div>
          </section>

          {/* Section / Wrok Group / Department */}
          <section className=" flex mt-24 gap-10 md:gap-5 lg:gap-20 md:flex-row flex-col ">
            <div className=" ">
              <h1 className="font-bold ">Sections Data*</h1>
              <h4 className=" text-sm text-slate-500">
                Provide your section data
              </h4>
            </div>

            <div className=" grid gap-5 grid-cols-1">
              <div className="flex flex-col">
                <h5>What Section do you belong*</h5>
                <select
                  className=" px-3 py-2 bg-slate-200 outline-none w-[300px] rounded-sm "
                  name=""
                  id=""
                >
                  <option>Pls Select your section</option>
                  <option>Truth Ambassadors</option>
                  <option>Engravers</option>
                  <option>Sword Bearers</option>
                  <option>Royal Priesthood</option>
                </select>
              </div>
            </div>
          </section>

          <section className=" flex mt-24 gap-10 md:gap-5 lg:gap-20 md:flex-row flex-col ">
            <div className=" ">
              <h1 className="font-bold ">Work Group*</h1>
              <h4 className=" text-sm text-slate-500">
                Provide your group data
              </h4>
            </div>

            <div className=" grid gap-5 grid-cols-1">
              <div className="flex flex-col">
                <h5>What Section do you belong*</h5>
                <select
                  className=" px-3 py-2 bg-slate-200 outline-none w-[300px] rounded-sm "
                  name=""
                  id=""
                >
                  <option>Pls Select your section</option>
                  <option>Light</option>
                  <option>Truth</option>
                </select>
              </div>
            </div>
          </section>

          <section className=" flex mt-24 gap-10 md:gap-5 lg:gap-20 md:flex-row flex-col ">
            <div className=" ">
              <h1 className="font-bold ">Department*</h1>
              <h4 className=" text-sm text-slate-500">
                Provide your Dept. data
              </h4>
            </div>

            <div className=" grid gap-5 grid-cols-1">
              <div className="flex flex-col">
                <h5>What Department do you belong*</h5>
                <select
                  className=" px-3 py-2 bg-slate-200 outline-none w-[300px] rounded-sm "
                  name=""
                  id=""
                >
                  <option>Pls Select your Department</option>
                  <option>Technical</option>
                  <option>Welfare</option>
                  <option>Protocol</option>
                  <option>Dance</option>
                  <option>Drama</option>
                  <option>Scribes</option>
                  <option>Maintanance</option>
                  <option>Choral</option>
                  <option>Media</option>
                  <option>Usher</option>
                  <option>Others</option>
                </select>
              </div>

              {/* <div className="flex gap-2 flex-col">
              <textarea
                className=" px-7 rounded-sm mb-14  py-2 bg-slate-200 outline-none w-[100%]"
                name=""
                id=""
                cols="80"
                rows="1"
                placeholder="Kindly Specify if you choose others"
              ></textarea>
            </div> */}

              <div>
                <input
                  type="submit"
                  value="SUBMIT"
                  className=" px-3 py-5 mt-24 w-full bg-blue-900 text-white "
                />
              </div>
            </div>
          </section>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Ourteam;
