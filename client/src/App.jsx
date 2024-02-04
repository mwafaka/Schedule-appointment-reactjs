import { useState } from "react";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {

  const availableDays = ["2024-2-10", "2024-2-14", "2024-2-18"];

  const [date, setDate] = useState(null);

  function onChange(data) {
    setDate(data);
  }

  function setDateF() {
    const res = Object.values(date);

    const result = res.slice(0, 3).join("-");

    if (availableDays.includes(result)) {
      toast("Selected date is not available.", result);
    } else {
      toast("your appointment has been recieved.", result);
    }
  }

  return (
    <>
      <button onClick={setDateF}>Schedule appointment</button>
      <ToastContainer />
      <DtPicker
        onChange={(data) => onChange(data)}
        type="single"
        locale="en"
        withTime
        showWeekend
      />
    </>
  );
};

export default App;
