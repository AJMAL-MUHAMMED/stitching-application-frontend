import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DnsIcon from "@mui/icons-material/Dns";
import CategoryIcon from "@mui/icons-material/Category";
import StraightenIcon from "@mui/icons-material/Straighten";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { RxDashboard } from "react-icons/rx";
import { FaShopify, FaUsers } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { TbUserCog } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";

function SidebarOptions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("admin");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <>
      <ListItems
        icon={<RxDashboard size={23} />}
        name={"Dashboard"}
        href={"/"}
      />
      <ListItems
        icon={<FaShopify size={23} />}
        name={"Shops"}
        href={"/shops"}
      />
      <ListItems
        icon={<TbUserCog size={25} />}
        name={"Owners"}
        href={"/owners"}
      />
      <ListItems
        icon={<FaUsers size={25} />}
        name={"Staffs"}
        href={"/staffs"}
      />
      <ListItems icon={<LibraryBooksIcon />} name={"Orders"} href={"/orders"} />
      <ListItems icon={<DnsIcon />} name={"Cloths"} href={"/cloths"} />
      <ListItems icon={<CategoryIcon />} name={"Items"} href={"/items"} />
      <ListItems
        icon={<StraightenIcon />}
        name={"Measures"}
        href={"/measures"}
      />
      <ListItems
        icon={<CardMembershipIcon />}
        name={"Subscriptions"}
        href={"/subscriptions"}
      />
      <ListItems
        icon={<RiLogoutCircleLine size={20} />}
        name={"Logout"}
        func={handleLogout}
      />
      <Box sx={{ paddingTop: 3, paddingLeft: 4 }}>
        <Typography sx={{ fontSize: "1.2rem" }}>SUPPORT</Typography>
      </Box>
      <ListItems icon={<BsHeadset size={20} />} name={"Help Desk"} href={"/"} />
    </>
  );
}
function ListItems({ icon, name, href, func, font, paddingTop }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        paddingTop: paddingTop ? paddingTop : 0.3,
        display: "flex",
        alignItems: "center",
        paddingLeft: "1rem",
      }}
      onClick={() => navigate(href)}
    >
      <ListItem disablePadding onClick={func}>
        <ListItemButton disablePadding>
          <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
          <ListItemText
            style={{ marginLeft: "-15px" }}
            primaryTypographyProps={font ? font : { fontSize: "1rem" }}
            primary={name}
          />
        </ListItemButton>
      </ListItem>
    </Box>
  );
}

export default SidebarOptions;
