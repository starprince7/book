import { Box, IconButton, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";

export const InputFb = ({
  type = "text",
  placeholder,
  ref = null,
  name,
  onChange,
  value,
  error,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <input
        required
        value={value}
        onChange={onChange}
        name={name}
        ref={ref}
        type={isHidden ? type : "text"}
        className="login-input"
        placeholder={placeholder}
        style={{
          border: error ? "1px solid #f02849" : "1px solid #dddfe2",
          borderRadius: 6,
          color: "#1d2129",
          height: 22,
          lineHeight: 16,
          width: "90%",
          flex: 1,
          fontSize: 17,
          padding: "13px",
        }}
      />
      {type === "password" && (
        <IconButton
          onClick={() => setIsHidden(!isHidden)}
          sx={{ position: "absolute", right: 7, top: 7 }}
        >
          {isHidden ? (
            <VisibilityOffIcon fontSize="small" />
          ) : (
            <VisibilityIcon fontSize="small" />
          )}
        </IconButton>
      )}
      <Typography
        variant="caption"
        sx={{ color: "#f02849", mt: 0.8, display: "block" }}
      >
        {error}
      </Typography>
    </Box>
  );
};
