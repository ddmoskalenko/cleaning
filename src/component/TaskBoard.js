import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TaskCard from "./TaskCard";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { AppBar } from "@mui/material";
import TaskAppBar from "./TaskAppBar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@mui/material";
import Badge from "@mui/material/Badge";
import { faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

export default function TaskBoard() {
  const [data, setData] = useState(null);

  const StyledFab = styled(Fab)({
    /* position: "absolute",
     zIndex: 1,
     top: 30, */
    left: 0,
    right: 0,
    margin: "0 auto",
  });

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography fontFamily="Oswald">{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("/api/task/filter");
      // const newData = await response.json();
      // setData(newData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={2} id="toolbar">
        <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <Item>
            <Paper elevation={3} />
            <Link href="/plan">
              <Card sx={{ maxWidth: 345 }} className="b12" href="/uuu">
                <div style={{ minHeight: 80 }}>
                  <Badge
                    color="secondary"
                    className="bind01"
                    badgeContent={2}
                    max={9}
                  >
                    <FontAwesomeIcon size="2x" icon={faClock} />
                  </Badge>
                </div>
                <CardContent>
                  <Typography
                    fontFamily="Oswald"
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    <div>
                      <FontAwesomeIcon icon={faCalendarCheck} />
                    </div>
                    <Typography
                      fontFamily="Oswald"
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      Плановая уборка
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body2"
                    fontFamily="Oswald"
                    color="text.secondary"
                  >
                    Разел для контроля качества и сроков выполения плановых
                    работ. Отметки о датах пропущеных работ и замечаниях.
                  </Typography>
                </CardContent>
                <CardActions style={{ float: "left" }}>
                  <StyledFab
                    color="secondary"
                    sy={{ mr: -3 }}
                    aria-label="add"
                    href="/create-plan"
                  >
                    <Tooltip title="Добавить плановую раюоту">
                      <AddIcon />
                    </Tooltip>
                  </StyledFab>
                </CardActions>
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <Item>
            <Link href="/request">
              <Card
                sx={{ maxWidth: 345 }}
                style={{ minheight: "80vw" }}
                className="b12"
              >
                <div style={{ minHeight: 80 }}>
                  <Badge
                    color="secondary"
                    className="bind01"
                    badgeContent={10}
                    max={9}
                  >
                    <FontAwesomeIcon size="2x" icon={faStore} />
                  </Badge>
                  <Badge
                    color="secondary"
                    className="bind01"
                    badgeContent={10}
                    max={9}
                  >
                    <FontAwesomeIcon size="2x" icon={faStopCircle} />
                  </Badge>
                </div>
                <CardContent style={{ paddingBottom: "2em" }}>
                  <Typography
                    fontFamily="Oswald"
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    <div>
                      <FontAwesomeIcon icon={faBullhorn} />
                    </div>
                    <Typography
                      fontFamily="Oswald"
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      Заявки
                    </Typography>
                  </Typography>
                  <Typography
                    fontFamily="Oswald"
                    variant="body2"
                    color="text.secondary"
                  >
                    Подача заявкок на проведение срочных работ по уборке вне
                    планового графика
                  </Typography>
                </CardContent>
                <CardActions style={{ float: "left" }}>
                  <StyledFab
                    color="secondary"
                    sy={{ mr: -3 }}
                    aria-label="add"
                    href="/create-request"
                  >
                    <Tooltip title="Создать новую заявку">
                      <AddIcon />
                    </Tooltip>
                  </StyledFab>
                </CardActions>
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
          <Item>
            {" "}
            <Card sx={{ maxWidth: 345 }} className="b12">
              <div style={{ minHeight: 80 }}></div>
              <CardContent>
                <Typography
                  fontFamily="Oswald"
                  gutterBottom
                  variant="h4"
                  component="div"
                >
                  <div>
                    <FontAwesomeIcon icon={faCreditCard} />
                  </div>
                  Расчеты
                </Typography>
                <Typography
                  variant="body2"
                  fontFamily="Oswald"
                  color="text.secondary"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%" }} style={{ marginTop: "2em" }} className="a1">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="a2">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="a3"
            style={{ fontFamily: "Oswald", fontSize: "3em" }}
          >
            <Tab
              label="Помогаем экномить на уборке"
              {...a11yProps(2)}
              style={{ fontFamily: "Oswald", fontSize: ".4em" }}
            />
          </Tabs>
        </Box>
      </Box>
      );
    </div>
  );
}
