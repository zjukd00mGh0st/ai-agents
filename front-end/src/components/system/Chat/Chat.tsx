import { useState, useRef } from "react";
import { getGeminiResponse } from "../../../utils/services/chat";
import ReactMarkdown from "react-markdown";
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
            message: userInputText.trimEnd(),
        };

        setChats((prevChats) => ([...prevChats, userChat]));

        // API call to get the backend's reponse of the bot
        setIsGeneratingText(true);

        try {
            const { status, data } = await getGeminiResponse(userInputText);

            if (status !== 200) {
                alert(status);
                return;
            }

            // Add the bot's response to the box
            const botChat = {
                userType: "bot",
                message: data.data,
            }

            setChats((prevChats) => ([...prevChats, botChat]));
        } catch (err: any) {
            console.error(err);
            alert(err.message);
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
                            <ReactMarkdown>
                                {
                                    chatItem.message
                                } 
                            </ReactMarkdown>
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
