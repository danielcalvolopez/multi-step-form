import "./ThankYou.scss";
import ThankYouLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <img src={ThankYouLogo} />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
