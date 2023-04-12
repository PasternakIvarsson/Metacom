import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton, FormField } from '../components';

const CreateBusiness = () => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [ownershipPercentage, setOwnershipPercentage] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateBusiness = () => {
    if (businessName && walletAddress && ownershipPercentage) {
      // Save the business information to the user's account
      // e.g., saveBusinessInfo(businessName, walletAddress, ownershipPercentage);

      setMessage('Business page successfully created');
      setTimeout(() => {
        setMessage('');
        navigate('/'); // Redirect to the desired page after successfully creating a business
      }, 2000);
    } else {
      setMessage('Please fill in all fields');
    }
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h2 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Create Business Account
        </h2>
      </div>
      <form className="w-full mt-[65px] flex flex-col gap-[30px]">
        <FormField
          labelName="Business Name *"
          placeholder="Name of the business"
          inputType="text"
          value={businessName}
          handleChange={(e) => setBusinessName(e.target.value)}
        />
        <FormField
          labelName="Business Wallet Address *"
          placeholder="Wallet Address"
          inputType="text"
          value={walletAddress}
          handleChange={(e) => setWalletAddress(e.target.value)}
        />
        <FormField
          labelName="Default EcoVenture Ownership Percentage *"
          placeholder="Ownership Percentage"
          inputType="number"
          value={ownershipPercentage}
          handleChange={(e) => setOwnershipPercentage(e.target.value)}
        />
        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="button"
            title="Create Business Account"
            styles="bg-[#3FE0D0]"
            handleClick={handleCreateBusiness}
          />
        </div>
        {message && <div className="message text-white mt-4">{message}</div>}
      </form>
    </div>
  );
};

export default CreateBusiness;
