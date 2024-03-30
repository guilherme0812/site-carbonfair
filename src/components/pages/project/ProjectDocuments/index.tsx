"use client";
import { Box, Skeleton, Typography } from "@mui/material";
import Row from "./Row";
import ChatModal from "./ChatModal";
import React from "react";
import { ICBProject } from "../../../../hooks/useApiProjects";
import { useProjectDocuments } from "@/hooks/useApiProjectDocuments";
import { titleProps } from "@/styles/global";

const ProjectDocuments = (project: ICBProject) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [documentId, setDocumentId] = React.useState<number>();

  const { projectDocuments, projectDocumentsIsLoading } = useProjectDocuments(
    project.id
  );

  return (
    <Box sx={(theme) => ({ bgcolor: theme.palette.grey[200] })}>
      {openModal && documentId && (
        <ChatModal
          open={openModal}
          handleClose={() => {
            setOpenModal(false);
            setDocumentId(undefined);
          }}
          documentId={documentId}
        />
      )}
      {projectDocuments && projectDocuments?.length > 0 && (
        <div className="container">
          <Typography {...(titleProps as any)} sx={{ mb: "4rem" }}>
            Documentos relacionados ao projeto
          </Typography>

          {!projectDocumentsIsLoading ? (
            <>
              {projectDocuments.map((doc, index) => (
                <Row
                  key={index}
                  {...doc}
                  handleOpenChat={() => {
                    setOpenModal(true);
                    setDocumentId(doc.id);
                  }}
                />
              ))}
            </>
          ) : (
            <Skeleton height={300} variant="rounded" />
          )}
        </div>
      )}
    </Box>
  );
};

export default ProjectDocuments;
