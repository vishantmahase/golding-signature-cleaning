export const resumeLimit = 3 * 1024 * 1024;

export const applicationFields = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name", max: 120 },
  { name: "email", label: "Email address", type: "email", autoComplete: "email", max: 254 },
  { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", max: 40 },
  { name: "location", label: "City and state", type: "text", autoComplete: "address-level2", max: 120 },
  { name: "experience", label: "Cleaning experience", type: "textarea", max: 2000 },
  { name: "availability", label: "Availability", type: "textarea", max: 1000 },
] as const;
