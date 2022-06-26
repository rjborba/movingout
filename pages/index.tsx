import {
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import Carousel from "react-material-ui-carousel";

import Modal from "@mui/material/Modal";
import { Box, keyframes } from "@mui/system";
import GithubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import type { NextPage } from "next";
import Image from "next/image";
import { FC, useState } from "react";
import { ItemsDb } from "../ItemsDb";

const HeaderSection = styled("section")({
  position: "relative",
  height: "100vh",
});

const StyledHeader = styled("header")({
  zIndex: "2",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  height: "100%",
});

const BodySection = styled("section")({
  zIndex: 2,
  position: "relative",

  backgroundImage:
    "linear-gradient(to right top, #ffdf00, #ebe300, #d7e600, #c0e900, #a8eb12)",
  borderTop: "14px solid black",
  minHeight: "420px",
  paddingTop: "120px",
  paddingBottom: "64px",
});

const FooterSection = styled("section")({
  position: "relative",
  padding: "22px 0",
  minHeight: "190px",
  backgroundColor: "black",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",
});

const ImageWrapper = styled("div")({
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "black",
}));

const upAndDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-18px);
  }
`;

const DownIndicator = styled(KeyboardDoubleArrowDownIcon)({
  fontSize: "80px",
  animation: `${upAndDown} 0.5s infinite alternate`,
});

const ImageModal: FC<any> = ({
  open,
  onClose = () => undefined,
}: {
  open: boolean;
  onClose: () => any;
}) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box
      sx={{
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  </Modal>
);

const Item: FC<any> = ({ item }) => {
  return (
    <StyledPaper>
      <Box mb={2}>
        <Carousel
          autoPlay={false}
          animation={"slide"}
          navButtonsAlwaysVisible
          cycleNavigation={false}
        >
          {Array(item.images)
            .fill(null)
            .map((img, index) => (
              <div style={{ height: "500px" }} key={`${item.id}-image-index`}>
                <Image
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  layout="fill"
                  src={`/${item.id}/${index + 1}.jpeg`}
                />
              </div>
            ))}
        </Carousel>
      </Box>
      <Box p={3}>
        <Typography variant="h5" color="rgb(180 234 9)">
          {item.title}
        </Typography>
        <Box mt={1}>
          <Typography
            variant="body1"
            sx={{ whiteSpace: "pre-line" }}
            color="rgb(246 255 216)"
          >
            {item.desc}
          </Typography>
        </Box>
        <Box mt={2}>
          <Stack>
            <Stack direction={"row"} spacing={1} alignItems="center">
              <Typography variant="body1">
                <b>Tempo de uso:</b>
              </Typography>
              <Typography variant="body1">1 ano</Typography>
            </Stack>
          </Stack>
        </Box>
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          color="success"
        >
          Entrar em contato
        </Button>
        <Box mt={4}>
          <Typography component="span" variant="h5" color="success.light">
            R$ {item.price}
          </Typography>
        </Box>
      </Box>
    </StyledPaper>
  );
};

const Body: FC = () => {
  return (
    <Grid container spacing={10}>
      {ItemsDb.map((item, i) => (
        <Grid key={`item-wrap-${i}`} item sm={12} md={6} lg={4}>
          <Item key={`item-${i}`} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

const Home: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #ffdf00, #ebe300, #d7e600, #c0e900, #a8eb12)",
      }}
    >
      <HeaderSection aria-label="header-section">
        <ImageWrapper>
          <Image
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="0% 25%"
            layout="fill"
            style={{ filter: "brightness(0.5)" }}
            src="/borbaejosi.png"
          />
          <Image
            width="100%"
            height="100%"
            objectFit="revert"
            layout="fill"
            style={{ mixBlendMode: "multiply", opacity: "20%" }}
            src="/carbon.png"
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right top, #ffdf00, #ebe300, #d7e600, #c0e900, #a8eb12)",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              opacity: "50%",
              mixBlendMode: "darken",
            }}
          ></div>
        </ImageWrapper>
        <StyledHeader aria-label="header">
          <Box
            pb={6}
            zIndex={2}
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            textAlign="center"
            color="white"
          >
            <Typography variant="h1" fontWeight="bold">
              Josi e Borba
            </Typography>
            <Box pt={3}>
              <Typography variant="h3">Catálogo de vendas</Typography>
            </Box>
            <Box pt={4} display={"flex"} justifyContent="center">
              <DownIndicator />
            </Box>
          </Box>
        </StyledHeader>
      </HeaderSection>
      <BodySection aria-label="body-section">
        {/* <Button onClick={() => setModalOpen(true)}>Open Modal</Button> */}

        <Box pt={6} />
        <Container maxWidth="xl">
          <Body />
        </Container>
      </BodySection>
      <FooterSection>
        <Stack direction={"row"} spacing={2}>
          <Link
            underline="none"
            color="white"
            href="https://github.com/rjborba"
          >
            <Stack direction={"row"} spacing={0.5}>
              <GithubIcon />
              <Typography>rjborba</Typography>
            </Stack>
          </Link>
          <Link
            underline="none"
            color="white"
            href="https://twitter.com/rjborba"
          >
            <Stack direction={"row"} spacing={0.5}>
              <TwitterIcon />
              <Typography>rjborba</Typography>
            </Stack>
          </Link>
          <Link
            underline="none"
            color="white"
            href="https://www.instagram.com/rjborba/"
          >
            <Stack direction={"row"} spacing={0.5}>
              <InstagramIcon />
              <Typography>rjborba</Typography>
            </Stack>
          </Link>
          <Link
            underline="none"
            color="white"
            href="https://www.facebook.com/rjborbalive"
          >
            <Stack direction={"row"} spacing={0.5}>
              <FacebookIcon />
              <Typography>rjborbalive</Typography>
            </Stack>
          </Link>
        </Stack>

        <Box pt={3}>
          <Typography>© 2022</Typography>
        </Box>
      </FooterSection>
      <ImageModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
