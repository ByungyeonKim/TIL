import { Icon } from 'semantic-ui-react';
import Link from 'next/link';

const Error404 = () => {
  return (
    <div
      style={{ paddingBlock: '15rem', textAlign: 'center', fontSize: '1.5rem' }}
    >
      <p>
        <Icon name='warning circle' color='red' />
        404 : 페이지를 찾을 수 없습니다.
      </p>
      <Link href='/'>Home으로 가기</Link>
    </div>
  );
};

export default Error404;
