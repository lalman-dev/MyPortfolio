import React from "react";

interface TextInputProps {
  theme: "light" | "dark";
  value: string;
  handleInputChange: (value: string) => void;
  textarea?: boolean;
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({
  theme,
  value,
  handleInputChange,
  textarea = false,
  label,
}) => {
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          className={`w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none ${
            theme === "dark"
              ? "bg-gray-800/50 text-white focus:border-blue-500 focus:bg-gray-800/70"
              : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white"
          }`}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleInputChange(e.target.value)
          }
        />
      ) : (
        <input
          type="text"
          className={`w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none ${
            theme === "dark"
              ? "bg-gray-800/50 text-white focus:border-blue-500 focus:bg-gray-800/70"
              : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white"
          }`}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value)
          }
        />
      )}
      <label className="text-sm absolute left-4 top-2 pointer-events-none origin-left">
        {label}
      </label>
    </div>
  );
};

export default TextInput;
