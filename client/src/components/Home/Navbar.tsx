import { Link, useNavigate } from "react-router-dom";
import { CustomFlowbiteTheme, Dropdown } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const customTheme: CustomFlowbiteTheme["dropdown"] = {
  inlineWrapper:
    "flex items-center font-medium text-base xl:text-lg hover:text-gray-500 ease-in-out duration-200",
  content: "px-5 py-4 focus:outline-none",
  floating: {
    item: {
      base: "flex w-full rounded-2xl cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
    },
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const [showBg, setShowBg] = useState(false);
  const handleScroll = useCallback(() => {
    window.scrollY === 0 ? setShowBg(false) : setShowBg(true);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("re-render")
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-xl w-full p-6 fixed left-[50vw] -translate-x-[50%] z-[9999]",
        [showBg ? "rounded-[48px] bg-gray-100" : undefined]
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="w-[120px]">
            <img className="w-[100%]" src="./assets/logo-mew.png" alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-[30px]">
          <Link
            to="/buy-crypto"
            className="font-medium text-base xl:text-lg hover:text-gray-500 ease-in-out duration-200"
          >
            Buy Crypto
          </Link>
          <Link
            to="/swap-tokens"
            className="font-medium text-base xl:text-lg hover:text-gray-500 ease-in-out duration-200"
          >
            Swap Tokens
          </Link>
          <Dropdown theme={customTheme} label="More Features" inline>
            <Dropdown.Item onClick={() => navigate("/staking")}>
              Staking
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/nft")}>NFT</Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/d-apps")}>
              DApps
            </Dropdown.Item>
          </Dropdown>
          <Dropdown theme={customTheme} label="Resources" inline>
            <Dropdown.Item onClick={() => navigate("/blog")}>
              Blog
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/help-center")}>
              Help Center
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/faq")}>FAQ</Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/customer-support")}>
              Customer Support
            </Dropdown.Item>
          </Dropdown>
          <Dropdown theme={customTheme} label="Products" inline>
            <Dropdown.Item onClick={() => navigate("/mobile-wallet")}>
              <div className="flex gap-4 items-center">
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_nuxt/mewwallet-logo.BvvzoP6u.svg"
                  alt="MEW mobile wallet logo"
                  className="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                />
                <div className="grow flex flex-col items-start">
                  <h6 className="text-base xl:text-lg font-bold mb-1 text-nowrap">
                    MEW Mobile App
                  </h6>
                  <p className="opacity-65 text-sm">Mobile wallet</p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/portfolio-manager")}>
              <div className="flex gap-4 items-center">
                <img
                  src="data:image/svg+xml,%3csvg%20width='220'%20height='220'%20viewBox='0%200%20220%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='220'%20height='220'%20fill='white'/%3e%3cpath%20d='M109.632%20189.632C153.814%20189.632%20189.632%20153.814%20189.632%20109.632C189.632%2065.4488%20153.814%2029.6316%20109.632%2029.6316C65.4488%2029.6316%2029.6316%2065.4488%2029.6316%20109.632C29.6316%20153.814%2065.4488%20189.632%20109.632%20189.632Z'%20fill='%231896A4'/%3e%3cpath%20d='M113.75%20136.246C110.503%20136.743%20107.127%20136.678%20103.735%20135.895C89.4732%20132.603%2080.5801%20118.371%2083.8727%20104.109C84.116%20103.055%2084.4426%20102.036%2084.7947%20101.037L59.7591%2090.8026C58.9153%2093.0318%2058.2207%2095.3146%2057.6797%2097.636C51.0545%20126.333%2068.9517%20154.975%2097.6487%20161.6C107.71%20163.923%20117.756%20163.216%20126.853%20160.101L113.75%20136.246ZM136.024%20106.874L99.7071%20106.518L157.494%20133.148C159.251%20129.554%20160.658%20125.698%20161.598%20121.627C168.223%2092.9304%20150.326%2064.2888%20121.629%2057.6636C110.11%2055.0042%2098.6191%2056.3045%2088.5384%2060.652L101.89%2084.7471C106.353%2083.354%20111.108%2083.1762%20115.663%2084.232C126.835%2086.8114%20134.723%2096.113%20136.024%20106.874Z'%20fill='white'/%3e%3c/svg%3e"
                  alt="MEW portfolio manager logo"
                  className="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                />
                <div className="grow flex flex-col items-start">
                  <h6 className="text-base xl:text-lg font-bold mb-1 text-nowrap">
                    MEW Portfolio Manager
                  </h6>
                  <p className="opacity-65 text-sm">Web portfolio interface</p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/enkrypt")}>
              <div className="flex gap-4 items-center">
                <img
                  src="https://www.myetherwallet.com//mew-landing-page/_nuxt/enkrypt-logo.CIIZCFlO.png"
                  alt="enkrypt wallet extension logo"
                  className="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                />
                <div className="grow flex flex-col items-start">
                  <h6 className="text-base xl:text-lg font-bold mb-1 text-nowrap">
                    Enkrypt
                  </h6>
                  <p className="opacity-65 text-sm">Browser extension wallet</p>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/ethvm")}>
              <div className="flex gap-4 items-center">
                <img
                  src="data:image/svg+xml,%3csvg%20width='220'%20height='220'%20viewBox='0%200%20220%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='220'%20height='220'%20fill='%23091E41'/%3e%3cpath%20d='M165.21%2058.4752L137.118%20125.094L119.81%2084.3113L111.704%20102.167L137.131%20162.049L162.273%20103.167L176.256%20156.409H191.199L165.21%2058.4752Z'%20fill='%230065FF'/%3e%3cpath%20d='M99.3596%2065.3054L72.0452%20125.824L44.9363%2065.3054H28.9004L71.8814%20161.467L115.518%2065.3054H99.3596Z'%20fill='%230065FF'/%3e%3c/svg%3e"
                  alt="ethVM logo"
                  className="w-[50px] rounded-2xl mr-4 shadow-[0_1.35px_5.4px_0_rgba(0,0,0,0.1)]"
                />
                <div className="grow flex flex-col items-start">
                  <h6 className="text-base xl:text-lg font-bold mb-1 text-nowrap">
                    ethVM
                  </h6>
                  <p className="opacity-65 text-sm">Blockchain explorer</p>
                </div>
              </div>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <Link
          to="/access-wallet"
          className="flex items-center px-4 py-2 bg-black text-white h-10 rounded-3xl cursor-pointer hover:opacity-75  ease-in-out duration-200"
        >
          <span className="text-base xl:text-lg text-center font-medium leading-6 tracking-[0.6px]">
            Access my wallet
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
