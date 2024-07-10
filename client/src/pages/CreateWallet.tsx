import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import elliptic from "elliptic";
import { generateJSONFile } from "@/helpers";
import { Input } from "@/components/ui/input";
import { IoMdDownload } from "react-icons/io";
import { AiOutlineSafety } from "react-icons/ai";
import { BsIncognito } from "react-icons/bs";
import { LuDatabaseBackup } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { createNewWallet } from "@/redux/reducers/user.reducer";

interface WalletFormType {
  password: string;
}

const CreateWallet = () => {
  const navigate = useNavigate();

  const dispatchAsync = useAppDispatch();

  const ec = new elliptic.ec("secp256k1");

  const isLoading = useSelector<RootState, boolean>(
    (state) => state.users.isLoading
  );

  const [createWalletForm, setCreateWalletForm] = useState<WalletFormType>({
    password: "",
  });
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const [isGenerate, setIsGenerate] = useState<boolean>(false);

  const handleCreateNewWallet = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreated(true);
    setIsGenerate(true);

    const key = ec.genKeyPair();
    const publicKey = key.getPublic("hex");
    const privateKey = key.getPrivate("hex");

    const newWallet = {
      address: publicKey,
      publicKey: publicKey,
      privateKey: privateKey,
      password: createWalletForm?.password,
    };

    const walletRes = await dispatchAsync(createNewWallet(newWallet)).unwrap();

    sessionStorage.setItem("wallet", JSON.stringify(walletRes));

    // setTimeout(() => {
    //   setIsGenerate(false);
    // }, 3000);

    if (!isLoading) setIsGenerate(false);

    setCreateWalletForm({
      password: "",
    });
  };

  const handleDownloadKeystore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (sessionStorage.getItem("wallet") !== null) {
      const data: any = sessionStorage.getItem("wallet");
      const newWallet = JSON.parse(data);
      generateJSONFile(newWallet);
    }

    sessionStorage.removeItem("wallet");
    navigate("/access-wallet");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isCreated]);

  return (
    <div className="bg-primary-gray px-6 py-[100px]">
      {!isCreated ? (
        <form
          className="bg-white mx-auto md:w-[600px] lg:w-[800px] rounded-md"
          onSubmit={(e) => {
            handleCreateNewWallet(e);
          }}
        >
          <div className="px-4 md:px-[60px] py-6">
            <div className="mb-5 flex flex-col gap-3">
              <h1 className="text-3xl text-center my-[30px] font-bold uppercase">
                Your password
              </h1>
              <Input
                placeholder="Enter your password"
                type="password"
                value={createWalletForm.password}
                onChange={(e) => {
                  setCreateWalletForm({
                    ...createWalletForm,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <button className="mx-auto flex items-center justify-around w-[60%] bg-green-500 text-white font-bold p-4 rounded-md uppercase">
              <p>Next</p>
            </button>
            
          </div>
        </form>
      ) : (
        <form
          className="bg-white mx-auto md:w-[600px] lg:w-[800px] rounded-md"
          onSubmit={(e) => {
            handleDownloadKeystore(e);
          }}
        >
          <div className="bg-primary-black text-white p-6 rounded-t-md">
            <h1 className="text-xl font-bold text-center">
              Save My Keystore File
            </h1>
          </div>
          <div className="px-4 md:px-[60px] py-6">
            <div className="mb-5 flex flex-col gap-3">
              <div className="bg-primary-gray p-4 rounded-sm flex gap-3 items-center justify-between">
                <AiOutlineSafety className="text-green-500" size={80} />
                <div className="w-[80%]">
                  <h1 className="text-xl font-bold">Don't Lose it</h1>
                  <p>Be carefull, it can not be recovered if you lose it.</p>
                </div>
              </div>
              <div className="bg-primary-gray p-4 rounded-sm flex gap-3 items-center justify-between">
                <BsIncognito className="text-green-500" size={80} />
                <div className="w-[80%]">
                  <h1 className="text-xl font-bold">Don't Share it</h1>
                  <p>
                    Your funds will be stolen if you use this file on a
                    malicious phishing site.
                  </p>
                </div>
              </div>
              <div className="bg-primary-gray p-4 rounded-sm flex gap-3 items-center justify-between">
                <LuDatabaseBackup className="text-green-500" size={80} />
                <div className="w-[80%]">
                  <h1 className="text-xl font-bold">Make a Backup</h1>
                  <p>
                    Secure it like the millions of dollars it may one day be
                    worth.
                  </p>
                </div>
              </div>
            </div>
            <button
              disabled={isGenerate ? true : false}
              className={`mx-auto flex items-center justify-around w-[60%] text-white font-bold p-4 rounded-md ${
                isGenerate ? "bg-gray-500" : "bg-green-500"
              }`}
            >
              <div></div>
              <p>{isGenerate ? "Please wait..." : "Download Keystore File"}</p>
              <div>{!isGenerate && <IoMdDownload size={25} />}</div>
            </button>
            <div className="mt-[50px] mb-[50px] flex flex-wrap justify-center items-center gap-1">
              <p>Want to learn more about Blockchain or MEW? Please go to</p>
              <p className="font-bold text-green-500">FAQs</p>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateWallet;