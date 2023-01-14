import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">ALCLISBOA.Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                
                    <div className="topbarIconContainer">
                        <Settings /> 
                    </div>
                    
                    <img src="https://i.im.ge/2023/01/12/suZUaC.Captura-de-tela-20221217-135242.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
