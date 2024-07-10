import { saveAs } from "file-saver";
import { WalletType } from "@/types";

export const generateJSONFile = (newWallet: WalletType) => {
  // Convert the JSON object to a string
  const jsonData = JSON.stringify(newWallet, null, 2);

  // Create a Blob object from the JSON string
  const blob = new Blob([jsonData], { type: "application/json" });

  // Save the file using FileSaver.js
  saveAs(blob, "keystore-wallet.json");
};

export const getCurrentTime = () => {
  const currentDate = new Date();

  // Get hours, minutes, and seconds
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const time = hours + ":" + minutes + ":" + seconds;

  // Get month, day, and year
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const date = month + "/" + day + "/" + year;

  const timestamp = date + " " + time;

  return timestamp;
};

export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );
