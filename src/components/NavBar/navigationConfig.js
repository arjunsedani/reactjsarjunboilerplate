import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import AccessibleForwardSharpIcon from "@material-ui/icons/AccessibleForwardSharp";

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
