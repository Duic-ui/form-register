"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";

interface MultiStepFormProps {
  onSubmit: (data: any) => void;
}

const MultiStepForm = ({ onSubmit }: MultiStepFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Bước 2: Thông tin cá nhân
    fullName: "",
    studentId: "",
    phone: "",
    email: "",
    facebookLink: "",
    house: "",
    // Bước 3: Chuyên ngành
    major: "",
    // Bước 4: Kinh nghiệm
    experience: "",
    // Bước 5: Mục tiêu và kỳ vọng
    goal: "",
    expectation: "",
    // Bước 6: Xác nhận
    confirmation: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation schemas for each step
  const validationSchemas = [
    // Step 0: Info only - no validation
    z.object({}),
    // Step 1: Personal Information
    z.object({
      fullName: z.string().min(1, "Vui lòng nhập họ và tên"),
      studentId: z
        .string()
        .min(1, "Vui lòng nhập MSSV")
        .regex(/^[A-Z]{2}\d{6}$/, "MSSV không đúng định dạng (VD: SE210210)"),
      phone: z
        .string()
        .min(1, "Vui lòng nhập số điện thoại")
        .regex(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số"),
      email: z
        .string()
        .min(1, "Vui lòng nhập email")
        .email("Email không hợp lệ"),
      facebookLink: z
        .string()
        .min(1, "Vui lòng nhập link Facebook")
        .url("Link không hợp lệ"),
      house: z.string().min(1, "Vui lòng chọn nhà"),
    }),
    // Step 2: Major
    z.object({
      major: z
        .string()
        .min(1, "Vui lòng chọn chuyên ngành bạn muốn tham gia trải nghiệm"),
    }),
    // Step 3: Experience
    z.object({
      experience: z.string().min(1, "Vui lòng không để trống"),
    }),
    // Step 4: Goals and Expectations
    z.object({
      goal: z
        .string()
        .min(1, "Vui lòng nhập mục tiêu")
        .min(10, "Mục tiêu phải có ít nhất 10 ký tự")
        .max(250, "Mục tiêu không được vượt quá 250 ký tự"),
      expectation: z
        .string()
        .min(1, "Vui lòng nhập kỳ vọng")
        .min(10, "Kỳ vọng phải có ít nhất 10 ký tự")
        .max(250, "Kỳ vọng không được vượt quá 250 ký tự"),
    }),
    // Step 5: Confirmation
    z.object({
      confirmation: z.string().min(1, "Vui lòng xác nhận thông tin"),
    }),
  ];

  const steps = [
    {
      title: "Thông Tin Sự Kiện",
      isInfoOnly: true,
      content: `Chào mừng bạn đến với dự án RISE SPACE! 
      
Đây là một chương trình hỗ trợ tân sinh viên phát triển kỹ năng ngoại ngữ cơ bản, giúp các bạn tự tin hơn trong hành trình học tập tại trường.

Hãy điền đầy đủ thông tin trong các bước tiếp theo để hoàn tất đăng ký.`,
      fields: [],
    },
    {
      title: "Thông Tin Cá Nhân",
      fields: [
        {
          name: "fullName",
          label: "Họ và Tên của bạn là?",
          type: "text",
          required: true,
        },
        {
          name: "studentId",
          label: "MSSV của bạn là? (VD: SE210210)",
          type: "text",
          required: true,
        },
        {
          name: "phone",
          label: "SĐT của bạn là?",
          type: "tel",
          required: true,
        },
        {
          name: "email",
          label: "Email của bạn là gì?",
          type: "email",
          required: true,
        },
        {
          name: "facebookLink",
          label: "Link Facebook của bạn là?",
          type: "url",
          required: true,
        },
        {
          name: "house",
          label: "Bạn là tân sinh viên thuộc nhà nào?",
          type: "select",
          required: true,
          options: ["Faerie", "Phoenix", "Thunderbird", "Unicorn"],
        },
      ],
    },
    {
      title: "Chọn Chuyên Ngành",
      fields: [
        {
          name: "major",
          label: "Chọn chuyên ngành phù hợp",
          type: "radio",
          required: true,
          options: ["Tiếng Anh", "Tiếng Nhật", "Tiếng Trung"],
        },
      ],
    },
    {
      title: "Kinh Nghiệm",
      fields: [
        {
          name: "experience",
          label:
            "Bạn đã từng tiếp xúc qua kiến thức của lớp bạn đã chọn chưa? (Nội dung kiến thức chỉ xoay quanh những kiến thức ở mức CƠ BẢN NHẤT)",
          type: "radio",
          required: true,
          options: ["Đã tiếp xúc và học", "Chưa tiếp xúc"],
        },
      ],
    },
    {
      title: "Mục Tiêu và Kỳ Vọng",
      fields: [
        {
          name: "goal",
          label: "Mục tiêu của bạn khi tham gia dự án RISE SPACE lần này?",
          type: "textarea",
          required: true,
        },
        {
          name: "expectation",
          label: "Bạn kỳ vọng sẽ đạt được những gì sau khi tham gia dự án?",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      title: "Xác Nhận Thông Tin",
      fields: [
        {
          name: "confirmation",
          label: "Bạn chắc chắn với thông tin đã điền?",
          type: "radio",
          required: true,
          options: ["Chắc chắn"],
        },
      ],
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleNext = () => {
    // Validate current step before moving forward
    const currentSchema = validationSchemas[currentStep];
    const result = currentSchema.safeParse(formData);

    if (!result.success) {
      // Extract errors from zod
      const newErrors: Record<string, string> = {};
      if (result.error?.issues) {
        result.error.issues.forEach((issue: any) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message;
          }
        });
      }
      setErrors(newErrors);
      return;
    }

    // Clear errors and proceed
    setErrors({});
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalSubmit = () => {
    onSubmit(formData);
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Form Content with Header Inside */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFinalSubmit();
        }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header Section */}
        <div className="bg-linear-to-r from-orange-500 to-red-500 px-8 md:px-12 py-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            ĐĂNG KÝ THAM GIA RISE SPACE
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Dự án hỗ trợ sinh viên trải nghiệm sớm các môn học chuyên ngành và
            định hướng phat triển bản thân.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="px-8 md:px-12 pt-8">
          <div className="flex gap-2 mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex-1">
                <div
                  className={`h-2 rounded-full transition-all ${
                    index <= currentStep
                      ? "bg-orange-500"
                      : "bg-gray-200 dark:bg-gray-600"
                  }`}
                />
                <p
                  className={`text-xs mt-2 font-medium text-center ${
                    index <= currentStep
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            className="px-8 md:px-12 py-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {currentStepData.title}
            </h2>

            {/* Info Only Section */}
            {currentStepData.isInfoOnly ? (
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {currentStepData.content}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {currentStepData.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-base font-semibold text-gray-700 mb-2"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>

                    {field.type === "radio" ? (
                      <>
                        <div className="space-y-3">
                          {field.options?.map((option) => (
                            <label
                              key={option}
                              className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-orange-50 hover:border-orange-500 transition-all ${
                                errors[field.name]
                                  ? "border-red-500 ring-2 ring-red-200"
                                  : "border-gray-300"
                              }`}
                            >
                              <input
                                type="radio"
                                name={field.name}
                                value={option}
                                checked={
                                  formData[
                                    field.name as keyof typeof formData
                                  ] === option
                                }
                                onChange={handleChange}
                                required={field.required}
                                className="w-5 h-5 text-orange-500 focus:ring-orange-500"
                              />
                              <span className="text-base text-gray-700 font-medium">
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>
                        {errors[field.name] && (
                          <p className="mt-2 text-sm text-red-500 font-medium">
                            {errors[field.name]}
                          </p>
                        )}
                      </>
                    ) : field.type === "select" ? (
                      <>
                        <select
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:outline-none transition-all bg-white text-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
                            errors[field.name]
                              ? "border-red-500 ring-2 ring-red-200 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 dark:border-gray-500 focus:ring-orange-500 focus:border-orange-500"
                          }`}
                        >
                          <option value="">-- Vui lòng chọn --</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors[field.name] && (
                          <p className="mt-2 text-sm text-red-500 font-medium">
                            {errors[field.name]}
                          </p>
                        )}
                      </>
                    ) : field.type === "textarea" ? (
                      <>
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          rows={4}
                          className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:outline-none transition-all resize-none bg-white text-gray-900 placeholder:text-gray-500 ${
                            errors[field.name]
                              ? "border-red-500 ring-2 ring-red-200 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                          }`}
                          placeholder={`Nhập ${field.label.toLowerCase()}`}
                        />
                        {errors[field.name] && (
                          <p className="mt-2 text-sm text-red-500 font-medium">
                            {errors[field.name]}
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <input
                          id={field.name}
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:outline-none transition-all bg-white text-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-500 ${
                            errors[field.name]
                              ? "border-red-500 ring-2 ring-red-200 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 dark:border-gray-500 focus:ring-orange-500 focus:border-orange-500"
                          }`}
                          placeholder={`Nhập ${field.label.toLowerCase()}`}
                        />
                        {errors[field.name] && (
                          <p className="mt-2 text-sm text-red-500 font-medium">
                            {errors[field.name]}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-gray-600 font-semibold rounded-lg hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
              >
                <span>←</span>{" "}
                <span className="hidden sm:inline">Quay Lại</span>
                <span className="sm:hidden">Quay lại</span>
              </button>

              <div className="text-xs sm:text-sm text-gray-500 font-medium order-first sm:order-0">
                Bước {currentStep + 1} / {steps.length}
              </div>

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg w-full sm:w-auto justify-center"
                >
                  <span className="hidden sm:inline">Tiếp Theo</span>
                  <span className="sm:hidden">Tiếp theo</span> <span>→</span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg w-full sm:w-auto justify-center"
                >
                  <span className="hidden sm:inline">Đăng ký</span>
                  <span className="sm:hidden">Đăng ký</span> <span>✓</span>
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
};

export default MultiStepForm;
