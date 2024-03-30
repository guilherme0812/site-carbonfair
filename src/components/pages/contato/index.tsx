"use client";

import { Grid } from "@mui/material";
import { Form, Formik } from "formik";
import * as React from "react";
import {
  Button,
  HeaderPageDetails,
  TextArea,
  Input,
  Label,
  ErrorMessage,
} from "../../ui";

import * as yup from "yup";
import { MessageBody, useSendMessage } from "../../../hooks/useApiContacts";
import { I18nTexts } from "@/types";
import { LangType } from "@/services/getPages";
import { useI18n } from "@/hooks/useI18n";
import { Header } from "@/components/patterns";
import HeaderDefaultContent from "@/components/patterns/Header/HeaderDefaultContent";

const ContactPage = ({ texts, lang }: { texts: I18nTexts; lang: LangType }) => {
  const { t } = useI18n(texts);
  const { sendMessage } = useSendMessage();

  // eslint-disable-next-line
  const onSubmit = async (values: MessageBody) => {
    await sendMessage(values);
  };

  const schema = yup.object().shape({
    nome: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório"),
    nome_empresa: yup.string().required("Campo Obrigatório"),
    mensagem: yup.string().required("Campo Obrigatório"),
  });

  return (
    <>
      <Header url="/background/quem-somos.jpg">
        <HeaderDefaultContent title={t("lbl-373d3a78")} lang={lang} />
        <p className="text-white mt-2 text-base">{t("txt-27933883")}</p>
      </Header>
      {/* <HeaderPageDetails url="/background/florest.jpg" vh={50}>
        <div className="gradient">
          <div className="header-page-content container">
            <div> </div>

            <div className="initial-information-container">
              <h1 className="secundary m-0">Contato</h1>
              <p className="opacity">
                A plataforma Carbon Fair tem como principal objetivo conectar as
                empresas e seus compromissos socioambientais, com projetos que
                promovam o benefício ambiental e social, de forma mensurável,
                efetiva e transparente. Através do contato você poderá
                estabelecer comunicação com a equipe da Carbon Fair, para tirar
                dúvidas, fazer sugestões, ou até mesmo para se tornar um
                parceiro.
              </p>
            </div>

            <div className="social-container"> </div>
          </div>
        </div>
      </HeaderPageDetails> */}

      <div className="container">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Formik
              initialValues={{
                email: "",
                mensagem: "",
                nome: "",
                nome_empresa: "",
              }}
              onSubmit={onSubmit}
              validationSchema={schema}
              validateOnChange={false}
              render={({ values, handleChange, errors }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Label>{t("lbl-008b2dbe")}</Label>
                      <ErrorMessage> {errors.nome} </ErrorMessage>
                      <Input
                        placeholder={t("fld-775947d2")}
                        name="nome"
                        onChange={handleChange}
                        value={values.nome}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Label>{t("lbl-ef9fdc8c")}</Label>
                      <ErrorMessage>{errors.nome_empresa} </ErrorMessage>
                      <Input
                        placeholder={t("fld-d6d50d1d")}
                        name="nome_empresa"
                        onChange={handleChange}
                        value={values.nome_empresa}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Label>{t("lbl-6239b289")}</Label>
                      <ErrorMessage>{errors.email} </ErrorMessage>
                      <Input
                        placeholder={t("fld-7cc8ac9e")}
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Label>{t("txt-de622856")}</Label>
                      <ErrorMessage>{errors.mensagem} </ErrorMessage>
                      <TextArea
                        name="mensagem"
                        onChange={handleChange}
                        value={values.mensagem}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button variant="contained" type="submit">
                        {t("btn-4eb5dbff")}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default ContactPage;
