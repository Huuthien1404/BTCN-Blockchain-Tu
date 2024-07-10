import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setWallet } from "@/redux/actions/user.action";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IoIosWarning } from "react-icons/io";
import { LuFileBox } from "react-icons/lu";
import { FaKey, FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux/hooks";
import {
  accessKeyStore,
  accessPrivateKey,
} from "@/redux/reducers/user.reducer";
import { WalletType } from "@/types";

const AccessWallet = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const dispatchAsync = useAppDispatch();

  const [openAccessType, setOpenAccessType] = useState<boolean>(false);
  const [accessType, setAccessType] = useState<string>("");
  const [openKeystore, setOpenKeystore] = useState<boolean>(false);
  const [keyStoreFile, setKeyStoreFile] = useState<any>(null);
  const [password, setPassword] = useState<string>("");
  const [openPrivateKey, setOpenPrivateKey] = useState<boolean>(false);
  const [privateKey, setPrivateKey] = useState<string>("");

  const handleChooseAccesType = () => {
    setOpenAccessType(false);

    if (accessType === "keystore") {
      setOpenKeystore(true);
    }

    if (accessType === "privatekey") {
      setOpenPrivateKey(true);
    }
  };

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e: any) {
      const contents = e.target.result;
      const jsonData = JSON.parse(contents);
      setKeyStoreFile(jsonData);
    };

    reader.readAsText(file);
  };

  const handleAccessKeyStore = async () => {
    if (!keyStoreFile) toast.error("Please choose key store file!");
    if (password === "") toast.error("Please input password!");

    if (keyStoreFile) {
      const keyStoreFileData = {
        ...keyStoreFile,
        password: password,
      };

      const res: WalletType = await dispatchAsync(
        accessKeyStore(keyStoreFileData)
      ).unwrap();

      if (!res) {
        toast.error("Password incorrect!");
        setPassword("");
        setOpenKeystore(false);
        return;
      }

      sessionStorage.setItem("wallet", JSON.stringify(res));
      dispatch(setWallet(res));

      navigate("/dashboard");
      toast.success("Access wallet successfully!");
    }

    setPassword("");
    setOpenKeystore(false);
  };

  const handleAccessPrivateKey = async () => {
    if (privateKey === "") toast.error("Please input private key!");

    if (privateKey !== "") {
      const res: WalletType = await dispatchAsync(
        accessPrivateKey(privateKey)
      ).unwrap();

      console.log(res);

      if (!res) {
        toast.error("Private key incorrect!");
        setPrivateKey("");
        setOpenPrivateKey(false);
        return;
      }

      sessionStorage.setItem("wallet", JSON.stringify(res));

      dispatch(setWallet(res));

      navigate("/dashboard");
      toast.success("Access wallet successfully!");
    } else {
      toast.error("Private key incorrect!");
    }

    setPrivateKey("");
    setOpenPrivateKey(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-primary-gray px-6 py-[100px]">
      <div className="bg-white mx-auto md:w-[600px] lg:w-[800px] rounded-md">
        <div className="bg-green-500 text-white p-6 rounded-t-md">
          <h1 className="text-xl font-bold text-center uppercase">
            Access My Wallet
          </h1>
        </div>
        <div className="px-4 py-6">
          <div className="px-4 mb-5 flex flex-wrap gap-3 justify-between">
            <div
              className="w-[100%] md:w-[30%] p-4 rounded-md flex flex-col gap-5 items-center
                          hover:scale-110 hover:cursor-pointer hover:bg-green-500 hover:text-white"
            >
              <img src="../assets/logo-create.svg" alt="article" />
              <h1 className="text-xl font-bold">Hardware</h1>
              <p className="text-center">
                Ledger wallet, FINNEY, Trezor, BitBox, Secalot, KeepKey, XWallet
              </p>
            </div>
            <div
              className="w-[100%] md:w-[30%] p-4 rounded-md flex flex-col gap-5 items-center
                          hover:scale-110 hover:cursor-pointer hover:bg-green-500 hover:text-white"
            >
              <img src="../assets/logo-create.svg" alt="article" />
              <h1 className="text-xl font-bold">MEW CX</h1>
              <p className="text-center">MetaMask, Dappler</p>
            </div>
            <Dialog open={openAccessType} onOpenChange={setOpenAccessType}>
              <DialogTrigger asChild>
                <div
                  className="group w-[100%] md:w-[30%] p-4 rounded-md flex flex-col gap-5 items-center
                          hover:scale-110 hover:cursor-pointer hover:bg-blue-700 hover:text-white"
                >
                  <img src="../assets/logo-create.svg" alt="article" />
                  <h1 className="text-xl font-bold">Software</h1>
                  <p className="text-center">
                    Keystore file, Private key, Minemonic phrase
                  </p>
                  <p className="text-sm text-red-500 font-bold group-hover:text-white">
                    Not recommended
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Access To Wallet</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-5">
                  <div className="bg-primary-warning flex flex-wrap justify-center md:justify-between gap-3 px-6 py-4">
                    <IoIosWarning size={100} color="orange" />
                    <div className="w-[100%] md:w-[80%] flex flex-col gap-3">
                      <h1 className="font-bold">NOT RECOMMENDED</h1>
                      <p className="text-sm text-gray-400">
                        This is not a recommended way to create your wallet. Due
                        to the sensitivity of the information involved, these
                        options should only be used in offine settings by
                        experienced users.
                      </p>
                      <div className="font-bold flex items-center gap-2">
                        <p>Read</p>
                        <p className="text-green-500 underline">
                          Using MEW offline
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex items-center justify-between gap-3 p-4 rounded-md border-2
                                hover:cursor-pointer hover:border-green-500 ${
                                  accessType === "keystore"
                                    ? "border-green-500"
                                    : "border-gray-200"
                                }`}
                    onClick={() => {
                      if (accessType === "" || accessType === "privatekey")
                        setAccessType("keystore");
                      else setAccessType("");
                    }}
                  >
                    <div className="flex items-center gap-5">
                      <LuFileBox size={50} />
                      <h1>Keystore File</h1>
                    </div>
                    {accessType === "keystore" && (
                      <FaCheckCircle className="text-green-500" size={40} />
                    )}
                  </div>
                  <div
                    className={`flex items-center justify-between gap-3 p-4 rounded-md border-2
                                hover:cursor-pointer hover:border-green-500 ${
                                  accessType === "privatekey"
                                    ? "border-green-500"
                                    : "border-gray-200"
                                }`}
                    onClick={() => {
                      if (accessType === "" || accessType === "keystore")
                        setAccessType("privatekey");
                      else setAccessType("");
                    }}
                  >
                    <div className="flex items-center gap-5">
                      <FaKey size={40} />
                      <h1>Private Key</h1>
                    </div>
                    {accessType === "privatekey" && (
                      <FaCheckCircle className="text-green-500" size={40} />
                    )}
                  </div>
                  <p className="text-center">
                    Purchase a hardware wallet for the highest security when
                    accessing your crypto
                  </p>
                  <p className="text-center text-green-500 font-bold">
                    Purchase a hardware wallet
                  </p>
                </div>
                <DialogFooter>
                  <Button type="button" onClick={handleChooseAccesType}>
                    Continue
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={openKeystore} onOpenChange={setOpenKeystore}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Access By Keystore File</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-5">
                  <div className="bg-primary-warning flex flex-wrap justify-center md:justify-between gap-3 px-6 py-4">
                    <IoIosWarning size={100} color="orange" />
                    <div className="w-[100%] md:w-[80%] flex flex-col gap-3">
                      <h1 className="font-bold">NOT RECOMMENDED</h1>
                      <p className="text-sm text-gray-400">
                        This is not a recommended way to create your wallet. Due
                        to the sensitivity of the information involved, these
                        options should only be used in offine settings by
                        experienced users.
                      </p>
                      <div className="font-bold flex items-center gap-2">
                        <p>Read</p>
                        <p className="text-green-500 underline">
                          Using MEW offline
                        </p>
                      </div>
                    </div>
                  </div>
                  <Input
                    id="keystore-file"
                    type="file"
                    onChange={handleFileInputChange}
                  />
                  <div className="mb-5 flex flex-col gap-3">
                    <h1 className="text-3xl text-center my-[30px] font-bold uppercase">
                      Your password
                    </h1>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" onClick={handleAccessKeyStore}>
                    Access Wallet
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={openPrivateKey} onOpenChange={setOpenPrivateKey}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Access By Private Key</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-5">
                  <div className="bg-primary-warning flex flex-wrap justify-center md:justify-between gap-3 px-6 py-4">
                    <IoIosWarning size={100} color="orange" />
                    <div className="w-[100%] md:w-[80%] flex flex-col gap-3">
                      <h1 className="font-bold">NOT RECOMMENDED</h1>
                      <p className="text-sm text-gray-400">
                        This is not a recommended way to create your wallet. Due
                        to the sensitivity of the information involved, these
                        options should only be used in offine settings by
                        experienced users.
                      </p>
                      <div className="font-bold flex items-center gap-2">
                        <p>Read</p>
                        <p className="text-green-500 underline">
                          Using MEW offline
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 flex flex-col gap-3">
                    <h1 className="text-3xl text-center my-[30px] font-bold">
                      Your private key
                    </h1>
                    <Input
                      type="password"
                      value={privateKey}
                      onChange={(e) => {
                        setPrivateKey(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" onClick={handleAccessPrivateKey}>
                    Access Wallet
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-[50px] mb-[50px] flex flex-wrap justify-center items-center gap-1">
            <p>Want to learn more about Blockchain or MEW? Please go to</p>
            <p className="font-bold text-green-500">FAQs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessWallet;
