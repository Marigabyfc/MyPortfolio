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
import MiddleLanding from "./MiddleComponents/MiddleLanding/MiddleLanding";
import MiddleHome from "./MiddleComponents/MiddleHome/MiddleHome";
import MiddleExperience from "./MiddleComponents/MiddleExperience/MiddleExperience";
import MiddleContact from "./MiddleComponents/MiddleContact/MiddleContact";
import Footer from "./Footer/Footer";

//<---------------------IMAGENES------------------->
import logo from '../images/coverBlancoRelleno.png'
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
import image1 from '../images/parallax/acolor.png'
import image2 from '../images/parallax/acolorOver.png'
import image4 from '../images/parallax/contactOver.png'
import image5 from '../images/parallax/contactBack.png'
import image6 from '../images/parallax/figuritas.png'
import image7 from '../images/parallax/figuritas2.png'
import image8 from '../images/parallax/landingmedio.png'
import image9 from '../images/parallax/landingmedioOver.png'
import image11 from '../images/parallax/homemedio.png'
import image12 from '../images/parallax/homemedioOver.png'
import image13 from '../images/parallax/contactmedioBack.png'
import image14 from '../images/parallax/contactmedio.png'
import image15 from '../images/parallax/contactmedioOver.png'
import image16 from '../images/parallax/experience.png'
import image17 from '../images/parallax/experience2.png'
import image18 from '../images/parallax/experience3.png'
import image19 from '../images/parallax/experience4.png'
import image20 from '../images/parallax/setskill.png'
import image21 from '../images/parallax/setskill2.png'
import image22 from '../images/parallax/setskill3.png'
import image23 from '../images/parallax/setskill4.png'
import resume from '../images/resume.png'
import profile from '../images/FotoPerfil.jpeg'
import vnet from '../images/logoVnet.jpg'
import henry from '../images/logoHenry.png'

//<----------------------MUI ICONS----------------------->
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import Swal from "sweetalert2";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TranslateIcon from '@mui/icons-material/Translate';


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
    MiddleLanding,
    MiddleHome,
    MiddleContact,
    MiddleExperience,
    Footer,
    logo,
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
    image1,
    image2,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    resume,
    profile,
    vnet,
    henry,
    LocationCityIcon,
    BusinessCenterIcon,
    SendIcon,
    MailIcon,
    Swal,
    ArrowBackIosIcon, 
    ArrowForwardIosIcon,
    TranslateIcon,
    VITE_PUBLIC_KEY,
    VITE_TEMPLATE_ID,
    VITE_SERVICE_ID
}

