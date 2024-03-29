import { addressList } from "@/constants/addressList";
import { BUSINESS_TYPE_MAP } from "@/constants/businessType";
import { connectToDatabase } from "@/lib/mongodb";
import { signer } from "@/lib/signer";
import { GovHelper__factory } from "@/typechain-types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();
  if (req.method === "POST") {
    const data = await db
      .collection("business")
      .findOne({ walletAddress: req.body.walletAddress });
    if (data) res.status(401).json({ message: "Already registered" });

    const GovHelper = GovHelper__factory.connect(addressList.GovHelper, signer);

    const tokenId =
      BUSINESS_TYPE_MAP[
        req.body.businessType as keyof typeof BUSINESS_TYPE_MAP
      ];

    const tx = await GovHelper.whitelistMerchants(tokenId, [
      req.body.walletAddress,
    ]);

    await tx.wait();

    const ghovernment = await db.collection("business").insertOne({
      ...req.body,
    });
    res.status(200).json(ghovernment);
  } else {
    const data = await db.collection("business").find().toArray();
    res.status(200).json(data);
  }
}
