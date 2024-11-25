import RootLayout from '@/layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat, Home, Intro, Login, Match, Profile, Signup, SOS } from '@/pages';
import { ToastContainer } from 'react-toastify';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                pauseOnHover={false}
            />
            <Routes>
                <Route element={<RootLayout layout={true} />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/sos" element={<SOS />} />
                    <Route path="/chat" element={<Chat />} />
                </Route>
                <Route element={<RootLayout layout={false} />}>
                    <Route index={true} path="/" element={<Intro />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/match" element={<Match />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
