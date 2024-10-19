import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { checkOTP } from "services/auth";
import { getProfile } from "services/user";
import { setCookie } from "utils/cookie";
import toast from "react-hot-toast";

import styles from "styles/CheckOtpForm.module.css";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return toast.error("کد تایید باید ۵ رقم باشد");
    const { response, error } = await checkOTP(mobile, code);

    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
      toast.success("ورود با موفقیت انجام شد");
    }
    if (error) toast.error(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>تایید شماره موبایل</p>

      <span>کد تایید به شماره موبایل «{mobile}» ارسال شده است</span>

      <label htmlFor="input">کد تأیید را وارد کنید</label>

      <input type="text" id="input" placeholder="کد تأیید ۵ رقمی" value={code} onChange={(e) => setCode(e.target.value)} />

      <button type="submit">تایید</button>
      <button className={styles.backButton} onClick={() => setStep(1)}>
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
