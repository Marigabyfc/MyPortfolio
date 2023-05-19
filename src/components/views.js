//<------------------COMPONENTES-------------------->
import Home from "./Home/Home"
import Landing from "./Landing/Landing";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import NavBar from "./NavBar/NavBar";
import SkillSet from "./SkillSet/SkillSet";
import MarigabyFoods from "./Projects/MarigabyFoods/MarigabyFoods"
import Promanitas from "./Projects/Promanitas/Promanitas"
import ContactModal from "./Projects/ContactModal/ContactModal";

//<---------------------IMAGENES------------------->
import GitHub from '../images/GitHub.png'
import linkdn from '../images/linkedinRedondo.png'
import Mail from '../images/outlookLogo.png'
import Twitter from '../images/logoTwitter.png'
import Css from '../images/TechLogos/css3.png'
import Html from '../images/TechLogos/html5.png'
import Js from '../images/TechLogos/logo-javascript.png'
import Node from '../images/TechLogos/nodejs.png'
import NodeJs from '../images/TechLogos/nodejsSR.png'
import Postgre from '../images/TechLogos/postgresql2.png'
import ReactJs from '../images/TechLogos/react.png'
import Redux from '../images/TechLogos/redux.png'
import Sequelize from '../images/TechLogos/sequelize.png'
import Ts from '../images/TechLogos/typescript.png'
import MySql from '../images/TechLogos/mysql.png'

//<----------------------MUI ICONS----------------------->
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import Swal from "sweetalert2";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//<--------------- VARIABLES DE ENTORNO-------------------->
const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const VITE_TEMPLATE_ID = import.meta.env.VITE_ID;
const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
 
export {
    Home,
    Contact,
    Experience,
    NavBar,
    SkillSet,
    MarigabyFoods,
    Promanitas,
    Landing,
    ContactModal,
    GitHub,
    linkdn,
    Mail,
    Twitter,
    Css,
    Html,
    Js,
    Node,
    NodeJs,
    Postgre,
    ReactJs,
    Redux,
    Sequelize,
    Ts,
    MySql,
    LocationCityIcon,
    BusinessCenterIcon,
    SendIcon,
    MailIcon,
    Swal,
    ArrowBackIosIcon, 
    ArrowForwardIosIcon,
    VITE_PUBLIC_KEY,
    VITE_TEMPLATE_ID,
    VITE_SERVICE_ID
}