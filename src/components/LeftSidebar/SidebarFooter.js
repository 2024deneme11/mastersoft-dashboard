import React from "react";

import LogoutIcon from "@mui/icons-material/Logout"; // Çıkış yap
import SettingsIcon from "@mui/icons-material/Settings"; // Ayarlar

function SidebarFooter() {
    return (
        <div className="SidebarFooter">
            <div className="FooterSettings">
                <SettingsIcon />
            </div>
            <div className="FooterLogout">
                <LogoutIcon />
                <span className="LogoutText">Çıkış yap</span>
            </div>
        </div>
    );
}

export default SidebarFooter;
