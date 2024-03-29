import HeaderLeftBg from "@/components/svgs/HeaderLeftBg";
import { useRouter } from "next/router";
import {
  Input,
  Select,
  SelectItem,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useAccount } from "wagmi";
import { useState } from "react";
import SuccessModal from "@/components/SuccessModal";
import ghovernmentService from "@/services/ghovernment.service";
import { toast } from "sonner";

export default function NewBusiness() {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const [businessType, setBusinessType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [document, setDocument] = useState<File | undefined>(undefined);
  const account = useAccount();
  const [email, setEmail] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    if (!account.address) {
      setIsLoading(false);
      return toast.error("Please connect your wallet.");
    }
    const { isExist } = await ghovernmentService
      .checkBusiness(account.address.toLowerCase())
      .then((res) => res.data);
    if (isExist) {
      setIsLoading(false);
      return toast.error("Your wallet address has already registered.");
    }
    await ghovernmentService.createBusiness({
      businessType,
      companyName,
      companyAddress,
      walletAddress: account.address?.toLowerCase(),
      email,
    });
    setIsLoading(false);
    onOpen();
  };

  return (
    <main className="w-full flex items-center bg-gray-50">
      <SuccessModal onOpenChange={onOpenChange} isOpen={isOpen} />
      <div className="h-full w-[100px] lg:w-[420px] bg-brand relative">
        <HeaderLeftBg />
      </div>
      <form onSubmit={handleSubmit} className="h-full p-14 px-20">
        <p className="font-bold">Business Registration</p>
        <p>
          Please provide the following information.{" "}
          <br className="hidden md:block" />
          Your information will only be used for verification purpose.
        </p>
        <p className="text-sm mt-5 mb-1">Business Type</p>
        <Select
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          isRequired
          placeholder="Select an business type"
          labelPlacement="outside"
          disableSelectorIconRotation
        >
          {["Hotel", "Food", "Flight"].map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </Select>
        <p className="text-sm mt-5 mb-1">Business Information</p>
        <Input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          isRequired
          type="text"
          label="Company Name"
        />
        <p className="text-sm mt-5 mb-1">Address</p>
        <Input
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
          isRequired
          type="text"
          label="Comapny Address"
        />
        <p className="text-sm mt-5 mb-1">Verification Document</p>
        <Input onChange={(e) => setDocument(e.target.files?.[0])} type="file" />
        <p className="text-sm mt-5 mb-1">Wallet Address</p>
        <Input
          isRequired
          variant="faded"
          value={account.address}
          type="text"
          disabled
        />
        <p className="text-sm mt-5 mb-1">Email</p>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired
          type="email"
          label="Email"
        />
        <div className="flex space-x-3 mt-10">
          <Button
            className="w-full"
            onClick={() => router.back()}
            color="primary"
            variant="bordered"
          >
            Back
          </Button>
          <Button
            isLoading={isLoading}
            isDisabled={isLoading}
            type="submit"
            className="w-full"
            color="primary"
          >
            Register
          </Button>
        </div>
      </form>
    </main>
  );
}
