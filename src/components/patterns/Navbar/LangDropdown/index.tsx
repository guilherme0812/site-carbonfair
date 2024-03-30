"use client";

import { LanguageType } from "@/services/language";
import { useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import Image from "next/image";

type LangDropdownType = {
  languageSelected: string;
  languages: LanguageType[];
  handleChange(lang: string): void;
};

function LangDropdown({
  languageSelected,
  languages,
  handleChange,
}: LangDropdownType) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const urlSelected = languages.find(
    (l) => l.sigla == languageSelected
  )?.img_bandeira;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      // return () => {
      //   document.removeEventListener("mousedown", handleClickOutside);
      // };
    }
  }, [open]);

  return (
    <div ref={ref}>
      <div
        onClick={() => setOpen(!open)}
        className="py-1 pl-6 pr-2 border border-transparent hover:border-gray-400 transition-all duration-150 rounded flex justify-between items-center cursor-pointer w-full"
      >
        {/* <img
          src={urlSelected || "/images/pt-br.png"}
          className="w-7 rounded flex"
        /> */}

        <Image
          src={urlSelected || "/images/pt-br.png"}
          className="w-7 rounded flex object-contain"
          alt={"bandeira"}
          data-testid="default-flag"
          width={28}
          height={20}
        />

        <LuChevronDown
          className={`transition ${open ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      <div className="relative w-full">
        <div
          className={`absolute top-0 left-0 bg-white w-full rounded shadow overflow-hidden transition ${
            open ? "max-h-96 h-auto" : "max-h-0"
          }`}
        >
          {languages.map((l, index) => (
            <div
              key={index}
              onClick={() => handleChange(l.sigla)}
              className="px-2 py-1 flex justify-center hover:bg-gray-100 transition cursor-pointer"
            >
              <Image
                src={l.img_bandeira}
                alt={l.descricao}
                className="w-7 rounded flex object-contain"
                data-testid={`flg-${l.sigla}`}
                width={28}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LangDropdown;
