import { useState } from "react";
import { Zoom } from "react-reveal";
import Footer from "../../components/footer/footer.component";
import PayByTransfer from "../pay-by-transfer/pay-by-transfer.component";
import PayWithCard from "../pay-with-card/pay-with-card.route";

const Giving = () => {
  const [paymentType, setPaymentType] = useState("");

  const handleInput = (e) => {
    setPaymentType(e.target.value);
  };
  return (
    <div>
      <section className="max-w-2xl mx-auto py-20">
        <p className="text-center italic font-thin">
          “Bring the full tithe into the storehouse, that there may be food in
          my house. And thereby put me to the test, says the Lord of hosts, if I
          will not open the windows of heaven for you and pour down for you a
          blessing until there is no more need.”
        </p>
        <p className="text-center italic font-thin mt-8">Malachi 3:10</p>
      </section>
      <section className="mb-20">
        <div className="flex flex-col items-center gap-8 mb-10">
          <p className="font-medium text-3xl capitalize text-[#0B0037]">
            choose payment method
          </p>
          <select
            name="paymentMethod"
            className="max-w-4xl rounded border px-8 h-10 outline-none"
            onChange={handleInput}
          >
            <option value="">-- Choose an option --</option>
            <option value="transfer">Pay by Transfer</option>
            <option value="card">Pay with Card</option>
          </select>
        </div>
        {paymentType === "card" && (
          <Zoom>
            <PayWithCard />
          </Zoom>
        )}
        {paymentType === "transfer" && (
          <Zoom>
            <PayByTransfer />
          </Zoom>
        )}
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Giving;
