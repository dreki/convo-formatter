import "./App.css";

function App() {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-xl">Upload</h1>
            <p>Upload a conversation with ChatGPT to format.</p>
            <div className="mt-4 flex justify-normal">
                <input type="file" className="file-input" />
            </div>
        </div>
    );
}

export default App;
