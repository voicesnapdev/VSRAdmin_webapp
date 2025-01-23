import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
export const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));
