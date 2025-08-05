export type InputField = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export const EmptyInputField: InputField = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export type InputFieldValid = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
};
export const EmptyInputFieldValid: InputFieldValid = {
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
};

export type InputFieldItem = {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  label: string;
};

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type InputTextFieldProps = {
  field: InputFieldItem;
  onChange: (e: InputChangeEvent) => void;
  errorMessage: string;
};

// .................TEXT AREA TYPES.....................
export type MessageType = {
  message: string;
};

export const EmptymessageType: MessageType = {
  message: "",
};
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export type TextAreaFieldProps = {
  message: MessageType;
  onChange: (e: TextAreaChangeEvent) => void;
  errorMessage?: string; // Add error message prop for display
};

// .................DROPDOWN TYPES.....................
export type DropDownProps = {
  onSelect: (option: string) => void;
  selections: string[];
};

// .................FIELD ERROR MESSAGES TYPES.....................
export type FieldErrorMessage = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  services: string;
  appointmentDate: string;
  appointmentTime: string;
};

export const EmptyFieldErrorMessage: FieldErrorMessage = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  services: "",
  appointmentDate: "",
  appointmentTime: "",
};
