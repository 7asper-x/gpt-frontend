import '../normal.css';
import {useState, useRef, useEffect} from "react";
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark, oneLight} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import SideBar from "../components/navigation/SideBar";
import {createContext} from 'react';

export const ThemeContext = createContext("dark");


function Home() {

    const chatLogRef = useRef(null);
    const [input, setInput] = useState("");
    const [chatLog, setChatLog] = useState([
        {
            role: "assistant", content: "Hi, I'm a GPT-3.5-turbo assistant. How can I help you?"
        },
    ]);
    const [theme, setTheme] = useState("dark");
    const [logo, setLogo] = useState("/light.png");
    const [mode, setMode] = useState("Light Mode");
    const [codingTheme, setCodingTheme] = useState(oneDark);

    useEffect(() => {
        if (chatLogRef.current) {
            chatLogRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [chatLog]);

    function clearChat() {
        setChatLog([]);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let chatLogNew = [...chatLog, {role: "user", content: `${input}`}];
        setChatLog(chatLogNew);
        setInput("");

        // fetch response to the api from http://34.213.238.12/api/api/gpt/ or http://localhost:5000/api/gpt/
        const response = await fetch("http://34.213.238.12/api/api/gpt/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages: chatLogNew,
            }),
        });

        const data = await response.json();
        await setChatLog([...chatLogNew, {role: "assistant", content: `${data.data}`}]);
        console.log(data);
    }

    const toggleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
        setLogo((curr) => (curr === "/light.png" ? "/dark.png" : "/light.png"));
        setMode((curr) => (curr === "Light Mode" ? "Dark Mode" : "Light Mode"));
        setCodingTheme((curr) => (curr === oneDark ? oneLight : oneDark));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="App" id={theme}>
                <SideBar clearChat={clearChat} toggleMode={toggleTheme} logoMode={logo} mode={mode}/>

                <section className="home">
                    <div className="text">
                        <div className="chat-log">
                            {chatLog.map((content, index) => (
                                <ChatMessage message={content} key={index} chatLogRef={chatLogRef} codingTheme={codingTheme}/>
                            ))}
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <div className="chat-input-holder">
                            <form onSubmit={handleSubmit} className="submit-form">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="chat-input-textarea">
                                </input>
                                <button className="chat-input-button" type="submit" disabled={!input}>submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </ThemeContext.Provider>
    );
}

const ChatMessage = ({message, chatLogRef, codingTheme}) => {
    return (
        <div className={`chat-message ${message.role === "assistant" && "chat-gpt"}`} ref={chatLogRef}>
            <div className="chat-message-center">
                <div className={`avatar ${message.role === "assistant" && "chat-gpt"}`}>
                    {message.role === "assistant" && <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth={1.5}
                    >
                        <path
                            d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835A9.964 9.964 0 0 0 18.306.5a10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.516 3.35 10.078 10.078 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813ZM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496ZM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744ZM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.01L7.04 23.856a7.504 7.504 0 0 1-2.743-10.237Zm27.658 6.437-9.724-5.615 3.367-1.943a.121.121 0 0 1 .113-.01l8.052 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.65-1.132Zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763Zm-21.063 6.929-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225Zm1.829-3.943 4.33-2.501 4.332 2.5v5l-4.331 2.5-4.331-2.5V18Z"
                            fill="white"
                        />
                    </svg>}
                </div>
                <div className="message">
                    <ReactMarkdown
                        children={message.content}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({node, inline, children, className, ...props}) {
                                return <PrismHighlighter children={children} className={className} codingTheme={codingTheme}  {...props} />;
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

const PrismHighlighter = ({props, children, className, codingTheme}) => {
    let language = "python";
    if (className) {
        const parts = className.split('-');
        language = parts[1];
        if (language === "c++") language = "cpp";
    }

    return (
        <SyntaxHighlighter
            style={codingTheme}
            language={language}
            showLineNumbers {...props}
            wrapLines={true}>
            {children}
        </SyntaxHighlighter>
    );
}

export default Home;
