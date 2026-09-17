const transactions = [
    {
        id: "TXN001",
        amountPaisa: 50000,
        gateway: "esewa",
        kycVerified: true
    },
    {
        id: "TXN002",
        amountPaisa: 150000,
        gateway: "khalti",
        kycVerified: true
    },
    {
        id: "TXN003",
        amountPaisa: 0,
        gateway: "esewa",
        kycVerified: true
    },
    {
        id: "TXN004",
        amountPaisa: 250000,
        gateway: "fonepay",
        kycVerified: false
    },
    {
        id: "TXN005",
        amountPaisa: -5000,
        gateway: "khalti",
        kycVerified: true
    },
    {
        id: "TXN006",
        amountPaisa: 80000,
        gateway: "unknown",
        kycVerified: true
    }
];

function validate(txn) {
    if (txn.amountPaisa <= 0) {
        return "Amount must be greater than 0";
    } else if (!txn.kycVerified) {
        return "KYC is not verified";
    } else {
        return "OK";
    }
}

function feeFor(amountPaisa) {
    if (amountPaisa <= 50000) {
        return 500;
    } else if (amountPaisa <= 100000) {
        return 1000;
    } else {
        return 1500;
    }
}

let approvedCount = 0;
let rejectedCount = 0;
let totalValuePaisa = 0;

for (const txn of transactions) {
    const reason = validate(txn);

    if (reason !== "OK") {
        console.log(`${txn.id} → REJECTED: ${reason}`);
        rejectedCount++;
        continue;
    }

    let routingMessage;

    switch (txn.gateway) {
        case "esewa":
            routingMessage = "Route through eSewa";
            break;

        case "khalti":
            routingMessage = "Route through Khalti";
            break;

        case "fonepay":
            routingMessage = "Route through Fonepay";
            break;

        default:
            routingMessage = "Unknown gateway";
    }

    const fee = feeFor(txn.amountPaisa);

    console.log(
        `${txn.id} → APPROVED | ${routingMessage} | Fee: ${fee} paisa`
    );

    approvedCount++;
    totalValuePaisa += txn.amountPaisa;
}

const summary = `
----- TRANSACTION SUMMARY -----
Total Transactions: ${transactions.length}
Approved: ${approvedCount}
Rejected: ${rejectedCount}
Total Approved Value: ${totalValuePaisa} paisa
--------------------------------
`;

console.log(summary);