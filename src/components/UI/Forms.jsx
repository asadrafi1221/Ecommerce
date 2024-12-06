import React from "react";

const FormBoxes = [
  { title: "Name", className: "NameForm" },
  { title: "Email", className: "EmailForm" },
  { title: "Phone", className: "PhoneForm" },
  { title: "Message", className: "MessageForm" },
];

function Forms() {


  return (
    <div className="flex flex-col gap-5 p-5 max-w-md mx-auto">
      {FormBoxes.map((e, index) => (
        <div key={index} className="relative group">
          {/* Fill Effect */}
          <div className="absolute inset-0 h-full bg-white rounded-lg scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-10"></div>

          {/* Input Box */}
          <input
            className="w-full p-4 uppercase border-navy  text-white   bg-transparent border-2   outline-none transition-all duration-300 relative z-20 bg-navy group-hover:text-black focus:text-white "
            placeholder={e.title}
          />
        </div>
      ))}
    </div>
  );
}

export default Forms;