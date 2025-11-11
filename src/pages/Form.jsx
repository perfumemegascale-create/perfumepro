import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, AlertCircle, User, MapPin, Mail, Phone, Sparkles, Heart, Clock } from 'lucide-react';

const GroupedContactForm = () => {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address1: '',
    address2: '',
    email: '',
    mobile: '',
    preferredFragrance: [],
    occasionUse: [],
    intensityLevel: []
  });
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Field groups configuration
  const fieldGroups = [
    {
      title: 'Your Name',
      subtitle: 'Let us know who you are',
      icon: User,
      fields: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Enter your full name',
          required: true,
          label: 'Full Name'
        }
      ]
    },
    {
      title: 'Your Address',
      subtitle: 'Where should we reach you?',
      icon: MapPin,
      fields: [
        {
          name: 'address1',
          type: 'text',
          placeholder: "Your full address with city and pincode",
          required: true,
          label: 'Address 1'
        },
        {
          name: 'address2',
          type: 'text',
          placeholder: "Your full address with city and pincode",
          required: false,
          label: 'Address 2 (Optional)'
        }
      ]
    },
    {
      title: 'Contact Information',
      subtitle: 'How can we contact you?',
      icon: Mail,
      fields: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'your.email@example.com',
          required: true,
          label: 'Email Address',
          icon: Mail
        },
        {
          name: 'mobile',
          type: 'tel',
          placeholder: '+91 9876543210',
          required: true,
          label: 'Mobile Number',
          icon: Phone
        }
      ]
    },
    {
      title: 'Preferred Fragrance Family',
      subtitle: 'What scents do you love? (Select all that apply)',
      icon: Sparkles,
      fields: [
        {
          name: 'preferredFragrance',
          type: 'multiselect',
          required: true,
          label: 'Select your favorite fragrance families',
          options: [
            'Floral (Rose, Jasmine, Lily)',
            'Woody (Sandalwood, Cedar, Oud)',
            'Fresh (Citrus, Ocean, Green)',
            'Oriental (Spices, Vanilla, Amber)',
            'Fruity (Berry, Apple, Peach)',
            'Musk & Powder'
          ]
        }
      ]
    },
    {
      title: 'Occasion & Usage',
      subtitle: 'When do you wear perfume? (Select all that apply)',
      icon: Heart,
      fields: [
        {
          name: 'occasionUse',
          type: 'multiselect',
          required: true,
          label: 'Select occasions',
          options: [
            'Daily Wear',
            'Office/Work',
            'Special Events',
            'Evening/Night Out',
            'Romantic Occasions',
            'Casual Outings'
          ]
        }
      ]
    },
    {
      title: 'Fragrance Intensity',
      subtitle: 'How strong do you like your perfume? (Select all that apply)',
      icon: Clock,
      fields: [
        {
          name: 'intensityLevel',
          type: 'multiselect',
          required: true,
          label: 'Select intensity preferences',
          options: [
            'Light & Subtle',
            'Moderate & Balanced',
            'Strong & Long-lasting',
            'Bold & Intense',
            'Varies by Occasion'
          ]
        }
      ]
    },
    {
      title: 'Preferred Fragrance',
      subtitle: 'Which perfume do you like the most? (Select all that apply)',
      icon: Sparkles,
      fields: [
        {
          name: 'preferredPerfume',
          type: 'multiselect',
          required: true,
          label: 'Select your favorite perfumes',
          options: [
            'Sukhad Chandan',
            'Woody Oudh',
            'Ocean',
            'Religious',
            'Scento'
          ]
        }
      ]
    }
  ];

  const currentGroup = fieldGroups[step];
  const IconComponent = currentGroup.icon;
  const progress = ((step + 1) / fieldGroups.length) * 100;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleMultiSelectToggle = (fieldName, option) => {
    setFormData(prev => {
      const currentValues = prev[fieldName] || [];
      const newValues = currentValues.includes(option)
        ? currentValues.filter(item => item !== option)
        : [...currentValues, option];

      return {
        ...prev,
        [fieldName]: newValues
      };
    });

    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }));
    }
  };

  const validateCurrentGroup = () => {
    const newErrors = {};

    currentGroup.fields.forEach(field => {
      if (field.required) {
        if (field.type === 'multiselect') {
          if (!formData[field.name] || formData[field.name].length === 0) {
            newErrors[field.name] = 'Please select at least one option';
          }
        } else {
          if (!formData[field.name] || formData[field.name].trim() === '') {
            newErrors[field.name] = `${field.label} is required`;
          } else if (field.type === 'email' && !/\S+@\S+\.\S+/.test(formData[field.name])) {
            newErrors[field.name] = 'Please enter a valid email';
          } else if (field.type === 'tel' && !/^\+?\d{10,}$/.test(formData[field.name].replace(/\s/g, ''))) {
            newErrors[field.name] = 'Please enter a valid phone number';
          }
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === fieldGroups.length - 1) {
      if (validateCurrentGroup()) {
        handleSubmit();
      }
    } else {
      if (validateCurrentGroup()) {
        setStep(step + 1);
      }
    }

  };

  const handleSubmit = () => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}/perfume_form.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIsSuccess(true);
          setErrors({});
          setIsLoading(false); // Stop loader
          setTimeout(() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
          }, 3000);
        } else {
          alert(data.message || "Submission failed.");
        }
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        alert("Something went wrong. Please try again later.");
      });
  };


  const handleSkip = () => {
    const hasOnlyOptionalFields = currentGroup.fields.every(field => !field.required);
    if (hasOnlyOptionalFields || currentGroup.fields.some(field => !field.required)) {
      setStep(step + 1);
    }
  };

  return (
    <div
      id="contactForm"
      className="min-h-screen bg-gradient-to-br from-[#5B3A29] via-[#3d2820] to-[#2a1a14] flex items-center justify-center p-4 relative overflow-hidden"
    >


      <div className="w-full max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-white">
            <h1 className="font-1 text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-white/80 text-lg mb-12">
              Complete your details step by step and we'll get back to you soon.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-white/70">
                    412, New Escon Plaza, Amroli, 
                    <br />
                    Surat, Gujarat 394107
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-white/70">
                    +91 88500 11652
                    <br />
                    Mon-Sat, 9AM-6PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-white/70">
                    scent@storeview.in
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/10 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
              <div className="space-y-1 text-white/70">
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="bg-green-100 p-6 rounded-full mb-6">
                  <CheckCircle2 size={64} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Details Submitted!
                </h2>
                <p className="text-gray-600 text-lg">
                  Thank you for providing your information. We'll contact you soon.
                </p>
              </div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2 text-gray-600 text-sm font-medium">
                    <span>Step {step + 1} of {fieldGroups.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#5b3a29] transition-all duration-500 ease-out rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Header - Only show on first step */}
                {step === 0 && (
                  <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-[#f1e0c5] to-[#c79e64] px-4 py-2 rounded-full mb-4">
                      <span className="text-sm font-bold text-[#8c6226]">🎁 Special Offer</span>
                    </div>
                    <h2 className="font-1 text-3xl md:text-4xl font-bold text-[#8c6226] mb-3">
                      Fill This Form & Get
                      <span className="block text-[#5b3a29] mt-1">Exclusive Discount!</span>
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Complete all steps to unlock your special offer
                    </p>
                  </div>
                )}

                {/* Step Header with Icon */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#5b3a29] p-4 rounded-2xl shadow-lg">
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#5b3a29] mb-2">
                    {currentGroup.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {currentGroup.subtitle}
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-6 mb-8">
                  {currentGroup.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-lg font-semibold text-gray-800 mb-2">
                        {field.label}
                      </label>

                      {field.type === 'multiselect' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {field.options.map((option, optIndex) => {
                            const isSelected = formData[field.name]?.includes(option);
                            return (
                              <button
                                key={optIndex}
                                type="button"
                                onClick={() => handleMultiSelectToggle(field.name, option)}
                                className={`p-4 text-left rounded-xl border-2 transition-all duration-300 ${isSelected
                                  ? 'border-[#8c6226] bg-[#f1e0c5] shadow-md'
                                  : 'border-gray-200 bg-white hover:border-[#c79e64] hover:shadow-sm'
                                  }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${isSelected
                                    ? 'border-[#8c6226] bg-[#8c6226]'
                                    : 'border-gray-300'
                                    }`}>
                                    {isSelected && (
                                      <CheckCircle2 size={14} className="text-white" />
                                    )}
                                  </div>
                                  <span className={`text-sm font-medium ${isSelected ? 'text-[#8c6226]' : 'text-gray-700'
                                    }`}>
                                    {option}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="relative">
                          {field.icon && (
                            <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          )}
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className={`w-full ${field.icon ? 'pl-12' : 'pl-6'} pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-[#8c6226] focus:outline-none focus:ring-4 focus:ring-[#8c6226]/20 transition-all duration-300`}
                          />
                        </div>
                      )}

                      {errors[field.name] && (
                        <div className="flex items-center gap-2 mt-2 text-red-500">
                          <AlertCircle size={18} />
                          <span className="text-sm font-medium">
                            {errors[field.name]}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {step > 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex-1 px-6 py-4 bg-gray-600 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-700"
                    >
                      Back
                    </button>
                  )}

                  <button
                    onClick={handleNext}
                    disabled={isLoading}
                    className={`flex-1 px-6 py-4 bg-gradient-to-br from-[#8c6226] via-[#70470d] to-[#3e2505] text-white rounded-2xl font-semibold transition-all duration-300 transform flex items-center justify-center gap-2 shadow-lg
    ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:from-[#6B4A39] hover:to-[#4d3830] hover:scale-105"}
  `}
                  >
                    {isLoading ? (
                      <>
                        {/* Spinner */}
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : step === fieldGroups.length - 1 ? (
                      <>
                        <CheckCircle2 size={20} />
                        Submit
                      </>
                    ) : (
                      <>
                        Next
                        <ChevronRight size={20} />
                      </>
                    )}
                  </button>
                </div>

                {/* Step Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {fieldGroups.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${index === step
                        ? 'w-8 bg-gradient-to-br from-[#6B4A39] via-[#4d3830] to-[#3e2505]'
                        : index < step
                          ? 'w-2 bg-[#8c6226]/60'
                          : 'w-2 bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupedContactForm;