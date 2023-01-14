import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, Report, PersonOutlineOutlined, StorefrontOutlined, AttachMoneyOutlined, BarChartOutlined, ManageAccountsOutlined, ChatBubbleOutlineOutlined, DynamicFeedOutlined, EmailOutlined, AnalyticsOutlined } from '@mui/icons-material'
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Painel de controle</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Início
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Análise
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Vendas
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu rápido</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PersonOutlineOutlined className="sidebarIcon" />
                                Usuários
                            </li>
                        </Link>

                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <StorefrontOutlined className="sidebarIcon" />
                                Produtos
                            </li>
                        </Link>
                        {/* <Link to="/users"> */}
                            <li className="sidebarListItem">
                                <AttachMoneyOutlined className="sidebarIcon" />
                                Transações
                            </li>
                        {/* </Link>
                        <Link to="/users"> */}
                            <li className="sidebarListItem">
                                <BarChartOutlined className="sidebarIcon" />
                                Relatórios
                            </li>
                        {/* </Link> */}
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notificações</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <EmailOutlined className="sidebarIcon" />
                            E-mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlined className="sidebarIcon" />
                            Feedeback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined className="sidebarIcon" />
                            Mensagens
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Equipe</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ManageAccountsOutlined className="sidebarIcon" />
                            Administrar
                        </li>
                        <li className="sidebarListItem">
                            <AnalyticsOutlined className="sidebarIcon" />
                            Análise
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Relatórios
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
