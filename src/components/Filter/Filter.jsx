import { Box, TextField } from "@mui/material";
import { TopWrapper, ClearBtn } from "./Filter.styled";
import { MdOutlineClear } from "react-icons/md";
import PropTypes from "prop-types";

export const Filter = ({ value, changeFilter, clearFilter }) => {
  return (
    <>
      <TopWrapper>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          type="text"
          name="filter"
        >
          <TextField
            size="small"
            label="Поиск"
            variant="filled"
            color="success"
            sx={{ backgroundColor: "white", borderRadius: "5px", zIndex: "0" }}
            value={value}
            onChange={changeFilter}
          />
        </Box>
        <ClearBtn
          disabled={!value ? true : false}
          color="error"
          variant="contained"
          onClick={clearFilter}
        >
          <MdOutlineClear />
        </ClearBtn>
      </TopWrapper>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  clearFilter: PropTypes.func,
  changeFilter: PropTypes.func,
};
