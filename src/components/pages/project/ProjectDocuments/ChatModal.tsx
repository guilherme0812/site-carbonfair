'use client'

import { Box, Divider, Grid, Skeleton, Typography } from "@mui/material"
import { Input, Modal, NewButton, TextArea } from "../../../ui"
import styled from "styled-components"
import { IoPersonOutline } from "react-icons/io5"
import {
    CommentBody,
    useAddComment,
    useComments,
} from "../../../../hooks/useApiComments"
import { BsArrowReturnRight } from "react-icons/bs"
import { Form, Formik } from "formik"
import * as yup from "yup"
import moment from "moment"

export interface ChatModalProps {
    open: boolean
    handleClose(): void
    documentId: number
}

const ChatModalContainer = styled.div`
    .header {
        display: flex;
        gap: 2rem;
        align-items: center;
        padding-bottom: 1rem;
    }
    .circle {
        width: 35px;
        height: 35px;
        border-radius: 50px;
        border: 1px solid ${(props) => props.theme.palette.grey[400]};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .circle.green {
        background-color: ${(props) => props.theme.palette.success.main};
    }

    .body {
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-left: 4rem;

        .response {
            margin-top: 2rem;
            display: flex;
            gap: 1rem;
            border: 1px solid ${(props) => props.theme.palette.primary.dark};
            background-color: #6ca64040;
            border-radius: 8px;
            padding: 0.5rem;
        }
    }

    .new-comment-section {
        margin-top: 4rem;
        display: flex;
        gap: 2rem;
    }
`

const ChatModal = ({ open, handleClose, documentId }: ChatModalProps) => {
    const { comments, commentsIsLoading } = useComments(documentId)
    const { addComment } = useAddComment()

    const schema = yup.object().shape({
        des_nome: yup.string().required("Campo Obrigatório"),
        des_comentario: yup
            .string()
            .max(200, "Comentário muito longo")
            .required("Campo Obrigatório"),
    })

    const handleSubmit = (body: CommentBody) => {
        addComment(body)
    }

    return (
        <Modal
            open={open}
            title="Comentários do documento"
            handleClose={handleClose}
            variant="comment"
        >
            <ChatModalContainer>
                {!commentsIsLoading ? (
                    <>
                        {comments?.map((comment, index) => (
                            <Box sx={{ mb: 2 }} key={index}>
                                <div className="header">
                                    <div className="circle">
                                        <IoPersonOutline color="#000" />
                                    </div>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1rem",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                        >
                                            {comment.des_nome}
                                        </Typography>

                                        <Typography sx={{ fontSize: "0.9rem" }}>
                                            -
                                            {moment(
                                                comment.tis_comentario,
                                                "YYYY/MM/DD"
                                            ).format("DD/MM/YYYY")}
                                        </Typography>
                                    </Box>
                                </div>

                                <Divider />

                                <div className="body">
                                    <div className="description-comment">
                                        <Typography>
                                            {comment.des_comentario}
                                        </Typography>
                                    </div>

                                    {comment.des_resposta && (
                                        <div className="response">
                                            <div>
                                                <BsArrowReturnRight />
                                            </div>
                                            <Typography>
                                                {comment.des_resposta}
                                            </Typography>
                                        </div>
                                    )}
                                </div>

                                <Divider />
                            </Box>
                        ))}
                    </>
                ) : (
                    <>
                        <Skeleton height={150} />
                        <Skeleton height={150} />
                        <Skeleton height={150} />
                    </>
                )}

                <div className="">
                    <Box sx={{ ml: "4rem", mb: "1rem" }}>
                        <Typography variant="h6" fontWeight="bold">
                            Adicionar comentário
                        </Typography>
                    </Box>

                    <Formik
                        onSubmit={(body, { resetForm }) => {
                            handleSubmit(body)
                            resetForm()
                        }}
                        initialValues={{
                            id_documento: documentId,
                            des_nome: "",
                            des_comentario: "",
                        }}
                        validationSchema={schema}
                        validateOnChange={false}
                        render={({ values, handleChange, errors }) => (
                            <Form>
                                <Grid
                                    container
                                    spacing="2rem"
                                    alignItems="center"
                                >
                                    <Grid item xs={1}>
                                        <div className="circle green">
                                            <IoPersonOutline color="#fff" />
                                        </div>
                                    </Grid>

                                    <Grid item xs={9}>
                                        <Box sx={{ mb: 1 }}>
                                            <span>{errors.des_nome}</span>
                                            <Input
                                                placeholder="Seu nome"
                                                name="des_nome"
                                                onChange={handleChange}
                                                value={values.des_nome}
                                            />
                                        </Box>

                                        <Box>
                                            <span>{errors.des_comentario}</span>
                                            <TextArea
                                                name="des_comentario"
                                                onChange={handleChange}
                                                placeholder="Faça um comentário sobre o documento selecionado"
                                                style={{ minHeight: 100 }}
                                                value={values.des_comentario}
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={2}>
                                        <NewButton>Enviar</NewButton>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    />
                </div>
            </ChatModalContainer>
        </Modal>
    )
}

export default ChatModal
