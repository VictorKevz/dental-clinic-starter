import { useCallback, useState } from "react";
import {
  EmptyInputField,
  EmptymessageType,
  FieldErrorMessage,
  EmptyFieldErrorMessage,
  InputChangeEvent,
  InputField,
  InputFieldItem,
  MessageType,
  TextAreaChangeEvent,
} from "../../types/contact";
import { InputTextField } from "../../components/InputTextField";
import { TextAreaField } from "../../components/TextAreaField";
import { FormButton } from "../../components/Buttons/FormButton";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Backspace,
  WhatsApp,
} from "@mui/icons-material";
import { DropDown } from "../../components/DropDown";
import { DateTimeSelector } from "../../components/DateTimeSelector";
import { useAlertProvider } from "../../context/AlertContext";

export const Form = () => {
  // .................. FORM STATES.............................................................
  const [inputField, setInputField] = useState<InputField>(EmptyInputField);
  const [message, setMessage] = useState<MessageType>(EmptymessageType);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selections, setSelections] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(Date.now() + 24 * 60 * 60 * 1000)
  );
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrorMessage>(
    EmptyFieldErrorMessage
  );
  const { onShowAlert } = useAlertProvider();
  // .................. FORM ONCHANGE EVENT HANDLERS................................................
  const handleInputChange = useCallback(
    (e: InputChangeEvent) => {
      const { name, value } = e.target;
      setInputField((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear field error when user starts typing
      if (fieldErrors[name as keyof FieldErrorMessage]) {
        setFieldErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [fieldErrors]
  );

  const handleTextAreaChange = useCallback(
    (e: TextAreaChangeEvent) => {
      setMessage({
        message: e.target.value,
      });

      // Clear message error when user starts typing
      if (fieldErrors.message) {
        setFieldErrors((prev) => ({
          ...prev,
          message: "",
        }));
      }
    },
    [fieldErrors.message]
  );
  const handleDateTimeChange = useCallback(
    (value: Date | null) => {
      setSelectedDate(value);

      // Clear date error when user selects a date
      if (fieldErrors.appointmentDate) {
        setFieldErrors((prev) => ({
          ...prev,
          appointmentDate: "",
        }));
      }
    },
    [fieldErrors.appointmentDate]
  );

  const handleTimeChange = useCallback(
    (timeValue: string) => {
      setSelectedTime(timeValue);

      // Clear time error when user selects a time
      if (fieldErrors.appointmentTime) {
        setFieldErrors((prev) => ({
          ...prev,
          appointmentTime: "",
        }));
      }
    },
    [fieldErrors.appointmentTime]
  );
  // .................. DROPDOWN HANDLERS.....................................................
  const toggleDropDown = useCallback(() => {
    setShowDropDown((prev) => !prev);
  }, []);

  const updateSelection = useCallback(
    (option: string) => {
      setSelections((prev) => {
        const isSelected = prev.includes(option);
        if (isSelected) {
          return prev.filter((s: string) => s !== option);
        }
        return [...prev, option];
      });

      // Clear services error when user makes a selection
      if (fieldErrors.services) {
        setFieldErrors((prev) => ({
          ...prev,
          services: "",
        }));
      }
    },
    [fieldErrors.services]
  );
  // Helper function to get the complete datetime for form submission
  const getSelectedDateTime = useCallback((): Date | null => {
    if (!selectedDate || !selectedTime) return null;

    const [hours, minutes] = selectedTime.split(":").map(Number);
    const dateTime = new Date(selectedDate);
    dateTime.setHours(hours, minutes, 0, 0);
    return dateTime;
  }, [selectedDate, selectedTime]);

  //...................................... FORM VALIDATION HELPER FUNC.................................................
  const validateForm = useCallback((): boolean => {
    const errors = { ...EmptyFieldErrorMessage };

    if (!inputField.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (inputField.firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters";
    }

    if (!inputField.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (inputField.lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters";
    }

    if (!inputField.email.trim()) {
      errors.email = "Email address is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputField.email.trim())) {
        errors.email = "Please enter a valid email address";
      }
    }

    if (!inputField.phone.trim()) {
      errors.phone = "Phone number is required";
    } else {
      // Zimbabwe phone number validation (flexible format)
      const phoneRegex = /^(\+263|263|0)(\d{9}|\d{2}\s?\d{3}\s?\d{4})$/;
      const cleanPhone = inputField.phone.replace(/\s+/g, "");
      if (!phoneRegex.test(cleanPhone)) {
        errors.phone = "Please enter a valid Zimbabwe phone number";
      }
    }

    if (!message.message.trim()) {
      errors.message = "Please provide a message or description";
    } else if (message.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    if (selections.length === 0) {
      errors.services = "Please select at least one service";
    }

    // Validate Appointment Date
    if (!selectedDate) {
      errors.appointmentDate = "Please select an appointment date";
    }

    // Validate Appointment Time
    if (!selectedTime) {
      errors.appointmentTime = "Please select an appointment time";
    }

    // Update field errors state - SINGLE SOURCE OF TRUTH
    setFieldErrors(errors);

    // Check if ALL fields are valid by ensuring no error messages exist
    const isFormValid = Object.values(errors).every((error) => error === "");

    return isFormValid;
  }, [inputField, message, selections, selectedDate, selectedTime]);

  //...................................... FORM SUBMISSION HANDLER.................................................
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Validate the form first
      if (!validateForm()) {
        onShowAlert({
          message: "Please fix the form errors before submitting",
          type: "error",
          visible: true,
        });
        return;
      }

      const appointmentDateTime = getSelectedDateTime();

      if (!appointmentDateTime) {
        onShowAlert({
          message: "Please select both date and time for your appointment",
          type: "error",
          visible: true,
        });
        console.error("");
        return;
      }

      // Form data ready for submission
      const formData = {
        ...inputField,
        message: message.message,
        services: selections,
        appointmentDateTime,
        appointmentDate: selectedDate,
        appointmentTime: selectedTime,
      };

      console.log("Form submission data:", formData);
      onShowAlert(
        {
          message: "Your Appointment has been successfully booked!",
          type: "success",
          visible: true,
        },
        4000
      );
      resetForm();
    },
    [
      validateForm,
      getSelectedDateTime,
      inputField,
      message.message,
      selections,
      selectedDate,
      selectedTime,
      onShowAlert,
    ]
  );
  const resetForm = () => {
    setInputField(EmptyInputField);
    setSelections([]);
    setMessage(EmptymessageType);
    setSelectedDate(new Date(Date.now() + 24 * 60 * 60 * 1000));
    setSelectedTime("");
    setFieldErrors(EmptyFieldErrorMessage);
  };
  const fieldsData: InputFieldItem[] = [
    {
      id: "firstName",
      name: "firstName",
      value: inputField.firstName,
      placeholder: "Jane",
      label: "First Name",
    },
    {
      id: "lastName",
      name: "lastName",
      value: inputField.lastName,
      placeholder: "Doe",
      label: "Last Name",
    },
    {
      id: "email",
      name: "email",
      value: inputField.email,
      placeholder: "janedoe@gmail.com",
      label: "Email Address",
    },
    {
      id: "phone",
      name: "phone",
      value: inputField.phone,
      placeholder: "+263 771 415 842",
      label: "Phone Number",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col gap-4 lg:gap-8 col-span-2 bg-[var(--color-bg-secondary)] rounded-xl min-h-[20vh] [box-shadow:var(--shadow-primary)] pb-8"
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
            errorMessage={fieldErrors[field.name as keyof FieldErrorMessage]}
          />
        ))}
      </fieldset>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4 md:px-5">
        <div className="w-full relative md:col-span-2 lg:col-span-1">
          <button
            type="button"
            onClick={toggleDropDown}
            className={`w-full h-12 !justify-between font-medium border ${
              fieldErrors.services
                ? "border-[var(--color-error)]"
                : "border-[var(--color-muted)]"
            } text-[var(--color-text-primary)] rounded-lg px-4 md:px-5`}
          >
            Select Service
            <span className="text-[var(--color-primary)]">
              {showDropDown ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </span>
          </button>
          {fieldErrors.services && (
            <span className="text-xs text-[var(--color-error)] pl-4 mt-1">
              {fieldErrors.services}
            </span>
          )}
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
            dateError={fieldErrors.appointmentDate}
            timeError={fieldErrors.appointmentTime}
          />
        </div>
      </div>
      <fieldset className="w-full px-4 md:px-5">
        <TextAreaField
          onChange={handleTextAreaChange}
          message={message}
          errorMessage={fieldErrors.message}
        />
      </fieldset>
      <footer className="w-full flex flex-col gap-4 sm:flex-row justify-between px-4 md:px-5 mt-4">
        <FormButton
          type="button"
          onClick={resetForm}
          variant="secondary"
          icon={<Backspace />}
        >
          Clear Form
        </FormButton>
        <FormButton type="submit" variant="primary" icon={<WhatsApp />}>
          Book Appointment
        </FormButton>
      </footer>
    </form>
  );
};
