//Import Components

const BurnPagePart = ({...props}) => {
  return (
    <>
      <TransactionTableStyled>
        <div className="header">
          <p className="header_label">Burn Transactions</p>
        </div>
        <BurnTxTable
          data={burnTransactions}
          priceUSD={coinData?.current_price?.usd}
        />
      </TransactionTableStyled>
      <ChainSelector
        title={"Switch Token Chain"}
        openChainSelector={openChainSelector}
        setOpenChainSelector={setOpenChainSelector}
        chains={receiveChains}
        selectedChain={suppliesChain}
        setSelectedChain={setSuppliesChain}
      />
      <AppToast
        position={{ vertical: "bottom", horizontal: "center" }}
        message={toastMsg}
        severity={toastSev}
      />
    </>
  );
};
