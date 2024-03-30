import { Button } from "@/components/ui";
import useStore from "@/hooks/useCartStore";
// import { useCompanyData } from "@/hooks/useCompanyData";
import {
  apiCFCalculator,
  calculatorInternalApiAxios,
  internalApiAxios,
} from "@/services/api";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import { Select, TextField } from "carbonfair-ui";
import { useState } from "react";
import { PatternFormat } from "react-number-format";
import CheckIcon from "@mui/icons-material/Check";
// import { IDiscountCoupon } from "@/hook/administrativo/useDiscountCoupon";
import CloseIcon from "@mui/icons-material/Close";

type PIXFormType = {
  nameIsValid: boolean;
  emailIsValid: boolean;
  showEmailField: boolean;
};

const documentOptions = [
  {
    value: 1,
    label: "CPF",
    format: "###.###.###-##",
  },
  {
    value: 2,
    label: "CNPJ",
    format: "##.###.###/####-##",
  },
];

function PaymentForm({
  emailIsValid,
  nameIsValid,
  showEmailField,
}: PIXFormType) {
  const {
    name,
    setName,
    email,
    setEmail,
    documentNumber,
    setDocumentNumber,
    beneficiary,
    setBeneficiary,
    referencePeriod,
    setReferencePeriod,
    additionalText,
    setAdditionalText,
    discountCoupon,
    setDiscountCoupon,
    setDiscount,
    discount,
  } = useStore();
  const gatewayId: any = 1;

  const [selectedDocument, setSelectedDocument] = useState(documentOptions[0]);
  const [couponMessage, setCoupoMessage] = useState("");

  const getDiscount = async () => {
    await apiCFCalculator<any>({
      method: "get",
      url: "/cupom_desconto",
      params: {
        cupom: discountCoupon,
      },
    })
      .then((values) => {
        if (values.data.vlr_desconto != discount) {
          setCoupoMessage("Desconto aplicado");

          setDiscount(values.data.vlr_desconto);
        }
      })
      .catch((err) => {
        setCoupoMessage(err.response.data.message);
        setDiscount(0);
      });
  };

  return (
    <Box component={Paper} variant="outlined" sx={{ p: 2 }}>
      <Grid container spacing={1}>
        {gatewayId == 1 && (
          <Grid container item columnSpacing={2} alignItems={"end"}>
            <Grid item xs={9}>
              <TextField
                label="Cupom de desconto"
                variant="outlined"
                placeholder="Digite aqui o seu cupom de desconto"
                fullWidth
                value={discountCoupon || ""}
                onChange={(e) => setDiscountCoupon(e.target.value)}
                name="cupom"
                endIcon={
                  discount > 0 || discountCoupon.length > 0 ? (
                    <IconButton
                      sx={{
                        transform: "translateX(10px)",
                      }}
                      onClick={() => {
                        setDiscount(0);
                        setDiscountCoupon("");
                        setCoupoMessage("");
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    <></>
                  )
                }
              />
            </Grid>

            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                onClick={getDiscount}
                disabled={discountCoupon.length <= 3}
              >
                Aplicar
              </Button>
            </Grid>

            {couponMessage.length > 0 && (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                {discount > 0 ? (
                  <CheckIcon sx={{ fontSize: "0.875rem" }} />
                ) : (
                  <CloseIcon sx={{ fontSize: "0.875rem" }} />
                )}
                <Typography
                  variant="caption"
                  sx={() => ({
                    color: discount > 0 ? green[700] : red[700],
                  })}
                >
                  {couponMessage}
                </Typography>
              </Grid>
            )}
          </Grid>
        )}

        <Grid item xs={12}>
          <TextField
            label="Nome completo"
            variant="outlined"
            placeholder="Nome completo"
            fullWidth
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <Typography variant="caption" color="error">
            {!nameIsValid && "Nome é obrigatório"}
          </Typography>
        </Grid>

        {showEmailField && (
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              placeholder="Nome completo"
              fullWidth
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              // style={{ fontSize: '0.875rem' }}
            />

            <Typography variant="caption" color="error">
              {email
                ? emailIsValid
                  ? ""
                  : "Formato de email inválido"
                : "Email é obrigatório"}
            </Typography>
          </Grid>
        )}

        <Grid item xs={12}>
          <Divider textAlign="left" sx={{ mt: 2 }}>
            <Typography variant="body1">Dados do certificado</Typography>
          </Divider>
        </Grid>

        <Grid item xs={12} xl={6}>
          <TextField
            label="Beneficiário"
            variant="outlined"
            placeholder="Nome do beneficiário da compensação"
            fullWidth
            value={beneficiary || ""}
            onChange={(e) => setBeneficiary(e.target.value)}
            type="text"
            name="name"
          />
          {!beneficiary && (
            <Typography variant="caption" color="error">
              Nome do beneficiário é obrigatório
            </Typography>
          )}
        </Grid>

        {gatewayId == 2 && (
          <>
            <Grid item xs={12} md={4}>
              <Select
                options={documentOptions}
                label="Documento"
                getOptionLabel={(opt) => opt.label}
                keyValue="id"
                name="document"
                fullWidth
                value={selectedDocument}
                onChange={(_, opt) => setSelectedDocument(opt)}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <PatternFormat
                format={selectedDocument.format}
                allowEmptyFormatting
                label="Número do documento"
                customInput={TextField}
                fullWidth
                onChange={(e) =>
                  setDocumentNumber(e.target.value.replace(/\D/g, ""))
                }
              />
              {!documentNumber && (
                <Typography variant="caption" color="error">
                  Digite o seu número do documento
                </Typography>
              )}
            </Grid>
          </>
        )}

        <Grid item xs={12} xl={6}>
          <TextField
            label="Período da compensação"
            variant="outlined"
            placeholder="Ex: 16 de janeiro à 20 de janeiro"
            fullWidth
            value={referencePeriod || ""}
            onChange={(e) => setReferencePeriod(e.target.value)}
            type="text"
            name="periodo_da_compensacao"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Motivo da compensação"
            variant="outlined"
            placeholder="Ex: Compensação da emissão mensal"
            fullWidth
            value={additionalText || ""}
            onChange={(e) => setAdditionalText(e.target.value)}
            type="text"
            name="texto_adicional"
          />
          {!beneficiary && (
            <Typography variant="caption" color="error">
              Nome do beneficiário é obrigatório
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default PaymentForm;
