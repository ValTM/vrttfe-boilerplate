import React, { useState } from 'react';
import { Table, ToggleSwitch } from 'flowbite-react';
import Home from '../assets/home.jsx';

const TableDemo = () => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Temporary Enrollment</Table.HeadCell>
          <Table.HeadCell>Device Mode</Table.HeadCell>
          <Table.HeadCell>Last Event</Table.HeadCell>
          <Table.HeadCell>Account</Table.HeadCell>
          <Table.HeadCell>Firmware Version</Table.HeadCell>
          <Table.HeadCell>IP Address</Table.HeadCell>
          <Table.HeadCell>Status/State</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white vertical-middle">
              Device name
            </Table.Cell>
            <Table.Cell className="vertical-middle">
              <ToggleSwitch
                checked={checked}
                onChange={() => setChecked(!checked)}
                label=""
              />
            </Table.Cell>
            <Table.Cell className="vertical-middle">
              Face and Badge (2FA)
            </Table.Cell>
            <Table.Cell className="vertical-middle">
              <div className="flex">
                <Home className="w-4 mr-2" />
                <span>Tailgating By Unknown User</span>
              </div>
            </Table.Cell>
            <Table.Cell className="overflow-ellipsis whitespace-nowrap vertical-middle">
              <a href="#" className="underline">
                Default Account
              </a>
            </Table.Cell>
            <Table.Cell className="vertical-middle">3.2.15</Table.Cell>
            <Table.Cell className="vertical-middle">127.0.0.1</Table.Cell>
            <Table.Cell className="vertical-middle">
              Onboarded/Offline
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default TableDemo;
