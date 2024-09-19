import { useState, useRef } from "react";
import "./Chat.css";

export default function Chat () {
    const userInputRef = useRef<HTMLTextAreaElement>(null);
    const [isGeneratingText, setIsGeneratingText] = useState(false);
    const [chats, setChats] = useState<Array<{
        [key: string]: any,
    }>>([]);

    async function handleSendUserInput() {
        if (!userInputRef.current || isGeneratingText) {
            return;
        }

        const userInputText = userInputRef.current.value;
        
        if (!userInputText.length) {
            return;
        }

        // Add the user question to the box
        const userChat = {
            userType: "user",
            message: userInputText,
        };

        setChats((prevChats) => ([...prevChats, userChat]));

        // API call to get the backend's reponse of the bot

        setIsGeneratingText(true);

        // Delay
        await new Promise((resolve, _) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });

        // Add the bot's response to the box
        try {
            const botChat = {
                userType: "bot",
                message: "Hello world",
            }

            setChats((prevChats) => ([...prevChats, botChat]));
        } catch (err) {
            console.error(err);
        } finally {
            setIsGeneratingText(false);
        }

    }

    return (
        <div className="chat">
            <div className="chat--conversations">
                {
                    chats?.map((chatItem, index) => (
                        <div className={`chat--conversation ${chatItem.userType === "user" ? "user--conversation" : "bot--conversation"}`} key={index}>
                            <p>
                                {
                                    chatItem.message
                                } 
                            </p>
                        </div>
                    ))
                }
                {
                    isGeneratingText ? (
                        <div className="chat--loader">
                        </div>
                    ) : null
                }
            </div>
            <div className="chat--user-input-wrapper">
                <textarea className="chat--user-input" placeholder="Escribe un mensaje para interactuar con el agente de AI" ref={userInputRef}></textarea>
                <button onClick={handleSendUserInput}>
                    Send
                </button>
            </div>
        </div>
    )
}
