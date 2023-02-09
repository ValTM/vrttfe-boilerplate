import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import PropTypes from 'prop-types';
import Home from '../../assets/home.jsx';
import Page from './Page';
import Counter from '../../pages/Counter.jsx';
import TableDemo from '../../pages/TableDemo.jsx';

const Content = () => {
  return (
    <section className="flex w-screen bg-alc-background-alt dark:bg-alc-background h-full">
      <nav>
        <Sidebar aria-label="sidebar">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={Home} href="/">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse label="Label" icon={Home}>
                <Sidebar.Item href="/page/2">Page 2</Sidebar.Item>
                <Sidebar.Item href="/page/3">Page 3</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="/page/4">Page 4</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </nav>
      <article className="h-full flex-1">
        <Page>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Counter />} />
              <Route path="page/:id" element={<TableDemo />} />
            </Routes>
          </BrowserRouter>
        </Page>
      </article>
    </section>
  );
};
Content.propTypes = {
  darkTheme: PropTypes.bool,
};

export default Content;
