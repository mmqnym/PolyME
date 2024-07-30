import { useContext } from "react";
import { WorkCardContext } from "../../../../context/workCardContext";
import DonateButton from "./DonateButton";

import BTCLogo from "../../../../general/assets/blockchains/btc.webp";
import EthLogo from "../../../../general/assets/blockchains/ethereum.webp";
import TonLogo from "../../../../general/assets/blockchains/ton.webp";
import SolLogo from "../../../../general/assets/blockchains/solana.webp";
import BSCLogo from "../../../../general/assets/blockchains/bsc.webp";
import ARBLogo from "../../../../general/assets/blockchains/arbitrum.webp";
import BaseLogo from "../../../../general/assets/blockchains/base.webp";

function DonateButtonGroup() {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  return (
    <>
      <DonateButton
        src={BTCLogo}
        alt={`${workCardContext.workCardData.title}-donation-btc`}
        url={"https://btcscan.org/address/bc1ptv75hgzc2attf5uzy6gzr8lxesstnauca647q74px0p7errrys8qwj5wap"}
      />
      <DonateButton
        src={EthLogo}
        alt={`${workCardContext.workCardData.title}-donation-eth`}
        url={"https://app.ens.domains/0xmmq.eth"}
      />
      <DonateButton
        src={TonLogo}
        alt={`${workCardContext.workCardData.title}-donation-ton`}
        url={"https://dns.ton.org/#mmqnym"}
      />
      <DonateButton
        src={SolLogo}
        alt={`${workCardContext.workCardData.title}-donation-sol`}
        url={"https://www.sns.id/domain?domain=mmqnym"}
      />
      <DonateButton
        src={BSCLogo}
        alt={`${workCardContext.workCardData.title}-donation-bsc`}
        url={"https://bscscan.com/address/0x03762c4478518fbf036ed6062fe9035d2e6d0670"}
      />
      <DonateButton
        src={ARBLogo}
        alt={`${workCardContext.workCardData.title}-donation-arb`}
        url={"https://arbiscan.io/address/0x03762c4478518fbf036ed6062fe9035d2e6d0670"}
      />
      <DonateButton
        src={BaseLogo}
        alt={`${workCardContext.workCardData.title}-donation-base`}
        url={"https://basescan.org/address/0x03762c4478518fbf036ed6062fe9035d2e6d0670"}
      />
    </>
  );
}

export default DonateButtonGroup;
