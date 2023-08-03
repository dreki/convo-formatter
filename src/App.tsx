import { useCallback, useState } from "react";
import "./App.css";
import ChatLogList from "./components/ChatLogList";
import { ChatLogItem } from "./types/ChatLogItem";

function App() {
    // Use useState to store file contents
    const [fileContents, setFileContents] = useState<string>("");

    const uploadCallback = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (!file) {
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result;
                setFileContents(text as string);
            };
            reader.readAsText(file);
        },
        [],
    );

    // If fileContents isn't empty, display the contents
    let fileJSON: JSX.Element | null = null;
    let logList: JSX.Element | null = null;
    if (fileContents) {
        // fileJSON = <ReactJson src={JSON.parse(fileContents)} />;
        // const logItems = JSON.parse(fileContents) as ChatLogItem[];
        const logItems: ChatLogItem[] = ChatLogItem.fromObject(
            JSON.parse(fileContents),
        );
        console.log(`> logItems:`);
        console.log(logItems);
        logList = (
            <div className="mt-4">
                <ChatLogList items={logItems} />
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-xl">Upload</h1>
            <p>Upload a conversation with ChatGPT to format.</p>
            <div className="mt-4 flex justify-normal">
                <input
                    type="file"
                    className="file-input"
                    onChange={uploadCallback}
                />
            </div>
            <div className="mt-4">
                <h1 className="text-xl">Output</h1>
                {logList}
            </div>
        </div>
    );
}

export default App;
