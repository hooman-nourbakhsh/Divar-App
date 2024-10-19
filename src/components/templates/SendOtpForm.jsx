import toast from "react-hot-toast";
import { sendOTP } from "services/auth";

import styles from "styles/SendOtpForm.module.css";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) return toast.error(" شماره موبایل باید ۱۱ رقم باشد");

    const { response, error } = await sendOTP(mobile);

    if (response) {
      setStep(2);
      toast.success("کد تایید به شماره موبایل ارسال شد");
    }
    if (error) toast.error(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>

      <span>برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد.</span>

      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>

      <input type="text" id="input" placeholder="شماره موبایل" value={mobile} onChange={(e) => setMobile(e.target.value)} />

      <button type="submit">ارسال کد تأیید</button>
    </form>
  );
}

export default SendOtpForm;
