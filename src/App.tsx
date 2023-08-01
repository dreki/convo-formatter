import { useCallback } from "react";
import "./App.css";

function App() {
    const uploadCallback = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (!file) {
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result;
                console.log(text);
            };
            reader.readAsText(file);
        },
        [],
    );

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
        </div>
    );
}

export default App;
