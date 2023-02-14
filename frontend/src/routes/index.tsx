import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layouts from 'Layouts';

import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Chats from 'pages/Chats';

import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import AddPost from 'pages/AddPost';
import Notfound from 'pages/Notfound';
import Code from 'pages/Auth/Code';
import Setting from 'pages/Setting';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="/" index element={<Home />} />
      <Route path="/:username" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/code" element={<Code />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/404" element={<Notfound />} />
      <Route path="*" element={<Notfound />} />
    </Route>,
  ),
);

export default router;
