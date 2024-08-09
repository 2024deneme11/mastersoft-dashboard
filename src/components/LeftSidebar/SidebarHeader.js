import React from "react";
import ProfileIcon from "@mui/icons-material/AccountCircle"; // Profil

function SidebarHeader({ username }) {
    return (
        <div>
            <div className="Subscription">
                <div className="SubscriptionDetails">
                    <span className="SubscriptionName">
                        Hoşgeldiniz, {username}!
                    </span>
                    <ProfileIcon className="ProfileIcon" />
                </div>
            </div>

            <div className="LogAITitle">Log AI</div>
        </div>
    );
}

export default SidebarHeader;
