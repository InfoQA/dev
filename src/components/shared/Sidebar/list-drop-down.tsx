import { CircleQuestionMarkIcon, PlusIcon, Sun } from "lucide-react";

const listDropDown = [
  {
    icon: <PlusIcon />,
    label: "New Chat / Clear Chat",
    dialog: "new-chat",
  },
  {
    icon: <Sun />,
    label: "Dark Mode",
  },
  {
    icon: <CircleQuestionMarkIcon />,
    label: "About",
    dialog: "about",
  },
];

export default listDropDown;
