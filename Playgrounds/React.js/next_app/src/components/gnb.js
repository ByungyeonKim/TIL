import { Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === '/') {
    activeItem = 'home';
  } else if (router.pathname === '/about') {
    activeItem = 'about';
  }

  const goLink = (e, data) => {
    if (data.name === 'home') {
      router.push('/');
    } else if (data.name === 'about') {
      router.push('/about');
    }
  };

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name='description'
          content='안녕하세요. 사용자와 제일 친한 🤝 주니어 프론트엔드 개발자입니다.'
        ></meta>
      </Head>
      <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={goLink}
        />
      </Menu>
    </>
  );
}
