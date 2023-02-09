import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import React from 'react';
import Logo from '@/assets/logo';
import PropTypes from 'prop-types';
import tw from 'tailwind-styled-components';

const Header = (props) => {
  const { darkTheme, setDarkTheme } = props;
  /** @type {import('flowbite-react').ThemeProps}*/
  const themeProps = {
    dark: true,
    theme: {
      breadcrumb: {
        list: 'flex items-center text-sm font-medium text-black hover:text-gray-900 dark:text-white dark:hover:text-white',
      },
      sidebar: {
        base: 'h-full bg-alc-background dark:bg-alc-secondary',
        inner:
          'h-full overflow-y-auto overflow-x-hidden bg-alc-background py-4 px-3 dark:bg-alc-secondary',
        item: {
          base: 'flex items-center p-2 text-base font-normal text-gray-900 hover:bg-alc-accent dark:text-white dark:hover:bg-alc-accent-alt',
        },
        collapse: {
          button:
            'group flex w-full items-center p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-alc-accent dark:text-white dark:hover:bg-alc-accent-alt',
        },
      },
    },
  };

  const AppHeader = tw.header`text-alc-secondary bg-alc-primary h-12 flex items-center justify-between px-4`;

  return (
    <AppHeader>
      <Logo />
      <div className="flex items-center text-alc-accent-alt">
        <span>Драгана Мирковић</span>
        <Flowbite theme={themeProps} onClick={() => setDarkTheme(!darkTheme)}>
          <DarkThemeToggle />
        </Flowbite>
      </div>
    </AppHeader>
  );
};
Header.propTypes = {
  darkTheme: PropTypes.bool,
  setDarkTheme: PropTypes.func,
};

export default Header;
