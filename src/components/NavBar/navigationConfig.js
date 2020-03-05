import ErrorIcon from "@material-ui/icons/ErrorOutline";
import FolderIcon from "@material-ui/icons/FolderOutlined";
import LockOpenIcon from "@material-ui/icons/LockOpenOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import AccessibleForwardSharpIcon from "@material-ui/icons/AccessibleForwardSharp";
import AccessibleSharpIcon from "@material-ui/icons/AccessibleSharp";
import DataUsageSharpIcon from "@material-ui/icons/DataUsageSharp";
import TimelapseSharpIcon from "@material-ui/icons/TimelapseSharp";

export default [
  {
    pages: [
      {
        title: "Module1",
        icon: LocalHospitalOutlinedIcon,
        children: [
          {
            title: "Create Module1",
            href: "/createModule1",
            tag: "Create"
          },
          {
            title: "Search Module1",
            href: "/module1",
            tag: "Read"
          },
          {
            title: "Module1 Upload",
            href: "/policyUpload",
            tag: "Policy"
          }
        ]
      },
      {
        title: "Module2",
        icon: AccessibleForwardSharpIcon,
        children: [
          {
            title: "Create Module2",
            href: "/createModule2",
            tag: "Create"
          },
          {
            title: "Search Module2",
            href: "/module2",
            tag: "Search"
          }
        ]
      }
    ]
  }
];
