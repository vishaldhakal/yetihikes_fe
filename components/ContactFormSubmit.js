import axios from "axios";
import swal from "sweetalert";

async function ContactFormSubmit(msgdata, setSubmitbtn, setCredentials) {
  setSubmitbtn("Submitting...");
  let url = `/api/send/`;
  try {
    await axios.post(url, msgdata, {
      headers: {
        "content-type": "multipart/form-data",
      },
      mode: "no-cors",
    });
    setSubmitbtn("Sucessfully Submitted");
    setTimeout(() => {
      setSubmitbtn("Contact Now");
    }, 1000);
    setCredentials({
      ...msgdata,
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  } catch (errr) {
    console.log(errr);
    setSubmitbtn("Contact Now");
    swal("Message Failed", "Cannot send your message", "error");
    throw new Error(errr);
  }
}

export default ContactFormSubmit;
