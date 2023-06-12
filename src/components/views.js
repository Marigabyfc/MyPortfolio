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
import logo from '../assets/coverBlancoRelleno.png'
import GitHub from '../assets/GitHub.png'
import linkdn from '../assets/linkedinRedondo.png'
import Mail from '../assets/outlookLogo.png'
import Twitter from '../assets/logoTwitter.png'
import Css from '../assets/css3.png'
import Html from '../assets/html5.png'
import Js from '../assets/logo-javascript.png'
import Node from '../assets/nodejs.png'
import NodeJs from '../assets/nodejsSR.png'
import Postgre from '../assets/postgresql.png'
import ReactJs from '../assets/react.png'
import Redux from '../assets/redux.png'
import Sequelize from '../assets/sequelize.png'
import Ts from '../assets/typescript.png'
import MySql from '../assets/mysql.png'
import foods from '../assets/MarigabyFoods.jpeg'
import promanitas from '../assets/Promanitas.png'
import image1 from '../assets/parallax/acolor_optimized.png'
import image2 from '../assets/parallax/acolorOver-min.png'
import image3 from '../assets/parallax/contactOver-min.png'
import image5 from '../assets/parallax/contactBack-min.png'
import image6 from '../assets/parallax/figuritas-min.png'
import image7 from '../assets/parallax/figuritas2-min.png'
import image8 from '../assets/parallax/landingmedio-min.png'
import image9 from '../assets/parallax/landingmedioOver-min.png'
import image11 from '../assets/parallax/homemedio-min.png'
import image12 from '../assets/parallax/homemedioOver-min.png'
import image13 from '../assets/parallax/contactMedioBack-min.png'
import image14 from '../assets/parallax/contactMedio-min.png'
import image15 from '../assets/parallax/contactmedioOver-min.png'
// import image16 from '../assets/parallax/experience-min.png'
// import image17 from '../assets/parallax/experience2-min.png'
// import image18 from '../assets/parallax/experience3-min.png'
// import image19 from '../assets/parallax/experience4-min.png'
// import image20 from '../assets/parallax/setskill-min.png'
// import image21 from '../assets/parallax/setskill2-min.png'
// import image22 from '../assets/parallax/setskill3-min.png'
// import image23 from '../assets/parallax/setskill4-min.png'
import resume from '../assets/resume.png'
import profile from '../assets/FotoPerfil.jpeg'
import vnet from '../assets/logoVnet.jpg'
import henry from '../assets/logoHenry.png'

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
    foods,
    promanitas,
    image1,
    image2,
    image3,
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
    // image16,
    // image17,
    // image18,
    // image19,
    // image20,
    // image21,
    // image22,
    // image23,
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

