import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "web-color":"#18181b",
        "side-web-color":"#27272a",
        "side2-web-color" :"#1f2937",
        "blue-color": "#1976d2" ,
        "button-color":"#1A56DB",
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    },
  },
  darkMode: "class",
  plugins: [nextui()],


}
export default config



// <div className="flex gap-6 mt-5">
//   <Inputs
//     label="name"
//     inputPlaceholder="Name Tetcher"
//     typeInput="string"
//     onChange={(e) => setName(selectedUser?.name || "")}
//   />
//   <Inputs
//     label="Subject"
//     inputPlaceholder="Subject"
//     typeInput="string"
//     onChange={(e) => setSubject(selectedUser?.subject || "")}
//   />
// </div>
// <div className="flex gap-6 mt-5">
//   <Inputs
//     label="End Of Subscription"
//     inputPlaceholder="Enter The End"
//     typeInput="string"
//     onChange={(e) => setEndOfSubscription(selectedUser?.end || "")}
//   />
//   <Inputs
//     label="phone Tetcher"
//     inputPlaceholder="Phone"
//     typeInput="number"
//     onChange={(e) => setPhone(selectedUser?.phone || "")}
//   />
// </div>
// <div className="flex gap-6 mt-5">
//   <Inputs
//     label="paymentPrice"
//     inputPlaceholder="Enter The paymentPrice"
//     typeInput="number"
//     onChange={(e) => setPaymentPrice(selectedUser?.paymentPrice?.toString() || "")}
//   />
//   <Inputs
//     label="Status Tetcher"
//     inputPlaceholder="Status"
//     typeInput="string"
//     onChange={(e) => setStatus(selectedUser?.status || "Active")}
//   />
// </div>
// <div className="flex gap-6 mt-5 mb-5">
//   <Inputs
//     label="payments"
//     inputPlaceholder="Enter The payments"
//     typeInput="number"
//     onChange={(e) => setPayments(selectedUser?.payments || "")
//   />
// </div>
