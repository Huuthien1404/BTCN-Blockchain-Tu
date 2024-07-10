const Footer = () => {
  return (
    <footer className="max-w-[1280px] px-10 mx-auto pt-[104px] mb-5">
      <div className="grid grid-cols-1 gap-[42px]">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-start content-start gap-[42px]">
          <div className="grid grid-cols-1 gap-2.5 content-start">
            <a
              href="https://www.myetherwallet.com/about"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              About us
            </a>
            <a
              href="https://www.myetherwallet.com/careers"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Careers
            </a>
            <a
              href="https://www.myetherwallet.com/how-it-works"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              How it works
            </a>
            <a
              href="https://www.myetherwallet.com/team"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Team
            </a>
            <a
              href="https://www.myetherwallet.com/advertise-with-us"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Advertise With Us
            </a>
            <a
              href="https://www.myetherwallet.com/privacy-policy"
              className="mt-8 font-medium text-base hoverOpacity leading-[22px]"
            >
              Privacy
            </a>
            <a
              href="https://www.myetherwallet.com/terms-of-service"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Terms
            </a>
            <a
              href="https://hackenproof.com/myetherwallet/myetherwallet"
              target="_blank"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Bug Bounty
            </a>
          </div>
          <div className="grid grid-cols-1 gap-2.5 content-start">
            <a
              href="https://www.mewwallet.com/"
              target="_blank"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              MEW Mobile App
            </a>
            <a
              href="https://www.enkrypt.com/"
              target="_blank"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Enkrypt
            </a>
            <a
              href="https://www.myetherwallet.com/wallet/access"
              target="_blank"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              MEW Portfolio Manager
            </a>
            <a
              href="https://www.ethvm.com/"
              target="_blank"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              ethVM
            </a>
            <a
              href="https://www.myetherwallet.com/blog/"
              className="mt-8 font-medium text-base hoverOpacity leading-[22px]"
              target="_blank"
            >
              Blog
            </a>
            <a
              href="https://www.myetherwallet.com/presskit"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Press Kit
            </a>
          </div>
          <div className="grid grid-cols-1 gap-2.5 content-start">
            <a
              href="https://help.myetherwallet.com/en/"
              target="_blank"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Help Center
            </a>
            <a href="/mew-landing-page/faq" className="">
              FAQ
            </a>
            <a
              href="mailto:support@myetherwallet.com"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Customer Support
            </a>
            <a
              href="https://www.myetherwallet.com/security-policy"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Security Policy
            </a>
            <a
              href="https://www.myetherwallet.com/tools?tool=verify"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Verify Message
            </a>
            <a
              href="https://www.myetherwallet.com/tools?tool=convert"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Convert Units
            </a>
            <a
              href="https://www.myetherwallet.com/tools?tool=offline"
              className="font-medium text-base hoverOpacity leading-[22px]"
            >
              Send Offline Helper
            </a>
          </div>
          <div className="grid grid-cols-1 gap-2.5 content-start">
            <p className="mb-5 text-info max-w-96">
              {" "}
              Help us keep MEW free and open-source, your donations go a long
              way towards making that possible.{" "}
            </p>
            <a
              href="https://www.ethvm.com/address/0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"
              target="_blank"
              className="flex items-center pa-2 font-medium text-base hoverOpacity leading-[22px]"
            >
              <span>
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_nuxt/donate-eth.CqPNzgt3.svg"
                  alt="Ethereum logo"
                  className="pr-2"
                />
              </span>{" "}
              Ethereum Donation{" "}
            </a>
            <a
              href="https://www.blockchain.com/explorer/addresses/btc/1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9"
              target="_blank"
              className="flex items-center pa-2 font-medium text-base hoverOpacity leading-[22px]"
            >
              <span>
                <img
                  src="https://www.myetherwallet.com/mew-landing-page/_nuxt/donate-btc.B_ZENRkA.svg"
                  alt="BTC logo"
                  className="pr-2"
                />
              </span>{" "}
              Bitcoin Donation{" "}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start content-start gap-[42px]">
          <div className="text-info order-last md:order-1">
            <div className="flex align-center jusify-start mb-[42px]">
              <button
                className="bg-[#005ae5] transition-opacity relative inline-flex h-6 w-11 items-center rounded-full"
                id="consent-switch-footer"
                role="switch"
                type="button"
                tabIndex={0}
                aria-checked="true"
                data-headlessui-state="checked"
              >
                <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
              </button>
              <p className="text8 pl-2">Data Tracking On</p>
            </div>
            <p className="mb-[10px]">
              {" "}
              © 2024 MyEtherWallet. All rights reserved.{" "}
            </p>
            <p className="mb-[10px]">
              {" "}
              Pricing taken from
              <a
                href="https://www.coingecko.com/"
                target="_blank"
                className="underline"
              >
                CoinGecko
              </a>
            </p>
            <a
              href="https://github.com/MyEtherWallet/MyEtherWallet/releases/tag/v6.9.9-landing-page.2"
              className="decoration-0"
            >
              Version: v6.9.9-landing-page.2
            </a>
          </div>
          <div className="order-1 md:order-last">
            <h5 className="mb-3 font-bold">Join MEW Community</h5>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/MyEtherWallet"
                target="_blank"
                className="font-medium text-base hoverOpacity leading-[22px]"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_641_10829)'%3e%3ccircle%20cx='24'%20cy='24'%20r='23.5'%20stroke='black'%20stroke-opacity='0.08'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M32.8967%2014H15.1033C14.4942%2014%2014%2014.4942%2014%2015.1033V32.8967C14%2033.5067%2014.4942%2034%2015.1033%2034H24.6817V26.255H22.0742V23.2375H24.6817V21.0083C24.6817%2018.4258%2026.26%2017.0208%2028.5642%2017.0208C29.6683%2017.0208%2030.6175%2017.1017%2030.8942%2017.1383V19.8383H29.2933C28.0433%2019.8383%2027.8%2020.4392%2027.8%2021.3142V23.24H30.7867L30.3992%2026.265H27.8V34H32.8958C33.5067%2034%2034%2033.5067%2034%2032.8967V15.1033C34%2014.4942%2033.5067%2014%2032.8967%2014Z'%20fill='black'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_641_10829'%3e%3crect%20width='48'%20height='48'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="Facebook logo"
                />
              </a>
              <a
                href="https://twitter.com/myetherwallet/"
                target="_blank"
                className="font-medium text-base hoverOpacity leading-[22px]"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_641_10838)'%3e%3ccircle%20cx='24'%20cy='24'%20r='23.5'%20stroke='black'%20stroke-opacity='0.08'%20/%3e%3cg%20clip-path='url(%23clip1_641_10838)'%3e%3cpath%20d='M25.8941%2022.5411L32.8116%2014.5H31.1724L25.1659%2021.482L20.3686%2014.5H14.8354L22.0899%2025.0579L14.8354%2033.4902H16.4748L22.8177%2026.1171L27.884%2033.4902H33.4172L25.8937%2022.5411H25.8941ZM23.6488%2025.151L22.9138%2024.0996L17.0654%2015.7341H19.5833L24.303%2022.4853L25.0381%2023.5367L31.1731%2032.3123H28.6553L23.6488%2025.1514V25.151Z'%20fill='black'%20/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_641_10838'%3e%3crect%20width='48'%20height='48'%20fill='white'%20/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_641_10838'%3e%3crect%20width='18.5817'%20height='19'%20fill='white'%20transform='translate(14.8354%2014.5)'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="Twitter logo"
                />
              </a>
              <a
                href="https://www.instagram.com/myetherwallet/"
                target="_blank"
                className="font-medium text-base hoverOpacity leading-[22px]"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_641_10844)'%3e%3ccircle%20cx='24'%20cy='24'%20r='23.5'%20stroke='black'%20stroke-opacity='0.08'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24%2014C21.2833%2014%2020.9442%2014.0125%2019.8775%2014.06C18.8125%2014.11%2018.0875%2014.2775%2017.45%2014.525C16.7925%2014.78%2016.2342%2015.1225%2015.6783%2015.6783C15.1225%2016.2342%2014.7792%2016.7917%2014.525%2017.45C14.2775%2018.0875%2014.1092%2018.8125%2014.06%2019.8775C14.01%2020.9442%2014%2021.2833%2014%2024C14%2026.7167%2014.0125%2027.0558%2014.06%2028.1225C14.11%2029.1867%2014.2775%2029.9125%2014.525%2030.55C14.78%2031.2067%2015.1225%2031.7658%2015.6783%2032.3217C16.2342%2032.8767%2016.7917%2033.2208%2017.45%2033.475C18.0883%2033.7217%2018.8133%2033.8908%2019.8775%2033.94C20.9442%2033.99%2021.2833%2034%2024%2034C26.717%2034%2027.056%2033.9875%2028.123%2033.94C29.187%2033.89%2029.913%2033.7217%2030.55%2033.475C31.207%2033.22%2031.766%2032.8767%2032.322%2032.3217C32.877%2031.7658%2033.221%2031.2092%2033.475%2030.55C33.722%2029.9125%2033.891%2029.1867%2033.94%2028.1225C33.99%2027.0558%2034%2026.7167%2034%2024C34%2021.2833%2033.987%2020.9442%2033.94%2019.8775C33.89%2018.8133%2033.722%2018.0867%2033.475%2017.45C33.22%2016.7925%2032.877%2016.2342%2032.322%2015.6783C31.766%2015.1225%2031.209%2014.7792%2030.55%2014.525C29.913%2014.2775%2029.187%2014.1092%2028.123%2014.06C27.056%2014.01%2026.717%2014%2024%2014ZM24%2015.8C26.669%2015.8%2026.988%2015.8133%2028.042%2015.8592C29.017%2015.905%2029.546%2016.0667%2029.898%2016.205C30.366%2016.3858%2030.698%2016.6025%2031.049%2016.9517C31.398%2017.3017%2031.615%2017.6342%2031.796%2018.1025C31.932%2018.4542%2032.096%2018.9833%2032.14%2019.9583C32.188%2021.0133%2032.198%2021.33%2032.198%2024C32.198%2026.67%2032.186%2026.9875%2032.137%2028.0417C32.086%2029.0167%2031.923%2029.5458%2031.786%2029.8975C31.599%2030.3658%2031.387%2030.6975%2031.037%2031.0492C30.688%2031.3983%2030.35%2031.615%2029.887%2031.7958C29.537%2031.9325%2028.999%2032.0958%2028.024%2032.14C26.963%2032.1875%2026.65%2032.1983%2023.975%2032.1983C21.2992%2032.1983%2020.9867%2032.1858%2019.9258%2032.1367C18.95%2032.0858%2018.4125%2031.9233%2018.0625%2031.7858C17.5883%2031.5992%2017.2625%2031.3867%2016.9133%2031.0367C16.5625%2030.6875%2016.3383%2030.35%2016.1633%2029.8867C16.0258%2029.5367%2015.8642%2028.9992%2015.8133%2028.0242C15.7758%2026.9742%2015.7625%2026.65%2015.7625%2023.9875C15.7625%2021.3242%2015.7758%2020.9992%2015.8133%2019.9367C15.8642%2018.9617%2016.0258%2018.425%2016.1633%2018.075C16.3383%2017.6%2016.5625%2017.275%2016.9133%2016.9242C17.2625%2016.575%2017.5883%2016.35%2018.0625%2016.1758C18.4125%2016.0375%2018.9383%2015.875%2019.9133%2015.825C20.9758%2015.7875%2021.2883%2015.775%2023.9625%2015.775L24%2015.8ZM24%2018.865C21.1625%2018.865%2018.865%2021.165%2018.865%2024C18.865%2026.8375%2021.165%2029.135%2024%2029.135C26.837%2029.135%2029.135%2026.835%2029.135%2024C29.135%2021.1625%2026.835%2018.865%2024%2018.865ZM24%2027.3333C22.1583%2027.3333%2020.6667%2025.8417%2020.6667%2024C20.6667%2022.1583%2022.1583%2020.6667%2024%2020.6667C25.842%2020.6667%2027.333%2022.1583%2027.333%2024C27.333%2025.8417%2025.842%2027.3333%2024%2027.3333ZM30.538%2018.6625C30.538%2019.325%2030%2019.8625%2029.338%2019.8625C28.676%2019.8625%2028.138%2019.3242%2028.138%2018.6625C28.138%2018.0008%2028.677%2017.4633%2029.338%2017.4633C29.999%2017.4625%2030.538%2018.0008%2030.538%2018.6625Z'%20fill='black'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_641_10844'%3e%3crect%20width='48'%20height='48'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="Instagram logo"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/myetherwallet/"
                target="_blank"
                className="font-medium text-base hoverOpacity leading-[22px]"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_641_10851)'%3e%3ccircle%20cx='24'%20cy='24'%20r='23.5'%20stroke='black'%20stroke-opacity='0.08'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M31.039%2031.0433H28.077V26.4025C28.077%2025.2958%2028.055%2023.8717%2026.534%2023.8717C24.99%2023.8717%2024.754%2025.0758%2024.754%2026.3208V31.0433H21.793V21.5H24.638V22.8008H24.676C25.073%2022.0508%2026.04%2021.2592%2027.484%2021.2592C30.485%2021.2592%2031.04%2023.2342%2031.04%2025.805V31.0433H31.039ZM18.447%2020.1942C17.494%2020.1942%2016.728%2019.4225%2016.728%2018.4733C16.728%2017.525%2017.495%2016.7542%2018.447%2016.7542C19.398%2016.7542%2020.168%2017.525%2020.168%2018.4733C20.168%2019.4225%2019.397%2020.1942%2018.447%2020.1942ZM19.932%2031.0433H16.963V21.5H19.932V31.0433ZM32.521%2014H15.476C14.66%2014%2014%2014.645%2014%2015.4408V32.5592C14%2033.3558%2014.66%2034%2015.476%2034H32.518C33.333%2034%2034%2033.3558%2034%2032.5592V15.4408C34%2014.645%2033.333%2014%2032.518%2014H32.521Z'%20fill='black'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_641_10851'%3e%3crect%20width='48'%20height='48'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="Linkedin logo"
                />
              </a>
              <a
                href="https://www.reddit.com/r/MyEtherWallet/"
                target="_blank"
                className="font-medium text-base hoverOpacity leading-[22px]"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_641_10863)'%3e%3ccircle%20cx='24'%20cy='24'%20r='23.5'%20stroke='black'%20stroke-opacity='0.08'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M23.978%2030.0685C22.334%2030.0685%2021.176%2029.7119%2020.438%2028.9713C20.279%2028.8118%2020.279%2028.5524%2020.438%2028.392C20.599%2028.2407%2020.859%2028.2407%2021.02%2028.392C21.597%2028.9685%2022.564%2029.2564%2023.978%2029.2564C25.392%2029.2564%2026.353%2028.9814%2026.929%2028.4048C27.08%2028.2545%2027.342%2028.2545%2027.506%2028.4048C27.657%2028.5698%2027.657%2028.8311%2027.506%2028.996C26.764%2029.7367%2025.613%2030.0942%2023.966%2030.0942L23.978%2030.0685ZM20.673%2023.1269C19.835%2023.1269%2019.136%2023.8281%2019.136%2024.6641C19.136%2025.4982%2019.835%2026.1765%2020.673%2026.1765C21.511%2026.1765%2022.186%2025.4982%2022.186%2024.6641C22.186%2023.8281%2021.509%2023.1269%2020.673%2023.1269ZM27.303%2023.1269C26.465%2023.1269%2025.765%2023.8281%2025.765%2024.6641C25.765%2025.4982%2026.465%2026.1765%2027.303%2026.1765C28.141%2026.1765%2028.816%2025.4982%2028.816%2024.6641C28.816%2023.8281%2028.139%2023.1269%2027.303%2023.1269ZM23.934%2032.4077C18.52%2032.4077%2014.117%2029.4699%2014.117%2025.8612C14.117%2025.6091%2014.138%2025.3625%2014.18%2025.1196C13.453%2024.6677%2013%2023.8712%2013%2022.9985C13%2021.6273%2014.125%2020.5117%2015.498%2020.5117C16.116%2020.5117%2016.692%2020.7372%2017.145%2021.1369C18.846%2020.0452%2021.139%2019.3577%2023.664%2019.3109L25.325%2014.2475L25.695%2014.3346C25.695%2014.3346%2025.71%2014.3346%2025.71%2014.3364L29.581%2015.2466C29.896%2014.5152%2030.624%2014%2031.474%2014C32.6%2014%2033.519%2014.9203%2033.519%2016.0477C33.519%2017.177%2032.599%2018.0955%2031.474%2018.0955C30.348%2018.0955%2029.43%2017.1752%2029.43%2016.0514L25.9%2015.2155L24.555%2019.3192C26.984%2019.4154%2029.181%2020.102%2030.828%2021.1717C31.281%2020.7464%2031.877%2020.5127%2032.509%2020.5127C33.882%2020.5127%2035%2021.6245%2035%2022.9976C35%2023.9023%2034.505%2024.7264%2033.737%2025.1655C33.763%2025.3992%2033.791%2025.6183%2033.791%2025.852C33.777%2029.4617%2029.386%2032.3995%2023.965%2032.3995L23.934%2032.4077Z'%20fill='black'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_641_10863'%3e%3crect%20width='48'%20height='48'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="Reddit logo"
                />
              </a>
              <a
                href="https://medium.com/@myetherwallet"
                target="_blank"
                className="font-medium text-base hoverOpacity leading-[22px]"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_641_10882)'%3e%3ccircle%20cx='24'%20cy='24'%20r='23.5'%20stroke='black'%20stroke-opacity='0.08'%20/%3e%3cg%20clip-path='url(%23clip1_641_10882)'%3e%3cpath%20d='M25.1451%2023.9989C25.1451%2027.7627%2022.1146%2030.8139%2018.3765%2030.8139C14.6384%2030.8139%2011.6077%2027.762%2011.6077%2023.9989C11.6077%2020.2357%2014.6382%2017.1836%2018.3765%2017.1836C22.1148%2017.1836%2025.1451%2020.235%2025.1451%2023.9989Z'%20fill='black'%20/%3e%3cpath%20d='M32.5706%2023.9991C32.5706%2027.5419%2031.0553%2030.4151%2029.1862%2030.4151C27.317%2030.4151%2025.8018%2027.5419%2025.8018%2023.9991C25.8018%2020.4562%2027.3168%2017.583%2029.1859%2017.583C31.0551%2017.583%2032.5704%2020.4553%2032.5704%2023.9991'%20fill='black'%20/%3e%3cpath%20d='M35.6077%2023.9988C35.6077%2027.1723%2035.0748%2029.7465%2034.4174%2029.7465C33.7599%2029.7465%2033.2273%2027.173%2033.2273%2023.9988C33.2273%2020.8245%2033.7601%2018.251%2034.4174%2018.251C35.0746%2018.251%2035.6077%2020.8243%2035.6077%2023.9988Z'%20fill='black'%20/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_641_10882'%3e%3crect%20width='48'%20height='48'%20fill='white'%20/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_641_10882'%3e%3crect%20width='24'%20height='13.6303'%20fill='white'%20transform='translate(11.6079%2017.1846)'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="Medium logo"
                />
              </a>
              <a
                href="https://t.me/myetherwallet"
                target="_blank"
                className="font-medium text-base hoverOpacity leading-[22px]"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_642_10912)'%3e%3ccircle%20cx='24'%20cy='24'%20r='23.5'%20stroke='black'%20stroke-opacity='0.08'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M35%2024C35%2030.0751%2030.0751%2035%2024%2035C17.9249%2035%2013%2030.0751%2013%2024C13%2017.9249%2017.9249%2013%2024%2013C30.0751%2013%2035%2017.9249%2035%2024ZM24.3942%2021.1202C23.3243%2021.5652%2021.186%2022.4863%2017.9793%2023.8834C17.4585%2024.0904%2017.1858%2024.293%2017.1609%2024.4911C17.119%2024.8259%2017.5382%2024.9577%2018.109%2025.1372C18.1867%2025.1616%2018.2671%2025.1869%2018.3496%2025.2137C18.9113%2025.3963%2019.6668%2025.6099%2020.0595%2025.6184C20.4158%2025.6261%2020.8134%2025.4792%2021.2524%2025.1777C24.2486%2023.1552%2025.7952%2022.133%2025.8923%2022.1109C25.9608%2022.0954%2026.0557%2022.0758%2026.1201%2022.133C26.1844%2022.1902%2026.1781%2022.2984%2026.1712%2022.3275C26.1297%2022.5045%2024.4841%2024.0344%2023.6325%2024.8261C23.3671%2025.0729%2023.1788%2025.248%2023.1403%2025.288C23.054%2025.3776%2022.9661%2025.4623%2022.8817%2025.5437C22.3599%2026.0467%2021.9686%2026.4239%2022.9033%2027.0399C23.3525%2027.3359%2023.712%2027.5807%2024.0706%2027.8249C24.4622%2028.0916%2024.8528%2028.3576%2025.3582%2028.6889C25.4869%2028.7733%2025.6099%2028.8609%2025.7297%2028.9463C26.1854%2029.2712%2026.5949%2029.5631%2027.1007%2029.5166C27.3947%2029.4895%2027.6983%2029.2131%2027.8525%2028.3888C28.2169%2026.4407%2028.9332%2022.2197%2029.0987%2020.4804C29.1132%2020.328%2029.095%2020.133%2029.0803%2020.0473C29.0657%2019.9617%2029.0351%2019.8398%2028.9238%2019.7495C28.792%2019.6425%2028.5885%2019.62%2028.4975%2019.6216C28.0838%2019.6288%2027.449%2019.8496%2024.3942%2021.1202Z'%20fill='black'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_642_10912'%3e%3crect%20width='48'%20height='48'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="Telegram logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
