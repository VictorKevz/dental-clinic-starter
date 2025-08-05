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
  isValid: boolean;
};

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type InputTextFieldProps = {
  field: InputFieldItem;
  onChange: (e: InputChangeEvent) => void;
};

// .................TEXT AREA TYPES.....................
export type MessageType = {
  message: string;
  isValid: boolean;
  errorMessage: string;
};

export const EmptymessageType: MessageType = {
  message: "",
  isValid: true,
  errorMessage: "",
};
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

export type TextAreaFieldProps = {
  message: MessageType;
  onChange: (e: TextAreaChangeEvent) => void;
};

// .................DROPDOWN TYPES.....................
export type DropDownProps = {
  onSelect: (option: string) => void;
  selections: string[];
};
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
