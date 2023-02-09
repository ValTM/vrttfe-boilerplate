import React from 'react';
import tw from 'tailwind-styled-components';
import { Breadcrumb } from 'flowbite-react';
import Home from '../../assets/home.jsx';
import PropTypes from 'prop-types';

const Container = tw.div`
flex
items-center
h-10
text-white
bg-alc-background-alt
dark:bg-alc-primary
px-2
`;

const Page = (props) => {
  return (
    <div className="h-full p-4">
      <Container>
        <Breadcrumb aria-label="Some breadcrumbs">
          <Breadcrumb.Item href="/" icon={Home}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/devices">Devices</Breadcrumb.Item>
          <Breadcrumb.Item href="/devices/id">Hallway</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="flex flex-1 h-[calc(100%-theme(space.10))] m-auto">
        <div className="p-4 flex-1 bg-indigo-400">{props.children}</div>
      </div>
    </div>
  );
};
Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Page;
