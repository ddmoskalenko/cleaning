import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "../img/cleaning2.jpg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

export default function CleaningRequest() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#784af4",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#784af4",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <SettingsIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  const steps = [
    "Заявка подана",
    "Заявка одобрена",
    "Исполнитель назначен",
    "Заявка выполнена",
  ];

  return (
    <div>
      <Paper
        style={{
          padding: 20,
          margin: 20,
          fontFamily: "Oswald",
          border: "1px solid black",
        }}
      >
        <div className="req-header">Заявка A12</div>

        <Stack sx={{ width: "100%" }} spacing={4} marginBottom={8}>
          <Stepper
            alternativeLabel
            activeStep={1}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <Typography fontFamily="Oswald">
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Typography>
              </Step>
            ))}
          </Stepper>
        </Stack>

        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange2("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                fontFamily="Oswald"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Выбранный обьект
              </Typography>
              <Typography fontFamily="Oswald" sx={{ color: "text.secondary" }}>
                выбран обьект A
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: "primary.dark",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange2("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                fontFamily="Oswald"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Заказчик
              </Typography>
              <Typography
                fontFamily="Oswald"
                fontWeight="400"
                sx={{ color: "text.secondary" }}
              >
                Заказчиком выступает текущий пользователь
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontFamily="Oswald" className="nbf">
                Сменить заказчика для этого обьекта невозможно.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange2("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                fontFamily="Oswald"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Текст заявки
              </Typography>
              <Typography
                sx={{ color: "text.secondary" }}
                fontFamily="Oswald"
              ></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontFamily="Oswald">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Item>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <Typography fontFamily="Oswald">
                          <InputLabel id="demo-simple-select-required-label">
                            Тип заявки
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={age}
                            label="Тип заявки *"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Уборка помещений</MenuItem>
                            <MenuItem value={20}>Уборка территории</MenuItem>
                            <MenuItem value={30}>Иное</MenuItem>
                          </Select>
                          <FormHelperText>Укажите</FormHelperText>
                          </Typography>
                        </FormControl>
                      </Box>
                    </Item>
                    <Item xs={8} style={{width:"100%"}}>
                        <TextField style={{width:"100%", fontFamily:"Oswald"}}
                          id="filled-textarea-what-do"
                          // label="Описание заявки"
                          placeholder="Опишите, что не обходимо выполнить"
                          multiline
                          variant="filled"
                        />
                    </Item>
                  </Grid>
                </Grid>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange2("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                fontFamily="Oswald"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                Уточнения
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontFamily="Oswald" className="nbf">
                Здесь можно добавить фотографию или видео с поясением
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </div>
  );
}
