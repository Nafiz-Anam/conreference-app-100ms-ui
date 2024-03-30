import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HMSRoomProvider>
            <App />
        </HMSRoomProvider>
    </StrictMode>
);
