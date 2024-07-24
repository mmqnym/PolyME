import Web3Link from "./Web3Link";

import BTCLogo from "../../../general/assets/blockchains/btc.webp";
import EthLogo from "../../../general/assets/blockchains/ethereum.webp";
import TonLogo from "../../../general/assets/blockchains/ton.webp";
import SolLogo from "../../../general/assets/blockchains/solana.webp";
import BSCLogo from "../../../general/assets/blockchains/bsc.webp";
import ARBLogo from "../../../general/assets/blockchains/arbitrum.webp";
import BaseLogo from "../../../general/assets/blockchains/base.webp";

function MobileWeb3List() {
  return (
    <div className="mt-4 flex h-fit w-fit flex-col gap-2 rounded-full bg-orange-900/10 px-2 py-2 dark:bg-violet-200/10">
      <div className="flex h-fit w-fit flex-row gap-4">
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
    </div>
  );
}

export default MobileWeb3List;
