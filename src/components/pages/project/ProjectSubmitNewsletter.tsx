"use client";

import * as React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import ErrorMessage from "../../ui/ErrorMessage";
import { Button } from "../../ui";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { ICBProject, useSendNewLetter } from "../../../hooks/useApiProjects";
import { useRouter } from "next/navigation";

const Container = styled.section`
  background-image: url("/Bg-Eccaplan-novidades.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  /* min-height: 100vh; */
`;

const schema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  email: yup.string().required("Campo Obrigatório"),
});

const ProjectSubmitNewsletter = (project: ICBProject) => {
  const { sendNewLetter } = useSendNewLetter();
  const router = useRouter();

  // eslint-disable-next-line
  const onSubmit = async (values: any) => {
    const body = {
      nome: values.name,
      email: values.email,
      projetoID: project.id,
      eventoID: 0,
      eccaplan: 0,
    };
    await sendNewLetter(body, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  return (
    <Container>
      <div className="container white">
        <div>
          <h2 className="title text-center">Receba novidades deste projeto</h2>
        </div>

        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={onSubmit}
          validationSchema={schema}
          validateOnChange={false}
          render={({ values, handleChange, errors }) => (
            <Form>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="flex-end"
              >
                <Grid item xs={12} md={4}>
                  <Label>Nome:</Label>
                  <ErrorMessage>{errors.name}</ErrorMessage>
                  <Input
                    name="name"
                    placeholder="Digite seu nome"
                    onChange={handleChange}
                    value={values.name}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Label>Email:</Label>
                  <ErrorMessage>{errors.email}</ErrorMessage>
                  <Input
                    name="email"
                    placeholder="Digite seu email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button type="submit" variant="contained">
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        />
      </div>
    </Container>
  );
};
export default ProjectSubmitNewsletter;
