import { History } from "history";

export const goToForm = (history: History): void => {
  history.push("./");
};

export const goToUserList = (history: History): void => {
  history.push("./userlist");
};

export const goToAddUser = (history: History): void => {
  history.push("./adduser");
};

export const goToUserDetails = (history: History): void => {
  history.push("./userdetails");
};
