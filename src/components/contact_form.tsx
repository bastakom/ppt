import { StandardForm } from "@/app/components/form/standard-form";
import { Settings } from "./utils/interface";

interface ContactFormProps {
  settings: Settings;
  lang: any;
}

export const ContactForm = ({ settings, lang }: ContactFormProps) => {
  return (
    <div>
      <StandardForm settings={settings} lang={lang} />
    </div>
  );
};
