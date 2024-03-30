import { LangType } from "@/services/getPages";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

type DefaultContentProps = {
  title: string;
  lang: LangType;
};

const HeaderDefaultContent = ({ title, lang }: DefaultContentProps) => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Link href={`/${lang}`}>
          <IconButton>
            <IoArrowBackOutline color="white" />
          </IconButton>
        </Link>
        <h5
          className="text-white whitespace-pre-line text-2xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Box>
    </>
  );
};

export default HeaderDefaultContent;
