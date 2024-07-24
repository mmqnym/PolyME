import Web3Link from "./Web3Link";

import BTCLogo from "../../../general/assets/blockchains/btc.svg?react";
import EthLogo from "../../../general/assets/blockchains/ethereum.svg?react";
import TonLogo from "../../../general/assets/blockchains/ton.svg?react";
import SolLogo from "../../../general/assets/blockchains/solana.svg?react";
import BSCLogo from "../../../general/assets/blockchains/bsc.svg?react";
import ARBLogo from "../../../general/assets/blockchains/arbitrum.svg?react";
import BaseLogo from "../../../general/assets/blockchains/base.svg?react";

function Web3List() {
  return (
    <div className="flex h-full flex-row gap-4">
      <div className="h-full w-0.5 rounded-full border-r-2 border-gray-400 dark:border-gray-600"></div>

      <Web3Link
        Logo={BTCLogo}
        link="https://btcscan.org/address/bc1ptv75hgzc2attf5uzy6gzr8lxesstnauca647q74px0p7errrys8qwj5wap"
      />
      <Web3Link Logo={EthLogo} link="https://app.ens.domains/0xmmq.eth" />
      <Web3Link Logo={TonLogo} link="https://dns.ton.org/#mmqnym" />
      <Web3Link Logo={SolLogo} link="https://www.sns.id/domain?domain=mmqnym" />
      <Web3Link Logo={BSCLogo} link="https://bscscan.com/address/0x03762c4478518fbf036ed6062fe9035d2e6d0670" />
      <Web3Link Logo={ARBLogo} link="https://arbiscan.io/address/0x03762c4478518fbf036ed6062fe9035d2e6d0670" />
      <Web3Link Logo={BaseLogo} link="https://basescan.org/address/0x03762c4478518fbf036ed6062fe9035d2e6d0670" />
    </div>
  );
}

export default Web3List;
