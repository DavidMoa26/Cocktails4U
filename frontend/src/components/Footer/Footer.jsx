import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bottom-elements">
        <div className="social-icons">
          <FacebookIcon
            style={{ fontSize: "3rem", color: "blue", cursor: "pointer" }}
          />
          <InstagramIcon
            style={{ fontSize: "3rem", color: "purple", cursor: "pointer" }}
          />
          <YouTubeIcon
            style={{ fontSize: "3rem", color: "red", cursor: "pointer" }}
          />
        </div>
        <div className="copy-right">
          <p dir="ltr">&copy; 2022, Inc All right reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
