import { checkOTP } from "services/auth";
import setCookie from "utils/cookie";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;

    const { response, error } = await checkOTP(mobile, code);

    if (response) {
      setCookie(response.data);
    }
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>تایید شماره موبایل</p>

      <span>کد تایید به شماره موبایل {mobile} ارسال شده است</span>

      <label htmlFor="input">کد تایید را وارد کنید</label>

      <input type="text" id="input" placeholder="کد تایید" value={code} onChange={(e) => setCode(e.target.value)} />

      <button type="submit">تایید</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
