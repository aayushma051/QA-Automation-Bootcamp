const merchantName = "Daraz";
let balance = 50000; // paisa

const isKycVerified = true;

const transferAmount = 20000; // paisa
const cashback = transferAmount * 0.02;
const balanceAfterTransfer = balance - transferAmount + cashback;

const canSend = balance >= transferAmount && isKycVerified && transferAmount > 0;

const receipt = `
----- WALLET TRANSFER RECEIPT -----
Merchant: ${merchantName}
Starting Balance: ${balance} paisa
Transfer Amount: ${transferAmount} paisa
Cashback: ${cashback} paisa
Balance After Transfer: ${balanceAfterTransfer} paisa
KYC Verified: ${isKycVerified}
Can Send: ${canSend}
-----------------------------------
`;

console.log(receipt);

