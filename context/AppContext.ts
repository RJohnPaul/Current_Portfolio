import { createContext } from "react";

import { ContextProps } from "@/types/context";

const initialValues = {
  showMenu: false,
  setShowMenu: () => undefined,
  name: "",
  setName: () => undefined,
  email: "",
  setEmail: () => undefined,
  message: "",
  setMessage: () => undefined,
  visible: true,
  setVisible: () => undefined,
  submitting: true,
  setSubmitting: () => undefined,
  isVisible: false,
  setIsVisible: () => undefined,
  showCommandMenu: false,
  setShowCommandMenu: () => undefined,
};

const AppContext = createContext<ContextProps>(initialValues);

export default AppContext;
