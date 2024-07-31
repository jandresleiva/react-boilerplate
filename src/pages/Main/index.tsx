/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paper, TextField } from "@mui/material";
import AccordionUsage from "../../components/test";

const MainStyle = {
  css: css`
    padding: 20px;
  `,
};

export const Main = () => {
  return (
    <Paper elevation={1} css={MainStyle.css}>
      <AccordionUsage />
      <TextField id="filled-basic" label="First Name" variant="filled" />
      <TextField id="filled-basic" label="Last Name" variant="filled" />
    </Paper>
  );
};
