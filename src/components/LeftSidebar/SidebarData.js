import React from "react";
import HomeIcon from "@mui/icons-material/Home"; // Genel
import BugReportIcon from "@mui/icons-material/BugReport"; // Anomaliler
import BoltIcon from "@mui/icons-material/Bolt"; // Performans
import AccessibilityIcon from "@mui/icons-material/Accessibility"; // Erişilebilirlik
import SecurityIcon from "@mui/icons-material/Security"; // Güvenlik

export const SidebarData = [
    {
        title: "Genel",
        icon: <HomeIcon />,
        link: "/genel",
    },
    {
        title: "Anomaliler",
        icon: <BugReportIcon />,
        link: "/anomaliler",
    },
    {
        title: "Performans",
        icon: <BoltIcon />,
        link: "/performans",
    },
    {
        title: "Erişilebilirlik",
        icon: <AccessibilityIcon />,
        link: "/erisilebilirlik",
    },
    {
        title: "Güvenlik",
        icon: <SecurityIcon />,
        link: "/guvenlik",
    },
];

export default SidebarData;
