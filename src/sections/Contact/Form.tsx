import { useCallback, useState } from "react";
import {
  EmptyInputField,
  EmptyInputFieldValid,
  EmptymessageType,
  InputChangeEvent,
  InputField,
  InputFieldItem,
  InputFieldValid,
  MessageType,
  TextAreaChangeEvent,
} from "../../types/contact";
import { InputTextField } from "../../components/InputTextField";
import { TextAreaField } from "../../components/TextAreaField";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  WhatsApp,
} from "@mui/icons-material";
import { DropDown } from "../../components/DropDown";
import { DateTimeSelector } from "../../components/DateTimeSelector";

export const Form = () => {
  // .................. FORM STATES.............................................................
  const [inputField, setInputField] = useState<InputField>(EmptyInputField);
  const [inputFieldValid, setInputFieldValid] =
    useState<InputFieldValid>(EmptyInputFieldValid);
  const [message, setMessage] = useState<MessageType>(EmptymessageType);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selections, setSelections] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(Date.now() + 24 * 60 * 60 * 1000) // Tomorrow
  );
  const [selectedTime, setSelectedTime] = useState<string>("");
  // .................. FORM ONCHANGE EVENT HANDLERS................................................
  const handleInputChange = useCallback((e: InputChangeEvent) => {
    const { name, value } = e.target;
    setInputField((prev) => ({
      ...prev,
      [name]: value,
    }));

    setInputFieldValid((prev) => ({
      ...prev,
      [name]: true,
    }));
  }, []);
  const handleTextAreaChange = useCallback((e: TextAreaChangeEvent) => {
    setMessage({
      message: e.target.value,
      isValid: true,
      errorMessage: "",
    });
  }, []);
  const handleDateTimeChange = useCallback((value: Date | null) => {
    setSelectedDate(value);
  }, []);

  const handleTimeChange = useCallback((timeValue: string) => {
    setSelectedTime(timeValue);
  }, []);

  // Helper function to get the complete datetime for form submission
  const getSelectedDateTime = useCallback((): Date | null => {
    if (!selectedDate || !selectedTime) return null;

    const [hours, minutes] = selectedTime.split(":").map(Number);
    const dateTime = new Date(selectedDate);
    dateTime.setHours(hours, minutes, 0, 0);
    return dateTime;
  }, [selectedDate, selectedTime]);

  // Example: Form submission handler
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const appointmentDateTime = getSelectedDateTime();

      if (!appointmentDateTime) {
        console.error("Please select both date and time for your appointment");
        return;
      }

      // Form data ready for submission
      const formData = {
        ...inputField,
        message: message.message,
        services: selections,
        appointmentDateTime, // Complete Date object with date and time
        // You can also get individual parts:
        appointmentDate: selectedDate,
        appointmentTime: selectedTime,
      };

      console.log("Form submission data:", formData);
      // Handle form submission here...
    },
    [
      inputField,
      message,
      selections,
      selectedDate,
      selectedTime,
      getSelectedDateTime,
    ]
  );
  // .................. DROPDOWN HANDLERS.....................................................
  const toggleDropDown = useCallback(() => {
    setShowDropDown((prev) => !prev);
  }, []);

  const updateSelection = useCallback((option: string) => {
    setSelections((prev) => {
      const isSelected = prev.includes(option);
      if (isSelected) {
        return prev.filter((s: string) => s !== option);
      }
      return [...prev, option];
    });
  }, []);

  const fieldsData: InputFieldItem[] = [
    {
      id: "firstName",
      name: "firstName",
      value: inputField.firstName,
      placeholder: "Jane",
      label: "First Name",
      isValid: inputFieldValid.firstName,
    },
    {
      id: "lastName",
      name: "lastName",
      value: inputField.lastName,
      placeholder: "Doe",
      label: "Last Name",
      isValid: inputFieldValid.lastName,
    },
    {
      id: "email",
      name: "email",
      value: inputField.email,
      placeholder: "janedoe@gmail.com",
      label: "Email Address",
      isValid: inputFieldValid.email,
    },
    {
      id: "phone",
      name: "phone",
      value: inputField.phone,
      placeholder: "+263 771 415 842",
      label: "Phone Number",
      isValid: inputFieldValid.phone,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-fit flex flex-col gap-4 lg:gap-8 col-span-2 bg-[var(--color-bg-secondary)] rounded-xl min-h-[20vh] [box-shadow:var(--shadow-primary)] pb-8"
    >
      <header className="w-full px-4 md:px-5 py-6 bg-[var(--color-bg-hover)] rounded-t-xl">
        <h3 className="text-2xl md:text-3xl">Book Your Appointment</h3>
        <p>
          Please fill out the form below to schedule your appointment with us.
        </p>
      </header>
      <fieldset className="w-full grid md:grid-cols-2 gap-4 lg:gap-8 px-4 md:px-5">
        {fieldsData.map((field) => (
          <InputTextField
            key={field.id}
            field={field}
            onChange={handleInputChange}
          />
        ))}
      </fieldset>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4 md:px-5">
        <div className="w-full relative md:col-span-2 lg:col-span-1">
          <button
            type="button"
            onClick={toggleDropDown}
            className="w-full h-12 !justify-between font-medium border border-[var(--color-muted)] text-[var(--color-text-primary)] rounded-lg px-4 md:px-5"
          >
            Select Service
            <span className="text-[var(--color-primary)]">
              {showDropDown ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </span>
          </button>
          {showDropDown && (
            <DropDown onSelect={updateSelection} selections={selections} />
          )}
        </div>
        <div className="w-full md:col-span-2 relative z-10">
          <DateTimeSelector
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateChange={handleDateTimeChange}
            onTimeChange={handleTimeChange}
          />
        </div>
      </div>
      <fieldset className="w-full px-4 md:px-5 lg:mt-8">
        <TextAreaField onChange={handleTextAreaChange} message={message} />
      </fieldset>
      <footer className="w-full flex justify-end px-4 md:px-5 mt-4">
        <button
          type="submit"
          className="h-12 max-w-[10rem] w-full gap-1 bg-[var(--color-primary)] rounded-lg text-[var(--color-text-on-primary)]"
        >
          <WhatsApp /> Send
        </button>
      </footer>
    </form>
  );
};
