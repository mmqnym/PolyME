import Web3Link from "./Web3Link";

import BTCLogo from "../../../general/assets/blockchains/btc.webp";
import EthLogo from "../../../general/assets/blockchains/ethereum.webp";
import TonLogo from "../../../general/assets/blockchains/ton.webp";
import SolLogo from "../../../general/assets/blockchains/solana.webp";
import BSCLogo from "../../../general/assets/blockchains/bsc.webp";
import ARBLogo from "../../../general/assets/blockchains/arbitrum.webp";
import BaseLogo from "../../../general/assets/blockchains/base.webp";

function Web3List() {
  return (
    <div className="absolute top-20 flex h-fit flex-row gap-4 rounded-md bg-gray-300/30 dark:bg-gray-500/30 sm:px-4 sm:py-2 xl:static xl:bg-transparent xl:p-0 xl:dark:bg-transparent">
      <div className="hidden h-12 w-0.5 rounded-full border-l-2 border-gray-400 dark:border-gray-600 xl:block"></div>

      <Web3Link
        logo={BTCLogo}
        link="https://btcscan.org/address/bc1ptv75hgzc2attf5uzy6gzr8lxesstnauca647q74px0p7errrys8qwj5wap"
      />
      <Web3Link logo={EthLogo} link="https://app.ens.domains/0xmmq.eth" />
      <Web3Link logo={TonLogo} link="https://dns.ton.org/#mmqnym" />
      <Web3Link logo={SolLogo} link="https://www.sns.id/domain?domain=mmqnym" />
      <Web3Link logo={BSCLogo} link="https://bscscan.com/address/0x03762c4478518fbf036ed6062fe9035d2e6d0670" />
      <Web3Link logo={ARBLogo} link="https://arbiscan.io/address/0x03762c4478518fbf036ed6062fe9035d2e6d0670" />
      <Web3Link logo={BaseLogo} link="https://basescan.org/address/0x03762c4478518fbf036ed6062fe9035d2e6d0670" />
    </div>
  );
}

export default Web3List;
