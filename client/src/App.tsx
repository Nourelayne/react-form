import { Route, Routes } from "react-router-dom";
import AuthenticationContainer from "./pages/Authentication/Authentication.Container";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

const App = () => (
    <QueryClientProvider client={queryClient}>
        <Routes>
            <Route path="/" element={<AuthenticationContainer />} />
        </Routes>
    </QueryClientProvider>
);

export default App;