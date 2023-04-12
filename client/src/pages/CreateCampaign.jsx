import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign, fetchBusinesses } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    async function fetchAndSetBusinesses() {
      const fetchedBusinesses = await fetchBusinesses();
      setBusinesses(fetchedBusinesses);
    }

    fetchAndSetBusinesses();
  }, [fetchBusinesses]);

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setSelectedBusiness(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) });
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL');
        setForm({ ...form, image: '' });
      }
    });
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Create an EcoVenture</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Business Name *"
            placeholder="Name of the business"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
            labelName="EcoVenture Name *"
            placeholder="Write a name"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>
        <div className="w-full">
          <label htmlFor="business" className="text-white">Select Business *</label>
          <select
            className="w-full rounded border p-2"
            name="business"
            value={selectedBusiness}
            onChange={handleSelectChange}
          >
            <option value="">Select a business</option>
            {businesses.map((business, index) => (
              <option key={index} value={business.name}>
                {business.name} - {business.ownershipPercentage}% Ownership
              </option>
            ))}
          </select>
        </div>


        <FormField 
            labelName="EcoVenture Info *"
            placeholder="What does this EcoVenture do"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField 
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <FormField 
            labelName="EcoVenture Logo *"
            placeholder="Place image URL of your logo"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Create EcoVenture"
              styles="bg-[#3FE0D0]"
              disabled={!selectedBusiness}
            />
          </div>
      </form>
    </div>
  )
}

export default CreateCampaign