import "./Sidebar.css";

const agentInformation = {
    "name": "The Witcher",
    "model": {
        "name": "oLlama3",
    }
}

const sidebarMenu = [
    {
        name: "Chat",
        href: "/"
    },
    {
        name: "Settings",
        href: "/settings",
    }
];

export default function Sidebar() {
    return (
        <div className={`sidebar`}>
            <div className="sidebar--top">
                <div className="sidebar--agent">
                    <img 
                        className="sidebar--agent-avatar" 
                        height={200} 
                        width={200} 
                        src="/assets/bot.webp" 
                    />
                    <p className="sidebar--agent-name"> { agentInformation.name } </p>
                </div>
                <div className="sidebar--agent-menu">
                    {
                        sidebarMenu?.map((menuItem, index) => (
                            <div className="sidebar--agent-menu-item" key={index} onClick={() => {
                                window.location.replace(menuItem.href)
                            }}>
                                <span className="system--text text-semi"> { menuItem.name } </span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="sidebar--agent-footer">
                <span> Made by zjukd00m </span>
            </div>
        </div>
    )
}