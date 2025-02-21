import { StandardForm } from "@/app/components/form/standard-form";
import { Settings } from "./utils/interface";

interface ContactFormProps {
  settings: Settings;
}

export const ContactForm = ({ settings }: ContactFormProps) => {
  return (
    <div>
      <StandardForm settings={settings} />
    </div>
  );
};
